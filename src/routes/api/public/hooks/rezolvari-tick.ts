import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { BAC_SUBJECTS } from "@/data/bac-catalog";

// Generator automat de rezolvări BAC: lot de max 2 per rulare, cu lease DB,
// circuit breaker (402/403/429 repetate => pauză) și progres idempotent în rezolvari_queue.
const BATCH_SIZE = 2;
const LEASE_MINUTES = 10;

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

async function generateOne(item: QueueItem, apiKey: string): Promise<{ ok: boolean; pause?: string; retryLater?: boolean }> {
  const subject = BAC_SUBJECTS.find((s) => s.slug === item.materie);
  const materieName = subject?.name ?? item.materie;
  const sesiuneLabel = SESSION_LABELS[item.sesiune] ?? item.sesiune;

  const systemPrompt = `Ești profesor metodist cu 20 de ani experiență la BAC, specializat pe ${materieName}.
Scrii rezolvări explicate, în limba română cu diacritice corecte, pentru MeditatiiDirect.ro.

STRUCTURA OBLIGATORIE a conținutului (markdown):
## Rezumatul cerinței
## Rezolvare pas cu pas
### Subiectul I (cu subpuncte, fiecare cu explicația „de ce")
### Subiectul al II-lea
### Subiectul al III-lea
## Răspunsuri finale
## Greșeli frecvente
## Recapitulare

REGULI:
- 700–1100 cuvinte, ton cald și clar, adresat unui elev de liceu.
- Formulele matematice se scriu în LaTeX între $...$ (inline) sau $$...$$ (bloc).
- Pentru informatică, codul se pune în blocuri \`\`\`cpp.
- Subiectele sunt cele oficiale uzuale de la BAC ${item.an}, ${sesiuneLabel}, pentru ${materieName}; dacă nu cunoști exact varianta, rezolvă subiecte tipice conforme cu programa oficială din acel an și menționează asta discret la final.
- NU inventa surse sau linkuri.`;

  const userPrompt = `Scrie rezolvarea completă pentru BAC ${item.an}, ${sesiuneLabel}, materia: ${materieName}.`;

  const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-2.5-pro",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "create_rezolvare",
            description: "Salvează o rezolvare explicată BAC",
            parameters: {
              type: "object",
              properties: {
                titlu: { type: "string", minLength: 20, maxLength: 90 },
                continut: { type: "string", minLength: 2000 },
                dificultate: { type: "string", enum: ["usor", "mediu", "greu"] },
                timp_estimat_minute: { type: "integer", minimum: 20, maximum: 180 },
              },
              required: ["titlu", "continut", "dificultate", "timp_estimat_minute"],
              additionalProperties: false,
            },
          },
        },
      ],
      tool_choice: { type: "function", function: { name: "create_rezolvare" } },
    }),
  });

  if (!aiRes.ok) {
    const errText = await aiRes.text().catch(() => "");
    if (aiRes.status === 402 || aiRes.status === 403) {
      return { ok: false, pause: `AI gateway ${aiRes.status}: ${errText.slice(0, 200)}` };
    }
    if (aiRes.status === 429) return { ok: false, retryLater: true };
    return { ok: false };
  }

  const aiData = await aiRes.json();
  const toolCall = aiData?.choices?.[0]?.message?.tool_calls?.[0];
  if (!toolCall?.function?.arguments) return { ok: false };

  let gen: GeneratedRezolvare;
  try {
    gen = JSON.parse(toolCall.function.arguments) as GeneratedRezolvare;
  } catch {
    return { ok: false };
  }

  // Asigură rândul din bac_variante (legătura variantă ↔ rezolvare)
  const slug = `${item.materie}-${item.an}-${item.sesiune}`;
  const { data: varianta } = await supabaseAdmin
    .from("bac_variante")
    .upsert(
      {
        materie: item.materie,
        an: item.an,
        sesiune: item.sesiune,
        slug,
        subiect_path: `${item.materie}/${item.an}/${item.sesiune}-subiect.pdf`,
        barem_path: `${item.materie}/${item.an}/${item.sesiune}-barem.pdf`,
        are_rezolvare: true,
        is_published: true,
      },
      { onConflict: "materie,an,sesiune" },
    )
    .select("id")
    .single();

  const { error: insertErr } = await supabaseAdmin.from("bac_rezolvari").insert({
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
  });
  if (insertErr) return { ok: false };

  return { ok: true };
}

export const Route = createFileRoute("/api/public/hooks/rezolvari-tick")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = request.headers.get("x-webhook-secret") ?? request.headers.get("x-api-key");
        const expected = process.env.REZOLVARI_HOOK_SECRET;
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
          } else {
            await supabaseAdmin
              .from("rezolvari_queue")
              .update({ attempts: (item as QueueItem & { attempts?: number }).attempts ?? 0 + 1, error: "generation_failed" })
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
