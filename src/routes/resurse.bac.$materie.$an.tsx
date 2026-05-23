import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, FileText, ArrowLeft, GraduationCap, CheckCircle2, CalendarDays } from "lucide-react";
import { BAC_SUBJECTS, BAC_YEARS, BAC_AVAILABLE_YEARS } from "@/data/bac-archive";
import { bacPdfUrl } from "@/lib/pdf-urls";
import { faqJsonLd } from "@/components/seo-landing";

const OG_IMAGE = "https://meditatiidirect.ro/og-bac.jpg";

export const Route = createFileRoute("/resurse/bac/$materie/$an")({
  loader: ({ params }) => {
    const subject = BAC_SUBJECTS.find((s) => s.slug === params.materie);
    if (!subject) throw notFound();
    const year = Number(params.an);
    if (!BAC_YEARS.includes(year)) throw notFound();
    const yearAvailable = BAC_AVAILABLE_YEARS.includes(year);
    return { subject, year, yearAvailable };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, year, yearAvailable } = loaderData;
    const url = `https://meditatiidirect.ro/resurse/bac/${subject.slug}/${year}`;
    const title = yearAvailable
      ? `${subject.name} — Subiect BAC ${year} + Barem PDF oficial | MeditatiiDirect.ro`
      : `${subject.name} BAC ${year} — Pregătire cu subiecte din ani anteriori | MeditatiiDirect.ro`;
    const desc = yearAvailable
      ? `Subiect oficial și barem ${subject.name}, Bacalaureat ${year}. Vizualizare + descărcare PDF gratuit. Plus profesori verificați pentru pregătire BAC.`
      : `Pregătire ${subject.name} pentru BAC ${year}: rezolvă subiectele oficiale din 2021–2025 și lucrează cu profesori verificați pe MeditatiiDirect.ro.`;
    const faqs = [
      { q: `De unde descarc subiectul ${subject.name} BAC ${year}?`, a: `Subiectul oficial ${subject.name} de la sesiunea Bacalaureat ${year} se descarcă direct de pe această pagină, butonul „Descarcă subiectul". PDF gratuit, găzduit pe MeditatiiDirect.ro.` },
      { q: `Există baremul de corectare pentru ${subject.name} ${year}?`, a: `Da. Pe lângă subiect, găsești și baremul oficial publicat de Ministerul Educației pentru ${subject.name} BAC ${year}, în format PDF.` },
      { q: `Cum mă pregătesc eficient pentru ${subject.name} la BAC?`, a: `Rezolvă subiecte din anii anteriori (2021–2025), verifică-te cu baremul oficial și lucrează cu un profesor verificat. Pe MeditatiiDirect.ro găsești profesori ${subject.name} cu rating de la elevii lor.` },
      { q: `Cât costă meditațiile pentru BAC la ${subject.name}?`, a: `Tarifele variază între 30 și 200 RON/oră în funcție de experiența profesorului și formatul (online sau la domiciliu). Mulți profesori oferă prima oră gratuit sau reducere.` },
      { q: `Sunt subiectele de pe această pagină cele oficiale?`, a: `Da. Toate subiectele și baremele sunt cele publicate de Ministerul Educației și de Centrul Național de Evaluare și Examinare (CNEE / edu.ro).` },
    ];
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `subiecte bac ${year}, ${subject.name} bac ${year}, barem ${subject.name} ${year}, bacalaureat ${year} pdf, variante bac ${subject.name}, meditatii ${subject.name} bac, simulare bac ${year}` },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: url }, { property: "og:type", content: "article" },
        { property: "og:image", content: OG_IMAGE },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "640" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "LearningResource",
          name: `${subject.name} — Subiect BAC ${year}`,
          description: desc, url,
          inLanguage: "ro-RO",
          learningResourceType: "Exam",
          educationalLevel: "Bacalaureat",
          about: subject.name,
          datePublished: `${year}-07-01`,
          isAccessibleForFree: true,
          image: OG_IMAGE,
          provider: { "@type": "Organization", name: "MeditatiiDirect.ro", url: "https://meditatiidirect.ro" },
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
            { "@type": "ListItem", position: 2, name: "Variante Bacalaureat", item: "https://meditatiidirect.ro/variante-bacalaureat" },
            { "@type": "ListItem", position: 3, name: subject.name, item: `https://meditatiidirect.ro/resurse/bac/${subject.slug}/${BAC_AVAILABLE_YEARS[BAC_AVAILABLE_YEARS.length-1]}` },
            { "@type": "ListItem", position: 4, name: `BAC ${year}`, item: url },
          ],
        }) },
      ],
    };
  },
  errorComponent: () => <div className="container-page py-20 text-center">A apărut o eroare. <Link to="/variante-bacalaureat" className="text-primary">Înapoi la arhivă</Link></div>,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Materia nu este în arhivă</h1>
      <p className="mt-2 text-muted-foreground">Vezi toate subiectele și baremele BAC.</p>
      <Link to="/variante-bacalaureat" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">Arhivă BAC completă</Link>
    </div>
  ),
  component: ResursaBacPage,
});

