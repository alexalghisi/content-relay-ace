// Admin: status & control crawler PDF-uri BAC.
// Procesarea rulează automat în background (pg_cron lovește
// /api/public/hooks/bac-crawl-tick în fiecare minut). Această pagină
// arată doar progresul și permite trigger manual / reset.
import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type BulkProgress = { done: number; total?: number; running: boolean; lastBody?: string };

export const Route = createFileRoute("/admin/bac-crawler")({
  head: () => ({ meta: [{ title: "Admin — BAC crawler" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminBacCrawler,
});

type Row = {
  materie: string; an: number; status: string;
  attempts: number; uploaded: number;
  last_error: string | null; last_attempt_at: string | null;
};

function AdminBacCrawler() {
  const qc = useQueryClient();

  const { data: rows, isLoading } = useQuery({
    queryKey: ["bac_crawl_progress"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bac_crawl_progress")
        .select("*")
        .order("materie")
        .order("an");
      if (error) throw error;
      return data as Row[];
    },
    refetchInterval: 10_000,
  });

  const callTick = async () => {
    const r = await fetch("/api/public/hooks/bac-crawl-tick", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string,
      },
      body: "{}",
    });
    return { status: r.status, body: await r.text() };
  };

  const tick = useMutation({
    mutationFn: callTick,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["bac_crawl_progress"] }),
  });

  const [bulkProgress, setBulkProgress] = useState<BulkProgress>({ done: 0, total: 0, running: false });
  const bulkAbort = useRef(false);

  const runAll = async () => {
    const pendingCount = (rows ?? []).filter((r) => r.status === "pending" || r.status === "in_progress").length;
    bulkAbort.current = false;
    setBulkProgress({ done: 0, total: pendingCount || undefined, running: true });
    const maxRuns = pendingCount ? pendingCount + 5 : 500;
    for (let i = 0; i < maxRuns; i++) {
      if (bulkAbort.current) break;
      try {
        const res = await callTick();
        setBulkProgress((p) => ({ ...p, done: p.done + 1, lastBody: res.body.slice(0, 200) }));
        if (res.body.includes("no pending combos")) break;
      } catch (e) {
        setBulkProgress((p) => ({ ...p, lastBody: "err: " + String(e) }));
      }
      qc.invalidateQueries({ queryKey: ["bac_crawl_progress"] });
      await new Promise((r) => setTimeout(r, 800));
    }
    setBulkProgress((p) => ({ ...p, running: false }));
    qc.invalidateQueries({ queryKey: ["bac_crawl_progress"] });
  };

  const counts = (rows ?? []).reduce(
    (acc, r) => { acc[r.status] = (acc[r.status] ?? 0) + 1; return acc; },
    {} as Record<string, number>,
  );
  const totalUploaded = (rows ?? []).reduce((s, r) => s + (r.uploaded || 0), 0);

  return (
    <main className="container-page py-10">
      <h1 className="text-2xl font-bold">Admin · Crawler PDF-uri BAC (auto)</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Jobul rulează automat în background (1 combinație / minut, ~4–5 ore pentru toate cele 272 combinații).
        Filtru strict pe URL: trebuie să conțină materia + anul + cuvinte BAC; blacklist pe OMEC/legislație.
      </p>

      <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {(["pending", "in_progress", "done", "failed"] as const).map((s) => (
          <div key={s} className="card-soft p-4">
            <p className="text-xs uppercase text-muted-foreground">{s}</p>
            <p className="mt-1 text-2xl font-bold">{counts[s] ?? 0}</p>
          </div>
        ))}
        <div className="card-soft p-4">
          <p className="text-xs uppercase text-muted-foreground">PDF-uri urcate</p>
          <p className="mt-1 text-2xl font-bold">{totalUploaded}</p>
        </div>
      </section>

      <section className="mt-6 flex flex-wrap items-center gap-3">
        <button onClick={() => tick.mutate()} disabled={tick.isPending || bulkProgress.running}
          className="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50">
          {tick.isPending ? "Rulez tick…" : "Trigger manual (1 combo)"}
        </button>
        <button onClick={() => (bulkProgress.running ? (bulkAbort.current = true) : runAll())}
          disabled={tick.isPending}
          className="rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
          {bulkProgress.running
            ? `Oprește (${bulkProgress.done}${bulkProgress.total ? `/${bulkProgress.total}` : ""})`
            : "Procesează TOATE materiile acum"}
        </button>
        {bulkProgress.running && (
          <span className="text-xs text-muted-foreground">
            Rulez secvențial combinațiile pending… {bulkProgress.done}{bulkProgress.total ? `/${bulkProgress.total}` : ""}
          </span>
        )}
        {bulkProgress.lastBody && !bulkProgress.running && (
          <span className="text-xs text-muted-foreground">Ultimul răspuns: {bulkProgress.lastBody}</span>
        )}
        {tick.data && (
          <pre className="max-h-40 flex-1 overflow-auto rounded bg-muted p-2 text-xs">
            HTTP {tick.data.status}: {tick.data.body}
          </pre>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Progres detaliat</h2>
        {isLoading ? (
          <p className="mt-2 text-sm text-muted-foreground">Încarc…</p>
        ) : (
          <div className="mt-3 overflow-auto rounded border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr className="text-left">
                  <th className="px-3 py-2">Materie</th>
                  <th className="px-3 py-2">An</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Încercări</th>
                  <th className="px-3 py-2">Urcate</th>
                  <th className="px-3 py-2">Ultima eroare</th>
                </tr>
              </thead>
              <tbody>
                {(rows ?? []).map((r) => (
                  <tr key={`${r.materie}-${r.an}`} className="border-t border-border">
                    <td className="px-3 py-1.5">{r.materie}</td>
                    <td className="px-3 py-1.5">{r.an}</td>
                    <td className="px-3 py-1.5">
                      <span className={
                        r.status === "done" ? "text-emerald-600" :
                        r.status === "failed" ? "text-destructive" :
                        r.status === "in_progress" ? "text-amber-600" : "text-muted-foreground"
                      }>{r.status}</span>
                    </td>
                    <td className="px-3 py-1.5">{r.attempts}</td>
                    <td className="px-3 py-1.5">{r.uploaded}</td>
                    <td className="px-3 py-1.5 max-w-xs truncate text-xs text-muted-foreground">{r.last_error}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
