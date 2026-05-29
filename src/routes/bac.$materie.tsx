// Hub per materie: /bac/$materie — listă cu toți anii 2010–2026.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { getBacSubject, BAC_YEARS } from "@/data/bac-catalog";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/bac/$materie")({
  loader: ({ params }) => {
    const subject = getBacSubject(params.materie);
    if (!subject) throw notFound();
    return { subject };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject } = loaderData;
    const url = `${SITE}/bac/${subject.slug}`;
    const title = `Subiecte BAC ${subject.name} — Toți anii 2010–2026 (PDF) | MeditatiiDirect.ro`;
    const desc = `Arhivă completă subiecte și bareme BAC ${subject.nameLower}: 2010, 2011, ..., 2026. Toate sesiunile. Descărcare PDF gratuită, fără cont.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `subiecte bac ${subject.nameLower}, variante bac ${subject.nameLower}, barem bac ${subject.nameLower}, bacalaureat ${subject.nameLower}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "CollectionPage",
          name: title, description: desc, url, inLanguage: "ro-RO",
          about: subject.name,
          hasPart: BAC_YEARS.map((y) => ({
            "@type": "LearningResource",
            name: `Subiecte BAC ${subject.name} ${y}`,
            url: `${SITE}/bac/${subject.slug}/${y}`,
            learningResourceType: "Exam",
          })),
        }),
      }],
    };
  },
  component: BacSubjectHub,
});

function BacSubjectHub() {
  const { subject } = Route.useLoaderData();
  return (
    <main className="container-page py-10 lg:py-14">
      <Link to="/subiecte-bac" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Toate materiile BAC
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte BAC {subject.name} — arhivă completă</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {BAC_YEARS.length} ani de subiecte oficiale și bareme la <strong>{subject.nameLower}</strong> ({subject.short}), din {BAC_YEARS[0]} până în {BAC_YEARS[BAC_YEARS.length - 1]}. Toate sesiunile (iunie, august, specială, simulare).
        </p>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Selectează anul</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {[...BAC_YEARS].reverse().map((y) => (
            <li key={y}>
              <Link to="/bac/$materie/$an" params={{ materie: subject.slug, an: String(y) }}
                className="card-soft block p-4 hover:border-primary/40">
                <p className="font-semibold">BAC {subject.nameLower} {y}</p>
                <p className="mt-1 text-xs text-muted-foreground">Subiect + barem · toate sesiunile</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Pregătire BAC {subject.nameLower} cu profesor</h2>
        <p className="mt-2 text-muted-foreground">Lucrează pe variantele oficiale cu un profesor verificat. Online sau la domiciliu.</p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Caută profesor {subject.nameLower}
        </Link>
      </section>
    </main>
  );
}
