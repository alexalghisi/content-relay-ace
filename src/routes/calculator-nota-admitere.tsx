// Calculator notă admitere: /calculator-nota-admitere
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const SITE = "https://meditatiidirect.ro";

const FAQ = [
  {
    q: "Cum se calculează nota de admitere la facultate?",
    a: "Fiecare facultate stabilește propria formulă: de obicei o pondere pentru media de bacalaureat și o pondere pentru nota de la examenul de admitere sau de la o probă specifică. Calculatorul de aici folosește ponderile pe care le introduci tu, exact ca în metodologia facultății.",
  },
  {
    q: "Media de bacalaureat contează la admitere?",
    a: "La multe facultăți da, uneori în proporție de 100% (admitere pe dosar), alteori 20–50% combinat cu examenul scris. Verifică metodologia facultății pentru anul curent.",
  },
  {
    q: "Ce înseamnă admitere pe dosar?",
    a: "Clasificarea se face exclusiv pe baza mediei de bacalaureat sau a unei note de la o probă din BAC, fără examen suplimentar.",
  },
];

export const Route = createFileRoute("/calculator-nota-admitere")({
  head: () => {
    const url = `${SITE}/calculator-nota-admitere`;
    const title = "Calculator notă admitere facultate 2026 | MeditatiiDirect.ro";
    const desc =
      "Calculează nota finală de admitere la facultate: introdu media de bacalaureat, nota la examenul de admitere și ponderile din metodologie. Rezultat instant.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: "calculator nota admitere, nota admitere facultate, medie admitere, admitere pe dosar" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
    };
  },
  component: CalculatorNotaAdmitere,
});

const num = (v: string) => {
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) ? n : null;
};

function CalculatorNotaAdmitere() {
  const [mediaBac, setMediaBac] = useState("");
  const [notaExamen, setNotaExamen] = useState("");
  const [pondereBac, setPondereBac] = useState("50");

  const rezultat = useMemo(() => {
    const mb = num(mediaBac);
    const ne = num(notaExamen);
    const pb = num(pondereBac);
    if (mb === null || ne === null || pb === null) return null;
    if (mb < 1 || mb > 10 || ne < 1 || ne > 10 || pb < 0 || pb > 100) return null;
    const nota = (mb * pb + ne * (100 - pb)) / 100;
    return Math.floor(nota * 100) / 100;
  }, [mediaBac, notaExamen, pondereBac]);

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li className="text-foreground">Calculator notă admitere</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Calculator notă admitere la facultate</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Pune media de bacalaureat, nota de la examenul de admitere și ponderea din metodologia facultății — vezi imediat nota finală cu care intri în clasament.
        </p>
      </header>

      <section className="card-soft mt-8 max-w-2xl p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold"><Calculator className="h-5 w-5 text-primary" /> Datele tale</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="text-sm">
            <span className="mb-1 block font-medium">Media de bacalaureat</span>
            <input className="field-input" inputMode="decimal" placeholder="ex. 8,70" value={mediaBac} onChange={(e) => setMediaBac(e.target.value)} />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Nota la examenul de admitere</span>
            <input className="field-input" inputMode="decimal" placeholder="ex. 9,10" value={notaExamen} onChange={(e) => setNotaExamen(e.target.value)} />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Pondere BAC (%)</span>
            <input className="field-input" inputMode="numeric" placeholder="ex. 50" value={pondereBac} onChange={(e) => setPondereBac(e.target.value)} />
          </label>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Restul până la 100% se aplică automat notei de la examen. Pentru admitere pe dosar, pune ponderea BAC la 100.
        </p>

        <div aria-live="polite" className="mt-5">
          {rezultat !== null ? (
            <div className="rounded-xl border border-primary/30 bg-primary-soft/50 p-4">
              <p className="text-2xl font-bold">Nota finală de admitere: {rezultat.toFixed(2)}</p>
              <p className="mt-1 text-sm text-muted-foreground">Verifică în metodologia facultății criteriile de departajare la note egale.</p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Completează toate câmpurile cu valori valide (note 1–10, pondere 0–100).</p>
          )}
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente despre nota de admitere</h2>
        <div className="mt-4 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="card-soft p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Pregătire pentru admitere</h2>
        <p className="mt-2 text-muted-foreground">Subiecte din anii trecuți și profesori care lucrează exact pe ele.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/subiecte-admitere" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Subiecte admitere</Link>
          <Link to="/calculator-medie-bac" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Calculator medie BAC</Link>
          <Link to="/meditatii" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Cere ofertă gratuit</Link>
        </div>
      </section>
    </main>
  );
}
