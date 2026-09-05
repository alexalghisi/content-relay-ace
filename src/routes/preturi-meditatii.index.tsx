import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { CITIES } from "@/data/cities";
import { LeadCta } from "@/components/lead-cta";
import { faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/preturi-meditatii";
const TITLE = "Preț meditații 2026 — tarife pe materie și oraș";
const DESC =
  "Prețuri meditații în România 2026: tabel complet cu tarife pe materie (30–200 lei/oră), diferențe între orașe și calculator de cost lunar. Fără comision.";

const faqs = [
  { q: "Cât costă o oră de meditații în România în 2026?", a: "Media națională este de aproximativ 80 lei/oră. Gimnaziul pornește de la 30–50 lei/oră, liceul și pregătirea de Bacalaureat sunt între 70 și 120 lei/oră, iar pregătirea pentru admitere la Medicină sau Politehnică ajunge la 150–200 lei/oră." },
  { q: "De ce diferă prețul meditațiilor de la un oraș la altul?", a: "Tarifele urmăresc puterea de cumpărare locală și cererea. În București prețurile sunt cu circa 20% peste media națională, în Cluj-Napoca cu 15%, iar în orașele mici pot fi cu 15–20% sub medie." },
  { q: "Meditațiile online sunt mai ieftine?", a: "De regulă da, cu 10–20% mai ieftine, pentru că profesorul nu se deplasează. În plus, poți alege un profesor dintr-un oraș cu tarife mai mici." },
  { q: "Se plătește în avans sau după lecție?", a: "Se stabilește direct cu profesorul. Cel mai frecvent, plata se face la finalul fiecărei ședințe sau la pachet de 4 ședințe. Platforma nu intermediază plățile și nu percepe comision." },
  { q: "Există reduceri pentru pachete sau grupe?", a: "Mulți profesori oferă un tarif mai mic la pachete de 8–10 ședințe sau pentru grupe de 2–3 elevi, unde costul pe elev poate scădea cu 30–40%." },
  { q: "Cât costă o ședință de probă?", a: "Unii profesori oferă prima ședință gratuit sau la tarif redus, ca să evalueze nivelul elevului. Verifică în anunț sau întreabă direct în chat." },
];

export const Route = createFileRoute("/preturi-meditatii/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
            { "@type": "ListItem", position: 2, name: "Prețuri meditații", item: URL },
          ],
        }),
      },
    ],
  }),
  component: PricePage,
});

