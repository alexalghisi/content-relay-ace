// Blocul de date reale al unei pagini /meditatii-{materie}: profesori cu anunț activ și linkuri
// spre paginile materie × oraș care au conținut real (doar cele indexabile).
import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { AnuntCardView } from "@/components/anunt-card";
import type { PaginaMaterieData } from "@/lib/pagina-materie.functions";

const SITE = "https://meditatiidirect.ro";

export function PaginaMaterieBlock({
  d,
  slug,
  nume,
}: {
  d: PaginaMaterieData;
  slug: string;
  nume: string;
}) {
  const itemList =
    d.anunturi.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Profesori de ${nume} cu anunț activ`,
          numberOfItems: d.anunturi.length,
          itemListElement: d.anunturi.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE}/anunt/${a.seo_slug || a.id}`,
            name: a.title,
          })),
        }
      : null;
  return (
    <>
      {itemList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}
      {d.anunturi.length > 0 && (
        <section className="mt-12" aria-labelledby="profesori-materie" data-testid="profesori-materie">
          <h2 id="profesori-materie" className="text-2xl font-bold">
            Profesori de {nume} cu anunț activ
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {d.profesori === 1
              ? `Un profesor are ${d.totalAnunturi === 1 ? "un anunț activ" : `${d.totalAnunturi} anunțuri active`}`
              : `${d.profesori} profesori au ${d.totalAnunturi} anunțuri active`}{" "}
            de {nume} pe MeditatiiDirect.ro. Deschide anunțul, vezi tariful și scrie-i direct profesorului.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.anunturi.map((a) => (
              <AnuntCardView key={a.id} a={a} />
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link to="/anunturi-meditatii" className="font-medium text-primary hover:underline">
              Toate anunțurile de meditații →
            </Link>
          </p>
        </section>
      )}
      {d.orase.length > 0 && (
        <section className="mt-12" aria-labelledby="materie-orase" data-testid="materie-orase">
          <h2 id="materie-orase" className="text-2xl font-bold">
            Meditații {nume} în orașul tău
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {d.orase.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/meditatii/$materie/$oras"
                  params={{ materie: slug, oras: c.slug }}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  Meditații {nume} {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
