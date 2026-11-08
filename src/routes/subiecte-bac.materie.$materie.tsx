import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdBanner, AdInArticle } from "@/components/ads/ad-slots";
import { BacPaperCard, groupBacPapers, type BacPaper } from "@/components/bac-paper-card";
import { getBacByMaterie } from "@/lib/subiecte-bac.functions";
import { SITE_URL } from "@/lib/bac-originals";
import { descriereMaterieBac, numeScurtBac, titluMaterieBac } from "@/lib/bac-materie-seo";
import { areRezolvariMaterie } from "@/lib/bac-rezolvari-index";
import { BAC_AGGREGATES } from "@/lib/bac-archive";

export const Route = createFileRoute("/subiecte-bac/materie/$materie")({
  loader: async ({ params }) => {
    const data = await getBacByMaterie({ data: { slug: params.materie } });
    if (!data.rows.length) throw notFound();
    return data;
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.name ?? params.materie;
    const url = `${SITE_URL}/subiecte-bac/materie/${params.materie}`;
    const years = (loaderData?.rows ?? []).map((r) => r.year);
    const title = titluMaterieBac(params.materie, name, years);
    const prefix = BAC_AGGREGATES[params.materie]?.prefix ?? params.materie;
    const description = descriereMaterieBac({
      slug: params.materie,
      name,
      ani: years,
      // Doar pagina cu toate profilurile le enumeră (ex. fizică: teoretic, tehnologic).
      profiluri: BAC_AGGREGATES[params.materie]
        ? (loaderData?.profiluri ?? [])
            .map((p) => numeScurtBac(p.slug, p.name).split(" ").slice(1).join(" "))
            .filter(Boolean)
        : [],
      areRezolvari: areRezolvariMaterie(prefix),
    });
    const n = numeScurtBac(params.materie, name);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            `subiecte bac ${n}, subiecte ${n} bac, variante bac ${n}, barem bac ${n}, subiecte bacalaureat ${n}, bac ${n} ${years.length ? Math.max(...years) : ""}`.trim(),
        },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { httpEquiv: "Content-Language", content: "ro-RO" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ro_RO" },
        { property: "og:site_name", content: "MeditatiiDirect.ro" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Subiecte BAC",
                item: `${SITE_URL}/subiecte-bac`,
              },
              { "@type": "ListItem", position: 3, name: `Subiecte BAC ${name}`, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: title,
            description,
            url,
            inLanguage: "ro-RO",
            isPartOf: { "@type": "WebSite", name: "MeditatiiDirect.ro", url: SITE_URL },
            about: `Subiecte BAC ${name}`,
          }),
        },
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-16 text-center">
      <h1 className="text-2xl font-bold">Materia nu a fost găsită</h1>
      <Link to="/subiecte-bac" className="mt-4 inline-block text-primary underline">
        Înapoi la arhiva de subiecte BAC
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-16 text-center">
      <h1 className="text-2xl font-bold">Eroare</h1>
      <p className="mt-2 text-sm text-muted-foreground">{(error as Error).message}</p>
    </div>
  ),
});

type Row = Awaited<ReturnType<typeof getBacByMaterie>>["rows"][number];

function Page() {
  const { name, rows, slug, agregat, profiluri } = Route.useLoaderData();
  const byYear = new Map<number, Row[]>();
  rows.forEach((r: Row) => {
    const a = byYear.get(r.year) ?? [];
    a.push(r);
    byYear.set(r.year, a);
  });
  const years = Array.from(byYear.keys()).sort((a, b) => b - a);
  const period = `${Math.min(...years)}–${Math.max(...years)}`;

  return (
    <div className="container-page py-8 md:py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:underline">
          Acasă
        </Link>{" "}
        /
        <Link to="/subiecte-bac" className="ml-1 hover:underline">
          Subiecte BAC
        </Link>{" "}
        /<span className="ml-1">{name}</span>
      </nav>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        Subiecte BAC {name} {period} — variante, bareme și rezolvări
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Subiecte și bareme originale pentru <strong>{name}</strong>, din {period}, grupate pe ani și
        sesiuni: simulare națională, sesiunea iunie–iulie, august–septembrie, sesiunea specială,
        variantele de rezervă și modelul oficial. Fiecare PDF are sursa și modul de verificare
        afișate; se deschide și se descarcă gratuit, fără cont.
      </p>
      {profiluri.length > 1 && agregat && (
        <nav aria-label={`Profiluri ${agregat.name}`} className="mt-4 flex flex-wrap gap-4 text-sm">
          {slug !== agregat.slug && (
            <Link
              to="/subiecte-bac/materie/$materie"
              params={{ materie: agregat.slug }}
              className="text-primary underline"
            >
              Toate profilurile
            </Link>
          )}
          {profiluri
            .filter((p: { slug: string }) => p.slug !== slug)
            .map((p: { slug: string; name: string }) => (
              <Link
                key={p.slug}
                to="/subiecte-bac/materie/$materie"
                params={{ materie: p.slug }}
                className="text-primary underline"
              >
                {p.name}
              </Link>
            ))}
        </nav>
      )}
      <nav aria-label="Ani BAC" className="mt-4 flex flex-wrap gap-4 text-sm">
        {years.map((year) => (
          <a key={year} href={`#bac-${year}`} className="text-primary underline">
            {year}
          </a>
        ))}
      </nav>

      <AdBanner className="my-6" />

      {years.map((y) => (
        <section key={y} id={`bac-${y}`} className="mt-8 scroll-mt-24">
          <h2 className="text-xl font-semibold">
            Subiecte BAC {name} {y}
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {groupBacPapers((byYear.get(y) ?? []) as BacPaper[]).map((group) => (
              <BacPaperCard key={group[0].id} items={group} />
            ))}
          </div>
        </section>
      ))}

      <AdInArticle className="my-8" />

      <section className="mt-12 max-w-3xl space-y-3 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">
          De ce să exersezi pe variante BAC reale la {name}?
        </h2>
        <p>
          Subiectele oficiale din anii precedenți sunt cea mai bună pregătire pentru proba de{" "}
          <strong>{name}</strong>. Modelele se repetă, baremul îți arată exact cum se punctează, iar
          rezolvarea cronometrată te antrenează pentru emoțiile examenului.
        </p>
        <p>
          Parcurge sistematic <strong>toate variantele de BAC {name}</strong>, începând cu cele mai
          recente (2026, 2025, 2024) și mergând în urmă până în {Math.min(...years)}.
        </p>
        <p>
          Vrei să lucrezi cu cineva? Poți{" "}
          <Link to="/meditatii-bac" className="text-primary underline">
            cere meditații BAC
          </Link>{" "}
          de la profesori verificați, poți relua subiectele cu{" "}
          <Link to="/profesor-ai" className="text-primary underline">
            Profesorul AI
          </Link>{" "}
          sau poți încerca o{" "}
          <Link to="/simulare-bacalaureat" className="text-primary underline">
            simulare de Bacalaureat
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