function PricePage() {
  const [materie, setMaterie] = useState("matematica");
  const [oras, setOras] = useState("bucuresti");
  const [oreSaptamana, setOre] = useState(2);
  const [durata, setDurata] = useState(1.5);

  const calc = useMemo(() => {
    const s = SUBJECTS_SEO.find((x) => x.slug === materie)!;
    const c = CITIES.find((x) => x.slug === oras)!;
    const tarif = Math.round(s.pretMediu * c.priceIndex);
    const lunar = Math.round(tarif * durata * oreSaptamana * 4.33);
    return { tarif, lunar, s, c };
  }, [materie, oras, oreSaptamana, durata]);

  return (
    <article className="container-page py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><a href="/" className="hover:text-primary">Acasă</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground/80">Prețuri meditații</li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Preț meditații 2026: tarife pe materie și oraș
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Tabel actualizat cu tarifele reale practicate de profesorii de pe MeditatiiDirect.ro, plus un calculator
          rapid pentru bugetul lunar. Prețurile sunt cele convenite direct între elev și profesor — platforma nu
          percepe comision.
        </p>
      </header>

      {/* CALCULATOR */}
      <section className="card-soft mt-8 p-6 sm:p-8">
        <h2 className="text-xl font-bold">Calculator cost meditații</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-4">
          <div>
            <label htmlFor="calc-materie" className="text-xs text-muted-foreground">Materie</label>
            <select id="calc-materie" value={materie} onChange={(e) => setMaterie(e.target.value)}
              className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm">
              {SUBJECTS_SEO.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="calc-oras" className="text-xs text-muted-foreground">Oraș</label>
            <select id="calc-oras" value={oras} onChange={(e) => setOras(e.target.value)}
              className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm">
              {CITIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="calc-ore" className="text-xs text-muted-foreground">Ședințe pe săptămână</label>
            <select id="calc-ore" value={oreSaptamana} onChange={(e) => setOre(Number(e.target.value))}
              className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm">
              {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="calc-durata" className="text-xs text-muted-foreground">Durata ședinței</label>
            <select id="calc-durata" value={durata} onChange={(e) => setDurata(Number(e.target.value))}
              className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm">
              <option value={1}>60 minute</option>
              <option value={1.5}>90 minute</option>
              <option value={2}>120 minute</option>
            </select>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-primary-soft p-4">
            <p className="text-xs text-muted-foreground">Tarif estimat</p>
            <p className="text-2xl font-bold text-primary">{calc.tarif} lei / oră</p>
          </div>
          <div className="rounded-xl bg-primary-soft p-4">
            <p className="text-xs text-muted-foreground">Cost lunar estimat</p>
            <p className="text-2xl font-bold text-primary">{calc.lunar} lei / lună</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Estimare orientativă bazată pe tariful mediu la {calc.s.nameLower} în {calc.c.name} și pe 4,33 săptămâni/lună.
          Tariful final se stabilește cu profesorul.
        </p>
      </section>

      {/* TABEL MATERII */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Tabel prețuri meditații pe materie</h2>
        <p className="mt-2 text-muted-foreground">
          Intervale de preț valabile pentru 2026, la nivel național. Pentru orașele mari adaugă 10–20%.
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">Prețuri meditații pe materie în România, 2026</caption>
            <thead className="bg-muted/50 text-left">
              <tr>
                <th scope="col" className="p-3 font-semibold">Materie</th>
                <th scope="col" className="p-3 font-semibold">Preț minim</th>
                <th scope="col" className="p-3 font-semibold">Preț mediu</th>
                <th scope="col" className="p-3 font-semibold">Preț maxim</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {SUBJECTS_SEO.map((s) => (
                <tr key={s.slug}>
                  <th scope="row" className="p-3 text-left font-medium">
                    <a href={`/meditatii-${s.slug}-bucuresti`} className="hover:text-primary">
                      Meditații {s.nameLower}
                    </a>
                  </th>
                  <td className="p-3">{s.pretMin} lei/oră</td>
                  <td className="p-3 font-semibold">{s.pretMediu} lei/oră</td>
                  <td className="p-3">{s.pretMax} lei/oră</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TABEL ORASE */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Cum diferă prețurile de la oraș la oraș</h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <caption className="sr-only">Indicele local de preț pentru meditații</caption>
            <thead className="bg-muted/50 text-left">
              <tr>
                <th scope="col" className="p-3 font-semibold">Oraș</th>
                <th scope="col" className="p-3 font-semibold">Județ</th>
                <th scope="col" className="p-3 font-semibold">Tarif mediu matematică</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {CITIES.slice(0, 15).map((c) => (
                <tr key={c.slug}>
                  <th scope="row" className="p-3 text-left font-medium">
                    <a href={`/meditatii-matematica-${c.slug}`} className="hover:text-primary">{c.name}</a>
                  </th>
                  <td className="p-3">{c.county}</td>
                  <td className="p-3 font-semibold">{Math.round(80 * c.priceIndex)} lei/oră</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <h2 className="text-2xl font-bold text-foreground">Ce influențează prețul unei meditații</h2>
        <p>
          Cel mai important factor este nivelul elevului. O oră de recapitulare la gimnaziu costă semnificativ mai
          puțin decât o ședință de pregătire pentru admiterea la Medicină, unde profesorul lucrează pe grile
          oficiale și pe bibliografia universității.
        </p>
        <p>
          Al doilea factor este experiența profesorului: un profesor titular cu gradul I și rezultate constante la
          olimpiade sau la Bacalaureat cere de obicei cu 30–50% mai mult decât un student la anii terminali.
          Al treilea factor este formatul — lecțiile la domiciliul elevului includ adesea un cost de deplasare,
          în timp ce <Link to="/meditatii-online" className="text-primary underline">meditațiile online</Link> sunt
          mai ieftine.
        </p>
        <p>
          Pentru examene, bugetul se planifică pe termen lung: o pregătire de Bacalaureat pornită în octombrie,
          cu două ședințe pe săptămână, înseamnă în medie 8 luni de meditații. Vezi detalii în ghidul de{" "}
          <Link to="/pregatire-bacalaureat" className="text-primary underline">pregătire pentru Bacalaureat</Link> și în{" "}
          <Link to="/pregatire-admitere-medicina" className="text-primary underline">pregătirea pentru admiterea la Medicină</Link>.
        </p>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente despre prețuri</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                {f.q}<span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
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
