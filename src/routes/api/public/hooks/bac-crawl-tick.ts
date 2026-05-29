// Job resumable de descărcare PDF-uri BAC.
// pg_cron lovește acest endpoint la fiecare minut; fiecare tick procesează 1 combinație
// (materie × an) cu un buget strict de timp, marchează rândul ca `done` în
// `bac_crawl_progress` și se oprește când nu mai sunt rânduri `pending`.
//
// Filtru STRICT pentru URL-uri: trebuie să conțină token-ul materiei, anul exact și
// un cuvânt din lista BAC; blacklist pe OMEC/ROFUIP/proceduri (evită contaminarea).
import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const SUBJ_RE: Record<string, RegExp> = {
  romana:      /(romana|romaneste|limba.?rom|l_?romana|lro)/i,
  matematica:  /(matematic|mate.?info|m_?mate|m_?st.?nat|m_?tehnologic|m_?pedagogic)/i,
  istorie:     /istori/i,
  biologie:    /biolog/i,
  chimie:      /chimi/i,
  fizica:      /fizic/i,
  geografie:   /geograf/i,
  informatica: /(informatic|info_)/i,
  engleza:     /(englez|english|l_?engleza)/i,
  franceza:    /(francez|french|l_?franceza)/i,
  germana:     /(german|deutsch|l_?germana)/i,
  logica:      /(logica.?si.?argumentare|logica_?argumentare|e_?d_?logic|logic)/i,
  psihologie:  /psiholog/i,
  sociologie:  /sociolog/i,
  economie:    /economi/i,
  filosofie:   /filosof/i,
};

const BAD_RE = /(omec|omen|rofuip|procedur|inscriere|raport|legislatie|metodologie|calendar|comunicat|anexa|starea|ordin_|ordine|hot.r.re|cadru.metodologic)/i;
const BAC_RE = /(bac|bacalaureat|simulare|examen)/i;

function classify(url: string, materie: string, an: number) {
  const u = url.toLowerCase();
  if (!/\.pdf(\?|$)/.test(u)) return null;
  if (!u.includes(String(an))) return null;
  if (!SUBJ_RE[materie]?.test(u)) return null;
  if (BAD_RE.test(u)) return null;
  if (!BAC_RE.test(u)) return null;
  const tip: "barem" | "subiect" =
    /barem|rezolv|raspuns|răspuns|solutii|soluții/.test(u) ? "barem" : "subiect";
  let sesiune: "iunie" | "august" | "speciala" | "simulare" = "iunie";
  if (/simulare|simulari/.test(u)) sesiune = "simulare";
  else if (/august|toamn|sept/.test(u)) sesiune = "august";
  else if (/special/.test(u)) sesiune = "speciala";
  return { tip, sesiune };
}

async function fcSearch(query: string, key: string): Promise<string[]> {
  try {
    const r = await fetch("https://api.firecrawl.dev/v2/search", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query, limit: 10 }),
      signal: AbortSignal.timeout(12000),
    });
    if (!r.ok) return [];
    const j = (await r.json()) as { data?: { web?: Array<{ url: string }> } | Array<{ url: string }> };
    const arr = Array.isArray(j.data) ? j.data : j.data?.web ?? [];
    return arr.map((x) => x.url).filter(Boolean);
  } catch {
    return [];
  }
}

