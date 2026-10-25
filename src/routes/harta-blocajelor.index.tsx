import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Compass, GitBranch, Lightbulb, MessageSquareText, Search } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";
import { BlocajCard, BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import {
  BLOCAJE,
  BLOCAJE_MATERII,
  blocajeForMaterie,
  claseForMaterie,
  clasaRoman,
  type BlocajMaterie,
} from "@/data/blocaje";

const PATH = "/harta-blocajelor";
const URL = `${SITE}${PATH}`;
const TITLE = "Harta Blocajelor — află ce noțiune îți lipsește | MeditatiiDirect.ro";
const DESCRIPTION =
  "Te-ai blocat la un exercițiu? Alege materia, clasa și blocajul: afli noțiunea care lipsește de obicei, primești o explicație clară, un exemplu rezolvat și o verificare scurtă. Matematică, română, fizică, chimie, engleză, informatică.";

const FAQS = [
  {
    q: "Ce este Harta Blocajelor?",
    a: "O hartă a legăturilor dintre noțiunile din programa școlară. Pentru fiecare blocaj frecvent (de exemplu „nu reușesc ecuațiile”) arată noțiunile anterioare pe care se sprijină (fracții, numere negative, calcul algebric), dă o explicație scurtă, un exemplu rezolvat și un exercițiu de verificare, apoi îți arată ce poți învăța în continuare.",
  },
  {
    q: "Pentru ce clase și materii este?",
    a: `În acest moment acoperă ${BLOCAJE.length} blocaje la matematică (clasele V–XII), limba română, fizică, chimie, engleză și informatică. Lista crește pe măsură ce adăugăm noțiuni; dacă blocajul tău nu apare încă, poți posta direct o cerere de meditații descriind problema.`,
  },
  {
    q: "Trebuie să îmi fac cont sau să trimit date?",
    a: "Nu. Exercițiile de verificare se rezolvă direct în pagină, fără cont; răspunsurile nu sunt trimise sau salvate nicăieri. Datele tale sunt cerute doar dacă alegi să postezi o cerere de meditații.",
  },
  {
    q: "Ce fac dacă explicația nu îmi ajunge?",
    a: "Fiecare pagină are un buton care pre-completează o cerere gratuită de meditații cu materia, nivelul și blocajul tău. Profesorii înscriși pe platformă îți trimit propuneri cu tarif și program, iar tu alegi.",
  },
];

export const Route = createFileRoute("/harta-blocajelor/")({
  // Head is built in the loader so the blocaje dataset stays in this route's lazy chunk.
  loader: () => ({ head: hartaIndexHead() }),
  head: ({ loaderData }) => loaderData?.head ?? {},
  component: Page,
});

function Page() {
  const [materie, setMaterie] = useState<BlocajMaterie | "">("");
  const [clasa, setClasa] = useState<number | "">("");
  const clase = materie ? claseForMaterie(materie) : [];
  const rezultate = materie
    ? blocajeForMaterie(materie).filter((n) => clasa === "" || n.clase.includes(clasa))
    : [];

  return (
    <article className="container-page py-10 lg:py-14">
      <BlocajeBreadcrumb items={[{ name: "Harta Blocajelor" }]} />

      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <Compass className="h-4 w-4" /> Gratuit · fără cont · direct în pagină
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Harta Blocajelor: află ce noțiune îți lipsește
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Un blocaj la ecuații pornește de multe ori de la fracții sau de la numerele negative; unul
          la derivate, de la limite sau de la formulele de calcul prescurtat. Alege materia, clasa
          și locul unde te-ai împotmolit — îți arătăm noțiunea care lipsește de obicei, o explicăm
          scurt, rezolvăm un exemplu și te lăsăm să verifici singur dacă ai înțeles.
        </p>
        <Link to="/scaner-lacune" className="btn-primary mt-6 h-11 px-5">
          Nu știi de unde vine? Fă testul de lacune
        </Link>
      </header>

      <section aria-labelledby="alege" className="mt-8 card-soft p-5 sm:p-6">
        <h2 id="alege" className="text-lg font-semibold inline-flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" /> Unde te-ai blocat?
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="hb-materie" className="text-sm font-bold">
              Materia
            </label>
            <select
              id="hb-materie"
              value={materie}
              onChange={(e) => {
                setMaterie(e.target.value as BlocajMaterie | "");
                setClasa("");
              }}
              className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm"
            >
              <option value="">Alege materia</option>
              {BLOCAJE_MATERII.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="hb-clasa" className="text-sm font-bold">
              Clasa
            </label>
            <select
              id="hb-clasa"
              value={clasa}
              disabled={!materie}
              onChange={(e) => setClasa(e.target.value ? Number(e.target.value) : "")}
              className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm disabled:opacity-50"
            >
              <option value="">Toate clasele</option>
              {clase.map((c) => (
                <option key={c} value={c}>
                  Clasa a {clasaRoman(c)}-a
                </option>
              ))}
            </select>
          </div>
        </div>

        {materie && (
          <div className="mt-5" aria-live="polite">
            <p className="text-sm text-muted-foreground">
              {rezultate.length} {rezultate.length === 1 ? "blocaj" : "blocaje"} la{" "}
              {BLOCAJE_MATERII.find((m) => m.slug === materie)?.nameLower}
              {clasa ? `, clasa a ${clasaRoman(clasa)}-a` : ""}.{" "}
              <Link
                to="/harta-blocajelor/$materie"
                params={{ materie }}
                className="text-primary underline"
              >
                Vezi harta completă a materiei
              </Link>
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rezultate.map((n) => (
                <BlocajCard key={n.slug} n={n} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: GitBranch,
            title: "Vezi lanțul de noțiuni",
            text: "Fiecare blocaj arată noțiunile anterioare pe care se sprijină. Dacă una lipsește, începi de acolo, nu de la exercițiul care nu iese.",
          },
          {
            icon: Lightbulb,
            title: "Explicație + exemplu rezolvat",
            text: "Explicăm regula pe scurt, cu greșelile tipice, apoi rezolvăm un exemplu pas cu pas, cum l-ai scrie pe caiet.",
          },
          {
            icon: MessageSquareText,
            title: "Verifici, apoi mergi mai departe",
            text: "Un exercițiu scurt îți spune dacă ai înțeles. Apoi vezi ce urmează sau ceri, gratuit, un meditator pentru capitolul respectiv.",
          },
        ].map((it) => (
          <div key={it.title} className="card-soft p-6">
            <it.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 font-bold">{it.title}</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Hărțile pe materii</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Fiecare materie are propria hartă, ordonată pe clase. Pornește de la clasa ta sau caută
          direct blocajul de mai jos.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOCAJE_MATERII.map((m) => {
            const nodes = blocajeForMaterie(m.slug);
            const cl = claseForMaterie(m.slug);
            return (
              <Link
                key={m.slug}
                to="/harta-blocajelor/$materie"
                params={{ materie: m.slug }}
                className="card-soft group p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-pop)]"
              >
                <h3 className="text-lg font-semibold group-hover:text-primary">{m.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {nodes.length} blocaje · clasele {clasaRoman(cl[0])}–
                  {clasaRoman(cl[cl.length - 1])}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.descriere}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {BLOCAJE_MATERII.map((m) => (
        <section key={m.slug} className="mt-12" aria-labelledby={`lista-${m.slug}`}>
          <h2 id={`lista-${m.slug}`} className="text-xl font-bold">
            Blocaje frecvente la {m.nameLower}
          </h2>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {blocajeForMaterie(m.slug).map((n) => (
              <li key={n.slug}>
                <Link
                  to="/harta-blocajelor/$materie/$blocaj"
                  params={{ materie: n.materie, blocaj: n.slug }}
                  className="text-foreground/90 hover:text-primary hover:underline"
                >
                  {n.titlu}
                </Link>{" "}
                <span className="text-xs text-muted-foreground">
                  ({clasaRoman(Math.min(...n.clase))}
                  {n.clase.length > 1 ? `–${clasaRoman(Math.max(...n.clase))}` : ""})
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                {f.q}
                <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14 card-soft bg-gradient-to-br from-primary-soft to-card p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Blocajul tău nu e pe hartă?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Descrie-l într-o cerere gratuită; profesorii interesați îți trimit propuneri cu tarif
              și program.
            </p>
          </div>
          <Link to="/meditatii" className="btn-primary h-11 px-5">
            Cere meditații gratuit
          </Link>
        </div>
      </section>
    </article>
  );
}

function hartaIndexHead() {
  return {
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
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbLd([{ name: "Harta Blocajelor", path: PATH }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Harta Blocajelor",
          url: URL,
          description: DESCRIPTION,
          inLanguage: "ro-RO",
          isPartOf: { "@id": `${SITE}/#website` },
          about: BLOCAJE_MATERII.map((m) => ({ "@type": "Thing", name: m.name })),
        }),
      },
    ],
  };
}
