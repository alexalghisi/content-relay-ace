import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { listUnisForSubject } from "@/lib/admission-papers";

type LoaderData = { materie: string; subjectName: string; universities: { slug: string; name: string; years: number[] }[] };

export const Route = createFileRoute("/subiecte-admitere/materie/$materie")({
  loader: async ({ params }): Promise<LoaderData> => {
    const { subjectName, universities } = await listUnisForSubject(params.materie);
    return { materie: params.materie, subjectName: subjectName || params.materie, universities };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { materie, subjectName, universities } = loaderData;
    const url = `https://meditatiidirect.ro/subiecte-admitere/materie/${materie}`;
    const title = `Subiecte Admitere ${subjectName} — Toate Universitățile (PDF) | MeditatiiDirect.ro`;
    const desc = `Compară subiecte de admitere la ${subjectName} de la ${universities.length} universități din România: UMF, UPB, ASE, Drept. Arhivă PDF gratuită, descărcare directă.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `subiecte admitere ${subjectName}, ${subjectName} admitere facultate, ${subjectName} admitere pdf, variante ${subjectName} admitere, barem ${subjectName} admitere` },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: url }, { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title }, { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "CollectionPage",
          name: title, description: desc, url, inLanguage: "ro-RO",
          about: subjectName,
          hasPart: universities.map((u) => ({
            "@type": "LearningResource",
            name: `${subjectName} — ${u.name}`,
            url: `https://meditatiidirect.ro/subiecte-admitere/${u.slug}/${materie}`,
            learningResourceType: "Exam",
            educationalLevel: "Universitar — Admitere",
          })),
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
            { "@type": "ListItem", position: 2, name: "Subiecte admitere", item: "https://meditatiidirect.ro/subiecte-admitere" },
            { "@type": "ListItem", position: 3, name: subjectName, item: url },
          ],
        }) },
      ],
    };
  },
  component: SubjectAggregatorPage,
});

function SubjectAggregatorPage() {
  const { materie, subjectName, universities } = Route.useLoaderData();
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/subiecte-admitere" className="hover:text-primary">Subiecte admitere</Link></li><li>›</li>
          <li className="text-foreground">{subjectName}</li>
        </ol>
      </nav>
      <Link to="/subiecte-admitere" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Înapoi la arhivă
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte admitere {subjectName} — toate universitățile</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Compară subiecte și bareme la <strong>{subjectName}</strong> de la {universities.length} universități din România. PDF oficial, descărcare gratuită, fără cont.
        </p>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Universități cu subiecte la {subjectName}</h2>
        {universities.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Arhiva pentru {subjectName} se populează.</p>
        ) : (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u: { slug: string; name: string; years: number[] }) => (
              <li key={u.slug} className="card-soft p-4">
                <Link to="/subiecte-admitere/$universitate/$materie" params={{ universitate: u.slug, materie }}
                  className="font-semibold hover:text-primary">{u.name}</Link>
                <p className="mt-1 text-xs text-muted-foreground">{u.years.length} {u.years.length === 1 ? "an" : "ani"} disponibili</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {u.years.slice(0, 6).map((y: number) => (
                    <Link key={y} to="/subiecte-admitere/$universitate/$materie/$an" params={{ universitate: u.slug, materie, an: String(y) }}
                      className="rounded-md border border-border bg-card px-2 py-0.5 text-xs hover:border-primary/40 hover:text-primary">{y}</Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Pregătire personalizată la {subjectName}</h2>
        <p className="mt-2 text-muted-foreground">Profesori verificați cu experiență la admiterea pe toate universitățile listate. Plan adaptat universității unde dai concurs.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/meditatii" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Caută profesor {subjectName}</Link>
          <Link to="/admitere" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Ghid admitere</Link>
        </div>
      </section>
    </main>
  );
}
