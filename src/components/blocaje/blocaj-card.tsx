import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { claseLabel, getBlocajMaterie, type BlocajNode } from "@/data/blocaje";

/** Card de blocaj folosit în liste (index, pagină de materie, „ce urmează”). */
export function BlocajCard({
  n,
  showMaterie = false,
  hint,
}: {
  n: BlocajNode;
  showMaterie?: boolean;
  hint?: string;
}) {
  const m = getBlocajMaterie(n.materie);
  return (
    <Link
      to="/harta-blocajelor/$materie/$blocaj"
      params={{ materie: n.materie, blocaj: n.slug }}
      className="card-soft group flex h-full flex-col p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-pop)]"
    >
      <p className="text-xs text-muted-foreground">
        {showMaterie && m ? `${m.name} · ` : ""}
        {claseLabel(n.clase)}
      </p>
      <h3 className="mt-1 text-base font-semibold group-hover:text-primary">{n.titlu}</h3>
      <p className="mt-2 line-clamp-3 text-sm italic leading-relaxed text-muted-foreground">
        „{n.blocaj}”
      </p>
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
      <p className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
        Vezi ce îți lipsește <ArrowRight className="h-3 w-3" />
      </p>
    </Link>
  );
}

/** Breadcrumb vizibil, aliniat cu BreadcrumbList JSON-LD emis de pagină. */
export function BlocajeBreadcrumb({ items }: { items: { name: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="hover:text-primary">
            Acasă
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.name} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {it.to ? (
              <Link to={it.to} className="hover:text-primary">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground/80">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
