import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GitBranch, ScanSearch, Sprout, Target } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";
import { BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import { learningOrder, MAX_INTREBARI } from "@/lib/scaner-lacune";
import { BLOCAJE_MATERII } from "@/data/blocaje";

const PATH = "/scaner-lacune";
const URL = `${SITE}${PATH}`;
const TITLE = "Scanerul de lacune — test gratuit: ce noțiune îți lipsește | MeditatiiDirect.ro";
const DESCRIPTION =
  "Test adaptiv gratuit la matematică, română, fizică, chimie, engleză și informatică: pornești de la capitolul care nu îți iese și afli în câteva întrebări noțiunea care lipsește de fapt, plus traseul de recuperare în ordine.";

const FAQS = [
  {
    q: "Ce este Scanerul de lacune?",
    a: `Un test scurt și adaptiv. Nu îți dă aceleași întrebări tuturor: pornește de la capitolul unde te-ai blocat și, la fiecare răspuns greșit, verifică noțiunile pe care se sprijină acel capitol. Se oprește când găsește rădăcina blocajului, după cel mult ${MAX_INTREBARI} întrebări.`,
  },
  {
    q: "Prin ce diferă de un test obișnuit?",
    a: "Un test obișnuit îți spune ce ai greșit. Scanerul îți spune de ce: urmărește legăturile dintre noțiuni și îți arată de unde să începi recuperarea și în ce ordine să continui.",
  },
  {
    q: "Trebuie să îmi fac cont?",
    a: "Nu. Scanarea rulează în browser și nu salvăm răspunsurile. Dacă vrei ajutor, poți trimite diagnosticul într-o cerere de meditații, iar profesorii primesc doar lista noțiunilor.",
  },
];

export const Route = createFileRoute("/scaner-lacune/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbLd([{ name: "Scanerul de lacune", path: PATH }])),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <article className="container-page py-10 lg:py-14">
      <BlocajeBreadcrumb items={[{ name: "Scanerul de lacune" }]} />
      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <ScanSearch className="h-4 w-4" /> Nou pe MeditatiiDirect.ro
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Scanerul de lacune: găsește rădăcina blocajului
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Nu îți ies derivatele? Poate problema e la funcții. Sau la fracții, din clasa a V-a.
          Scanerul pornește de la capitolul care nu îți iese și coboară, întrebare cu întrebare, pe
          lanțul de noțiuni până află de unde începe problema.
        </p>
      </header>

      <section
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Alege materia"
      >
        {BLOCAJE_MATERII.map((m) => (
          <Link
            key={m.slug}
            to="/scaner-lacune/$materie"
            params={{ materie: m.slug }}
            className="card-soft group flex flex-col p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-pop)]"
          >
            <h2 className="text-lg font-semibold group-hover:text-primary">
              Test de lacune la {m.nameLower}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{m.descriere}</p>
            <p className="mt-auto pt-3 text-xs text-muted-foreground">
              {learningOrder(m.slug).length} noțiuni legate între ele
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Începe scanarea <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-16" aria-labelledby="cum">
        <h2 id="cum" className="text-2xl font-bold">
          Cum funcționează
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Target,
              t: "Pornești de la blocaj",
              d: "Alegi capitolul care nu îți iese. Scanerul îți pune o întrebare din el.",
            },
            {
              icon: GitBranch,
              t: "Coboară pe lanț",
              d: "Un răspuns greșit deschide verificarea noțiunilor de bază. Unul corect închide ramura, ca să nu pierzi timp.",
            },
            {
              icon: Sprout,
              t: "Primești traseul",
              d: "Afli rădăcina și ordinea în care să recuperezi, cu explicație și exemplu rezolvat pentru fiecare pas.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="card-soft p-5">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">{t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl" aria-labelledby="faq">
        <h2 id="faq" className="text-2xl font-bold">
          Întrebări frecvente
        </h2>
        <div className="mt-5 space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="card-soft p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Vrei să citești direct explicațiile? Vezi{" "}
          <Link to="/harta-blocajelor" className="font-medium text-primary hover:underline">
            Harta Blocajelor
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
