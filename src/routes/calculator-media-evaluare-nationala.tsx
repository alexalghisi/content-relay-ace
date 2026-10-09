// Calculator medie Evaluarea Națională: /calculator-media-evaluare-nationala
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const SITE = "https://meditatiidirect.ro";

const FAQ = [
  {
    q: "Media se rotunjește?",
    a: "Nu. Media generală de evaluare finală se calculează ca medie aritmetică cu două zecimale, fără rotunjire. 8,749 rămâne 8,74, nu 8,75.",
  },
  {
    q: "Câte note introduci în calculator?",
    a: "Două pentru elevii de la majoritate (limba română și matematică) și trei pentru elevii de la minoritățile naționale (se adaugă limba maternă).",
  },
  {
    q: "Ce medie trebuie ca să promovezi Evaluarea Națională?",
    a: "Media finală trebuie să fie cel puțin 5,00. Notele sub 5,00 la o probă nu anulează promovarea în mod automat, dar trag media în jos.",
  },
  {
    q: "Calculatorul este oficial?",
    a: "Este un calculator de antrenament, construit pe regula mediei aritmetice cu două zecimale. Rezultatul oficial îl primești de la școală și de pe edu.ro.",
  },
];

/** Media aritmetică cu două zecimale, fără rotunjire (trunchiere). */
function mediaDouaZecimale(note: number[]): number {
  const suma = note.reduce((a, b) => a + b, 0);
  return Math.floor((suma / note.length) * 100) / 100;
}

function parseNota(v: string): number | null {
  const n = Number(v.replace(",", "."));
  if (!Number.isFinite(n) || n < 1 || n > 10) return null;
  return n;
}

export const Route = createFileRoute("/calculator-media-evaluare-nationala")({
  head: () => {
    const url = `${SITE}/calculator-media-evaluare-nationala`;
    const title = "Calculator medie Evaluarea Națională 2026 — două zecimale, fără rotunjire | MeditatiiDirect.ro";
    const desc =
      "Introdu notele de la română, matematică și limba maternă și vezi media Evaluării Naționale cu două zecimale, fără rotunjire, și dacă ai media de promovare (5,00).";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: "calculator medie evaluare nationala, media evaluare nationala, cum se calculeaza media evaluare nationala, evaluare nationala 2026" },
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
  component: CalculatorMedieEN,
});

function CalculatorMedieEN() {
  const [romana, setRomana] = useState("");
  const [matematica, setMatematica] = useState("");
  const [materna, setMaterna] = useState("");

  const rezultat = useMemo(() => {
    const r = parseNota(romana);
    const m = parseNota(matematica);
    const lb = materna.trim() ? parseNota(materna) : 0;
    if (r === null || m === null || (materna.trim() && lb === null)) return null;
    const note = [r, m, ...(lb ? [lb] : [])];
    const medie = mediaDouaZecimale(note);
    return { medie, note, promovat: medie >= 5, celMaiSlab: Math.min(...note) };
  }, [romana, matematica, materna]);

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/evaluare-nationala" className="hover:text-primary">Evaluarea Națională</Link></li><li>›</li>
          <li className="text-foreground">Calculator de medie</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Calculator medie Evaluarea Națională</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Introdu notele de la probele scrise și vezi media cu două zecimale, calculată exact ca în metodologie:
          medie aritmetică, fără rotunjire.
        </p>
      </header>

      <section className="card-soft mt-8 max-w-2xl p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold"><Calculator className="h-5 w-5 text-primary" /> Notele tale</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="text-sm">
            <span className="mb-1 block font-medium">Limba română</span>
            <input className="field-input" inputMode="decimal" placeholder="ex. 8,50" value={romana} onChange={(e) => setRomana(e.target.value)} />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Matematică</span>
            <input className="field-input" inputMode="decimal" placeholder="ex. 7,25" value={matematica} onChange={(e) => setMatematica(e.target.value)} />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Limba maternă <span className="text-muted-foreground">(doar minorități)</span></span>
            <input className="field-input" inputMode="decimal" placeholder="lasă gol dacă nu e cazul" value={materna} onChange={(e) => setMaterna(e.target.value)} />
          </label>
        </div>

        <div aria-live="polite" className="mt-5">
          {rezultat ? (
            <div className={`rounded-xl border p-4 ${rezultat.promovat ? "border-primary/30 bg-primary-soft/50" : "border-amber-500/30 bg-amber-500/10"}`}>
              <p className="text-2xl font-bold">Media Evaluării Naționale: {rezultat.medie.toFixed(2)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {rezultat.note.length} {rezultat.note.length === 2 ? "probe" : "probe"} ·
                {" "}cea mai slabă notă: {rezultat.celMaiSlab.toFixed(2)}.
                {" "}{rezultat.promovat
                  ? "Ai media de promovare (5,00)."
                  : "Media este sub 5,00, deci Evaluarea Națională nu este promovată."}
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Completează notele de la română și matematică (între 1 și 10) ca să vezi media.</p>
          )}
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
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

      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Vrei să urci media până în iunie?</h2>
        <p className="mt-2 text-muted-foreground">
          Descrii o dată ce ai recuperat din anii trecuți. Profesorii răspund cu propuneri care au dată, oră și tarif.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/meditatii-evaluare-nationala" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Cere profesor pentru Evaluarea Națională
          </Link>
          <Link to="/evaluare-nationala" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
            Calendar și reguli
          </Link>
        </div>
      </section>
    </main>
  );
}
