// Server function admin-only: descarcă PDF-uri BAC via Firecrawl și le stochează în
// bucketul `bac-pdfs` la calea {materie}/{an}/{sesiune}-{tip}.pdf.
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const InputSchema = z.object({
  materie: z.string().min(1).max(40).regex(/^[a-z-]+$/),
  an: z.number().int().min(2010).max(2026),
  // Limita totală PDF-uri descărcate per apel (siguranță credite).
  maxPdfs: z.number().int().min(1).max(20).default(8),
});

type Session = "iunie" | "august" | "speciala" | "simulare";
type Tip = "subiect" | "barem";

function classify(url: string): { sesiune: Session; tip: Tip } | null {
  const u = url.toLowerCase();
  if (!u.endsWith(".pdf")) return null;
  const tip: Tip = /barem|barme|raspuns|răspuns|sol|rezolvare/.test(u) ? "barem" : "subiect";
  let sesiune: Session = "iunie";
  if (/simulare/.test(u)) sesiune = "simulare";
  else if (/august|toamn|sept/.test(u)) sesiune = "august";
  else if (/special/.test(u)) sesiune = "speciala";
  else if (/iuni|var/.test(u)) sesiune = "iunie";
  return { sesiune, tip };
}

async function fcSearch(query: string, limit = 10): Promise<string[]> {
  const key = process.env.FIRECRAWL_API_KEY;
  if (!key) throw new Error("FIRECRAWL_API_KEY missing");
  const res = await fetch("https://api.firecrawl.dev/v2/search", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, limit }),
  });
  if (!res.ok) throw new Error(`Firecrawl search ${res.status}: ${await res.text()}`);
  const j = (await res.json()) as { data?: { web?: Array<{ url: string }> } | Array<{ url: string }> };
  const arr = Array.isArray(j.data) ? j.data : j.data?.web ?? [];
  return arr.map((r) => r.url).filter((u) => /\.pdf(\?|$)/i.test(u));
}

async function downloadAndUpload(
  pdfUrl: string,
  materie: string,
  an: number,
  sesiune: Session,
  tip: Tip,
): Promise<{ ok: boolean; path: string; reason?: string }> {
  const path = `${materie}/${an}/${sesiune}-${tip}.pdf`;
  // Skip dacă există deja.
  const { data: list } = await supabaseAdmin.storage.from("bac-pdfs").list(`${materie}/${an}`, { limit: 100 });
  if (list?.some((f) => f.name === `${sesiune}-${tip}.pdf`)) return { ok: true, path, reason: "exists" };

  const res = await fetch(pdfUrl, { redirect: "follow" });
  if (!res.ok) return { ok: false, path, reason: `download ${res.status}` };
  const ct = res.headers.get("content-type") ?? "";
  const buf = new Uint8Array(await res.arrayBuffer());
  if (buf.byteLength < 5000 || (!ct.includes("pdf") && buf[0] !== 0x25)) {
    return { ok: false, path, reason: "not a pdf" };
  }
  const { error } = await supabaseAdmin.storage.from("bac-pdfs").upload(path, buf, {
    contentType: "application/pdf", upsert: false,
  });
  if (error) return { ok: false, path, reason: error.message };
  return { ok: true, path };
}

export const crawlBacPdfs = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => InputSchema.parse(input))
  .handler(async ({ data, context }) => {
    // Doar admini.
    const { data: roleRow } = await context.supabase
      .from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
    if (!roleRow) throw new Response("Forbidden", { status: 403 });

    const { materie, an, maxPdfs } = data;
    const queries = [
      `subiecte bac ${materie} ${an} filetype:pdf site:subiecte.edu.ro`,
      `barem bac ${materie} ${an} filetype:pdf site:subiecte.edu.ro`,
      `subiecte bac ${materie} ${an} filetype:pdf site:edu.ro`,
      `subiecte bacalaureat ${materie} ${an} filetype:pdf`,
    ];
    const seen = new Set<string>();
    const candidates: string[] = [];
    for (const q of queries) {
      try {
        const urls = await fcSearch(q, 10);
        for (const u of urls) if (!seen.has(u)) { seen.add(u); candidates.push(u); }
        if (candidates.length >= maxPdfs * 2) break;
      } catch (e) { console.error("[crawlBacPdfs] search err", q, e); }
    }

    const results: Array<{ url: string; path: string; ok: boolean; reason?: string }> = [];
    let downloaded = 0;
    for (const url of candidates) {
      if (downloaded >= maxPdfs) break;
      const cls = classify(url);
      if (!cls) continue;
      const r = await downloadAndUpload(url, materie, an, cls.sesiune, cls.tip);
      results.push({ url, ...r });
      if (r.ok && r.reason !== "exists") downloaded++;
    }
    return { materie, an, found: candidates.length, downloaded, results };
  });
