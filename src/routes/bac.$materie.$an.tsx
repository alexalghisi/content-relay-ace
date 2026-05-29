// Pagină SEO per materie × an BAC: /bac/$materie/$an
// 16 materii × 17 ani = 272 pagini cu meta unic, JSON-LD LearningResource + FAQ + breadcrumb.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { getBacSubject, BAC_SESSIONS, BAC_YEARS, bacPdfUrl, type BacSessionSlug } from "@/data/bac-catalog";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/bac/$materie/$an")({
  loader: ({ params }) => {
    const subject = getBacSubject(params.materie);
    const year = Number(params.an);
    if (!subject || !Number.isInteger(year) || year < 2010 || year > 2026) throw notFound();
    return { subject, year };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, year } = loaderData;
    const url = `${SITE}/bac/${subject.slug}/${year}`;
    const title = `Subiecte BAC ${subject.name} ${year} — Bareme și variante (PDF) | MeditatiiDirect.ro`;
    const desc = `Subiecte BAC ${subject.nameLower} ${year}: variante oficiale + bareme pentru toate sesiunile (iunie, august, specială, simulare). Descărcare PDF gratuită.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `subiecte bac ${subject.nameLower} ${year}, bac ${subject.nameLower} ${year}, variante bac ${subject.nameLower} ${year}, barem bac ${subject.nameLower} ${year}, bacalaureat ${subject.nameLower} ${year} pdf` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "LearningResource",
          name: `Subiecte BAC ${subject.name} ${year}`,
          description: desc, url, inLanguage: "ro-RO",
          learningResourceType: "Exam",
          educationalLevel: "Liceu — clasa a XII-a",
          about: subject.name,
          provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Subiecte BAC", item: `${SITE}/bac` },
            { "@type": "ListItem", position: 3, name: subject.name, item: `${SITE}/bac/${subject.slug}` },
            { "@type": "ListItem", position: 4, name: String(year), item: url },
          ],
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: `Unde găsesc subiectele BAC ${subject.nameLower} ${year}?`,
              acceptedAnswer: { "@type": "Answer", text: `Toate variantele oficiale BAC ${subject.nameLower} ${year} (sesiunea iunie, august, specială și simularea) sunt disponibile pe această pagină ca PDF. Sunt subiectele oficiale emise de Ministerul Educației.` } },
            { "@type": "Question", name: `Ce conține baremul de corectare ${year}?`,
              acceptedAnswer: { "@type": "Answer", text: `Baremul oficial conține punctajul pe fiecare cerință și răspunsurile model, util pentru autoevaluare.` } },
            { "@type": "Question", name: `Pot să mă pregătesc cu un profesor pe baza acestor subiecte?`,
              acceptedAnswer: { "@type": "Answer", text: `Da. Pe MeditatiiDirect.ro ai sute de profesori de ${subject.nameLower} care lucrează exact pe variantele oficiale BAC, online sau la domiciliu.` } },
          ],
        }) },
      ],
    };
  },
  component: BacPaperPage,
});

function BacPaperPage() {
  const { subject, year } = Route.useLoaderData();
  const otherYears = BAC_YEARS.filter((y) => y !== year);

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/subiecte-bac" className="hover:text-primary">Subiecte BAC</Link></li><li>›</li>
          <li><Link to="/bac/$materie" params={{ materie: subject.slug }} className="hover:text-primary">{subject.name}</Link></li><li>›</li>
          <li className="text-foreground">{year}</li>
        </ol>
      </nav>

      <Link to="/bac/$materie" params={{ materie: subject.slug }} className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Toate variantele {subject.nameLower}
      </Link>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte BAC {subject.name} — {year}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Variantele oficiale și baremele de corectare la <strong>{subject.nameLower}</strong> pentru bacalaureatul din <strong>{year}</strong> ({subject.short}). Descarcă PDF gratuit pentru toate sesiunile.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {BAC_SESSIONS.map((s) => (
          <SessionCard key={s.slug} materie={subject.slug} an={year} sesiune={s.slug} label={s.label} subjectLower={subject.nameLower} />
        ))}
      </section>

      <section className="mt-10 max-w-3xl space-y-3 text-foreground/90">
        <h2 className="text-2xl font-bold">Despre BAC {subject.nameLower} {year}</h2>
        <p className="text-muted-foreground">
          Examenul de bacalaureat la {subject.nameLower} din {year} a urmat programa oficială MEN. Pe această pagină găsești atât subiectele cât și baremele pentru sesiunea principală (iunie–iulie), sesiunea a doua (august–septembrie), sesiunea specială și simularea națională.
        </p>
        <p className="text-muted-foreground">
          Folosește aceste variante pentru exerciții de antrenament: rezolvă pe foaie, apoi compară cu baremul oficial. Pentru pregătire structurată, găsești profesori verificați de {subject.nameLower} în secțiunea „Caută profesor".
        </p>
      </section>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Pregătire BAC {subject.nameLower} cu profesor verificat</h2>
        <p className="mt-2 text-muted-foreground">Lucrează pe aceste subiecte cu un profesor titular. Online sau la domiciliu, tarife transparente, fără comision.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/meditatii" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Caută profesor {subject.nameLower}</Link>
          <Link to="/meditatii-bac" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Toate meditațiile BAC</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Subiecte BAC {subject.nameLower} alți ani</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {otherYears.map((y) => (
            <Link key={y} to="/bac/$materie/$an" params={{ materie: subject.slug, an: String(y) }}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
              BAC {subject.nameLower} {y}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function SessionCard({ materie, an, sesiune, label, subjectLower }: {
  materie: string; an: number; sesiune: BacSessionSlug; label: string; subjectLower: string;
}) {
  const subiect = bacPdfUrl(materie, an, sesiune, "subiect");
  const barem = bacPdfUrl(materie, an, sesiune, "barem");
  return (
    <div className="card-soft p-5">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <h3 className="mt-1 text-lg font-semibold">BAC {subjectLower} — {label.toLowerCase()} {an}</h3>
      <div className="mt-3 grid gap-2">
        <a href={subiect} rel="nofollow noopener" target="_blank"
           className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary">
          <FileText className="h-4 w-4 text-primary" /> Subiect PDF <Download className="h-3 w-3 ml-auto" />
        </a>
        <a href={barem} rel="nofollow noopener" target="_blank"
           className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary">
          <FileText className="h-4 w-4 text-primary" /> Barem PDF <Download className="h-3 w-3 ml-auto" />
        </a>
      </div>
    </div>
  );
}