async function processCombo(materie: string, an: number, fcKey: string, budgetMs: number) {
  const start = Date.now();
  const left = () => budgetMs - (Date.now() - start);

  // Skip dacă folderul are deja ≥4 PDF-uri (iunie/simulare × subiect/barem).
  const { data: existing } = await supabaseAdmin.storage
    .from("bac-pdfs")
    .list(`${materie}/${an}`, { limit: 100 });
  const existingFiles = (existing ?? []).filter((f) => f.id).map((f) => f.name);
  if (existingFiles.length >= 4) {
    return { uploaded: 0, found: 0, skipped: "already_populated" as const };
  }

  const queries = [
    `subiecte bacalaureat ${materie} ${an} filetype:pdf site:subiecte.edu.ro`,
    `barem bacalaureat ${materie} ${an} filetype:pdf site:subiecte.edu.ro`,
    `subiecte bac ${materie} ${an} filetype:pdf site:edu.ro`,
    `bac ${materie} ${an} barem subiect filetype:pdf`,
    `simulare bacalaureat ${materie} ${an} filetype:pdf`,
  ];

  const urls = new Set<string>();
  for (const q of queries) {
    if (left() < budgetMs * 0.4) break;
    const us = await fcSearch(q, fcKey);
    us.forEach((u) => urls.add(u));
  }

  let uploaded = 0;
  for (const url of urls) {
    if (left() < 4000) break;
    const c = classify(url, materie, an);
    if (!c) continue;
    const fileName = `${c.sesiune}-${c.tip}.pdf`;
    if (existingFiles.includes(fileName)) continue;
    try {
      const r = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(12000) });
      if (!r.ok) continue;
      const ab = await r.arrayBuffer();
      const buf = new Uint8Array(ab);
      if (buf.byteLength < 5000) continue;
      if (buf[0] !== 0x25 || buf[1] !== 0x50) continue; // "%P" magic
      const { error } = await supabaseAdmin.storage
        .from("bac-pdfs")
        .upload(`${materie}/${an}/${fileName}`, buf, {
          contentType: "application/pdf",
          upsert: false,
        });
      if (!error) {
        uploaded++;
        existingFiles.push(fileName);
      }
    } catch {
      /* ignore single-url errors */
    }
  }
  return { uploaded, found: urls.size };
}

export const Route = createFileRoute("/api/public/hooks/bac-crawl-tick")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apikey = request.headers.get("apikey");
        const expected = process.env.SUPABASE_PUBLISHABLE_KEY;
        if (!apikey || !expected || apikey !== expected) {
          return new Response("Unauthorized", { status: 401 });
        }
        const fcKey = process.env.FIRECRAWL_API_KEY;
        if (!fcKey) return new Response("FIRECRAWL_API_KEY missing", { status: 500 });

        // 1) Claim un rând: întâi pending, apoi stalled in_progress > 10 min.
        type Row = {
          materie: string; an: number; status: string;
          attempts: number; uploaded: number;
        };
        let row: Row | null = null;

        const { data: pendings } = await supabaseAdmin
          .from("bac_crawl_progress")
          .select("materie,an,status,attempts,uploaded")
          .eq("status", "pending")
          .order("attempts", { ascending: true })
          .order("an", { ascending: false })
          .limit(1);
        if (pendings && pendings.length) row = pendings[0] as Row;

        if (!row) {
          const stale = new Date(Date.now() - 10 * 60 * 1000).toISOString();
          const { data: stuck } = await supabaseAdmin
            .from("bac_crawl_progress")
            .select("materie,an,status,attempts,uploaded")
            .eq("status", "in_progress")
            .lt("last_attempt_at", stale)
            .limit(1);
          if (stuck && stuck.length) row = stuck[0] as Row;
        }

        if (!row) {
          return Response.json({ done: true, message: "no pending combos" });
        }

        // 2) Marchează in_progress (heart-beat).
        await supabaseAdmin
          .from("bac_crawl_progress")
          .update({ status: "in_progress", last_attempt_at: new Date().toISOString() })
          .eq("materie", row.materie)
          .eq("an", row.an);

        // 3) Procesează cu buget de timp.
        try {
          const res = await processCombo(row.materie, row.an, fcKey, 22000);
          await supabaseAdmin
            .from("bac_crawl_progress")
            .update({
              status: "done",
              attempts: row.attempts + 1,
              uploaded: row.uploaded + res.uploaded,
              last_error: null,
              updated_at: new Date().toISOString(),
            })
            .eq("materie", row.materie)
            .eq("an", row.an);
          return Response.json({ materie: row.materie, an: row.an, ...res });
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          const newAttempts = row.attempts + 1;
          await supabaseAdmin
            .from("bac_crawl_progress")
            .update({
              status: newAttempts >= 3 ? "failed" : "pending",
              attempts: newAttempts,
              last_error: msg.slice(0, 500),
              updated_at: new Date().toISOString(),
            })
            .eq("materie", row.materie)
            .eq("an", row.an);
          return new Response("err: " + msg, { status: 500 });
        }
      },
    },
  },
});