function ResursaBacPage() {
  const { subject, year, yearAvailable } = Route.useLoaderData();
  const otherSubjects = BAC_SUBJECTS.filter((s) => s.slug !== subject.slug);
  const latestYear = BAC_AVAILABLE_YEARS[BAC_AVAILABLE_YEARS.length - 1];

  if (!yearAvailable) {
    return (
      <article className="container-page py-10 lg:py-14">
        <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
            <li>›</li>
            <li><Link to="/variante-bacalaureat" className="hover:text-primary">Variante Bacalaureat</Link></li>
            <li>›</li>
            <li className="text-foreground">{subject.name} BAC {year}</li>
          </ol>
        </nav>
        <header className="mt-4 max-w-3xl">
          <h1 className="text-3xl font-bold sm:text-4xl">{subject.name} — Pregătire BAC {year}</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Subiectul oficial <strong>{subject.name}</strong> pentru BAC {year} nu este încă publicat de Ministerul Educației.
            Pregătește-te acum cu <strong>subiectele oficiale din 2021–{latestYear}</strong> și cu profesori verificați.
          </p>
        </header>
        <section className="mt-8 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><CalendarDays className="h-6 w-6" /></span>
            <div>
              <h2 className="text-xl font-semibold">Începe pregătirea pentru BAC {year} acum</h2>
              <p className="mt-2 text-muted-foreground">Cel mai bun moment să începi este azi. Lucrează cu un profesor de {subject.name} și rezolvă subiecte din anii anteriori.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/meditatii" className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Caută profesor {subject.name}</Link>
                <Link to="/meditatii-bac" className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Pregătire BAC completă</Link>
                <Link to="/simulari-bacalaureat-2026" className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Simulări BAC 2026</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Subiecte oficiale {subject.name} — anii disponibili</h2>
          <p className="mt-2 text-sm text-muted-foreground">PDF gratuit, găzduit pe MeditatiiDirect.ro.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {BAC_AVAILABLE_YEARS.slice().reverse().map((y) => (
              <Link key={y} to="/resurse/bac/$materie/$an" params={{ materie: subject.slug, an: String(y) }}
                className="card-soft p-4 hover:border-primary/40 transition">
                <p className="font-semibold">{subject.name} — BAC {y}</p>
                <p className="mt-1 text-xs text-muted-foreground">Subiect + barem PDF oficial</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Alte materii BAC</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {otherSubjects.slice(0, 9).map((s) => (
              <Link key={s.slug} to="/resurse/bac/$materie/$an" params={{ materie: s.slug, an: String(latestYear) }}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary transition">
                {s.name} — BAC {latestYear}
              </Link>
            ))}
          </div>
        </section>
      </article>
    );
  }

  const subjectPdf = bacPdfUrl(subject.slug, year, "subiect");
  const baremPdf = bacPdfUrl(subject.slug, year, "barem");

  return (
    <article className="container-page py-10 lg:py-14">
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
          <li>›</li>
          <li><Link to="/variante-bacalaureat" className="hover:text-primary">Variante Bacalaureat</Link></li>
          <li>›</li>
          <li className="text-foreground">{subject.name} BAC {year}</li>
        </ol>
      </nav>

      <Link to="/variante-bacalaureat" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Înapoi la arhivă BAC
      </Link>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          {subject.name} — Subiect BAC {year} (PDF oficial + barem)
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiectul oficial și baremul de corectare publicate de Ministerul Educației
          pentru <strong>{subject.name}</strong> la sesiunea de <strong>Bacalaureat {year}</strong>.
          Descarcă PDF-ul gratuit sau previzualizează direct în browser — fără cont, fără reclame.
        </p>
        <ul className="mt-4 grid gap-1.5 text-sm">
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Subiect oficial CNEE / edu.ro</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Barem complet de evaluare și notare</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> PDF găzduit pe serverele noastre — descărcare instant</li>
        </ul>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href={subjectPdf} target="_blank" rel="noopener" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Subiect — {subject.name}</p>
            <p className="text-xs text-muted-foreground">BAC {year} · PDF oficial</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><Download className="h-4 w-4" /> Descarcă subiectul</p>
          </div>
        </a>
        <a href={baremPdf} target="_blank" rel="noopener" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Barem de corectare</p>
            <p className="text-xs text-muted-foreground">BAC {year} · PDF oficial</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><Download className="h-4 w-4" /> Descarcă baremul</p>
          </div>
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Previzualizare subiect {subject.name} BAC {year}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Vizualizează subiectul direct în pagină. Pentru descărcare folosește butonul de mai sus.
        </p>
        <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
          <iframe src={subjectPdf} title={`${subject.name} BAC ${year} — subiect`} className="h-[80vh] w-full" loading="lazy" />
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">Cum folosești eficient subiectele de BAC {year} la {subject.name}</h2>
        <p className="mt-3 text-muted-foreground">
          Rezolvarea subiectelor din anii anteriori este cel mai eficient mod de pregătire pentru
          Bacalaureat la <strong>{subject.name}</strong>. Iată cum recomandăm să le folosești:
        </p>
        <ol className="mt-4 space-y-3 text-muted-foreground list-decimal pl-5">
          <li><strong>Cronometrează-te.</strong> Rezolvă subiectul ca la examen, în timpul oficial (3 ore pentru BAC).</li>
          <li><strong>Verifică-te cu baremul.</strong> Notează-te singur folosind baremul oficial și identifică unde pierzi puncte.</li>
          <li><strong>Reia subiectele rezolvate greșit.</strong> Înțelegerea greșelilor contează mai mult decât numărul de subiecte.</li>
          <li><strong>Lucrează cu un profesor.</strong> Un profesor verificat de {subject.name} îți poate explica în câteva minute ce ai studia singur ore în șir.</li>
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-xl font-semibold">Vrei notă mare la {subject.name} la BAC?</h2>
            <p className="mt-2 text-muted-foreground">
              Lucrează cu un profesor verificat de {subject.name} care îți explică subiectele,
              îți face plan personalizat de pregătire și te ajută să iei nota dorită la Bacalaureat.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/meditatii" className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                Caută profesor {subject.name}
              </Link>
              <Link to="/meditatii-bac" className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
                Pregătire BAC completă
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Subiecte {subject.name} de la alți ani</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Arhivă completă cu subiectele oficiale de Bacalaureat la {subject.name}:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {BAC_YEARS.slice().reverse().map((y) => (
            <Link
              key={y}
              to="/resurse/bac/$materie/$an"
              params={{ materie: subject.slug, an: String(y) }}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${y === year ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"}`}
            >
              {subject.slug.startsWith("matematica") ? "Matematică" : subject.name.split(" ")[0]} BAC {y}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Subiecte BAC {year} la alte materii</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Explorează subiectele oficiale și de la celelalte materii de la sesiunea Bacalaureat {year}:
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {otherSubjects.map((s) => (
            <Link
              key={s.slug}
              to="/resurse/bac/$materie/$an"
              params={{ materie: s.slug, an: String(year) }}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary transition"
            >
              {s.name} — BAC {year}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">Întrebări frecvente</h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-lg border border-border bg-card p-4">
            <summary className="cursor-pointer font-medium">De unde descarc subiectul {subject.name} BAC {year}?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Direct de pe această pagină, butonul „Descarcă subiectul". PDF oficial, gratuit, găzduit pe MeditatiiDirect.ro.</p>
          </details>
          <details className="rounded-lg border border-border bg-card p-4">
            <summary className="cursor-pointer font-medium">Există baremul de corectare?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Da, baremul oficial este disponibil în PDF separat, descărcabil de pe această pagină.</p>
          </details>
          <details className="rounded-lg border border-border bg-card p-4">
            <summary className="cursor-pointer font-medium">Cât costă o ședință de meditații pentru {subject.name}?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Între 30 și 200 RON/oră, în funcție de profesor. Mulți oferă prima oră gratuit sau reducere.</p>
          </details>
          <details className="rounded-lg border border-border bg-card p-4">
            <summary className="cursor-pointer font-medium">Sunt subiectele oficiale?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Da. Toate subiectele și baremele sunt cele publicate de Ministerul Educației și CNEE (edu.ro).</p>
          </details>
        </div>
      </section>
    </article>
  );
}
