// Rezolvarea explicată: /rezolvari/{materie}/{an}/{sesiune}
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Clock, Gauge } from "lucide-react";
import { getBacSubject, BAC_SESSIONS, type BacSessionSlug } from "@/data/bac-catalog";
import { getRezolvare } from "@/lib/bac-content.functions";
import { RezolvareContent } from "@/components/rezolvare-content";
import { RezolvareComments } from "@/components/rezolvare-comments";
import { NewsletterSignup } from "@/components/newsletter-signup";

const SITE = "https://meditatiidirect.ro";
const SESSION_SLUGS = BAC_SESSIONS.map((s) => s.slug) as readonly string[];

export const Route = createFileRoute("/rezolvari/$materie/$an/$sesiune")({
  loader: async ({ params }) => {
    const subject = getBacSubject(params.materie);
    const year = Number(params.an);
    if (!subject || !Number.isInteger(year) || year < 2010 || year > 2026) throw notFound();
    if (!SESSION_SLUGS.includes(params.sesiune)) throw notFound();
    const sesiune = params.sesiune as BacSessionSlug;
    const session = BAC_SESSIONS.find((s) => s.slug === sesiune)!;
    let rezolvare: Awaited<ReturnType<typeof getRezolvare>>["rezolvare"] = null;
    try {
      ({ rezolvare } = await getRezolvare({ data: { materie: subject.slug, an: year, sesiune } }));
    } catch {
      rezolvare = null;
    }
    return { subject, year, sesiune, sessionLabel: session.label, rezolvare };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Rezolvare indisponibilă" }, { name: "robots", content: "noindex" }] };
    const { subject, year, sesiune, sessionLabel, rezolvare } = loaderData;
    const url = `${SITE}/rezolvari/${subject.slug}/${year}/${sesiune}`;
    const title = `Rezolvare BAC ${subject.name} ${year} — ${sessionLabel}, pas cu pas | MeditatiiDirect.ro`;
    const desc = `Rezolvarea explicată la subiectele de bacalaureat, ${subject.nameLower} ${year}, ${sessionLabel.toLowerCase()}: raționament pas cu pas, răspuns final și greșeli frecvente.`;
    const meta = [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
    ];
    if (!rezolvare) meta.push({ name: "robots", content: "noindex, follow" });
    return {
      meta,
      links: [
        { rel: "canonical", href: url },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" },
      ],
      scripts: rezolvare
        ? [
            { src: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js", defer: true },
            { src: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js", defer: true },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: `Rezolvare BAC ${subject.name} ${year} — ${sessionLabel}`,
                description: desc,
                url,
                inLanguage: "ro-RO",
                author: { "@type": "Organization", name: "MeditatiiDirect" },
                publisher: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
                  { "@type": "ListItem", position: 2, name: "Rezolvări BAC", item: `${SITE}/rezolvari` },
                  { "@type": "ListItem", position: 3, name: `${subject.name} ${year}`, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: RezolvarePage,
  errorComponent: () => (
    <main className="container-page py-16">
      <h1 className="text-2xl font-bold">Rezolvarea nu a putut fi încărcată</h1>
      <Link to="/rezolvari" className="mt-4 inline-flex text-primary hover:underline">Toate rezolvările</Link>
    </main>
  ),
  notFoundComponent: () => (
    <main className="container-page py-16">
      <h1 className="text-2xl font-bold">Rezolvare inexistentă</h1>
      <Link to="/rezolvari" className="mt-4 inline-flex text-primary hover:underline">Toate rezolvările</Link>
    </main>
  ),
});

function RezolvarePage() {
  const { subject, year, sesiune, sessionLabel, rezolvare } = Route.useLoaderData();

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/rezolvari" className="hover:text-primary">Rezolvări BAC</Link></li><li>›</li>
          <li className="text-foreground">{subject.name} {year}</li>
        </ol>
      </nav>

      <Link to="/bac/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(year), sesiune }}
        className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Vezi subiectul și baremul original (PDF)
      </Link>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Rezolvare BAC {subject.name} {year} — {sessionLabel}
        </h1>
        {rezolvare && (
          <p className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Gauge className="h-4 w-4 text-primary" /> Dificultate: {rezolvare.dificultate}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-primary" /> Timp estimat: {rezolvare.timp_estimat_minute} min</span>
            <span className="rounded-full border border-border px-2 py-0.5 text-xs">
              {rezolvare.status === "revizuit" ? "Verificată editorial" : "Ciornă — în curs de verificare"}
            </span>
          </p>
        )}
      </header>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
        <p className="text-muted-foreground">
          Rezolvare generată și verificată editorial. Dacă găsești o eroare,{" "}
          <Link to="/contact" className="text-primary hover:underline">semnalează-ne</Link> — o corectăm rapid.
        </p>
      </div>

      {rezolvare ? (
        <RezolvareContent content={rezolvare.continut} />
      ) : (
        <section className="card-soft mt-8 p-6">
          <h2 className="text-lg font-semibold">Rezolvarea acestei variante este în lucru</h2>
          <p className="mt-2 text-muted-foreground">
            Până o publicăm, ai subiectul și baremul oficial în arhivă — rezolvă pe foaie, apoi compară punct cu punct.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/bac/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(year), sesiune }}
              className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Deschide subiectul și baremul
            </Link>
            <Link to="/rezolvari" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
              Alte rezolvări
            </Link>
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Rezolvări înrudite la {subject.nameLower}</h2>
        {/* comentarii + newsletter randate mai jos */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[year - 1, year - 2, year + 1].filter((y) => y >= 2010 && y <= 2026).map((y) => (
            <Link key={y} to="/rezolvari/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(y), sesiune }}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
              {subject.nameLower} {y}
            </Link>
          ))}
          <Link to="/bac/$materie" params={{ materie: subject.slug }}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
            Toate variantele de {subject.nameLower}
          </Link>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Vrei explicația în direct?</h2>
        <p className="mt-2 text-muted-foreground">Spune ce nu ți-a ieșit, iar profesorii de {subject.nameLower} îți trimit propuneri cu dată, oră și tarif.</p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Cere ofertă pentru {subject.nameLower}
        </Link>
      </section>
    </main>
  );
}
