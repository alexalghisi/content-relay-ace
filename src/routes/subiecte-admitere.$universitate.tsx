import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, ArrowLeft } from "lucide-react";
import { listSubjectsForUni } from "@/lib/admission-papers";

export const Route = createFileRoute("/subiecte-admitere/$universitate")({
  loader: async ({ params }) => {
    const { universityName, subjects } = await listSubjectsForUni(params.universitate);
    return { universitate: params.universitate, universityName: universityName || params.universitate, subjects };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { universitate, universityName } = loaderData;
    const url = `https://meditatiidirect.ro/subiecte-admitere/${universitate}`;
    const title = `Subiecte Admitere ${universityName} — PDF oficial | MeditatiiDirect.ro`;
    const desc = `Toate materiile cu subiecte și bareme de admitere la ${universityName}. PDF gratuit, descărcare instant + profesori verificați pentru pregătire.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `subiecte admitere ${universityName}, barem admitere ${universityName}, pregatire admitere ${universityName}` },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: url }, { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title }, { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
          { "@type": "ListItem", position: 2, name: "Subiecte admitere", item: "https://meditatiidirect.ro/subiecte-admitere" },
          { "@type": "ListItem", position: 3, name: universityName, item: url },
        ],
      }) }],
    };
  },
  component: UniversityPage,
});

function UniversityPage() {
  const { universitate, universityName, subjects } = Route.useLoaderData();
  // SSR fallback: also try client-side fetch in case route was prerendered before data existed.
  const [list, setList] = useState<typeof subjects>(subjects);
  useEffect(() => { if (subjects.length === 0) listSubjectsForUni(universitate).then((r) => setList(r.subjects)); }, [universitate, subjects.length]);
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
          <li>›</li>
          <li><Link to="/subiecte-admitere" className="hover:text-primary">Subiecte admitere</Link></li>
          <li>›</li>
          <li className="text-foreground">{universityName}</li>
        </ol>
      </nav>
      <Link to="/subiecte-admitere" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Toate universitățile
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte admitere {universityName}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Alege materia pentru a vedea anii disponibili cu subiecte oficiale și bareme la admiterea {universityName}.
        </p>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2"><BookOpen className="h-5 w-5" /> Materii</h2>
        {list.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Arhiva pentru această universitate se populează. Vezi <Link to="/admitere" className="text-primary hover:underline">ghidul de admitere</Link> sau alte universități.</p>
        ) : (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <li key={s.slug}>
                <Link to="/subiecte-admitere/$universitate/$materie" params={{ universitate, materie: s.slug }}
                  className="card-soft block p-4 hover:border-primary/40 transition">
                  <p className="font-semibold">{s.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.count} {s.count === 1 ? "document" : "documente"}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6">
        <h2 className="text-xl font-semibold">Ai nevoie de pregătire pentru {universityName}?</h2>
        <p className="mt-2 text-muted-foreground">Profesori verificați specializați pe admiterea la {universityName}. Plan personalizat, simulări săptămânale.</p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Caută profesor</Link>
      </section>
    </main>
  );
}
