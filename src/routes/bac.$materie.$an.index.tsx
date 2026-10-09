// Pagină SEO per materie × an BAC: /bac/$materie/$an
// Arătăm doar sesiunile pentru care subiectul există efectiv în arhiva noastră.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { getBacSubject, BAC_SESSIONS, BAC_YEARS, bacPdfUrl, type BacSessionSlug } from "@/data/bac-catalog";
import { getVarianteMaterie, type VariantaDisponibila } from "@/lib/bac-content.functions";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/bac/$materie/$an/")({
  loader: async ({ params }) => {
    const subject = getBacSubject(params.materie);
    const year = Number(params.an);
    if (!subject || !Number.isInteger(year) || year < 2010 || year > 2026) throw notFound();
    let variante: VariantaDisponibila[] = [];
    try {
      const r = await getVarianteMaterie({ data: { materie: subject.slug } });
      variante = r.variante;
    } catch {
      /* fără date — pagina rămâne neindexată */
    }
    return { subject, year, variante, varianteAn: variante.filter((v) => v.an === year) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, year, varianteAn } = loaderData;
    const url = `${SITE}/bac/${subject.slug}/${year}`;
    const title = `Subiecte BAC ${subject.name} ${year} — Bareme și variante (PDF) | MeditatiiDirect.ro`;
    const desc = varianteAn.length
      ? `Subiecte BAC ${subject.nameLower} ${year}: ${varianteAn.length} ${varianteAn.length === 1 ? "variantă" : "variante"} oficiale cu subiect și barem PDF, găzduite la noi. Descărcare gratuită, fără cont.`
      : `Subiecte BAC ${subject.nameLower} ${year}: încă nu avem variantă verificată în arhivă. Vezi ce ani sunt disponibili și cere ofertă gratuită pentru meditații.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        ...(varianteAn.length ? [] : [{ name: "robots", content: "noindex, follow" }]),
        { name: "keywords", content: `subiecte bac ${subject.nameLower} ${year}, bac ${subject.nameLower} ${year}, variante bac ${subject.nameLower} ${year}, barem bac ${subject.nameLower} ${year}, bacalaureat ${subject.nameLower} ${year} pdf` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "LearningResource",
          name: `Subiecte BAC ${subject.name} ${year}`,
          description: desc, url, inLanguage: "ro-RO",
          learningResourceType: "Exam",
          educationalLevel: "Liceu — clasa a XII-a",
          about: subject.name,
          isAccessibleForFree: true,
          provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Subiecte BAC", item: `${SITE}/bac` },
            { "@type": "ListItem", position: 3, name: subject.name, item: `${SITE}/bac/${subject.slug}` },
            { "@type": "ListItem", position: 4, name: String(year), item: url },
          ],
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: `Unde găsesc subiectele BAC ${subject.nameLower} ${year}?`,
              acceptedAnswer: { "@type": "Answer", text: varianteAn.length
                ? `Subiectele și baremele pe care le-am găzduit și verificat pentru ${subject.nameLower} ${year} apar pe această pagină, cu link direct la PDF. Publicăm doar fișiere verificat, așa că nu toate sesiunile sunt încă disponibile.`
                : `Pentru ${subject.nameLower} ${year} nu avem încă niciun subiect verificat în arhivă. Publicăm doar fișiere verificat, așa că preferăm să spunem sincer că lipsește, în loc să punem un PDF greșit.` } },
            { "@type": "Question", name: `Ce conține baremul de corectare ${year}?`,
              acceptedAnswer: { "@type": "Answer", text: `Baremul oficial conține punctajul pe fiecare cerință și răspunsurile model, util pentru autoevaluare. La ${subject.nameLower}, sesiunile din ${year} au barem doar acolo unde l-am găsit și verificat.` } },
            { "@type": "Question", name: `Pot să mă pregătesc cu un profesor pe baza acestor subiecte?`,
              acceptedAnswer: { "@type": "Answer", text: `Da. Trimite o cerere gratuită pe MeditatiiDirect.ro: profesorii de ${subject.nameLower} răspund cu propuneri care au dată, oră și tarif, apoi discutați în chat înainte să vă decideți.` } },
          ],
        }) },
      ],
    };
  },
  component: BacPaperPage,
});

function BacPaperPage() {
  const { subject, year, variante, varianteAn } = Route.useLoaderData();
  const auVariante = varianteAn.length > 0;
  const sesiuniDisponibile = new Set(varianteAn.map((v) => v.sesiune));
  const lipsa = BAC_SESSIONS.filter((s) => !sesiuniDisponibile.has(s.slug));
  const altiAni = [...new Set(variante.map((v) => v.an))]
    .filter((y) => y !== year)
    .sort((a, b) => b - a);

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/subiecte-bac" className="hover:text-primary">Subiecte BAC</Link></li><li>›</li>
          <li><Link to="/bac/$materie" params={{ materie: subject.slug }} className="hover:text-primary">{subject.name}</Link></li><li>›</li>
          <li className="text-foreground">{year}</li>
        </ol>
      </nav>

      <Link to="/bac/$materie" params={{ materie: subject.slug }} className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Toate variantele {subject.nameLower}
      </Link>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte BAC {subject.name} — {year}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {auVariante ? (
            <>Variantele oficiale și baremele de corectare la <strong>{subject.nameLower}</strong> pentru bacalaureatul din <strong>{year}</strong> ({subject.short}).
              {" "}{varianteAn.length} {varianteAn.length === 1 ? "variantă este găzduită" : "variante sunt găzduite"} la noi, cu PDF în pagină — gratuit, fără cont.</>
          ) : (
            <>Pentru <strong>{subject.nameLower}</strong> din <strong>{year}</strong> ({subject.short}) încă nu avem în arhivă un subiect verificat.
              {" "}Publicăm doar fișiere pe care le-am citit și verificat — preferăm să spunem sincer că lipsește, în loc să punem un PDF greșit.</>
          )}
        </p>
      </header>

      {auVariante ? (
        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {varianteAn.map((v) => (
            <SessionCard key={v.sesiune} materie={subject.slug} an={year} sesiune={v.sesiune}
              label={BAC_SESSIONS.find((s) => s.slug === v.sesiune)?.label ?? v.sesiune}
              subjectLower={subject.nameLower} areBarem={v.are_barem} />
          ))}
        </section>
      ) : (
        <section className="card-soft mt-8 p-6">
          <h2 className="text-xl font-semibold">Niciun subiect verificat pentru {year}</h2>
          <p className="mt-2 text-muted-foreground">
            Încă nu avem subiectul și baremul de la {subject.nameLower} din {year}. Le adăugăm pe măsură ce le găsim și le verificăm.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/bac/$materie" params={{ materie: subject.slug }}
              className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Vezi anii disponibili la {subject.nameLower}
            </Link>
            <Link to="/meditatii" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
              Cere ofertă pentru {subject.nameLower}
            </Link>
          </div>
        </section>
      )}

      {auVariante && lipsa.length > 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          Pentru aceste sesiuni nu avem încă fișiere: {lipsa.map((s) => s.label.toLowerCase()).join(", ")}.
        </p>
      )}

      <section className="mt-10 max-w-3xl space-y-3 text-foreground/90">
        <h2 className="text-2xl font-bold">Despre BAC {subject.nameLower} {year}</h2>
        <p className="text-muted-foreground">
          Examenul de bacalaureat la {subject.nameLower} din {year} a urmat programa oficială MEN. Proba scrisă durează 3 ore, iar nota maximă este 10.
          {" "}{auVariante
            ? "Lucrați pe variantă în condiții de examen, apoi comparați punct cu punct cu baremul."
            : "Când vom avea subiectul și baremul verificat pentru acest an, le vei găsi pe această pagină."}
        </p>
        <p className="text-muted-foreground">
          Nu apucați să plătiți înainte să știți cum lucrați împreună: pe MeditatiiDirect.ro descrii o dată ce ai nevoie,
          iar profesorii de {subject.nameLower} îți trimit propuneri cu dată, oră și tarif. Discutați în chat, apoi alegi.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Lucrează pe variante cu un profesor de {subject.nameLower}</h2>
        <p className="mt-2 text-muted-foreground">Cererea e gratuită și fără cont. Primești propuneri cu dată, oră și tarif, apoi alegeți împreună.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/meditatii" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Cere ofertă pentru {subject.nameLower}
          </Link>
          <Link to="/meditatii-bac" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Toate meditațiile BAC</Link>
        </div>
      </section>

      {altiAni.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold">Alți ani cu subiecte disponibile la {subject.nameLower}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {altiAni.map((y) => (
              <Link key={y} to="/bac/$materie/$an" params={{ materie: subject.slug, an: String(y) }}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
                BAC {subject.nameLower} {y}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function SessionCard({ materie, an, sesiune, label, subjectLower, areBarem }: {
  materie: string; an: number; sesiune: BacSessionSlug; label: string; subjectLower: string; areBarem: boolean;
}) {
  const subiect = bacPdfUrl(materie, an, sesiune, "subiect");
  const barem = areBarem ? bacPdfUrl(materie, an, sesiune, "barem") : null;
  return (
    <div className="card-soft p-5">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <h3 className="mt-1 text-lg font-semibold">
        <Link to="/bac/$materie/$an/$sesiune" params={{ materie, an: String(an), sesiune }} className="hover:text-primary">
          BAC {subjectLower} — {label.toLowerCase()} {an}
        </Link>
      </h3>
      <Link to="/bac/$materie/$an/$sesiune" params={{ materie, an: String(an), sesiune }}
        className="mt-1 inline-flex text-xs text-primary hover:underline">
        Deschide varianta în pagină (subiect + rezolvare) →
      </Link>
      <div className="mt-3 grid gap-2">
        <a href={subiect} rel="nofollow noopener" target="_blank"
           className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary">
          <FileText className="h-4 w-4 text-primary" /> Subiect PDF <Download className="h-3 w-3 ml-auto" />
        </a>
        {barem ? (
          <a href={barem} rel="nofollow noopener" target="_blank"
             className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/40 hover:text-primary">
            <FileText className="h-4 w-4 text-primary" /> Barem PDF <Download className="h-3 w-3 ml-auto" />
          </a>
        ) : (
          <p className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground">
            Baremul pentru această sesiune lipsește încă
          </p>
        )}
      </div>
    </div>
  );
}
