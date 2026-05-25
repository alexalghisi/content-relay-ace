import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, FileText, ArrowLeft, GraduationCap, CheckCircle2, Link2 } from "lucide-react";
import { getPapersForYear, paperPublicUrl, listRelatedUnisForSubject, listYearsForUniSubject, type AdmissionPaper } from "@/lib/admission-papers";

type LoaderData = {
  universitate: string; materie: string; an: number;
  papers: AdmissionPaper[]; universityName: string; subjectName: string;
  relatedUnis: { slug: string; name: string }[];
  otherYears: number[];
};

export const Route = createFileRoute("/subiecte-admitere/$universitate/$materie/$an")({
  loader: async ({ params }): Promise<LoaderData> => {
    const an = Number(params.an);
    if (!Number.isFinite(an)) throw notFound();
    const [papers, relatedUnis, yearsRes] = await Promise.all([
      getPapersForYear(params.universitate, params.materie, an),
      listRelatedUnisForSubject(params.materie, params.universitate),
      listYearsForUniSubject(params.universitate, params.materie),
    ]);
    if (papers.length === 0) throw notFound();
    return {
      universitate: params.universitate, materie: params.materie, an,
      papers,
      universityName: papers[0].university_name,
      subjectName: papers[0].subject_name,
      relatedUnis,
      otherYears: yearsRes.years.filter((y) => y !== an),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { universitate, materie, an, universityName, subjectName, papers } = loaderData;
    const url = `https://meditatiidirect.ro/subiecte-admitere/${universitate}/${materie}/${an}`;
    const title = `Subiecte Admitere ${subjectName} ${universityName} ${an} (PDF) | MeditatiiDirect.ro`;
    const desc = `Subiect oficial și barem la ${subjectName} pentru admiterea ${an} la ${universityName}. PDF gratuit, preview inline și descărcare directă.`;
    const subjectPaper = papers.find((p) => p.document_type === "subiect");
    const pdfUrl = subjectPaper ? paperPublicUrl(subjectPaper.storage_path) : url;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `subiecte admitere ${subjectName} ${universityName} ${an}, barem ${subjectName} ${an}, ${subjectName} admitere ${an} pdf` },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:url", content: url }, { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title }, { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "LearningResource",
          name: `${subjectName} — Subiect admitere ${universityName} ${an}`,
          description: desc, url, inLanguage: "ro-RO",
          learningResourceType: "Exam",
          educationalLevel: "Universitar — Admitere",
          about: subjectName,
          datePublished: `${an}-07-15`,
          isAccessibleForFree: true,
          encodingFormat: "application/pdf",
          contentUrl: pdfUrl,
          provider: { "@type": "Organization", name: "MeditatiiDirect.ro", url: "https://meditatiidirect.ro" },
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
            { "@type": "ListItem", position: 2, name: "Subiecte admitere", item: "https://meditatiidirect.ro/subiecte-admitere" },
            { "@type": "ListItem", position: 3, name: universityName, item: `https://meditatiidirect.ro/subiecte-admitere/${universitate}` },
            { "@type": "ListItem", position: 4, name: subjectName, item: `https://meditatiidirect.ro/subiecte-admitere/${universitate}/${materie}` },
            { "@type": "ListItem", position: 5, name: `Admitere ${an}`, item: url },
          ],
        }) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Subiect indisponibil</h1>
      <p className="mt-2 text-muted-foreground">Acest subiect nu a fost încă încărcat în arhivă.</p>
      <Link to="/subiecte-admitere" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">Vezi toate subiectele</Link>
    </div>
  ),
  errorComponent: () => <div className="container-page py-20 text-center">A apărut o eroare. <Link to="/subiecte-admitere" className="text-primary">Înapoi la arhivă</Link></div>,
  component: PaperPage,
});

const TYPE_LABELS: Record<string, string> = { subiect: "Subiect", barem: "Barem de corectare", rezolvare: "Rezolvare" };

