import { Link } from "@tanstack/react-router";
import { BookOpenCheck, Download, Eye, FileArchive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasRezolvareKey } from "@/lib/bac-rezolvari-index";

type Doc = { title: string; pdf_url: string | null; source_url: string | null } | null | undefined;

function DocButtons({ doc, label }: { doc: Doc; label: "Subiect" | "Barem" }) {
  if (!doc) return null;
  if (doc.pdf_url) {
    return (
      <div className="flex items-center rounded-md border bg-background">
        <Button asChild size="sm" variant="ghost" className="rounded-r-none">
          <a href={doc.pdf_url} target="_blank" rel="noopener noreferrer">
            <Eye className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            {label}
          </a>
        </Button>
        <Button asChild size="sm" variant="ghost" className="rounded-l-none border-l">
          <a
            href={doc.pdf_url}
            download
            aria-label={`Descarcă ${label.toLowerCase()} PDF: ${doc.title}`}
          >
            <Download className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            Descarcă
          </a>
        </Button>
      </div>
    );
  }
  if (doc.source_url) {
    return (
      <Button asChild size="sm" variant="outline">
        <a href={doc.source_url} target="_blank" rel="noopener noreferrer">
          <FileArchive className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
          {label} · arhivă ZIP oficială
        </a>
      </Button>
    );
  }
  return null;
}

/**
 * Subiect (view + download) · Barem (view + download) · Rezolvare explicată.
 * The solution button appears only when a real step-by-step solution exists —
 * the barem is never shown in its place.
 */
export function BacLucrareActions({
  subiect,
  barem,
  params,
  size = "sm",
}: {
  subiect: Doc;
  barem: Doc;
  params?: { an: string; materie: string; lucrare: string } | null;
  size?: "sm" | "default";
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <DocButtons doc={subiect} label="Subiect" />
      <DocButtons doc={barem} label="Barem" />
      {params && hasRezolvareKey(`${params.an}-${params.materie}-${params.lucrare}`) && (
        <Button asChild size={size}>
          <Link to="/subiecte-bac/$an/$materie/$lucrare/rezolvare" params={params}>
            <BookOpenCheck className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            Rezolvare explicată
          </Link>
        </Button>
      )}
    </div>
  );
}
