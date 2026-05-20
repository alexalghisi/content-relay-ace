import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { ADM_FACULTIES, ADM_YEARS } from "@/data/admitere-archive";
import { admiterePdfUrl } from "@/lib/pdf-urls";
import { faqJsonLd } from "@/components/seo-landing";

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
    const title = `${fac.name} — Subiect admitere ${year} (PDF) | MeditatiiDirect.ro`;
    const desc = `Subiect și barem pentru admiterea la ${fac.name} (${year}). PDF gratuit, găzduit pe MeditatiiDirect.ro — descarcă fără să părăsești platforma.`;
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
          { q: `Ce conține subiectul de admitere la ${fac.name}?`, a: `Subiect tip ${fac.subject}, din sesiunea ${year}.` },
          { q: "PDF-ul este găzduit pe MeditatiiDirect.ro?", a: "Da, toate subiectele sunt pe serverul nostru — nu trimitem traficul către site-urile facultăților." },
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
  const subjectPdf = admiterePdfUrl(fac.slug, year, "subiect");
  const baremPdf = admiterePdfUrl(fac.slug, year, "barem");
  return (
    <article className="container-page py-10 lg:py-14">
      <Link to="/admitere" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Arhivă admitere
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{fac.name} — Admitere {year}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Probă: {fac.subject} · {fac.city}</p>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiect și barem pentru sesiunea {year}. PDF-urile sunt găzduite pe MeditatiiDirect.ro.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href={subjectPdf} target="_blank" rel="noopener" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Subiect — Admitere {year}</p>
            <p className="text-xs text-muted-foreground">{fac.name} · PDF</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><Download className="h-4 w-4" /> Descarcă subiectul</p>
          </div>
        </a>
        <a href={baremPdf} target="_blank" rel="noopener" className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
          <div>
            <p className="font-semibold">Barem de corectare</p>
            <p className="text-xs text-muted-foreground">{fac.name} · PDF</p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><Download className="h-4 w-4" /> Descarcă baremul</p>
          </div>
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Previzualizare subiect</h2>
        <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
          <iframe src={subjectPdf} title={`${fac.name} admitere ${year}`} className="h-[80vh] w-full" loading="lazy" />
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
