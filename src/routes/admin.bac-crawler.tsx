// Admin: trigger crawl Firecrawl pentru PDF-uri BAC.
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { crawlBacPdfs } from "@/lib/bac-crawler.functions";
import { BAC_SUBJECTS, BAC_YEARS } from "@/data/bac-catalog";

export const Route = createFileRoute("/admin/bac-crawler")({
  head: () => ({ meta: [{ title: "Admin — BAC crawler" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminBacCrawler,
});

function AdminBacCrawler() {
  const fn = useServerFn(crawlBacPdfs);
  const [materie, setMaterie] = useState(BAC_SUBJECTS[0].slug);
  const [an, setAn] = useState(2024);
  const [maxPdfs, setMaxPdfs] = useState(8);
  const [batch, setBatch] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const single = useMutation({ mutationFn: () => fn({ data: { materie, an, maxPdfs } }) });

  const runBatch = async () => {
    setBatch(true); setLog([]);
    for (const s of BAC_SUBJECTS) {
      for (const y of BAC_YEARS) {
        try {
          const r = await fn({ data: { materie: s.slug, an: y, maxPdfs } });
          setLog((l) => [...l, `${s.slug} ${y}: ${r.downloaded}/${r.found}`]);
        } catch (e: unknown) {
          setLog((l) => [...l, `${s.slug} ${y}: EROARE ${(e as Error).message}`]);
        }
      }
    }
    setBatch(false);
  };

  return (
    <main className="container-page py-10">
      <h1 className="text-2xl font-bold">Admin · Crawler PDF-uri BAC</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Caută cu Firecrawl pe subiecte.edu.ro / edu.ro, descarcă PDF-urile și le salvează în storage la calea <code>bac-pdfs/{"{"}materie{"}"}/{"{"}an{"}"}/{"{"}sesiune{"}"}-{"{"}tip{"}"}.pdf</code>. Necesită rol <strong>admin</strong>.
      </p>

      <section className="mt-6 grid gap-3 sm:grid-cols-[1fr_120px_120px_auto]">
        <select value={materie} onChange={(e) => setMaterie(e.target.value)} className="rounded border border-border bg-background px-3 py-2">
          {BAC_SUBJECTS.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
        <select value={an} onChange={(e) => setAn(Number(e.target.value))} className="rounded border border-border bg-background px-3 py-2">
          {BAC_YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
        <input type="number" min={1} max={20} value={maxPdfs} onChange={(e) => setMaxPdfs(Number(e.target.value))}
          className="rounded border border-border bg-background px-3 py-2" />
        <button onClick={() => single.mutate()} disabled={single.isPending}
          className="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50">
          {single.isPending ? "Rulez…" : "Crawl 1 (materie+an)"}
        </button>
      </section>

      {single.data && (
        <pre className="mt-4 max-h-80 overflow-auto rounded bg-muted p-3 text-xs">{JSON.stringify(single.data, null, 2)}</pre>
      )}
      {single.error && <p className="mt-3 text-sm text-destructive">{(single.error as Error).message}</p>}

      <section className="mt-10 border-t border-border pt-6">
        <h2 className="text-lg font-semibold">Batch complet (toate materiile × toți anii)</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          {BAC_SUBJECTS.length} materii × {BAC_YEARS.length} ani = {BAC_SUBJECTS.length * BAC_YEARS.length} runde × până la {maxPdfs} PDF-uri. Consumă credite Firecrawl semnificativ.
        </p>
        <button onClick={runBatch} disabled={batch}
          className="mt-3 rounded border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive disabled:opacity-50">
          {batch ? "Rulez batch…" : "Rulează batch complet"}
        </button>
        {log.length > 0 && (
          <pre className="mt-4 max-h-96 overflow-auto rounded bg-muted p-3 text-xs">{log.join("\n")}</pre>
        )}
      </section>
    </main>
  );
}
