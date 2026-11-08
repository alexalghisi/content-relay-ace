// Pagina „pret meditatii” / „cat costa meditatiile”. Toate cifrele vin din getSubjectPriceTable
// (anunțuri active, oferte publicate și propuneri trimise elevilor — date reale de pe platformă).
// O materie fără destule tarife reale nu primește niciun număr: tariful îl propune profesorul în ofertă.
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { getCityBySlug } from "@/data/cities";
import { LeadCta } from "@/components/lead-cta";
import { faqJsonLd } from "@/components/seo-landing";
import {
  getSubjectPriceTable,
  pretAfisabil,
  type PriceSummary,
  type SubjectPriceTable,
} from "@/lib/market-stats.functions";
import { ORASE_MARI } from "@/lib/linkuri-contextuale";

const SITE = "https://meditatiidirect.ro";
const URL = `${SITE}/preturi-meditatii`;
// Cloudflare Workers freeze the clock at 0 in module scope: read the year per request.
const anul = () => Math.max(2026, new Date().getFullYear());

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

const FARA_DATE =
  "Tariful îl stabilește fiecare profesor în oferta lui, înainte să accepți: depinde de materie, nivel, format (online sau la domiciliu) și experiență. Postezi gratuit o cerere și compari propunerile primite.";

function faqsPreturi(overall: PriceSummary | null, updatedAt: string | null) {
  return [
    {
      q: "Cât costă o oră de meditații?",
      a: overall
        ? `Pe MeditatiiDirect, cele ${overall.n} tarife reale (anunțuri active, oferte și propuneri trimise elevilor) sunt între ${overall.min} și ${overall.max} lei/oră, cu mediana de ${overall.median} lei/oră. Date actualizate la ${fmtDate(updatedAt!)}.`
        : FARA_DATE,
    },
    {
      q: "De ce diferă prețul meditațiilor între profesori?",
      a: "Contează nivelul cerut (recuperare la gimnaziu, Evaluarea Națională, BAC, admitere), formatul, durata ședinței, orașul și cât de ocupat e profesorul. Compară prețul pe oră și întreabă ce include: teme corectate, materiale, variante de examen.",
    },
    {
      q: "Meditațiile online sunt mai ieftine?",
      a: "Adesea, pentru că profesorul nu are drum de făcut, dar nu întotdeauna. În cerere poți alege online, față în față sau ambele și compari ofertele primite.",
    },
    {
      q: "Se plătește în avans sau după lecție?",
      a: "Se stabilește direct cu profesorul. Platforma nu intermediază plățile și nu percepe comision.",
    },
    {
      q: "Există reduceri pentru pachete sau grupe?",
      a: "Unii profesori oferă un tarif diferit pentru pachete de ședințe sau pentru grupe mici. Întreabă direct în chat, înainte să accepți propunerea.",
    },
    {
      q: "Cât costă o ședință de probă?",
      a: "Depinde de profesor: unii fac prima ședință gratuit sau la tarif redus, ca să evalueze nivelul elevului. Verifică în anunț sau întreabă în chat.",
    },
  ];
}

export const Route = createFileRoute("/preturi-meditatii/")({
  loader: async () => {
    let table: SubjectPriceTable | null = null;
    try {
      table = await getSubjectPriceTable();
    } catch (err) {
      console.error("price table failed", err);
    }
    return { table };
  },
  head: ({ loaderData }) => {
    const table = loaderData?.table ?? null;
    const overall = pretAfisabil(table?.overall);
    const title = `Preț meditații ${anul()} — tarife reale pe materie`;
    const desc = overall
      ? `Cât costă meditațiile: mediana reală pe MeditatiiDirect e ${overall.median} lei/oră, din ${overall.n} tarife (${overall.min}–${overall.max} lei). Tabel pe materii, fără comision.`
      : "Cât costă meditațiile: tariful îl propune fiecare profesor în ofertă. Vezi tarifele reale pe materii și postezi gratuit o cerere, fără comision.";
    const faqs = faqsPreturi(overall, table?.updatedAt ?? null);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: URL },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: URL }],
      scripts: [
        ...(overall
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: "Meditații",
                  description: desc,
                  url: URL,
                  provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "RON",
                    lowPrice: overall.min,
                    highPrice: overall.max,
                    offerCount: overall.n,
                  },
                }),
              },
            ]
          : []),
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Prețuri meditații", item: URL },
            ],
          }),
        },
      ],
    };
  },
  component: PricePage,
});