function downloadBlob(url: string, filename: string) {
  fetch(url).then((r) => { if (!r.ok) throw new Error("404"); return r.blob(); })
    .then((b) => {
      const u = URL.createObjectURL(b);
      const a = document.createElement("a");
      a.href = u; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(u);
    })
    .catch(() => window.open(url, "_blank"));
}

function PaperPage() {
  const { universitate, materie, an, papers, universityName, subjectName } = Route.useLoaderData();
  const subjectPaper = papers.find((p: AdmissionPaper) => p.document_type === "subiect");
  const baremPaper = papers.find((p: AdmissionPaper) => p.document_type === "barem");
  const rezolvarePaper = papers.find((p: AdmissionPaper) => p.document_type === "rezolvare");
  const previewUrl = subjectPaper ? paperPublicUrl(subjectPaper.storage_path) : null;
  return (
    <article className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/subiecte-admitere" className="hover:text-primary">Subiecte admitere</Link></li><li>›</li>
          <li><Link to="/subiecte-admitere/$universitate" params={{ universitate }} className="hover:text-primary">{universityName}</Link></li><li>›</li>
          <li><Link to="/subiecte-admitere/$universitate/$materie" params={{ universitate, materie }} className="hover:text-primary">{subjectName}</Link></li><li>›</li>
          <li className="text-foreground">{an}</li>
        </ol>
      </nav>
      <Link to="/subiecte-admitere/$universitate/$materie" params={{ universitate, materie }} className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Toți anii pentru {subjectName}
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiect admitere {subjectName} — {universityName} ({an})</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiectul oficial și baremul de corectare la <strong>{subjectName}</strong> pentru sesiunea de admitere <strong>{an}</strong> la <strong>{universityName}</strong>. Vizualizare în pagină + descărcare PDF gratuită.
        </p>
        <ul className="mt-4 grid gap-1.5 text-sm">
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> PDF găzduit pe serverele noastre — descărcare instant</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Subiect oficial publicat de {universityName}</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Fără cont, fără reclame intruzive</li>
        </ul>
      </header>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[subjectPaper, baremPaper, rezolvarePaper].filter(Boolean).map((p) => {
          const paper = p as AdmissionPaper;
          const url = paperPublicUrl(paper.storage_path);
          const filename = `${universitate}-${materie}-${an}-${paper.document_type}.pdf`;
          return (
            <a key={paper.id} href={url} onClick={(e) => { e.preventDefault(); downloadBlob(url, filename); }}
              className="card-soft p-5 flex items-start gap-3 hover:border-primary/40 transition cursor-pointer">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><FileText className="h-6 w-6" /></span>
              <div>
                <p className="font-semibold">{TYPE_LABELS[paper.document_type] || paper.document_type}</p>
                <p className="text-xs text-muted-foreground">{subjectName} · {an} · PDF</p>
                <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary"><Download className="h-4 w-4" /> Descarcă {TYPE_LABELS[paper.document_type]?.toLowerCase()}</p>
              </div>
            </a>
          );
        })}
      </div>
      {previewUrl && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Previzualizare subiect {subjectName} — admitere {universityName} {an}</h2>
          <p className="mt-2 text-sm text-muted-foreground">Vizualizează subiectul direct în pagină. Pentru descărcare folosește butoanele de mai sus.</p>
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
            <iframe src={previewUrl} title={`${subjectName} admitere ${universityName} ${an}`} className="h-[80vh] w-full" loading="lazy" />
          </div>
        </section>
      )}
      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><GraduationCap className="h-6 w-6" /></span>
          <div>
            <h2 className="text-xl font-semibold">Ai nevoie de ajutor la {subjectName}?</h2>
            <p className="mt-2 text-muted-foreground">Profesori verificați specializați pe admiterea la {universityName}. Plan personalizat de pregătire, simulări săptămânale, feedback la fiecare ședință.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/meditatii" className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Caută profesor {subjectName}</Link>
              <Link to="/admitere" className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Ghid admitere</Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
