import { Link } from "@tanstack/react-router";
import { Download, Eye, FileArchive, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BAC_SESSIONS } from "@/lib/bac-archive";
import { BacLucrareActions } from "@/components/bac-lucrare-actions";
import { bacLucrareSegment, bacMaterieSegment, isBundledOriginal } from "@/lib/bac-paths";

export type BacPaper = {
  id: string;
  slug?: string | null;
  year: number;
  session: string;
  subject_slug: string;
  subject_name: string;
  profil: string | null;
  paper_type: string;
  title: string;
  pdf_url: string | null;
  source_url: string | null;
  variant: string | null;
  description: string | null;
  verification?: string | null;
};

export function sessionLabel(session: string) {
  return BAC_SESSIONS[session] ?? session;
}

/** Subject (subiect) and answer key (barem) for the same exam paper, side by side. */
export function groupBacPapers<T extends BacPaper>(rows: T[]) {
  const map = new Map<string, T[]>();
  for (const r of rows) {
    const base = r.title.replace(/\s*\((barem|subiect)\)\s*$/i, "");
    const key = `${r.year}|${r.session}|${r.subject_slug}|${r.profil ?? ""}|${r.variant ?? ""}|${base}`;
    map.set(key, [...(map.get(key) ?? []), r]);
  }
  return [...map.values()];
}

function PaperLinks({ row, label }: { row: BacPaper; label: string }) {
  if (row.pdf_url) {
    return (
      <div className="flex items-center gap-1">
        <Button asChild size="sm" variant="outline">
          <a href={row.pdf_url} target="_blank" rel="noopener noreferrer">
            <Eye className="mr-1 h-3 w-3" aria-hidden="true" />
            {label} PDF
          </a>
        </Button>
        <Button asChild size="sm" variant="ghost">
          <a
            href={row.pdf_url}
            download
            aria-label={`Descarcă ${label.toLowerCase()} PDF: ${row.title}`}
          >
            <Download className="h-3 w-3" aria-hidden="true" />
          </a>
        </Button>
      </div>
    );
  }
  if (row.source_url) {
    return (
      <Button asChild size="sm" variant="outline">
        <a href={row.source_url} target="_blank" rel="noopener noreferrer">
          <FileArchive className="mr-1 h-3 w-3" aria-hidden="true" />
          {label} · arhivă ZIP oficială
        </a>
      </Button>
    );
  }
  return null;
}

export function BacPaperCard({ items }: { items: BacPaper[] }) {
  const first = items[0];
  const subiect = items.find((i) => i.paper_type === "subiect");
  const barem = items.find((i) => i.paper_type === "barem");
  const detail = subiect?.slug ?? barem?.slug ?? first.slug;
  const heading = first.title.replace(/\s*\((barem|subiect)\)\s*$/i, "");
  const seo = isBundledOriginal(first)
    ? {
        an: String(first.year),
        materie: bacMaterieSegment(first),
        lucrare: bacLucrareSegment(first),
      }
    : null;
  return (
    <Card className="p-4 transition hover:border-primary/40">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <Badge variant="secondary">{first.year}</Badge>
        <Badge variant="outline">{sessionLabel(first.session)}</Badge>
        {first.profil && <Badge variant="outline">{first.profil}</Badge>}
        {first.variant && <Badge variant="outline">Varianta {first.variant}</Badge>}
      </div>
      <h3 className="mt-2 text-base font-semibold leading-snug">
        {seo ? (
          <Link
            to="/subiecte-bac/$an/$materie/$lucrare"
            params={seo}
            className="hover:text-primary hover:underline"
          >
            {heading}
          </Link>
        ) : detail ? (
          <Link
            to="/subiecte-bac/lucrare/$slug"
            params={{ slug: detail }}
            className="hover:text-primary hover:underline"
          >
            {heading}
          </Link>
        ) : (
          heading
        )}
      </h3>
      {first.description && (
        <p className="mt-1 flex gap-1 text-xs text-muted-foreground">
          {first.verification === "official-hash" && (
            <ShieldCheck className="mt-0.5 h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
          )}
          <span>{first.description}</span>
        </p>
      )}
      <div className="mt-3">
        {subiect || barem ? (
          <BacLucrareActions subiect={subiect} barem={barem} params={seo} />
        ) : (
          <div className="flex flex-wrap gap-2">
            {items.map((r) => (
              <PaperLinks
                key={r.id}
                row={r}
                label={r.paper_type === "barem" ? "Barem" : "Subiect"}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
