import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExternalLink, FileText, ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import { ADM_FACULTIES, ADM_YEARS } from "@/data/admitere-archive";
import { faqJsonLd } from "@/components/seo-landing";

function officialSearchUrl(facName: string, year: number, kind: "subiect" | "barem") {
  const q = encodeURIComponent(`${kind} admitere ${facName} ${year} filetype:pdf`);
  return `https://www.google.com/search?q=${q}`;
}

function ogImageFor(slug: string) {
  return `https://meditatiidirect.ro/og/admitere/${slug}.jpg`;
}

function buildAdmFaqs(fac: { name: string; subject: string; city: string }, year: number) {
  return [
    { q: `De unde descarc subiectul de admitere la ${fac.name} din ${year}?`, a: `Folosește butonul „Vezi subiectul oficial" de pe această pagină — te ducem direct la varianta publicată oficial pentru admiterea ${year} la ${fac.name}.` },
    { q: `Ce probe are admiterea la ${fac.name}?`, a: `Probele pentru admiterea la ${fac.name} sunt: ${fac.subject}. Subiectele se regăsesc în arhiva oficială a facultății.` },
    { q: `Pot lua meditații pentru admiterea la ${fac.name}?`, a: `Da. Pe MeditatiiDirect.ro găsești profesori verificați specializați în pregătire admitere ${fac.name}, cu experiență pe probele ${fac.subject}.` },
    { q: `Cât costă o ședință de pregătire admitere?`, a: `Tarifele pornesc de la 30 RON/oră și ajung la 200 RON/oră, în funcție de profesor, experiență și format (online sau la domiciliu).` },
    { q: `Cum mă pregătesc eficient pentru admiterea ${year}?`, a: `Rezolvă subiecte din anii anteriori (vezi cross-linking-ul cu ceilalți ani de mai jos), verifică-te cu baremele oficiale și lucrează săptămânal cu un profesor specializat pe admiterea la ${fac.name}.` },
  ];
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
    const title = `${fac.name} — Subiect admitere ${year} + barem PDF oficial | MeditatiiDirect.ro`;
    const desc = `Subiect și barem oficial pentru admiterea la ${fac.name} (${year}). Probă: ${fac.subject}. Plus profesori verificați pentru pregătire admitere ${fac.city}.`;
    const OG = ogImageFor(fac.slug);
    const faqs = buildAdmFaqs(fac, year);
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `admitere ${fac.name} ${year}, subiect admitere ${fac.name} ${year}, barem admitere ${fac.city} ${year}, pregatire admitere ${fac.name}, meditatii admitere ${fac.city}, ${fac.subject} admitere ${year}` },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: url }, { property: "og:type", content: "article" },
        { property: "og:image", content: OG },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "640" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: OG },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "LearningResource",
          name: `${fac.name} — Subiect admitere ${year}`,
          description: desc, url,
          inLanguage: "ro-RO",
          learningResourceType: "Exam",
          educationalLevel: "Universitar — Admitere",
          about: fac.subject,
          datePublished: `${year}-07-15`,
          isAccessibleForFree: true,
          image: OG,
          provider: { "@type": "Organization", name: "MeditatiiDirect.ro", url: "https://meditatiidirect.ro" },
          educationalAlignment: { "@type": "AlignmentObject", alignmentType: "educationalSubject", targetName: fac.subject },
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
            { "@type": "ListItem", position: 2, name: "Admitere facultate", item: "https://meditatiidirect.ro/admitere" },
            { "@type": "ListItem", position: 3, name: fac.name, item: `https://meditatiidirect.ro/resurse/admitere/${fac.slug}/${ADM_YEARS[ADM_YEARS.length-1]}` },
            { "@type": "ListItem", position: 4, name: `Admitere ${year}`, item: url },
          ],
        }) },
      ],
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
  const otherFaculties = ADM_FACULTIES.filter((f) => f.slug !== fac.slug);
  const latestYear = ADM_YEARS[ADM_YEARS.length - 1];

  return (
    <article className="container-page py-10 lg:py-14">
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
          <li>›</li>
          <li><Link to="/admitere" className="hover:text-primary">Admitere facultate</Link></li>
          <li>›</li>
          <li className="text-foreground">{fac.name} — {year}</li>
        </ol>
      </nav>

      <Link to="/admitere" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Arhivă admitere
      </Link>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{fac.name} — Subiect admitere {year} (PDF + barem)</h1>
        <p className="mt-2 text-sm text-muted-foreground">Probă: {fac.subject} · {fac.city}</p>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiect și barem oficial pentru sesiunea de admitere <strong>{year}</strong> la <strong>{fac.name}</strong>.
          Accesează documentele direct sau alege un profesor verificat pentru pregătire personalizată.
        </p>
        <ul className="mt-4 grid gap-1.5 text-sm">
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Subiect și barem din arhiva oficială a facultății</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Probe: {fac.subject}</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Profesori verificați pentru pregătire admitere {fac.city}</li>
        </ul>
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
              Profesori care au pregătit zeci de admiși în ultimii ani la {fac.name}. Plan personalizat,
              simulări săptămânale pe probele {fac.subject}, feedback la fiecare ședință.
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

      {/* Cross-linking: alți ani pentru aceeași facultate */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Subiecte admitere {fac.name} — alți ani</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Arhivă completă cu subiectele și baremele de admitere la {fac.name}:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {ADM_YEARS.slice().reverse().map((y) => (
            <Link
              key={y}
              to="/resurse/admitere/$facultate/$an"
              params={{ facultate: fac.slug, an: String(y) }}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${y === year ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"}`}
            >
              {fac.city.split("-")[0]} {y}
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-linking: alte facultăți, același an */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Admitere {year} la alte facultăți</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Explorează subiectele și baremele de admitere {year} pentru alte facultăți din România:
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {otherFaculties.map((f) => (
            <Link
              key={f.slug}
              to="/resurse/admitere/$facultate/$an"
              params={{ facultate: f.slug, an: String(year) }}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary transition"
            >
              {f.name} — {year}
            </Link>
          ))}
        </div>
        {year !== latestYear && (
          <p className="mt-4 text-sm text-muted-foreground">
            Vezi și <Link to="/resurse/admitere/$facultate/$an" params={{ facultate: fac.slug, an: String(latestYear) }} className="text-primary hover:underline">cea mai recentă sesiune ({latestYear}) pentru {fac.name}</Link>.
          </p>
        )}
      </section>

      {/* FAQ vizibil — IDENTIC cu FAQPage JSON-LD (acelaşi array, aceeaşi ordine) */}
      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">Întrebări frecvente — admitere {fac.name} {year}</h2>
        <div className="mt-4 space-y-4">
          {buildAdmFaqs(fac, year).map((f) => (
            <details key={f.q} className="rounded-lg border border-border bg-card p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
