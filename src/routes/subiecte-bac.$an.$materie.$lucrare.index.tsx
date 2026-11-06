import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookOpenCheck, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AdBanner, AdInArticle } from "@/components/ads/ad-slots";
import { BacLucrareActions } from "@/components/bac-lucrare-actions";
import { BacMeditatiiCta } from "@/components/bac-meditatii-cta";
import { BAC_SESSIONS as SES } from "@/lib/bac-archive";
import { absolutePdfUrl, SITE_URL } from "@/lib/bac-originals";
import { bacMaterieLabel } from "@/lib/bac-paths";
import { getBacLucrare } from "@/lib/bac-lucrare.functions";

export const Route = createFileRoute("/subiecte-bac/$an/$materie/$lucrare/")({
  loader: async ({ params }) => {
    const data = await getBacLucrare({ data: params });
    if (!data) throw notFound();
    return data;
  },
  head: ({ params, loaderData: d }) => {
    if (!d) return { meta: [{ title: "Subiecte BAC | MeditatiiDirect.ro" }] };
    const ses = SES[d.session] ?? d.session;
    const materie = bacMaterieLabel(d.materie);
    const v = d.variant ? ` varianta ${d.variant}` : "";
    const url = `${SITE_URL}/subiecte-bac/${params.an}/${params.materie}/${params.lucrare}`;
    const title = `Subiecte BAC ${d.year} ${materie} ${ses}${v} + barem (PDF oficial)`;
    const description = `Subiectul oficial și baremul BAC ${d.year} la ${materie}, sesiunea ${ses}${v}. Deschide sau descarcă PDF-urile gratuit${d.rezolvare ? " și vezi rezolvarea subiectelor BAC pas cu pas" : ""}, apoi exersează alte variante BAC.`;
    const m = materie.toLowerCase();
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `subiecte bac ${d.year} ${m}, barem bac ${d.year} ${m}, bac ${d.year} ${ses.toLowerCase()}, rezolvare bac ${m} ${d.year}${v}, variante bac ${m}`,
        },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
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
              {
                "@type": "ListItem",
                position: 3,
                name: `BAC ${d.year}`,
                item: `${SITE_URL}/subiecte-bac/an/${d.year}`,
              },
              { "@type": "ListItem", position: 4, name: `${materie} ${ses}${v}`, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: title,
            description,
            inLanguage: "ro-RO",
            url,
            educationalLevel: "Liceu — clasa a XII-a",
            learningResourceType: "Subiect de examen",
            about: `Bacalaureat ${materie}`,
            isPartOf: { "@type": "WebSite", name: "MeditatiiDirect.ro", url: SITE_URL },
            hasPart: [d.subiect, d.barem]
              .filter((x) => x?.pdf_url)
              .map((x) => ({
                "@type": "DigitalDocument",
                name: x!.title,
                encodingFormat: "application/pdf",
                url: absolutePdfUrl(x!.pdf_url),
              })),
            publisher: { "@type": "Organization", name: "Ministerul Educației" },
          }),
        },
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-16 text-center">
      <h1 className="text-2xl font-bold">Lucrarea nu a fost găsită</h1>
      <Link to="/subiecte-bac" className="mt-4 inline-block text-primary underline">
        Înapoi la arhiva de subiecte BAC
      </Link>
    </div>
  ),
});

