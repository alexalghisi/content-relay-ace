import { Link } from "@tanstack/react-router";
import { SCURTATURI_ACASA } from "@/data/cautari-populare";

/** Scurtături pe intenție — folosite numai pe pagina principală. */
export function ScurtaturiAcasa({ className = "" }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="scurtaturi-acasa">
      <h2 id="scurtaturi-acasa" className="text-lg font-semibold">
        Începe de aici
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {SCURTATURI_ACASA.map((g) => (
          <div key={g.titlu}>
            <h3 className="text-sm font-semibold text-muted-foreground">{g.titlu}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {g.linkuri.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="inline-block rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
