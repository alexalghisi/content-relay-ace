import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CalendarDays, FileText, Inbox, UserPlus, Wallet } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/pentru-profesori";
const TITLE = "Devino profesor pe MeditatiiDirect.ro — cont gratuit, zero comision";
const DESC =
  "Ghid pas cu pas: creezi cont, completezi profilul real (materii, tarif, disponibilitate) și vezi cererile elevilor în secțiunea Cereri elevi. Fără comision, tu stabilești tariful.";

const faqs = [
  {
    q: "Cât costă să fiu profesor pe MeditatiiDirect.ro?",
    a: "Nimic. Contul, profilul și trimiterea propunerilor sunt gratuite, iar platforma nu reține comision din tariful tău. Plata o stabilești și o încasezi direct de la elev.",
  },
  {
    q: "Cum ajung la cererile elevilor?",
    a: "După autentificare, pagina „Cereri elevi” îți arată cererile deschise: materie, nivel, oraș sau online, buget și detalii. Trimiți o propunere cu data, ora, tariful și un mesaj, iar elevul o vede în pagina cererii lui.",
  },
  {
    q: "Trebuie să public profilul ca să trimit propuneri?",
    a: "Poți trimite propuneri și cu profilul nepublicat, dar elevii aleg mult mai ușor când văd un profil complet: nume, foto, descriere, materii, experiență și tarif. Recomandăm să îl publici.",
  },
  {
    q: "Cine îmi vede datele de contact?",
    a: "Doar elevul căruia îi trimiți propunerea și vizitatorii paginii tale publice, dacă alegi să o publici. Profilul nepublicat nu apare nicăieri.",
  },
  {
    q: "Cât durează până primesc primul elev?",
    a: "Depinde de materie și oraș. Cererile apar zilnic, iar profesorii care răspund repede și au profilul completat primesc cele mai multe răspunsuri.",
  },
];

const steps = [
  {
    icon: UserPlus,
    title: "1. Creează-ți contul",
    body: "Apasă „Devino profesor” din meniu și înregistrează-te cu emailul tău. Durează sub un minut și este gratuit.",
    to: "/signup",
    cta: "Creează cont",
  },
  {
    icon: FileText,
    title: "2. Completează profilul real",
    body: "În „Panoul meu” adaugi titlul profesional, descrierea, materiile, nivelurile, anii de experiență, tariful pe oră și formatul (online sau față în față).",
    to: "/profesor",
    cta: "Deschide panoul",
  },
  {
    icon: CalendarDays,
    title: "3. Adaugă disponibilitatea",
    body: "Pui intervalele în care poți preda, pe zile ale săptămânii. Elevii văd când ești liber și îți propun ore realiste.",
    to: "/profesor",
    cta: "Setează orarul",
  },
  {
    icon: BadgeCheck,
    title: "4. Publică profilul",
    body: "Un buton îl face vizibil. Până atunci nimeni nu îl vede — poți lucra la el în liniște.",
    to: "/profesor",
    cta: "Publică profilul",
  },
  {
    icon: Inbox,
    title: "5. Vezi cererile elevilor",
    body: "În „Cereri elevi” apar cererile deschise. Trimiți o propunere cu data, ora, tariful și un mesaj scurt.",
    to: "/cereri",
    cta: "Vezi cererile",
  },
  {
    icon: Wallet,
    title: "6. Predai și încasezi integral",
    body: "Stabiliți împreună programul și plata. Platforma nu intermediază plățile și nu reține comision.",
    to: "/cereri",
    cta: "Începe acum",
  },
];

export const Route = createFileRoute("/pentru-profesori")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Cum devii profesor pe MeditatiiDirect.ro",
          description: DESC,
          step: steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title.replace(/^\d+\.\s*/, ""),
            text: s.body,
            url: `${URL}#pas-${i + 1}`,
          })),
        }),
      },
    ],
  }),
  component: TeachersPage,
});

function TeachersPage() {
  return (
    <article className="container-page py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><a href="/" className="hover:text-primary">Acasă</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground/80">Pentru profesori</li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <BadgeCheck className="h-4 w-4" /> Cont gratuit • Zero comision
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Devino profesor pe MeditatiiDirect.ro
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Aici elevii postează cererea, iar tu trimiți propunerea. Nu concurezi într-o listă lungă de profile: vezi
          exact ce caută elevul — materie, nivel, oraș sau online, buget — și răspunzi cu data, ora și tariful tău.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/signup" className="btn-primary h-11 px-5">Creează cont de profesor</Link>
          <Link to="/cereri" className="btn-outline h-11 px-5">Vezi cererile elevilor</Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Pas cu pas, de la cont la primul elev</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} id={`pas-${i + 1}`} className="card-soft flex flex-col p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{s.body}</p>
              <Link to={s.to} className="mt-4 text-sm font-semibold text-primary hover:underline">
                {s.cta} →
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        <div className="card-soft p-6">
          <h2 className="font-bold">Tu stabilești tariful</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Îți alegi prețul pe oră, formatul și programul. Nu reținem comision din ce încasezi.
          </p>
        </div>
        <div className="card-soft p-6">
          <h2 className="font-bold">Contact direct cu elevul</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Propunerea ta ajunge direct la elev, cu profilul tău atașat. Discutați fără intermediari.
          </p>
        </div>
        <div className="card-soft p-6">
          <h2 className="font-bold">Cererile cresc din Google</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Paginile pe materie și oraș aduc elevi care caută exact ce predai tu, iar cererile lor apar în panoul tău.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}<span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card-soft mt-14 bg-gradient-to-br from-primary-soft to-card p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Gata să primești prima cerere?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Contul durează un minut, profilul cinci.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/signup" className="btn-primary h-11 px-5">Creează cont</Link>
            <Link to="/vreau-sa-dau-meditatii" className="btn-outline h-11 px-5">Vreau să dau meditații</Link>
            <Link to="/invita-un-coleg" className="btn-outline h-11 px-5">Invită un coleg</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
