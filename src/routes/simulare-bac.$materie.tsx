// Simulare BAC cronometrată pe materie: /simulare-bac/{materie}
// Rulezi o variantă oficială în condiții de examen (3 ore), apoi treci la barem/rezolvare.
// Doar variantele cu subiect găzduit efectiv la noi pot fi alese.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Timer } from "lucide-react";
import { getBacSubject, BAC_SESSIONS, BAC_YEARS, bacPdfUrl, type BacSessionSlug } from "@/data/bac-catalog";
import { getVarianteMaterie, type VariantaDisponibila } from "@/lib/bac-content.functions";
import { LazyPdfPreview } from "@/components/lazy-pdf-preview";
import { CalmStart } from "@/components/calm-start";

const SITE = "https://meditatiidirect.ro";
const DURATA_MIN = 180;

export const Route = createFileRoute("/simulare-bac/$materie")({
  loader: async ({ params }) => {
    const subject = getBacSubject(params.materie);
    if (!subject) throw notFound();
    let variante: VariantaDisponibila[] = [];
    try {
      const r = await getVarianteMaterie({ data: { materie: subject.slug } });
      variante = r.variante;
    } catch {
      /* fără date — pagina rămâne neindexată */
    }
    return { subject, variante };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Simulare indisponibilă" }, { name: "robots", content: "noindex" }] };
    const { subject, variante } = loaderData;
    const url = `${SITE}/simulare-bac/${subject.slug}`;
    const title = `Simulare BAC ${subject.name} — test cronometrat 3 ore (gratuit) | MeditatiiDirect.ro`;
    const desc = `Simulare BAC la ${subject.nameLower} în condiții de examen: alegi varianta oficială, pornești cronometrul de 3 ore, apoi te corectezi cu baremul și rezolvarea explicată.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        ...(variante.length ? [] : [{ name: "robots", content: "noindex, follow" }]),
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: `Simulare BAC ${subject.name}`,
            description: desc,
            url,
            inLanguage: "ro-RO",
            learningResourceType: "Practice exam",
            isAccessibleForFree: true,
            provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
          }),
        },
      ],
    };
  },
  component: SimularePage,
  notFoundComponent: () => (
    <main className="container-page py-16">
      <h1 className="text-2xl font-bold">Materie inexistentă</h1>
      <Link to="/bac" className="mt-4 inline-flex text-primary hover:underline">Vezi toate materiile</Link>
    </main>
  ),
});

function fmt(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

function SimularePage() {
  const { subject, variante } = Route.useLoaderData();
  const ani = [...new Set(variante.map((v) => v.an))].sort((a, b) => b - a);
  const sesiuniDeAn = (an: number) =>
    variante.filter((v) => v.an === an).map((v) => v.sesiune) as BacSessionSlug[];
  const [an, setAn] = useState<number>(ani[0] ?? BAC_YEARS[BAC_YEARS.length - 1]);
  const [sesiune, setSesiune] = useState<BacSessionSlug>(sesiuniDeAn(ani[0] ?? 0)[0] ?? "iunie");
  const [left, setLeft] = useState(DURATA_MIN * 60);
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);
  const [calmDone, setCalmDone] = useState(false);
  const tick = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    tick.current = window.setInterval(() => setLeft((v) => (v <= 1 ? 0 : v - 1)), 1000);
    return () => {
      if (tick.current) window.clearInterval(tick.current);
    };
  }, [running]);

  useEffect(() => {
    if (left === 0) setRunning(false);
  }, [left]);

  const sesiuni = sesiuniDeAn(an);
  const current = variante.find((v) => v.an === an && v.sesiune === sesiune) ?? null;
  const subiect = current ? bacPdfUrl(subject.slug, an, current.sesiune, "subiect") : null;
  const barem = current?.are_barem ? bacPdfUrl(subject.slug, an, current.sesiune, "barem") : null;

  const alegeAn = (y: number) => {
    setAn(y);
    const s = sesiuniDeAn(y)[0];
    if (s) setSesiune(s);
  };

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li><Link to="/bac" className="hover:text-primary">Subiecte BAC</Link></li><li>›</li>
          <li className="text-foreground">Simulare {subject.nameLower}</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Simulare BAC {subject.name} — cronometrat, ca la examen</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Alegi o variantă oficială, pornești cronometrul de 3 ore și lucrezi pe foaie. La final compari cu baremul și citești rezolvarea explicată.
        </p>
      </header>

      {variante.length === 0 ? (
        <section className="card-soft mt-8 p-6">
          <h2 className="text-xl font-semibold">Încă nu avem subiecte verificate la {subject.nameLower}</h2>
          <p className="mt-2 text-muted-foreground">
            În simulator punem doar subiecte oficiale pe care le-am găzduit și verificat la noi. Pentru
            {" "}<strong>{subject.nameLower}</strong> nu avem încă niciun subiect în arhivă — publicăm pe măsură ce le găsim.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/bac" className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Vezi arhiva cu subiecte disponibile
            </Link>
            <Link to="/meditatii" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
              Cere ofertă pentru {subject.nameLower}
            </Link>
          </div>
        </section>
      ) : (
        <>
          {!started && !calmDone && <CalmStart onDone={() => setCalmDone(true)} />}

          <section className="card-soft mt-8 p-5">
            <h2 className="text-lg font-semibold">1. Alege varianta</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              <label className="text-sm">
                <span className="sr-only">An</span>
                <select className="field-input min-w-32" value={an} onChange={(e) => alegeAn(Number(e.target.value))} aria-label="Alege anul">
                  {ani.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </label>
              <label className="text-sm">
                <span className="sr-only">Sesiune</span>
                <select className="field-input min-w-56" value={sesiune} onChange={(e) => setSesiune(e.target.value as BacSessionSlug)} aria-label="Alege sesiunea">
                  {BAC_SESSIONS.filter((s) => sesiuni.includes(s.slug)).map((s) => (
                    <option key={s.slug} value={s.slug}>{s.label}</option>
                  ))}
                </select>
              </label>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {variante.length} {variante.length === 1 ? "variantă" : "variante"} cu subiect găzduit la noi
              {barem ? " și barem de corectare" : " — pentru această variantă nu avem încă barem"}.
            </p>
          </section>

          <section className="card-soft mt-4 p-5">
            <h2 className="text-lg font-semibold">2. Pornește cronometrul</h2>
            <p className="mt-3 flex items-center gap-2 font-mono text-4xl font-bold tabular-nums">
              <Timer className="h-7 w-7 text-primary" aria-hidden /> {fmt(left)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => { setRunning((r) => !r); setStarted(true); }}
                className="inline-flex gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {running ? <><Pause className="h-4 w-4" /> Pauză</> : <><Play className="h-4 w-4" /> {started ? "Continuă" : "Start simulare"}</>}
              </button>
              <button
                type="button"
                onClick={() => { setRunning(false); setStarted(false); setLeft(DURATA_MIN * 60); }}
                className="inline-flex gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40"
              >
                <RotateCcw className="h-4 w-4" /> Resetează
              </button>
            </div>
            {left === 0 && (
              <p className="mt-3 rounded-lg border border-primary/30 bg-primary-soft/50 p-3 text-sm">
                Timpul a expirat. Oprește scrisul și treci la corectare cu baremul de mai jos.
              </p>
            )}
          </section>

          {subiect && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold">3. Subiectul</h2>
              <LazyPdfPreview src={subiect} title={`Subiect simulare ${subject.nameLower} ${an} ${sesiune}`} className="h-[70vh] w-full" />
              <p className="mt-2 text-xs text-muted-foreground">
                <a href={subiect} target="_blank" rel="noopener" className="text-primary hover:underline">Deschide subiectul în filă nouă</a>
              </p>
            </section>
          )}

          <section className="mt-10">
            <h2 className="text-2xl font-bold">4. Corectează-te</h2>
            <p className="mt-2 text-muted-foreground">Compară punct cu punct cu baremul oficial, apoi citește rezolvarea explicată.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {barem ? (
                <a href={barem} target="_blank" rel="noopener" className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
                  Barem oficial (PDF)
                </a>
              ) : (
                <span className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  Baremul pentru această variantă lipsește
                </span>
              )}
              <Link to="/rezolvari/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(an), sesiune }}
                className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                Rezolvarea explicată
              </Link>
              <Link to="/bac/$materie/$an/$sesiune" params={{ materie: subject.slug, an: String(an), sesiune }}
                className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">
                Pagina variantei
              </Link>
            </div>
          </section>
        </>
      )}

      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Nu ți-a ieșit punctajul dorit?</h2>
        <p className="mt-2 text-muted-foreground">Descrii o dată ce ai nevoie, iar profesorii de {subject.nameLower} îți trimit propuneri cu dată, oră și tarif.</p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Cere ofertă gratuit
        </Link>
      </section>
    </main>
  );
}
