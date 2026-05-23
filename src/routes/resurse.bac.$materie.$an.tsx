import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, FileText, ArrowLeft, GraduationCap } from "lucide-react";
import { BAC_SUBJECTS, BAC_YEARS } from "@/data/bac-archive";
import { bacPdfUrl } from "@/lib/pdf-urls";
import { faqJsonLd } from "@/components/seo-landing";

export const Route = createFileRoute("/resurse/bac/$materie/$an")({
  loader: ({ params }) => {
    const subject = BAC_SUBJECTS.find((s) => s.slug === params.materie);
    const year = Number(params.an);
    if (!subject || !BAC_YEARS.includes(year)) throw notFound();
    return { subject, year };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, year } = loaderData;
    const url = `https://meditatiidirect.ro/resurse/bac/${subject.slug}/${year}`;
    const title = `${subject.name} — BAC ${year} (subiect + barem PDF) | MeditatiiDirect.ro`;
    const desc = `Descarcă subiectul și baremul oficial pentru ${subject.name} — Bacalaureat ${year}. PDF gratuit, găzduit pe MeditatiiDirect.ro.`;
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
          { q: `Cum descarc subiectul de la ${subject.name} (BAC ${year})?`, a: "Apasă butonul „Descarcă subiectul” de mai sus — PDF-ul este găzduit pe MeditatiiDirect.ro și se descarcă instant." },
          { q: "Există și baremul de corectare?", a: "Da, ai buton separat de descărcare pentru baremul oficial." },
        ])),
      }],
    };
  },
  errorComponent: () => <div className="container-page py-20 text-center">A apărut o eroare. <Link to="/variante-bacalaureat" className="text-primary">Înapoi la arhivă</Link></div>,
  notFoundComponent: () => <div className="container-page py-20 text-center">Resursă inexistentă. <Link to="/variante-bacalaureat" className="text-primary">Înapoi la arhivă</Link></div>,
  component: ResursaBacPage,
});

function ResursaBacPage() {
  const { subject, year } = Route.useLoaderData();
  const subjectPdf = bacPdfUrl(subject.slug, year, "subiect");
  const baremPdf = bacPdfUrl(subject.slug, year, "barem");
  return (
    <article className="container-page py-10 lg:py-14">
      <Link to="/variante-bacalaureat" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Arhivă BAC
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{subject.name} — BAC {year}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiectul și baremul oficial de la sesiunea de Bacalaureat {year} pentru {subject.name}. PDF-urile
          sunt găzduite pe MeditatiiDirect.ro — apasă pentru vizualizare sau descărcare.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href={subjectPdf} target="_blank" rel="noopener" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Subiect — {subject.name}</p>
            <p className="text-xs text-muted-foreground">BAC {year} · PDF</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><Download className="h-4 w-4" /> Descarcă subiectul</p>
          </div>
        </a>
        <a href={baremPdf} target="_blank" rel="noopener" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Barem de corectare</p>
            <p className="text-xs text-muted-foreground">BAC {year} · PDF</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><Download className="h-4 w-4" /> Descarcă baremul</p>
          </div>
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Previzualizare subiect</h2>
        <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
          <iframe src={subjectPdf} title={`${subject.name} BAC ${year} — subiect`} className="h-[80vh] w-full" loading="lazy" />
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-xl font-semibold">Vrei să iei notă mare la {subject.name}?</h2>
            <p className="mt-2 text-muted-foreground">
              Lucrează cu un profesor verificat care îți explică subiectul și îți face plan personalizat pentru BAC.
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

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Alți ani pentru {subject.name}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {BAC_YEARS.slice().reverse().map((y) => (
            <Link
              key={y}
              to="/resurse/bac/$materie/$an"
              params={{ materie: subject.slug, an: String(y) }}
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
