// Hub Evaluarea Națională: /evaluare-nationala — calendar, reguli, calcul de medie.
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Calculator, FileText } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const SITE = "https://meditatiidirect.ro";

const CALENDAR = [
  { proba: "Proba scrisă la Limba și literatura română", data: "22 iunie 2026" },
  { proba: "Proba scrisă la Matematică", data: "24 iunie 2026" },
  { proba: "Proba scrisă la Limba maternă (minorități)", data: "26 iunie 2026" },
  { proba: "Afișarea rezultatelor inițiale", data: "30 iunie 2026" },
  { proba: "Afișarea rezultatelor finale (după contestații)", data: "8 iulie 2026" },
];

const FAQ = [
  {
    q: "Cum se calculează media la Evaluarea Națională 2026?",
    a: "Media generală de evaluare finală este media aritmetică a notelor de la probele scrise, calculată cu două zecimale, fără rotunjire. La cel puțin 5,00 promovai evaluarea națională.",
  },
  {
    q: "Media claselor V–VIII intră în nota de admitere la liceu?",
    a: "Nu. Admiterea se face pe baza mediei Evaluării Naționale. Media anilor V–VIII se folosește doar la departajare, când doi candidați au aceeași medie de EN. Verifică metodologia la zi pe edu.ro și la liceul la care candidezi.",
  },
  {
    q: "Cât durează probele scrise?",
    a: "Fiecare probă scrisă durează 120 de minute (2 ore), iar notele se acordă pe scala 1–10.",
  },
  {
    q: "Câte probe scrise susțin elevii de la majoritate și cei de la minorități?",
    a: "Elevii de la majoritate susțin două probe: limba română și matematică. Elevii de la minoritățile naționale susțin trei probe: limba maternă, limba română și matematică.",
  },
];

export const Route = createFileRoute("/evaluare-nationala")({
  head: () => {
    const url = `${SITE}/evaluare-nationala`;
    const title = "Evaluarea Națională 2026 — calendar, reguli și calculator de medie | MeditatiiDirect.ro";
    const desc =
      "Calendarul oficial al Evaluării Naționale 2026, cum se calculează media cu două zecimale fără rotunjire, cine promovează și cum te pregătești. Calculator gratuit de medie.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: "evaluare nationala 2026, subiecte evaluare nationala, medie evaluare nationala, calculator medie Evaluarea Nationala, admitere liceu 2026" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Evaluarea Națională", item: url },
          ],
        }) },
      ],
    };
  },
  component: EvaluareNationalaHub,
});

function EvaluareNationalaHub() {
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li className="text-foreground">Evaluarea Națională</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Evaluarea Națională 2026 — ce contează de fapt</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Calendarul probelor, cum se calculează media și ce se întâmplă la admiterea la liceu.
          Fără formuli vechi: admiterea se face pe baza mediei de la Evaluarea Națională, nu pe 80% + 20%.
        </p>
      </header>

      <nav aria-label="Unelte" className="mt-6 flex flex-wrap gap-2">
        <Link to="/calculator-media-evaluare-nationala" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          <Calculator className="h-4 w-4" /> Calculator medie Evaluarea Națională
        </Link>
        <Link to="/meditatii-evaluare-nationala" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
          <FileText className="h-4 w-4" /> Profesori pentru Evaluarea Națională
        </Link>
      </nav>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-xl font-semibold"><CalendarDays className="h-5 w-5 text-primary" /> Calendarul probelor</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Date conform metodologiei pentru anul școlar 2025–2026 (Ordinul 6.058/29.08.2025). Calendarul se poate modifica prin
          ordin ulterioară — verifică pe <a className="text-primary hover:underline" href="https://www.edu.ro/evaluare_nationala_ENVIII" rel="noopener noreferrer" target="_blank">edu.ro</a>.
        </p>
        <ul className="mt-4 max-w-2xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {CALENDAR.map((c) => (
            <li key={c.proba} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm">{c.proba}</span>
              <span className="shrink-0 text-sm font-semibold text-primary">{c.data}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-3xl space-y-3">
        <h2 className="text-2xl font-bold">Cum se calculează media</h2>
        <p className="text-muted-foreground">
          Media generală de evaluare finală este media aritmetică a notelor de la probele scrise, cu două zecimale,
          <strong> fără rotunjire</strong>. Exemple: notele 8,50 și 9,00 dau 8,75; notele 7,00 și 8,00 dau 7,50;
          notele 6,00, 7,00 și 8,00 (cu limba maternă) dau 7,00.
        </p>
        <p className="text-muted-foreground">
          Cu media finală cel puțin 5,00 promovai Evaluarea Națională. Fiecare probă durează 120 de minute,
          se lucrează pe foaie și notele sunt pe scala 1–10.
        </p>
        <p className="text-muted-foreground">
          La admiterea la liceu, departajarea dintre doi candidați cu aceeași medie se face după media anilor V–VIII.
          Criteriile exacte le stabilește metodologia la zi și le afișează liceul la care candidezi.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-4 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="card-soft p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Ai nevoie de ajutor cu româna sau matematica?</h2>
        <p className="mt-2 text-muted-foreground">
          Descrii o dată ce trebuie recuperat. Profesorii răspund cu propuneri care au dată, oră și tarif,
          apoi discutați în chat înainte să alegeți. Cererea e gratuită și fără cont.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/meditatii-evaluare-nationala" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Cere profesor pentru Evaluarea Națională
          </Link>
          <Link to="/calculator-media-evaluare-nationala" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
            Calculator de medie
          </Link>
        </div>
      </section>
    </main>
  );
}
