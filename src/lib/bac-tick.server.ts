// Shared tick logic for the BAC PDF crawler.
// Called from both the public hook (auth: service-role bearer for pg_cron)
// and an admin-only TanStack server function.
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
// Officially-trusted hosts. Anything else is rejected to avoid scraping
// student forums that rehost barems under "subiect"-looking URLs.
const OFFICIAL_HOST_RE = /(^|\.)((subiecte\.edu\.ro)|(edu\.ro)|(rocnee\.eu)|(variante-bac\.ro))$/i;

function classify(url: string, materie: string, an: number) {
  const u = url.toLowerCase();
  if (!/\.pdf(\?|$)/.test(u)) return null;
  try {
    const host = new URL(url).hostname;
    if (!OFFICIAL_HOST_RE.test(host)) return null;
  } catch { return null; }
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

// Verify a downloaded PDF actually matches (year + materie + correct kind)
// by sniffing the first ~32KB of raw text. Cheap, no pdf parser needed: the
// PDF text streams contain readable ASCII for the metadata we care about.
function verifyPdfContent(
  buf: Uint8Array,
  materie: string,
  an: number,
  tip: "subiect" | "barem",
): boolean {
  const head = new TextDecoder("latin1").decode(buf.subarray(0, Math.min(buf.byteLength, 32768)));
  if (!/BACALAUREAT|Bacalaureat/.test(head)) return false;
  if (!head.includes(String(an))) return false;
  if (!SUBJ_RE[materie]?.test(head)) return false;
  const isBaremDoc = /Barem de evaluare|BAREM DE EVALUARE|Barem de notare/.test(head);
  return tip === "barem" ? isBaremDoc : !isBaremDoc;
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

function uiSlugsFor(materie: string): string[] {
  if (materie === "matematica") return ["matematica-m1", "matematica-m2", "matematica-m3"];
  return [materie];
}

async function processCombo(materie: string, an: number, fcKey: string, budgetMs: number) {
  const start = Date.now();
  const left = () => budgetMs - (Date.now() - start);

  const { data: existing } = await supabaseAdmin.storage
    .from("bac-pdfs")
    .list(`${an}`, { limit: 200 });
  const existingFiles = new Set((existing ?? []).filter((f) => f.id).map((f) => f.name));
  const slugs = uiSlugsFor(materie);
  const needed = slugs.flatMap((s) => [`${s}-subiect.pdf`, `${s}-barem.pdf`]);
  if (needed.every((n) => existingFiles.has(n))) {
    return { uploaded: 0, found: 0, skipped: "already_populated" as const };
  }

  const queries = [
    `subiecte bacalaureat ${materie} ${an} filetype:pdf site:subiecte.edu.ro`,
    `barem bacalaureat ${materie} ${an} filetype:pdf site:subiecte.edu.ro`,
    `subiecte bac ${materie} ${an} filetype:pdf site:edu.ro`,
    `bac ${materie} ${an} barem subiect filetype:pdf`,
    `variante bacalaureat ${materie} ${an} filetype:pdf`,
  ];

  const urls = new Set<string>();
  for (const q of queries) {
    if (left() < budgetMs * 0.4) break;
    const us = await fcSearch(q, fcKey);
    us.forEach((u) => urls.add(u));
  }

  let uploaded = 0;
  const sortedUrls = Array.from(urls).sort((a, b) => {
    const sa = /simulare|simulari/i.test(a) ? 1 : 0;
    const sb = /simulare|simulari/i.test(b) ? 1 : 0;
    return sa - sb;
  });

  for (const url of sortedUrls) {
    if (left() < 4000) break;
    const c = classify(url, materie, an);
    if (!c) continue;
    if (slugs.every((s) => existingFiles.has(`${s}-${c.tip}.pdf`))) continue;
    try {
      const r = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(12000) });
      if (!r.ok) continue;
      const ab = await r.arrayBuffer();
      const buf = new Uint8Array(ab);
      if (buf.byteLength < 5000) continue;
      if (buf[0] !== 0x25 || buf[1] !== 0x50) continue;
      if (!verifyPdfContent(buf, materie, an, c.tip)) continue;
      for (const slug of slugs) {
        const path = `${an}/${slug}-${c.tip}.pdf`;
        if (existingFiles.has(`${slug}-${c.tip}.pdf`)) continue;
        const { error } = await supabaseAdmin.storage
          .from("bac-pdfs")
          .upload(path, buf, { contentType: "application/pdf", upsert: false });
        if (!error) {
          uploaded++;
          existingFiles.add(`${slug}-${c.tip}.pdf`);
        }
      }
    } catch {
      /* ignore */
    }
  }
  return { uploaded, found: urls.size };
}

export type TickResult =
  | { done: true; message: string }
  | { materie: string; an: number; uploaded: number; found: number; skipped?: string };

export async function runBacCrawlTick(): Promise<{ status: number; body: TickResult | { error: string } }> {
  const fcKey = process.env.FIRECRAWL_API_KEY;
  if (!fcKey) return { status: 500, body: { error: "FIRECRAWL_API_KEY missing" } };

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

  if (!row) return { status: 200, body: { done: true, message: "no pending combos" } };

  await supabaseAdmin
    .from("bac_crawl_progress")
    .update({ status: "in_progress", last_attempt_at: new Date().toISOString() })
    .eq("materie", row.materie)
    .eq("an", row.an);

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
    return { status: 200, body: { materie: row.materie, an: row.an, ...res } };
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
    return { status: 500, body: { error: "err: " + msg } };
  }
}
