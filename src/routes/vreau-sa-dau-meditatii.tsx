import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, Clock, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/vreau-sa-dau-meditatii";
const TITLE = "Vreau să dau meditații — câștig extra ca profesor | MeditatiiDirect.ro";
const DESC =
  "Vrei să dai meditații și să câștigi bani în plus? Îți faci cont gratuit, vezi cererile reale ale elevilor (materie, nivel, oraș, buget) și trimiți propunerea ta. Zero comision, tu stabilești tariful.";

const faqs = [
  {
    q: "Vreau să dau meditații, dar nu am experiență de predare. Pot?",
    a: "Da. Contează să stăpânești materia și să comunici clar. Studenții la matematică, informatică, medicină sau filologie sunt printre cei mai căutați pentru pregătirea de gimnaziu și liceu.",
  },
  {
    q: "Cât pot câștiga din meditații?",
    a: "Tariful îl stabilești tu. În România, orele particulare se plătesc frecvent între 60 și 200 de lei pe oră, în funcție de materie, nivel și oraș. Platforma nu reține comision, deci încasezi integral.",
  },
  {
    q: "Trebuie să plătesc ceva ca să mă înscriu?",
    a: "Nu. Contul, profilul, calendarul și trimiterea propunerilor sunt gratuite.",
  },
  {
    q: "Pot preda doar online?",
    a: "Da. Îți alegi formatul: online, față în față sau ambele. Multe cereri sunt deja marcate „online”, deci poți lucra cu elevi din toată țara.",
  },
  {
    q: "Cum îmi găsesc elevii?",
    a: "Nu îi cauți tu. Elevii postează cererea pe site, iar tu o vezi în „Cereri elevi” și răspunzi cu data, ora, tariful și un mesaj. Elevul alege și vă continuați discuția în chat.",
  },
  {
    q: "Ce înseamnă evaluarea în stele?",
    a: "După ce primește propuneri, elevul poate acorda 1–5 stele fiecărei propuneri. Doar elevii care au primit propuneri pot evalua, deci notele sunt reale și îți construiesc reputația.",
  },
];

const reasons = [
  { icon: Banknote, title: "Încasezi integral", body: "Fără comision și fără abonament. Tariful pe oră îl stabilești tu și îl încasezi direct de la elev." },
  { icon: Clock, title: "Program flexibil", body: "Îți treci în calendar doar intervalele în care poți preda. Nimeni nu îți propune ore în afara lor." },
  { icon: Users, title: "Cereri reale, nu liste", body: "Vezi ce caută elevul: materie, nivel, oraș sau online, buget și detalii. Răspunzi doar la ce ți se potrivește." },
  { icon: Sparkles, title: "Chat direct cu elevul", body: "Discutați fără intermediari, stabiliți programul și plata între voi." },
  { icon: Star, title: "Reputație din stele reale", body: "Elevii dau 1–5 stele propunerilor primite. Notele bune îți aduc mai mulți elevi." },
  { icon: ShieldCheck, title: "Datele tale, controlate de tine", body: "Profilul e invizibil până îl publici tu, iar contactul îl vede doar elevul căruia îi scrii." },
];

export const Route = createFileRoute("/vreau-sa-dau-meditatii")({
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
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: WantToTeachPage,
});

function WantToTeachPage() {
  return (
    <article className="container-page py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><a href="/" className="hover:text-primary">Acasă</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground/80">Vreau să dau meditații</li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <Sparkles className="h-4 w-4" /> Înscriere gratuită • Zero comision
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Vreau să dau meditații: cum începi și cât poți câștiga
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Dacă vrei să predai — ca profesor, student sau specialist — nu trebuie să îți cauți elevii prin anunțuri.
          Pe MeditatiiDirect.ro elevii scriu ce au nevoie, iar tu trimiți propunerea ta cu dată, oră și tarif.
          Contul e gratuit, iar din ce încasezi nu reținem nimic.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/signup" className="btn-primary h-11 px-5">Creează cont de profesor</Link>
          <Link to="/cereri" className="btn-outline h-11 px-5">Vezi cererile elevilor</Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">De ce profesorii aleg modelul „elevul cere, tu propui”</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="card-soft p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Cine poate preda</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Profesori titulari și suplinitori care vor ore în plus după program, studenți la matematică, informatică,
          medicină, drept, politehnică sau limbi străine, traducători, ingineri și oameni din industrie care pregătesc
          pentru examene. Cele mai cerute sunt matematica, româna, engleza, informatica, biologia, chimia și fizica,
          pentru Evaluarea Națională, Bacalaureat și admiterea la facultate.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Nu îți cerem acte, contracte sau exclusivitate. Îți completezi profilul real, îți pui disponibilitatea în
          calendar și începi să răspunzi cererilor. Ghidul complet, pas cu pas, este pe pagina{" "}
          <Link to="/pentru-profesori" className="font-semibold text-primary hover:underline">Pentru profesori</Link>.
        </p>
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
            <h2 className="text-xl font-bold">Începe azi: cont în mai puțin de un minut</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Completezi profilul, publici și vezi imediat cererile deschise din materia ta.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/signup" className="btn-primary h-11 px-5">Creează cont</Link>
            <Link to="/invita-un-coleg" className="btn-outline h-11 px-5">Invită un coleg</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
