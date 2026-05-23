import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExternalLink, FileText, ArrowLeft, GraduationCap } from "lucide-react";
import { ADM_FACULTIES, ADM_YEARS } from "@/data/admitere-archive";
import { faqJsonLd } from "@/components/seo-landing";

function officialSearchUrl(facName: string, year: number, kind: "subiect" | "barem") {
  const q = encodeURIComponent(`${kind} admitere ${facName} ${year} filetype:pdf`);
  return `https://www.google.com/search?q=${q}`;
}

export const Route = createFileRoute("/resurse/admitere/$facultate/$an")({
  loader: ({ params }) => {
    const fac = ADM_FACULTIES.find((f) => f.slug === params.facultate);
    const year = Number(params.an);
    if (!fac || !ADM_YEARS.includes(year)) throw notFound();
    return { fac, year };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { fac, year } = loaderData;
    const url = `https://meditatiidirect.ro/resurse/admitere/${fac.slug}/${year}`;
    const title = `${fac.name} — Subiect admitere ${year} | MeditatiiDirect.ro`;
    const desc = `Subiect și barem oficial pentru admiterea la ${fac.name} (${year}). Acces direct la varianta oficială + meditații cu profesori verificați.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd([
          { q: `De unde descarc subiectul de admitere la ${fac.name}?`, a: "Folosește butonul „Vezi subiectul oficial” — te ducem direct la varianta publicată de facultate." },
          { q: "Pot lua meditații pentru admitere?", a: `Da, ai profesori specializați în pregătire pentru admiterea la ${fac.name}.` },
        ])),
      }],
    };
  },
  errorComponent: () => <div className="container-page py-20 text-center">A apărut o eroare. <Link to="/admitere" className="text-primary">Înapoi la admitere</Link></div>,
  notFoundComponent: () => <div className="container-page py-20 text-center">Resursă inexistentă. <Link to="/admitere" className="text-primary">Înapoi la admitere</Link></div>,
  component: ResursaAdmiterePage,
});

function ResursaAdmiterePage() {
  const { fac, year } = Route.useLoaderData();
  const subjectUrl = officialSearchUrl(fac.name, year, "subiect");
  const baremUrl = officialSearchUrl(fac.name, year, "barem");
  return (
    <article className="container-page py-10 lg:py-14">
      <Link to="/admitere" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Arhivă admitere
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{fac.name} — Admitere {year}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Probă: {fac.subject} · {fac.city}</p>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiect și barem oficial pentru sesiunea {year}. Accesează documentele direct sau alege un profesor
          verificat pentru pregătire personalizată de admitere.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href={subjectUrl} target="_blank" rel="noopener noreferrer" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Subiect — Admitere {year}</p>
            <p className="text-xs text-muted-foreground">{fac.name} · Sursa oficială</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><ExternalLink className="h-4 w-4" /> Vezi subiectul oficial</p>
          </div>
        </a>
        <a href={baremUrl} target="_blank" rel="noopener noreferrer" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Barem de corectare</p>
            <p className="text-xs text-muted-foreground">{fac.name} · Sursa oficială</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><ExternalLink className="h-4 w-4" /> Vezi baremul oficial</p>
          </div>
        </a>
      </div>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-xl font-semibold">Pregătire admitere {fac.name}</h2>
            <p className="mt-2 text-muted-foreground">
              Profesori care au pregătit zeci de admiși în ultimii ani. Plan personalizat, simulări săptămânale,
              feedback la fiecare ședință.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/meditatii" className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                Caută profesor pentru admitere
              </Link>
              <Link to="/admitere" className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
                Toate facultățile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Alți ani — {fac.name}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {ADM_YEARS.slice().reverse().map((y) => (
            <Link
              key={y}
              to="/resurse/admitere/$facultate/$an"
              params={{ facultate: fac.slug, an: String(y) }}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${y === year ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"}`}
            >
              {y}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
