// Hub /subiecte-evaluare-nationala — modele oficiale 2027 și subiectele 2026, cu barem și rezolvare.
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpenCheck, CalendarDays, FileText, GraduationCap } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";
import { LUCRARI_EN, MATERIE_EN, titluLucrareEn, type LucrareEn } from "@/lib/subiecte-en";

const SITE = "https://meditatiidirect.ro";
const URL = `${SITE}/subiecte-evaluare-nationala`;

const FAQ_SUBIECTE_EN = [
  {
    q: "Când s-au publicat modelele de subiecte pentru Evaluarea Națională 2027?",
    a: "Centrul Național pentru Curriculum și Evaluare a publicat modelele la română și matematică pe 1 noiembrie 2026. Le găsești aici în PDF, cu baremul oficial și cu rezolvarea explicată pas cu pas.",
  },
  {
    q: "Când are loc Evaluarea Națională 2027?",
    a: "Proba la limba română este pe 22 iunie 2027, matematica pe 24 iunie, iar limba maternă pe 25 iunie. Rezultatele inițiale se afișează pe 30 iunie, iar cele finale pe 7 iulie 2027. Simularea are loc în perioada 16–18 martie 2027.",
  },
  {
    q: "Cum arată subiectul de la matematică?",
    a: "Trei subiecte a câte 30 de puncte, plus 10 din oficiu: 6 itemi grilă de calcul, 6 itemi grilă de geometrie și 6 probleme cu rezolvare completă (a – 2 puncte, b – 3 puncte). Durează două ore.",
  },
  {
    q: "Cum arată subiectul de la limba română?",
    a: "Subiectul I (70 de puncte) are două texte (unul literar, unul nonliterar), cu întrebări de înțelegere și de gramatică. Subiectul al II-lea (20 de puncte) e o compunere sau un rezumat. Se dau 10 puncte din oficiu.",
  },
  {
    q: "Cum se calculează media de admitere la liceu?",
    a: "Media de admitere este media aritmetică a notelor de la probele Evaluării Naționale, cu două zecimale, fără rotunjire. Media claselor V–VIII se folosește doar la departajare, în caz de egalitate.",
  },
];

export const Route = createFileRoute("/subiecte-evaluare-nationala/")({
  head: () => {
    const title =
      "Subiecte Evaluare Națională 2027 și 2026 — model oficial, barem și rezolvări pas cu pas";
    const description =
      "Modelele oficiale Evaluarea Națională 2027 la română și matematică (publicate pe 1 noiembrie 2026) și subiectele din iunie 2026, în PDF, cu barem și rezolvare explicată. Gratuit.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: URL },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ro_RO" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: URL }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ_SUBIECTE_EN)) },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Evaluarea Națională",
                item: `${SITE}/evaluare-nationala`,
              },
              { "@type": "ListItem", position: 3, name: "Subiecte Evaluare Națională", item: URL },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: LUCRARI_EN.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: titluLucrareEn(l),
              url: `${URL}/${l.slug}`,
            })),
          }),
        },
      ],
    };
  },
  component: Page,
});

function CardLucrare({ l }: { l: LucrareEn }) {
  return (
    <li className="flex h-full flex-col rounded-xl border border-border bg-card p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-primary">{l.eticheta}</p>
      <h3 className="mt-1 text-lg font-semibold">
        <Link
          to="/subiecte-evaluare-nationala/$slug"
          params={{ slug: l.slug }}
          className="hover:text-primary"
        >
          {titluLucrareEn(l)}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{MATERIE_EN[l.materie]}</p>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{l.rezumat}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <Link
          to="/subiecte-evaluare-nationala/$slug"
          params={{ slug: l.slug }}
          className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 font-medium text-primary-foreground hover:opacity-90"
        >
          <BookOpenCheck className="h-4 w-4" aria-hidden="true" /> Rezolvare pas cu pas
        </Link>
        <a
          href={l.subiect}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 hover:border-primary/40"
        >
          <FileText className="h-4 w-4" aria-hidden="true" /> Subiect PDF
        </a>
        <a
          href={l.barem}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center rounded-lg border px-3 py-1.5 hover:border-primary/40"
        >
          Barem PDF
        </a>
      </div>
    </li>
  );
}

function Page() {
  const modele = LUCRARI_EN.filter((l) => l.tip === "model");
  const sesiuni = LUCRARI_EN.filter((l) => l.tip === "sesiune");
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-primary">
              Acasă
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link to="/evaluare-nationala" className="hover:text-primary">
              Evaluarea Națională
            </Link>
          </li>
          <li>›</li>
          <li className="text-foreground">Subiecte</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Subiecte Evaluare Națională 2027 — modele oficiale, bareme și rezolvări
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Modelele publicate de minister pentru examenul din iunie 2027 și subiectele date în iunie
          2026, la română și matematică. Pentru fiecare găsești PDF-ul oficial, baremul și
          rezolvarea explicată de profesori, item cu item.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Model Evaluare Națională 2027</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Publicate de Centrul Național pentru Curriculum și Evaluare pe 1 noiembrie 2026. Arată
          exact structura de la simularea din martie și de la examenul din iunie 2027.
        </p>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {modele.map((l) => (
            <CardLucrare key={l.slug} l={l} />
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Subiecte Evaluare Națională 2026 (iunie)</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Subiectele reale de anul trecut: cel mai bun test de antrenament după model, pentru că au
          același format.
        </p>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {sesiuni.map((l) => (
            <CardLucrare key={l.slug} l={l} />
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-3xl space-y-3">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <CalendarDays className="h-5 w-5 text-primary" aria-hidden="true" /> Cum folosești
          subiectele până în iunie
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>
            <strong className="text-foreground">Noiembrie–decembrie:</strong> lucrezi modelul 2027
            cronometrat (2 ore), apoi îl corectezi singur cu baremul. Notezi capitolele unde pierzi
            puncte.
          </li>
          <li>
            <strong className="text-foreground">Ianuarie–februarie:</strong> recuperezi capitolele
            slabe (la mate, de obicei geometria în spațiu și punctele b de la Subiectul III; la
            română, gramatica și compunerea).
          </li>
          <li>
            <strong className="text-foreground">16–18 martie 2027:</strong> simularea națională.
            Rezultatele vin pe 30 martie și îți arată cât mai ai de recuperat.
          </li>
          <li>
            <strong className="text-foreground">Aprilie–iunie:</strong> un subiect complet pe
            săptămână, în condiții de examen. Examenul: română pe 22 iunie, matematică pe 24 iunie
            2027.
          </li>
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" /> Ai lucrat modelul și
          n-a ieșit cum voiai?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Postezi gratuit o cerere și primești propuneri de la profesori verificați de română sau
          matematică pentru Evaluarea Națională, online sau la domiciliu. Poți relua subiectul și cu
          Profesorul AI, încărcând direct PDF-ul.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/meditatii-evaluare-nationala"
            className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Meditații pentru Evaluarea Națională
          </Link>
          <Link
            to="/profesor-ai"
            className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40"
          >
            Lucrează subiectul cu Profesorul AI
          </Link>
          <Link
            to="/calculator-media-evaluare-nationala"
            className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40"
          >
            Calculator medie EN
          </Link>
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-4 space-y-3">
          {FAQ_SUBIECTE_EN.map((f) => (
            <details key={f.q} className="card-soft p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
