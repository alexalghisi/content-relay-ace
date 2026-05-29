// Pagină dinamică pentru intent comercial: /preturi-meditatii/$materie
// Țintește "pret meditatii matematica", "cat costa meditatii engleza" etc.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getSubjectSeo, SUBJECTS_SEO } from "@/data/subjects-seo";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/preturi-meditatii/$materie")({
  loader: ({ params }) => {
    const subject = getSubjectSeo(params.materie);
    if (!subject) throw notFound();
    return { subject };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject } = loaderData;
    const url = `${SITE}/preturi-meditatii/${subject.slug}`;
    const title = `Preț Meditații ${subject.name} 2026 — ${subject.pretMin}-${subject.pretMax} lei/oră | MeditatiiDirect.ro`;
    const desc = `Cât costă meditațiile la ${subject.nameLower} în 2026? Tarife actuale ${subject.pretMin}–${subject.pretMax} lei/oră, mediu ${subject.pretMediu} lei. Comparație online vs la domiciliu.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `pret meditatii ${subject.nameLower}, cat costa meditatii ${subject.nameLower}, tarif meditatii ${subject.nameLower}, meditatii ${subject.nameLower} pret 2026` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          name: `Meditații ${subject.name}`,
          description: desc, url,
          offers: { "@type": "AggregateOffer", priceCurrency: "RON",
            lowPrice: subject.pretMin, highPrice: subject.pretMax, offerCount: 100 },
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: `Cât costă meditațiile la ${subject.nameLower}?`,
              acceptedAnswer: { "@type": "Answer", text: `Tarifele variază între ${subject.pretMin} și ${subject.pretMax} lei/oră. Media națională este ${subject.pretMediu} lei/oră.` } },
            { "@type": "Question", name: `De ce diferă prețurile?`,
              acceptedAnswer: { "@type": "Answer", text: `Prețul depinde de experiența profesorului (student vs titular), nivelul cerut (gimnaziu, BAC, admitere), formatul (online vs la domiciliu) și orașul.` } },
          ],
        }) },
      ],
    };
  },
  component: PricePage,
});

function PricePage() {
  const { subject } = Route.useLoaderData();
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/preturi-meditatii" className="hover:text-primary">Prețuri meditații</Link></li><li>›</li>
          <li className="text-foreground">{subject.name}</li>
        </ol>
      </nav>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Preț meditații {subject.name} în 2026</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Tarifele actuale pentru meditații la <strong>{subject.nameLower}</strong> sunt între <strong>{subject.pretMin} și {subject.pretMax} lei/oră</strong>, cu o medie de <strong>{subject.pretMediu} lei/oră</strong>. Mai jos găsești detalii pe niveluri, format și oraș.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="card-soft p-5">
          <p className="text-sm text-muted-foreground">Minim</p>
          <p className="mt-1 text-3xl font-bold text-primary">{subject.pretMin} lei</p>
          <p className="text-xs text-muted-foreground">/oră — studenți, debutanți</p>
        </div>
        <div className="card-soft p-5 border-primary/40">
          <p className="text-sm text-muted-foreground">Mediu</p>
          <p className="mt-1 text-3xl font-bold text-primary">{subject.pretMediu} lei</p>
          <p className="text-xs text-muted-foreground">/oră — profesori cu experiență</p>
        </div>
        <div className="card-soft p-5">
          <p className="text-sm text-muted-foreground">Maxim</p>
          <p className="mt-1 text-3xl font-bold text-primary">{subject.pretMax} lei</p>
          <p className="text-xs text-muted-foreground">/oră — titulari, pregătire olimpiadă</p>
        </div>
      </section>

      <section className="mt-10 max-w-3xl space-y-4 text-foreground/90">
        <h2 className="text-2xl font-bold">De ce diferă prețurile la meditații {subject.nameLower}?</h2>
        <p>Tariful depinde de mai mulți factori:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Experiența profesorului</strong> — un student de la profil poate cere {subject.pretMin}–{subject.pretMin + 20} lei/oră, un titular cu rezultate la BAC {subject.pretMediu + 20}–{subject.pretMax} lei/oră.</li>
          <li><strong>Nivelul</strong> — gimnaziu (~{subject.pretMin + 10} lei), BAC (~{subject.pretMediu} lei), admitere medicină/Politehnică ({subject.pretMediu + 30}–{subject.pretMax} lei).</li>
          <li><strong>Format</strong> — online e cu ~10–20% mai ieftin decât la domiciliu (fără cost de transport).</li>
          <li><strong>Orașul</strong> — București și Cluj sunt cu 10–25% peste media națională.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Prețuri și pe alte materii</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SUBJECTS_SEO.filter((s) => s.slug !== subject.slug).map((s) => (
            <Link key={s.slug} to="/preturi-meditatii/$materie" params={{ materie: s.slug }}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
              {s.name} — {s.pretMediu} lei/oră
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Găsește un profesor de {subject.nameLower} în bugetul tău</h2>
        <p className="mt-2 text-muted-foreground">Filtrează după tarif, oraș și nivel. Contact direct, fără comision.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/meditatii" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Vezi profesori {subject.nameLower}</Link>
          <Link to="/caut-profesor" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Postează cerere</Link>
        </div>
      </section>
    </main>
  );
}
