// /subiecte-evaluare-nationala/{slug} — subiect + barem oficial (PDF) și rezolvarea explicată.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, Eye, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BacRezolvareMarkdown } from "@/components/bac-rezolvare-markdown";
import { LUCRARI_EN, MATERIE_EN, lucrareEn, rezolvareEn, titluLucrareEn } from "@/lib/subiecte-en";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/subiecte-evaluare-nationala/$slug")({
  loader: ({ params }) => {
    const l = lucrareEn(params.slug);
    const rezolvare = l ? rezolvareEn(l.slug) : null;
    if (!l || !rezolvare) throw notFound();
    return { l, rezolvare };
  },
  head: ({ loaderData: d }) => {
    if (!d) return { meta: [{ title: "Subiecte Evaluare Națională | MeditatiiDirect.ro" }] };
    const { l } = d;
    const url = `${SITE}/subiecte-evaluare-nationala/${l.slug}`;
    const m = l.materie === "matematica" ? "matematică" : "română";
    const title =
      l.tip === "model"
        ? `Model Evaluare Națională ${l.an} ${m} — subiect, barem și rezolvare pas cu pas`
        : `Subiecte Evaluare Națională ${l.an} ${m} rezolvate — PDF, barem și explicații`;
    const description =
      l.tip === "model"
        ? `Modelul oficial Evaluarea Națională ${l.an} la ${m}, publicat pe 1 noiembrie 2026: PDF, barem și rezolvare explicată pentru fiecare item, cu punctajul din barem.`
        : `Subiectul de ${m} de la Evaluarea Națională ${l.an} (${l.eticheta.toLowerCase()}): PDF oficial, barem și rezolvare explicată pas cu pas. Antrenament pentru EN 2027.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "ro_RO" },
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
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Subiecte Evaluare Națională",
                item: `${SITE}/subiecte-evaluare-nationala`,
              },
              { "@type": "ListItem", position: 3, name: titluLucrareEn(l), item: url },
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
            educationalLevel: "Gimnaziu — clasa a VIII-a",
            learningResourceType: "Subiect de examen rezolvat",
            about: `Evaluarea Națională ${l.an} — ${MATERIE_EN[l.materie]}`,
            datePublished: l.publicat,
            publisher: { "@type": "Organization", name: "MeditatiiDirect.ro", url: SITE },
          }),
        },
      ],
    };
  },
  component: Page,
});

function PdfButon({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex items-center rounded-md border bg-background text-sm">
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1 px-3 py-1.5 hover:text-primary"
      >
        <Eye className="h-3.5 w-3.5" aria-hidden="true" /> {label}
      </a>
      <a
        href={href}
        download
        className="inline-flex items-center gap-1 border-l px-3 py-1.5 hover:text-primary"
        aria-label={`Descarcă ${label} PDF`}
      >
        <Download className="h-3.5 w-3.5" aria-hidden="true" /> Descarcă
      </a>
    </div>
  );
}

function Page() {
  const { l, rezolvare } = Route.useLoaderData();
  const altele = LUCRARI_EN.filter((x) => x.slug !== l.slug);
  return (
    <div className="container-page max-w-4xl py-8 md:py-12">
      <Link
        to="/subiecte-evaluare-nationala"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" /> Toate subiectele Evaluare
        Națională
      </Link>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <Badge variant="secondary">{l.an}</Badge>
        <Badge variant="outline">{l.eticheta}</Badge>
        <Badge>Rezolvare explicată</Badge>
      </div>
      <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
        {titluLucrareEn(l)} — subiect, barem și rezolvare pas cu pas
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Subiectul și baremul sunt documentele oficiale ale Ministerului Educației și Cercetării
        (Centrul Național pentru Curriculum și Evaluare). Rezolvarea de mai jos este explicația
        echipei MeditatiiDirect.ro, cu punctajul din barem pentru fiecare cerință.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <PdfButon href={l.subiect} label="Subiect" />
        <PdfButon href={l.barem} label="Barem" />
      </div>

      <article data-testid="en-rezolvare" className="mt-8">
        <BacRezolvareMarkdown
          text={rezolvare}
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

      <section
        data-testid="en-meditatii-cta"
        className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-5"
      >
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" /> Vrei să iei peste 9
          la Evaluarea Națională 2027?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Reia subiectul cu un profesor, exact pe itemii unde ai pierdut puncte. Cererea e gratuită:
          profesorii verificați îți trimit propuneri cu dată, oră și tarif.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link
            to="/meditatii"
            search={{ materie: l.materie }}
            className="inline-flex rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:opacity-90"
          >
            Cere meditații la {l.materie === "matematica" ? "matematică" : "română"}
          </Link>
          <Link
            to="/meditatii-evaluare-nationala"
            className="inline-flex rounded-lg border bg-background px-4 py-2 hover:border-primary/40"
          >
            Meditații Evaluare Națională
          </Link>
          <Link
            to="/profesor-ai"
            className="inline-flex rounded-lg border bg-background px-4 py-2 hover:border-primary/40"
          >
            Profesorul AI
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Alte subiecte Evaluare Națională rezolvate</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {altele.map((x) => (
            <li key={x.slug}>
              <Link
                to="/subiecte-evaluare-nationala/$slug"
                params={{ slug: x.slug }}
                className="block rounded-md border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary"
              >
                {titluLucrareEn(x)} · {x.eticheta}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/calendar-evaluare-nationala-2027"
              className="block rounded-md border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary"
            >
              Calendar Evaluare Națională 2027
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
