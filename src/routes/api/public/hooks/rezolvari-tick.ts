import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { BAC_SUBJECTS } from "@/data/bac-catalog";

// Generator automat de rezolvări BAC: lot de max 2 per rulare, cu lease DB,
// circuit breaker (402/403/429 repetate => pauză) și progres idempotent în rezolvari_queue.
const BATCH_SIZE = 1;
const LEASE_MINUTES = 20;

const SESSION_LABELS: Record<string, string> = {
  iunie: "sesiunea iunie–iulie",
  august: "sesiunea august–septembrie",
  speciala: "sesiunea specială",
  simulare: "simularea națională",
};

interface QueueItem {
  id: string;
  materie: string;
  an: number;
  sesiune: string;
  attempts: number;
}

interface GeneratedRezolvare {
  titlu: string;
  continut: string;
  dificultate: string;
  timp_estimat_minute: number;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

async function acquireLease(): Promise<"ok" | "paused" | "locked"> {
  const { data: state } = await supabaseAdmin
    .from("job_state")
    .select("paused, lease_until")
    .eq("job", "rezolvari-generator")
    .single();
  if (state?.paused) return "paused";
  if (state?.lease_until && new Date(state.lease_until).getTime() > Date.now()) return "locked";

  const leaseUntil = new Date(Date.now() + LEASE_MINUTES * 60_000).toISOString();
  const { data: claimed, error } = await supabaseAdmin
    .from("job_state")
    .update({ lease_until: leaseUntil, updated_at: new Date().toISOString() })
    .eq("job", "rezolvari-generator")
    .lt("lease_until", new Date().toISOString())
    .select("job");
  if (error) return "locked";
  // dacă lease_until era NULL, .lt() nu prinde rândul — acoperim cazul separat
  if (!claimed || claimed.length === 0) {
    const { data: claimedNull } = await supabaseAdmin
      .from("job_state")
      .update({ lease_until: leaseUntil, updated_at: new Date().toISOString() })
      .eq("job", "rezolvari-generator")
      .is("lease_until", null)
      .select("job");
    if (!claimedNull || claimedNull.length === 0) return "locked";
  }
  return "ok";
}

async function pauseJob(reason: string) {
  await supabaseAdmin
    .from("job_state")
    .update({ paused: true, pause_reason: reason, lease_until: null, updated_at: new Date().toISOString() })
    .eq("job", "rezolvari-generator");
}

async function bumpFailures(reset = false) {
  const { data } = await supabaseAdmin
    .from("job_state")
    .select("consecutive_failures")
    .eq("job", "rezolvari-generator")
    .single();
  const next = reset ? 0 : (data?.consecutive_failures ?? 0) + 1;
  await supabaseAdmin
    .from("job_state")
    .update({ consecutive_failures: next, updated_at: new Date().toISOString() })
    .eq("job", "rezolvari-generator");
  return next;
}

async function pdfBlock(path: string) {
  const { data, error } = await supabaseAdmin.storage.from("bac-pdfs").download(path);
  if (error || !data) return null;
  const buf = new Uint8Array(await data.arrayBuffer());
  if (buf.length < 5 || String.fromCharCode(...buf.slice(0, 4)) !== "%PDF") return null;
  let bin = "";
  for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
  return { type: "document", source: { type: "base64", media_type: "application/pdf", data: btoa(bin) } };
}

/** Citește stream-ul SSE de la /v1/messages și întoarce textul + stop_reason. */
async function readMessagesStream(res: Response): Promise<{ text: string; stop: string | null; error?: string }> {
  const reader = res.body!.getReader();
  const dec = new TextDecoder();
  let buf = "";
  let text = "";
  let stop: string | null = null;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    let idx: number;
    while ((idx = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line.startsWith("data:")) continue;
      try {
        const ev = JSON.parse(line.slice(5));
        if (ev.type === "content_block_delta" && ev.delta?.type === "text_delta") text += ev.delta.text;
        else if (ev.type === "message_delta" && ev.delta?.stop_reason) stop = ev.delta.stop_reason;
        else if (ev.type === "error") return { text, stop, error: JSON.stringify(ev.error ?? ev).slice(0, 200) };
      } catch {
        /* cadru incomplet — ignorat */
      }
    }
  }
  return { text, stop };
}

