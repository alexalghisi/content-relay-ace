import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdBanner, AdInArticle } from "@/components/ads/ad-slots";
import { BacTabelAn, BacAniNav, type BacRow } from "@/components/bac-tabel-an";
import { getBacByYear } from "@/lib/subiecte-bac.functions";
import { SITE_URL } from "@/lib/bac-originals";

type Row = Awaited<ReturnType<typeof getBacByYear>>["rows"][number];

export const Route = createFileRoute("/subiecte-bac/an/$an")({
  loader: async ({ params }) => {
    const year = Number(params.an);
    if (!Number.isInteger(year) || year < 2000 || year > 2030) throw notFound();
    const data = await getBacByYear({ data: { year } });
    if (!data.rows.length) throw notFound();
    return data;
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_URL}/subiecte-bac/an/${params.an}`;
    const names = Array.from(new Set((loaderData?.rows ?? []).map((r) => r.subject_name)));
    const short = names.some((n) => n.startsWith("Matematică"))
      ? ["Matematică (toate profilurile)", ...names.filter((n) => !n.startsWith("Matematică"))]
      : names;
    const title = `Subiecte BAC ${params.an} — toate materiile, bareme și rezolvări | MeditatiiDirect.ro`;
    const description = `Subiecte BAC ${params.an} cu barem oficial PDF: ${short.join(", ")}. Simulare, iunie–iulie, august–septembrie, sesiunea specială și rezervă, plus rezolvări pas cu pas.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `subiecte bac ${params.an}, bac ${params.an} subiecte, barem bac ${params.an}, rezolvari bac ${params.an}, simulare bac ${params.an}, subiecte bac ${params.an} matematica, bac romana ${params.an}, barem bac info ${params.an}`,
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
              { "@type": "ListItem", position: 3, name: `BAC ${params.an}`, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-16 text-center">
      <h1 className="text-2xl font-bold">Anul nu a fost găsit</h1>
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

function Page() {
  const { year, rows } = Route.useLoaderData();
  const byMaterie = new Map<string, { name: string; items: Row[] }>();
  rows.forEach((r: Row) => {
    const e = byMaterie.get(r.subject_slug) ?? { name: r.subject_name, items: [] };
    e.items.push(r);
    byMaterie.set(r.subject_slug, e);
  });
  const materii = Array.from(byMaterie.entries()).sort((a, b) =>
    a[1].name.localeCompare(b[1].name, "ro"),
  );

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
        /<span className="ml-1">{year}</span>
      </nav>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
        Subiecte BAC {year} — toate materiile, bareme și rezolvări
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Toate subiectele de Bacalaureat din <strong>{year}</strong>, pe sesiuni (simulare, model,
        sesiunea specială, iunie–iulie, august–septembrie): subiectul și{" "}
        <strong>baremul BAC {year}</strong> oficial în PDF și, unde există, rezolvarea explicată pas
        cu pas. Gratuit, fără cont.
      </p>

      <AdBanner className="my-6" />

      <nav aria-label="Ani Bacalaureat" className="mt-4">
        <BacAniNav curent={year} />
      </nav>

      {materii.length > 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          Materii: {materii.map(([, m]) => m.name).join(", ")}
        </p>
      )}

      <div className="mt-8">
        <BacTabelAn year={year} rows={rows as BacRow[]} />
      </div>

      <AdInArticle className="my-8" />

      <section className="mt-10 max-w-3xl space-y-3 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Pregătire pentru BAC</h2>
        <p>
          Ai lucrat subiectele BAC {year}? Pentru capitolele la care pierzi puncte poți{" "}
          <Link to="/meditatii-bac" className="text-primary underline">
            cere meditații BAC
          </Link>
          , poți lucra subiectul cu{" "}
          <Link to="/profesor-ai" className="text-primary underline">
            Profesorul AI
          </Link>{" "}
          sau poți da o{" "}
          <Link to="/simulare-bacalaureat" className="text-primary underline">
            simulare de Bacalaureat
          </Link>
          .
        </p>
      </section>

      <nav aria-label="Alți ani BAC" className="mt-10 text-sm">
        <h2 className="text-lg font-semibold">Alți ani</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {Array.from({ length: 10 }, (_, i) => 2026 - i)
            .filter((y) => y !== year)
            .map((y) => (
              <li key={y}>
                <Link
                  to="/subiecte-bac/an/$an"
                  params={{ an: String(y) }}
                  className="rounded-md border bg-card px-3 py-1.5 hover:border-primary/40 hover:text-primary"
                >
                  Subiecte BAC {y}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
