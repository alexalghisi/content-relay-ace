import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AdBanner, AdInArticle } from "@/components/ads/ad-slots";
import { BacLucrareActions } from "@/components/bac-lucrare-actions";
import { BacMeditatiiCta } from "@/components/bac-meditatii-cta";
import { BacRezolvareMarkdown } from "@/components/bac-rezolvare-markdown";
import { BAC_SESSIONS as SES } from "@/lib/bac-archive";
import { SITE_URL } from "@/lib/bac-originals";
import { bacMaterieLabel } from "@/lib/bac-paths";
import { getBacLucrare } from "@/lib/bac-lucrare.functions";

export const Route = createFileRoute("/subiecte-bac/$an/$materie/$lucrare/rezolvare")({
  loader: async ({ params }) => {
    const data = await getBacLucrare({ data: params });
    if (!data) throw notFound();
    // No written solution: send readers to the paper page instead of passing the barem off as one.
    if (!data.rezolvare)
      throw redirect({ to: "/subiecte-bac/$an/$materie/$lucrare", params, statusCode: 302 });
    return data;
  },
  head: ({ params, loaderData: d }) => {
    if (!d) return { meta: [{ title: "Rezolvare BAC | MeditatiiDirect.ro" }] };
    const ses = SES[d.session] ?? d.session;
    const materie = bacMaterieLabel(d.materie);
    const v = d.variant ? ` varianta ${d.variant}` : "";
    const paperUrl = `${SITE_URL}/subiecte-bac/${params.an}/${params.materie}/${params.lucrare}`;
    const url = `${paperUrl}/rezolvare`;
    const title = `Rezolvare BAC ${d.year} ${materie} ${ses}${v} — explicată pas cu pas + barem`;
    const description = `Rezolvare subiecte BAC ${d.year} pas cu pas la ${materie}, sesiunea ${ses}${v}: răspunsuri, raționament și punctaj conform baremului oficial. Gratuit, pe MeditatiiDirect.ro.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        // Pages without a written solution yet stay out of the index (no thin content).
        {
          name: "robots",
          content: d.rezolvare
            ? "index, follow, max-image-preview:large, max-snippet:-1"
            : "noindex, follow",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "ro_RO" },
        { property: "og:site_name", content: "MeditatiiDirect.ro" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: d.rezolvare
        ? [
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
                    name: `${materie} ${d.year} ${ses}${v}`,
                    item: paperUrl,
                  },
                  { "@type": "ListItem", position: 4, name: "Rezolvare", item: url },
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
                learningResourceType: "Rezolvare explicată",
                about: `Bacalaureat ${materie} ${d.year}`,
                isPartOf: paperUrl,
                publisher: { "@type": "Organization", name: "MeditatiiDirect.ro", url: SITE_URL },
              }),
            },
          ]
        : [],
    };
  },
  component: Page,
});

function Page() {
  const d = Route.useLoaderData();
  const params = Route.useParams();
  const ses = SES[d.session] ?? d.session;
  const materie = bacMaterieLabel(d.materie);
  const solved = d.related.filter((r) => r.rezolvare);

  return (
    <div className="container-page max-w-4xl py-8 md:py-12">
      <Link
        to="/subiecte-bac/$an/$materie/$lucrare"
        params={params}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" />
        Subiect și barem BAC {d.year} {materie}
      </Link>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <Badge variant="secondary">{d.year}</Badge>
        <Badge variant="outline">{ses}</Badge>
        {d.variant && <Badge variant="outline">Varianta {d.variant}</Badge>}
        <Badge>Rezolvare explicată</Badge>
      </div>
      <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
        Rezolvare BAC {d.year} {materie} — {ses}
        {d.variant ? `, varianta ${d.variant}` : ""}, pas cu pas
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Subiectul și baremul sunt documentele oficiale ale Ministerului Educației; rezolvarea de mai
        jos este explicația echipei MeditatiiDirect.ro, cu punctajul din barem pentru fiecare
        cerință.
      </p>

      <div className="mt-4">
        <BacLucrareActions subiect={d.subiect} barem={d.barem} />
      </div>

      <AdBanner className="my-6" />

      <article data-testid="bac-rezolvare">
        <BacRezolvareMarkdown
          text={d.rezolvare ?? ""}
          className={
            "[&_h2]:mt-10 [&_h2]:border-t [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold " +
            "[&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_strong]:text-foreground " +
            "[&_blockquote]:my-3 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 " +
            "[&_blockquote]:bg-primary/5 [&_blockquote]:px-4 [&_blockquote]:py-2 " +
            "[&_table]:my-3 [&_table]:w-full [&_td]:border [&_td]:px-2 [&_td]:py-1 " +
            "[&_th]:border [&_th]:bg-muted [&_th]:px-2 [&_th]:py-1"
          }
        />
      </article>

      <BacMeditatiiCta an={d.year} materie={materie} />

      <AdInArticle className="my-8" />

      {solved.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Alte subiecte BAC {materie} rezolvate</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {solved.map((x) => (
              <li key={x.path}>
                <a
                  href={`${x.path}/rezolvare`}
                  className="block rounded-md border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary"
                >
                  Rezolvare BAC {x.year} · {SES[x.session] ?? x.session}
                  {x.variant ? ` · varianta ${x.variant}` : ""}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
