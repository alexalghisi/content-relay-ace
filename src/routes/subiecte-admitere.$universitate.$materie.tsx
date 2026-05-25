import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { listYearsForUniSubject } from "@/lib/admission-papers";

type SubjectMeta = { universitate: string; materie: string; universityName: string; subjectName: string; years: number[] };

export const Route = createFileRoute("/subiecte-admitere/$universitate/$materie")({
  loader: async ({ params }): Promise<SubjectMeta> => {
    const { universityName, subjectName, years } = await listYearsForUniSubject(params.universitate, params.materie);
    return {
      universitate: params.universitate, materie: params.materie,
      universityName: universityName || params.universitate,
      subjectName: subjectName || params.materie,
      years,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { universitate, materie, universityName, subjectName } = loaderData;
    const url = `https://meditatiidirect.ro/subiecte-admitere/${universitate}/${materie}`;
    const title = `Subiecte Admitere ${subjectName} ${universityName} (PDF) | MeditatiiDirect.ro`;
    const desc = `Toate variantele de subiecte și bareme la ${subjectName} pentru admiterea la ${universityName}. PDF oficial pe ani, descărcare gratuită.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `subiecte admitere ${subjectName} ${universityName}, barem ${subjectName} admitere, ${subjectName} ${universityName} pdf` },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: url }, { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
          { "@type": "ListItem", position: 2, name: "Subiecte admitere", item: "https://meditatiidirect.ro/subiecte-admitere" },
          { "@type": "ListItem", position: 3, name: universityName, item: `https://meditatiidirect.ro/subiecte-admitere/${universitate}` },
          { "@type": "ListItem", position: 4, name: subjectName, item: url },
        ],
      }) }],
    };
  },
  component: SubjectPage,
});

function SubjectPage() {
  const { universitate, materie, universityName, subjectName, years } = Route.useLoaderData();
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/subiecte-admitere" className="hover:text-primary">Subiecte admitere</Link></li><li>›</li>
          <li><Link to="/subiecte-admitere/$universitate" params={{ universitate }} className="hover:text-primary">{universityName}</Link></li><li>›</li>
          <li className="text-foreground">{subjectName}</li>
        </ol>
      </nav>
      <Link to="/subiecte-admitere/$universitate" params={{ universitate }} className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Înapoi la {universityName}
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte admitere {subjectName} — {universityName}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Alege anul de admitere. Pe fiecare pagină găsești subiectul oficial și baremul în format PDF, descărcare gratuită.
        </p>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2"><CalendarDays className="h-5 w-5" /> Ani disponibili</h2>
        {years.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Arhiva pentru {subjectName} la {universityName} se populează.</p>
        ) : (
          <ul className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {years.map((y: number) => (
              <li key={y}>
                <Link to="/subiecte-admitere/$universitate/$materie/$an" params={{ universitate, materie, an: String(y) }}
                  className="card-soft block p-4 hover:border-primary/40 transition">
                  <p className="font-semibold">{subjectName} — {y}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Subiect + barem PDF</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6">
        <h2 className="text-xl font-semibold">Ai nevoie de ajutor la {subjectName}?</h2>
        <p className="mt-2 text-muted-foreground">Profesori verificați specializați pe pregătire admitere {subjectName}.</p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Caută profesor {subjectName}</Link>
      </section>
    </main>
  );
}
