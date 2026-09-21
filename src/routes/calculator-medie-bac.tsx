// Calculator medie BAC: /calculator-medie-bac
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const SITE = "https://meditatiidirect.ro";

const FAQ = [
  {
    q: "Cum se calculează media la BAC?",
    a: "Media generală de bacalaureat este media aritmetică a notelor de la probele scrise: Limba română (E.a), proba obligatorie a profilului (E.c) și proba la alegere a profilului (E.d). Se calculează cu două zecimale, fără rotunjire.",
  },
  {
    q: "Ce medie trebuie ca să promovezi bacalaureatul?",
    a: "Media generală trebuie să fie cel puțin 6,00, iar la fiecare probă scrisă nota minimă este 5,00. Probele de competențe (lingvistice și digitale) nu intră în medie, dar trebuie susținute.",
  },
  {
    q: "Notele de la competențe intră în media BAC?",
    a: "Nu. Probele A (competențe lingvistice la română), B (limbă străină) și D (competențe digitale) se evaluează separat, prin certificate, și nu influențează media generală.",
  },
  {
    q: "Media din liceu contează la BAC?",
    a: "Nu intră în media de bacalaureat. Media anilor de liceu contează însă la admiterea la unele facultăți.",
  },
];

export const Route = createFileRoute("/calculator-medie-bac")({
  head: () => {
    const url = `${SITE}/calculator-medie-bac`;
    const title = "Calculator medie BAC 2026 — află instant dacă promovezi | MeditatiiDirect.ro";
    const desc =
      "Calculator medie bacalaureat: introdu notele de la română, proba obligatorie și proba la alegere și afli media generală cu două zecimale și dacă ai promovat.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: "calculator medie bac, cum se calculeaza media la bac, medie bacalaureat, nota minima bac" },
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
  component: CalculatorMedieBac,
});

function parseNota(v: string): number | null {
  const n = Number(v.replace(",", "."));
  if (!Number.isFinite(n) || n < 1 || n > 10) return null;
  return n;
}

function CalculatorMedieBac() {
  const [romana, setRomana] = useState("");
  const [obligatorie, setObligatorie] = useState("");
  const [alegere, setAlegere] = useState("");

  const rezultat = useMemo(() => {
    const notes = [parseNota(romana), parseNota(obligatorie), parseNota(alegere)];
    if (notes.some((n) => n === null)) return null;
    const vals = notes as number[];
    const medie = Math.floor((vals.reduce((a, b) => a + b, 0) / 3) * 100) / 100;
    const toateTrec = vals.every((n) => n >= 5);
    return { medie, promovat: toateTrec && medie >= 6, toateTrec };
  }, [romana, obligatorie, alegere]);

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li className="text-foreground">Calculator medie BAC</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Calculator medie BAC</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Introdu cele trei note de la probele scrise și vezi pe loc media generală, calculată cu două zecimale (fără rotunjire), și dacă ai promovat bacalaureatul.
        </p>
      </header>

      <section className="card-soft mt-8 max-w-2xl p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold"><Calculator className="h-5 w-5 text-primary" /> Notele tale</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="text-sm">
            <span className="mb-1 block font-medium">Limba română (E.a)</span>
            <input className="field-input" inputMode="decimal" placeholder="ex. 8,50" value={romana} onChange={(e) => setRomana(e.target.value)} />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Proba obligatorie (E.c)</span>
            <input className="field-input" inputMode="decimal" placeholder="ex. 7,25" value={obligatorie} onChange={(e) => setObligatorie(e.target.value)} />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Proba la alegere (E.d)</span>
            <input className="field-input" inputMode="decimal" placeholder="ex. 9,00" value={alegere} onChange={(e) => setAlegere(e.target.value)} />
          </label>
        </div>

        <div aria-live="polite" className="mt-5">
          {rezultat ? (
            <div className={`rounded-xl border p-4 ${rezultat.promovat ? "border-primary/30 bg-primary-soft/50" : "border-amber-500/30 bg-amber-500/10"}`}>
              <p className="text-2xl font-bold">Media generală: {rezultat.medie.toFixed(2)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {rezultat.promovat
                  ? "Felicitări — ai promovat: toate notele sunt peste 5,00 și media depășește 6,00."
                  : !rezultat.toateTrec
                    ? "Bacalaureatul nu e promovat: la cel puțin o probă nota este sub 5,00."
                    : "Media este sub 6,00, deci bacalaureatul nu este promovat."}
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Completează toate cele trei note (între 1 și 10) ca să vezi media.</p>
          )}
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente despre media de bacalaureat</h2>
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
        <h2 className="text-xl font-semibold">Vrei o medie mai mare?</h2>
        <p className="mt-2 text-muted-foreground">Exersează pe variantele oficiale, apoi cere ofertă de la profesori verificați.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/bac" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Arhiva BAC</Link>
          <Link to="/rezolvari" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Rezolvări explicate</Link>
          <Link to="/meditatii" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Cere ofertă gratuit</Link>
        </div>
      </section>
    </main>
  );
}
