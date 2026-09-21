// Pagina unei variante BAC: /bac/{materie}/{an}/{sesiune}
// Subiect + barem găzduite la noi, afișate în pagină (lazy), plus CTA rezolvare.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, FileText, Lightbulb } from "lucide-react";
import { getBacSubject, BAC_SESSIONS, BAC_YEARS, bacPdfUrl, type BacSessionSlug } from "@/data/bac-catalog";
import { getVariantaSesiune } from "@/lib/bac-content.functions";
import { LazyPdfPreview } from "@/components/lazy-pdf-preview";

const SITE = "https://meditatiidirect.ro";
const SESSION_SLUGS = BAC_SESSIONS.map((s) => s.slug) as readonly string[];

export const Route = createFileRoute("/bac/$materie/$an/$sesiune")({
  loader: async ({ params }) => {
    const subject = getBacSubject(params.materie);
    const year = Number(params.an);
    if (!subject || !Number.isInteger(year) || year < 2010 || year > 2026) throw notFound();
    if (!SESSION_SLUGS.includes(params.sesiune)) throw notFound();
    const sesiune = params.sesiune as BacSessionSlug;
    const session = BAC_SESSIONS.find((s) => s.slug === sesiune)!;
    let db: Awaited<ReturnType<typeof getVariantaSesiune>> = { varianta: null, rezolvare: null };
    try {
      db = await getVariantaSesiune({ data: { materie: subject.slug, an: year, sesiune } });
    } catch {
      /* fără date în DB — folosim convenția de storage */
    }
    return { subject, year, sesiune, sessionLabel: session.label, db };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Variantă indisponibilă" }, { name: "robots", content: "noindex" }] };
    const { subject, year, sesiune, sessionLabel } = loaderData;
    const url = `${SITE}/bac/${subject.slug}/${year}/${sesiune}`;
    const title = `Subiecte BAC ${subject.name} ${year} — ${sessionLabel} (subiect + barem PDF) | MeditatiiDirect.ro`;
    const desc = `Varianta oficială de bacalaureat la ${subject.nameLower}, ${year}, ${sessionLabel.toLowerCase()}: subiectul și baremul de corectare în PDF, direct în pagină. Gratuit, fără cont.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `subiecte bac ${subject.nameLower} ${year} ${sesiune}, barem bac ${subject.nameLower} ${year}, variante bac ${subject.nameLower}` },
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
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: `Subiecte BAC ${subject.name} ${year} — ${sessionLabel}`,
            description: desc,
            url,
            inLanguage: "ro-RO",
            learningResourceType: "Exam",
            educationalLevel: "Liceu — clasa a XII-a",
            about: subject.name,
            isAccessibleForFree: true,
            provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Subiecte BAC", item: `${SITE}/bac` },
              { "@type": "ListItem", position: 3, name: subject.name, item: `${SITE}/bac/${subject.slug}` },
              { "@type": "ListItem", position: 4, name: String(year), item: `${SITE}/bac/${subject.slug}/${year}` },
              { "@type": "ListItem", position: 5, name: sessionLabel, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: VariantaPage,
  errorComponent: () => (
    <main className="container-page py-16">
      <h1 className="text-2xl font-bold">Varianta nu a putut fi încărcată</h1>
      <p className="mt-2 text-muted-foreground">Încearcă din nou sau alege altă sesiune.</p>
      <Link to="/bac" className="mt-4 inline-flex text-primary hover:underline">Înapoi la arhiva BAC</Link>
    </main>
  ),
  notFoundComponent: () => (
    <main className="container-page py-16">
      <h1 className="text-2xl font-bold">Variantă inexistentă</h1>
      <Link to="/bac" className="mt-4 inline-flex text-primary hover:underline">Vezi toate materiile</Link>
    </main>
  ),
});

function VariantaPage() {
  const { subject, year, sesiune, sessionLabel, db } = Route.useLoaderData();
  const base = `https://gmgcufdfwwvfnnzfazae.supabase.co/storage/v1/object/public/bac-pdfs/`;
  const subiect = db.varianta?.subiect_path ? base + db.varianta.subiect_path : bacPdfUrl(subject.slug, year, sesiune, "subiect");
  const barem = db.varianta?.barem_path ? base + db.varianta.barem_path : bacPdfUrl(subject.slug, year, sesiune, "barem");
  const prevYear = year > BAC_YEARS[0] ? year - 1 : null;
  const nextYear = year < BAC_YEARS[BAC_YEARS.length - 1] ? year + 1 : null;

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/bac" className="hover:text-primary">Subiecte BAC</Link></li><li>›</li>
          <li><Link to="/bac/$materie" params={{ materie: subject.slug }} className="hover:text-primary">{subject.name}</Link></li><li>›</li>
          <li><Link to="/bac/$materie/$an" params={{ materie: subject.slug, an: String(year) }} className="hover:text-primary">{year}</Link></li><li>›</li>
          <li className="text-foreground">{sessionLabel}</li>
        </ol>
      </nav>

      <Link to="/bac/$materie/$an" params={{ materie: subject.slug, an: String(year) }} className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Toate sesiunile din {year}
      </Link>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Subiecte BAC {subject.name} {year} — {sessionLabel}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiectul oficial și baremul de corectare la <strong>{subject.nameLower}</strong>, sesiunea {sessionLabel.toLowerCase()} {year}. Le poți citi direct aici sau le descarci în PDF — sunt găzduite pe MeditatiiDirect.ro.
        </p>
      </header>

      <section className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">Subiectul</h2>
          <a href={subiect} target="_blank" rel="noopener" download
             className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Download className="h-4 w-4" /> Descarcă subiectul (PDF)
          </a>
        </div>
        <div className="mt-3">
          <LazyPdfPreview src={subiect} title={`Subiect BAC ${subject.nameLower} ${year} ${sessionLabel}`} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Dacă previzualizarea nu pornește pe telefon, <a href={subiect} target="_blank" rel="noopener" className="text-primary hover:underline">deschide PDF-ul într-o filă nouă</a>.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">Baremul de corectare</h2>
          <a href={barem} target="_blank" rel="noopener" download
             className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
            <FileText className="h-4 w-4 text-primary" /> Descarcă baremul (PDF)
          </a>
        </div>
        <div className="mt-3">
          <LazyPdfPreview src={barem} title={`Barem BAC ${subject.nameLower} ${year} ${sessionLabel}`} />
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Lightbulb className="h-5 w-5 text-primary" /> Rezolvarea explicată pas cu pas
        </h2>
        <p className="mt-2 text-muted-foreground">
          {db.rezolvare
            ? `Rezolvare completă la ${subject.nameLower} ${year} (${sessionLabel.toLowerCase()}): raționament, răspuns final și greșelile frecvente.`
            : `Rezolvarea explicată pentru această variantă este în lucru. Între timp, compară-ți răspunsurile cu baremul oficial de mai sus.`}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {db.rezolvare ? (
            <Link to="/rezolvari/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(year), sesiune }}
              className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Vezi rezolvarea explicată →
            </Link>
          ) : (
            <Link to="/rezolvari" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
              Vezi rezolvările disponibile
            </Link>
          )}
          <Link to="/simulare-bac/$materie" params={{ materie: subject.slug }}
            className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
            Dă o simulare cronometrată
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Continuă cu</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {BAC_SESSIONS.filter((s) => s.slug !== sesiune).map((s) => (
            <Link key={s.slug} to="/bac/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(year), sesiune: s.slug }}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
              {s.label} {year}
            </Link>
          ))}
          {prevYear && (
            <Link to="/bac/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(prevYear), sesiune }}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
              ← {subject.nameLower} {prevYear}
            </Link>
          )}
          {nextYear && (
            <Link to="/bac/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(nextYear), sesiune }}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
              {subject.nameLower} {nextYear} →
            </Link>
          )}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">Vrei să lucrezi varianta cu un profesor?</h2>
        <p className="mt-2 text-muted-foreground">Descrii o dată ce ai nevoie, iar profesorii de {subject.nameLower} îți trimit propuneri cu dată, oră și tarif.</p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Cere ofertă pentru {subject.nameLower}
        </Link>
      </section>
    </main>
  );
}