function Page() {
  const d = Route.useLoaderData();
  const params = Route.useParams();
  const ses = SES[d.session] ?? d.session;
  const materie = bacMaterieLabel(d.materie);
  const main = d.subiect ?? d.barem;

  return (
    <div className="container-page py-8 md:py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:underline">
          Acasă
        </Link>{" "}
        /{" "}
        <Link to="/subiecte-bac" className="hover:underline">
          Subiecte BAC
        </Link>{" "}
        /{" "}
        <Link to="/subiecte-bac/an/$an" params={{ an: String(d.year) }} className="hover:underline">
          BAC {d.year}
        </Link>{" "}
        / <span>{materie}</span>
      </nav>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <Badge variant="secondary">{d.year}</Badge>
        <Badge variant="outline">{ses}</Badge>
        {d.profil && <Badge variant="outline">{d.profil}</Badge>}
        {d.variant && <Badge variant="outline">Varianta {d.variant}</Badge>}
      </div>
      <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
        Subiecte BAC {d.year} {materie} — {ses}
        {d.variant ? `, varianta ${d.variant}` : ""}, cu barem
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Subiectul oficial și baremul de evaluare publicate de Ministerul Educației (CNPEE) pentru
        examenul de Bacalaureat {d.year}, proba de <strong>{d.subject_name}</strong>, sesiunea{" "}
        <strong>{ses}</strong>. Rezolvă subiectul în 3 ore, apoi verifică-te cu baremul BAC
        {d.rezolvare ? " și parcurge rezolvarea explicată pas cu pas" : ""}.
      </p>
      {main?.description && (
        <p className="mt-2 flex max-w-3xl gap-1 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
          <span>{main.description}</span>
        </p>
      )}

      <Card className="mt-6 p-4">
        <h2 className="text-lg font-semibold">
          {d.rezolvare ? "Subiect · Barem · Rezolvare" : "Subiect · Barem"}
        </h2>
        <div className="mt-3">
          <BacLucrareActions subiect={d.subiect} barem={d.barem} params={params} size="default" />
        </div>
        {!d.subiect && (
          <p className="mt-2 text-xs text-muted-foreground">
            Pentru această sesiune avem doar baremul oficial.
          </p>
        )}
        {!d.barem && (
          <p className="mt-2 text-xs text-muted-foreground">
            Baremul oficial pentru această variantă nu este încă în arhivă.
          </p>
        )}
      </Card>

      <AdBanner className="my-6" />

      <div className="grid gap-6 lg:grid-cols-2">
        {[d.subiect, d.barem].map(
          (doc) =>
            doc?.pdf_url && (
              <section key={doc.id}>
                <h2 className="text-lg font-semibold">
                  {doc.paper_type === "barem" ? "Barem de evaluare" : "Subiectul oficial"}
                </h2>
                <Card className="mt-2 overflow-hidden">
                  <iframe
                    loading="lazy"
                    src={doc.pdf_url}
                    title={doc.title}
                    className="w-full"
                    style={{ height: "75vh" }}
                  />
                </Card>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fișier original: <code>{doc.original_filename}</code>
                </p>
              </section>
            ),
        )}
      </div>

      {d.rezolvare && (
        <Card className="mt-8 flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Rezolvare explicată pas cu pas</h2>
            <p className="text-sm text-muted-foreground">
              Fiecare cerință rezolvată, cu răspunsul, raționamentul și punctajul din barem.
            </p>
          </div>
          <Button asChild>
            <Link to="/subiecte-bac/$an/$materie/$lucrare/rezolvare" params={params}>
              <BookOpenCheck className="mr-1 h-4 w-4" aria-hidden="true" />
              Vezi rezolvarea
            </Link>
          </Button>
        </Card>
      )}

      <BacMeditatiiCta an={d.year} materie={materie} />

      <AdInArticle className="my-8" />

      {d.related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Alte variante BAC {materie}</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {d.related.map((x) => (
              <li key={x.path}>
                <a
                  href={x.path}
                  className="block rounded-md border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary"
                >
                  BAC {x.year} · {SES[x.session] ?? x.session}
                  {x.variant ? ` · v${x.variant}` : ""}
                  {x.rezolvare ? " · rezolvat" : ""}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10 max-w-3xl space-y-3 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">
          Cum folosești subiectul și baremul BAC {d.year}
        </h2>
        <p>
          Tipărește sau deschide <strong>subiectul</strong> și lucrează exact 3 ore, fără
          întreruperi. Apoi corectează-te cu <strong>baremul oficial</strong>, punct cu punct, și
          notează unde ai pierdut puncte. La final citește <strong>rezolvarea explicată</strong>{" "}
          pentru cerințele greșite și refă-le după 1–2 zile.
        </p>
        <p>
          Vezi toate{" "}
          <Link
            to="/subiecte-bac/an/$an"
            params={{ an: String(d.year) }}
            className="text-primary underline"
          >
            subiectele BAC {d.year}
          </Link>{" "}
          sau întreaga{" "}
          <Link to="/subiecte-bac" className="text-primary underline">
            arhivă de subiecte Bacalaureat 2010–2026
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