// Rezolvările se fac DOAR pe subiectul oficial găzduit la noi (PDF verificat de model).
// Fără PDF sau cu PDF greșit => varianta e marcată și sărită; nu se inventează subiecte.
async function generateOne(
  item: QueueItem,
  apiKey: string,
): Promise<{ ok: boolean; pause?: string; retryLater?: boolean; skip?: string }> {
  const subject = BAC_SUBJECTS.find((s) => s.slug === item.materie);
  const materieName = subject?.name ?? item.materie;
  const sesiuneLabel = SESSION_LABELS[item.sesiune] ?? item.sesiune;
  const subPath = `${item.materie}/${item.an}/${item.sesiune}-subiect.pdf`;
  const barPath = `${item.materie}/${item.an}/${item.sesiune}-barem.pdf`;

  const subj = await pdfBlock(subPath);
  if (!subj) return { ok: false, skip: "fara_subiect_oficial" };
  const bar = await pdfBlock(barPath);

  const prompt = `Primul document ar trebui să fie subiectul oficial BAC ${item.an}, ${sesiuneLabel}, la ${materieName}. ${
    bar ? "Al doilea document este baremul oficial: răspunsurile tale trebuie să coincidă cu el." : "Nu ai baremul; rezolvă riguros."
  }
VERIFICARE OBLIGATORIE: dacă primul document NU conține enunțurile subiectului oficial al Ministerului Educației pentru exact acest an, sesiune și materie (de ex. e un barem, un ordin, o simulare județeană, alt an), NU reconstitui nimic și răspunde DOAR: NEPOTRIVIT|<ce este documentul>

Altfel scrie în română cu diacritice rezolvarea completă, explicată pentru un elev de liceu, exact pe itemii din document. Fără prezentări personale și fără ton promoțional. Formule în LaTeX între $...$ / $$...$$; cod în blocuri \`\`\`cpp.
Format STRICT:
Linia 1: META|<titlu max 80 caractere>|<usor|mediu|greu>|<minute>
Apoi markdown: ## Rezumatul cerinței, ## Subiectul I, ## Subiectul al II-lea, ## Subiectul al III-lea, ## Răspunsuri finale, ## Greșeli frecvente, ## Recapitulare; ### pentru fiecare item, cu explicația „de ce”.`;

  const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/messages", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "X-Lovable-AIG-SDK": "fetch" },
    body: JSON.stringify({
      model: "anthropic/claude-sonnet-5",
      max_tokens: 32000,
      stream: true,
      messages: [{ role: "user", content: [subj, ...(bar ? [bar] : []), { type: "text", text: prompt }] }],
    }),
  });

  if (!aiRes.ok) {
    const errText = await aiRes.text().catch(() => "");
    if (aiRes.status === 402 || aiRes.status === 403) {
      return { ok: false, pause: `AI gateway ${aiRes.status}: ${errText.slice(0, 200)}` };
    }
    if (aiRes.status === 429 || aiRes.status >= 500) return { ok: false, retryLater: true };
    return { ok: false };
  }

  const { text, stop, error } = await readMessagesStream(aiRes);
  if (error) return { ok: false };
  if (stop === "refusal") return { ok: false, skip: "refuz_model" };
  const out = text.trim();
  if (out.startsWith("NEPOTRIVIT")) return { ok: false, skip: `pdf_nepotrivit: ${out.slice(11, 200)}` };
  if (/reconstitu/i.test(out)) return { ok: false, skip: "pdf_nepotrivit: reconstituit" };
  const mm = /^META\|([^|\n]+)\|(usor|mediu|greu)\|(\d+)\s*\n/.exec(out);
  if (!mm || out.length < 3000) return { ok: false };
  const gen: GeneratedRezolvare = {
    titlu: mm[1].trim().slice(0, 90),
    dificultate: mm[2],
    timp_estimat_minute: Math.max(20, Math.min(180, Number(mm[3]))),
    continut: out.slice(mm[0].length).trim(),
  };

  const slug = `${item.materie}-${item.an}-${item.sesiune}`;
  const { data: varianta } = await supabaseAdmin
    .from("bac_variante")
    .upsert(
      {
        materie: item.materie,
        an: item.an,
        sesiune: item.sesiune,
        slug,
        subiect_path: subPath,
        barem_path: bar ? barPath : null,
        are_rezolvare: true,
        is_published: true,
      },
      { onConflict: "materie,an,sesiune" },
    )
    .select("id")
    .single();

  const { error: upErr } = await supabaseAdmin.from("bac_rezolvari").upsert(
    {
      varianta_id: varianta?.id ?? null,
      materie: item.materie,
      an: item.an,
      sesiune: item.sesiune,
      slug: `rezolvare-${slug}`,
      titlu: gen.titlu,
      continut: gen.continut,
      dificultate: gen.dificultate,
      timp_estimat_minute: gen.timp_estimat_minute,
      status: "draft",
      sursa: "subiect_oficial",
      updated_at: new Date().toISOString(),
    },
    { onConflict: "materie,an,sesiune" },
  );
  if (upErr) return { ok: false };
  return { ok: true };
}