function PricePage() {
  const { table } = Route.useLoaderData();
  const overall = pretAfisabil(table?.overall);
  const faqs = faqsPreturi(overall, table?.updatedAt ?? null);
  const pret = new Map((table?.subjects ?? []).map((x) => [x.slug, pretAfisabil(x.price)]));
  // Materiile cu tarife reale întâi, apoi celelalte în ordinea obișnuită.
  const materii = [...SUBJECTS_SEO].sort(
    (a, b) => (pret.get(b.slug) ? 1 : 0) - (pret.get(a.slug) ? 1 : 0),
  );

  return (
    <article className="container-page py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <a href="/" className="hover:text-primary">
              Acasă
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground/80">
            Prețuri meditații
          </li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Preț meditații {anul()}: tarife reale pe materie
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed" data-testid="pret-intro">
          {overall ? (
            <>
              Pe MeditatiiDirect, tarifele reale sunt între{" "}
              <strong>
                {overall.min} și {overall.max} lei/oră
              </strong>
              , cu mediana de <strong>{overall.median} lei/oră</strong> — calculat din {overall.n}{" "}
              tarife (anunțuri active, oferte și propuneri trimise elevilor). Prețul îl stabilești
              direct cu profesorul; platforma nu percepe comision.
            </>
          ) : (
            <>
              Tariful îl stabilește fiecare profesor în oferta lui, înainte să accepți.{" "}
              <Link to="/meditatii" className="text-primary underline">
                Postează gratuit o cerere
              </Link>{" "}
              și compari propunerile primite, cu prețul pe oră și programul. Fără comision.
            </>
          )}
        </p>
        {table && (
          <p className="mt-2 text-xs text-muted-foreground">
            Actualizat la {fmtDate(table.updatedAt)}.
          </p>
        )}
        {!table && (
          <p role="status" className="mt-2 text-sm text-muted-foreground">
            Datele de pe platformă nu pot fi încărcate momentan; reîncarcă pagina în câteva minute.
          </p>
        )}
      </header>

      {/* TABEL MATERII — doar date reale */}
      <section className="mt-10" data-testid="tabel-preturi">
        <h2 className="text-2xl font-bold">Tarife pe materie</h2>
        <p className="mt-2 text-muted-foreground">
          Calculate din tarifele reale de pe platformă, la nivel național. O materie apare cu cifre
          doar când are cel puțin câteva tarife publicate; altfel, tariful îl propune profesorul în
          ofertă.
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">Tarife reale pentru meditații, pe materie</caption>
            <thead className="bg-muted/50 text-left">
              <tr>
                <th scope="col" className="p-3 font-semibold">
                  Materie
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Tarif median
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Interval
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Tarife
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {materii.map((s) => {
                const p = pret.get(s.slug);
                return (
                  <tr key={s.slug}>
                    <th scope="row" className="p-3 text-left font-medium">
                      <Link
                        to="/preturi-meditatii/$materie"
                        params={{ materie: s.slug }}
                        className="hover:text-primary"
                      >
                        Preț meditații {s.nameLower}
                      </Link>
                    </th>
                    {p ? (
                      <>
                        <td className="p-3 font-semibold">{p.median} lei/oră</td>
                        <td className="p-3">
                          {p.min}–{p.max} lei/oră
                        </td>
                        <td className="p-3">{p.n}</td>
                      </>
                    ) : (
                      <td colSpan={3} className="p-3 text-muted-foreground">
                        Tariful îl propune profesorul în ofertă
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <CalculatorBuget initialRate={overall?.median ?? null} />

      {/* Banda pentru profesori */}
      <section className="card-soft mt-8 flex flex-col items-start gap-4 bg-gradient-to-br from-primary-soft to-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-lg font-bold">Predai și vrei elevi noi?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cont gratuit, profil real în 5 minute și vezi cererile elevilor cu materie, nivel, oraș
            și buget. Zero comision.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/pentru-profesori" className="btn-primary h-11 px-5">
            Devino profesor
          </Link>
          <Link to="/cereri" className="btn-outline h-11 px-5">
            Vezi cererile
          </Link>
        </div>
      </section>

      {/* ORAȘE — fără cifre aici; fiecare pagină de oraș are propriile date reale */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Tarife și profesori pe oraș</h2>
        <p className="mt-2 text-muted-foreground">
          Pe pagina fiecărui oraș vezi tarifele reale ale profesorilor care predau acolo sau online,
          anunțurile active și cererile recente.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {ORASE_MARI.map((o) => (
            <Link
              key={o}
              to="/meditatii-in/$oras"
              params={{ oras: o }}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              Meditații {getCityBySlug(o)!.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <h2 className="text-2xl font-bold text-foreground">
          Ce influențează prețul unei meditații
        </h2>
        <p>
          Cel mai important factor este nivelul și miza: o oră de recapitulare la gimnaziu nu e
          același lucru cu pregătirea pentru admiterea la Medicină, unde profesorul lucrează pe
          grile oficiale și pe bibliografia universității.
        </p>
        <p>
          Contează apoi experiența și programul profesorului (înainte de examene locurile se ocupă
          repede) și formatul — la domiciliu, timpul de deplasare intră de obicei în preț, în timp
          ce la{" "}
          <Link to="/meditatii-online" className="text-primary underline">
            meditațiile online
          </Link>{" "}
          nu există drum. Compară mereu prețul pe oră, nu pe ședință.
        </p>
        <p>
          Pentru examene, bugetul se planifică pe termen lung. Vezi ghidul de{" "}
          <Link to="/pregatire-bacalaureat" className="text-primary underline">
            pregătire pentru Bacalaureat
          </Link>{" "}
          și{" "}
          <Link to="/pregatire-admitere-medicina" className="text-primary underline">
            pregătirea pentru admiterea la Medicină
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente despre prețuri</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                {f.q}
                <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <LeadCta />
      </div>
    </article>
  );
}

/** Bugetul lunar pornind de la tariful din oferta primită (introdus de utilizator). */
function CalculatorBuget({ initialRate }: { initialRate: number | null }) {
  const [tarif, setTarif] = useState<string>(initialRate ? String(initialRate) : "");
  const [sedinte, setSedinte] = useState(2);
  const [durata, setDurata] = useState(1.5);
  const t = Number(tarif);
  const lunar = t > 0 ? Math.round(t * durata * sedinte * 4.33) : null;
  return (
    <section className="card-soft mt-10 p-6 sm:p-8">
      <h2 className="text-xl font-bold">Calculator buget lunar</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Introdu tariful pe oră din oferta primită
        {initialRate ? " (pornim de la mediana reală de pe platformă)" : ""} și vezi cât înseamnă pe
        lună.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div>
          <label htmlFor="calc-tarif" className="text-xs text-muted-foreground">
            Tarif (lei/oră)
          </label>
          <input
            id="calc-tarif"
            type="number"
            inputMode="numeric"
            min={0}
            value={tarif}
            onChange={(e) => setTarif(e.target.value)}
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm"
          />
        </div>
        <div>
          <label htmlFor="calc-ore" className="text-xs text-muted-foreground">
            Ședințe pe săptămână
          </label>
          <select
            id="calc-ore"
            value={sedinte}
            onChange={(e) => setSedinte(Number(e.target.value))}
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="calc-durata" className="text-xs text-muted-foreground">
            Durata ședinței
          </label>
          <select
            id="calc-durata"
            value={durata}
            onChange={(e) => setDurata(Number(e.target.value))}
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm"
          >
            <option value={1}>60 minute</option>
            <option value={1.5}>90 minute</option>
            <option value={2}>120 minute</option>
          </select>
        </div>
      </div>
      <div className="mt-5 rounded-xl bg-primary-soft p-4">
        <p className="text-xs text-muted-foreground">Cost lunar</p>
        <p className="text-2xl font-bold text-primary">
          {lunar != null ? `${lunar} lei / lună` : "—"}
        </p>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Calcul pe 4,33 săptămâni/lună. Tariful final îl stabilești cu profesorul.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link to="/meditatii" className="btn-primary h-11 px-5">
          Cere oferte gratuit
        </Link>
        <Link to="/pentru-profesori" className="btn-outline h-11 px-5">
          Sunt profesor
        </Link>
      </div>
    </section>
  );
}
