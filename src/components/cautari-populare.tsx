import { CAUTARI_POPULARE } from "@/data/cautari-populare";

export function CautariPopulare({ className = "" }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="cautari-populare">
      <h2 id="cautari-populare" className="text-lg font-semibold">Căutări populare</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {CAUTARI_POPULARE.map((c) => (
          <a key={c.q} href={c.href} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary">
            {c.q}
          </a>
        ))}
      </div>
    </section>
  );
}