export const Route = createFileRoute("/api/public/hooks/rezolvari-tick")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = request.headers.get("x-webhook-secret") ?? request.headers.get("x-api-key");
        const expected = process.env.REZOLVARI_CRON_KEY;
        if (!expected || !apiKey || apiKey.length !== expected.length || apiKey !== expected) {
          return json({ error: "Unauthorized" }, 401);
        }

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        if (!LOVABLE_API_KEY) return json({ error: "LOVABLE_API_KEY missing" }, 500);

        const lease = await acquireLease();
        if (lease === "paused") return json({ status: "paused" });
        if (lease === "locked") return json({ status: "locked" });

        // Lotul următor: prioritate (matematica -> romana -> restul), apoi anii recenți
        const { data: items } = await supabaseAdmin
          .from("rezolvari_queue")
          .select("id, materie, an, sesiune, attempts")
          .eq("status", "queued")
          .order("prioritate", { ascending: true })
          .order("an", { ascending: false })
          .order("sesiune", { ascending: true })
          .limit(BATCH_SIZE);

        if (!items || items.length === 0) {
          await supabaseAdmin
            .from("job_state")
            .update({ lease_until: null, updated_at: new Date().toISOString() })
            .eq("job", "rezolvari-generator");
          return json({ status: "idle" }); // nimic de făcut — lanțul se oprește aici
        }

        const results: Array<{ materie: string; an: number; sesiune: string; ok: boolean }> = [];

        for (const item of items as QueueItem[]) {
          const r = await generateOne(item, LOVABLE_API_KEY);

          if (r.pause) {
            await pauseJob(r.pause);
            return json({ status: "paused", reason: r.pause, results });
          }
          if (r.retryLater) {
            const failures = await bumpFailures();
            if (failures >= 3) await pauseJob("429 rate-limit repetat — pauză până la reluare manuală");
            return json({ status: failures >= 3 ? "paused" : "rate_limited", results });
          }

          if (r.ok) {
            await supabaseAdmin
              .from("rezolvari_queue")
              .update({ status: "done", processed_at: new Date().toISOString(), error: null })
              .eq("id", item.id);
            await bumpFailures(true);
          } else if (r.skip) {
            await supabaseAdmin
              .from("rezolvari_queue")
              .update({ status: "failed", processed_at: new Date().toISOString(), error: r.skip.slice(0, 300) })
              .eq("id", item.id);
          } else {
            // Cap de reîncercări: după 5 eșecuri trece pe 'failed', ca să nu blocheze coada.
            const nextAttempts = item.attempts + 1;
            await supabaseAdmin
              .from("rezolvari_queue")
              .update(
                nextAttempts >= 5
                  ? { attempts: nextAttempts, status: "failed", error: "generation_failed_max_attempts" }
                  : { attempts: nextAttempts, error: "generation_failed" },
              )
              .eq("id", item.id);
          }
          results.push({ materie: item.materie, an: item.an, sesiune: item.sesiune, ok: r.ok });
        }

        // eliberează lease-ul la final de lot
        await supabaseAdmin
          .from("job_state")
          .update({ lease_until: null, updated_at: new Date().toISOString() })
          .eq("job", "rezolvari-generator");

        return json({ status: "ok", results });
      },
    },
  },
});
