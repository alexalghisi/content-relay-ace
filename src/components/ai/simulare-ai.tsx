import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  Clock,
  Loader2,
  MapPin,
  RotateCcw,
  ScanSearch,
  Sparkles,
  X,
} from "lucide-react";
import { getBlocaj } from "@/data/blocaje";
import { corecteazaTest, genereazaTest } from "@/lib/simulare-ai.functions";
import {
  AI_CLASE,
  AI_DURATE,
  AI_MATERII,
  LIMITA_TESTE_ZI,
  aiMaterieName,
  clasaLabel,
  planTest,
  type AiDurata,
  type AiMaterie,
  type RezultatTest,
  type TestPublic,
} from "@/lib/simulare-ai";

export const MEDITATOR_CONTEXT_KEY = "md-meditator-context";

const fmt = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

const notaColor = (n: number) =>
  n >= 8.5 ? "text-success" : n >= 5 ? "text-primary" : "text-destructive";

export function SimulareAi({ materieInitiala }: { materieInitiala?: AiMaterie }) {
  const navigate = useNavigate();
  const [materie, setMaterie] = useState<AiMaterie>(materieInitiala ?? "matematica");
  const [clasa, setClasa] = useState(12);
  const [durata, setDurata] = useState<AiDurata>(30);
  const [capitol, setCapitol] = useState("");
  const [faza, setFaza] = useState<"config" | "generare" | "test" | "corectare" | "rezultat">(
    "config",
  );
  const [eroare, setEroare] = useState("");
  const [test, setTest] = useState<TestPublic | null>(null);
  const [token, setToken] = useState("");
  const [rasp, setRasp] = useState<Record<string, string>>({});
  const [rezultat, setRezultat] = useState<RezultatTest | null>(null);
  const [acum, setAcum] = useState(() => Date.now());
  const [ramase, setRamase] = useState<number | null>(null);
  const sent = useRef(false);
  const autoTrimis = useRef(false);

  const genereaza = async () => {
    setEroare("");
    setFaza("generare");
    try {
      const r = await genereazaTest({
        data: { materie, clasa, durata, capitol: capitol.trim() || undefined },
      });
      if (!r.ok) {
        setEroare(r.error);
        setFaza("config");
        return;
      }
      sent.current = false;
      autoTrimis.current = false;
      setTest({ ...r.data.test, start: Date.now() });
      setToken(r.data.token);
      setRasp({});
      setRamase(r.ramase ?? null);
      setFaza("test");
    } catch {
      setEroare("Nu am putut genera testul. Verifică conexiunea și încearcă din nou.");
      setFaza("config");
    }
  };

  const trimite = useCallback(async () => {
    if (sent.current || !token) return;
    sent.current = true;
    setFaza("corectare");
    setEroare("");
    try {
      const r = await corecteazaTest({ data: { token, raspunsuri: rasp } });
      if (!r.ok) {
        setEroare(r.error);
        setFaza("test");
        sent.current = false;
        return;
      }
      setRezultat(r.data);
      setFaza("rezultat");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setEroare("Corectarea nu a reușit. Încearcă din nou.");
      setFaza("test");
      sent.current = false;
    }
  }, [token, rasp]);

  // Cronometru: la final, testul se trimite automat.
  const ramas = test ? test.start + test.durata * 60_000 - acum : 0;
  useEffect(() => {
    if (faza !== "test") return;
    const t = setInterval(() => setAcum(Date.now()), 1000);
    return () => clearInterval(t);
  }, [faza]);
  useEffect(() => {
    if (faza === "test" && test && ramas <= 0 && !autoTrimis.current) {
      autoTrimis.current = true;
      void trimite();
    }
  }, [faza, test, ramas, trimite]);

  const reset = () => {
    setFaza("config");
    setTest(null);
    setToken("");
    setRezultat(null);
    setEroare("");
  };

  const discutaCuMeditatorul = () => {
    if (!rezultat || !test) return;
    const gresite = rezultat.feedback.filter((f) => !f.corect).slice(0, 6);
    const ctx =
      `Test AI: ${test.titlu} (${aiMaterieName(test.materie)}, ${clasaLabel(test.clasa)}). Nota: ${rezultat.nota}.
${gresite.map((f) => `- Întrebare: ${f.enunt.slice(0, 300)} | Răspunsul elevului: ${f.raspunsElev.slice(0, 200)} | Corect: ${f.raspunsCorect.slice(0, 200)} | Greșeala: ${f.ce.slice(0, 200)}`).join("\n")}`.slice(
        0,
        3900,
      );
    try {
      sessionStorage.setItem(
        MEDITATOR_CONTEXT_KEY,
        JSON.stringify({ materie: test.materie, context: ctx }),
      );
    } catch {
      /* fără sessionStorage — meditatorul pornește fără context */
    }
    navigate({ to: "/meditator-ai" });
  };

  // ── Configurare ────────────────────────────────────────────────────
  if (faza === "config" || faza === "generare") {
    const plan = planTest(durata);
    const busy = faza === "generare";
    return (
      <div className="card-soft p-5 sm:p-7">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-semibold">Test nou, generat pentru tine</span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Materia
            <select
              value={materie}
              disabled={busy}
              onChange={(e) => setMaterie(e.target.value as AiMaterie)}
              className="mt-1 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm"
            >
              {AI_MATERII.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium">
            Clasa
            <select
              value={clasa}
              disabled={busy}
              onChange={(e) => setClasa(Number(e.target.value))}
              className="mt-1 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm"
            >
              {AI_CLASE.map((c) => (
                <option key={c} value={c}>
                  {clasaLabel(c)}
                </option>
              ))}
            </select>
          </label>
        </div>
        <fieldset className="mt-4">
          <legend className="text-sm font-medium">Durata</legend>
          <div className="mt-1 grid grid-cols-4 gap-2">
            {AI_DURATE.map((d) => (
              <button
                key={d}
                type="button"
                disabled={busy}
                onClick={() => setDurata(d)}
                className={`h-11 rounded-xl border text-sm font-medium transition ${durata === d ? "border-primary bg-primary-soft text-primary" : "border-border bg-background hover:border-primary/40"}`}
              >
                {d} min
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {plan.grila} întrebări grilă + {plan.deschis}{" "}
            {plan.deschis === 1 ? "problemă" : "probleme"} cu răspuns scris
          </p>
        </fieldset>
        <label className="mt-4 block text-sm font-medium">
          Capitol (opțional)
          <input
            value={capitol}
            disabled={busy}
            maxLength={80}
            onChange={(e) => setCapitol(e.target.value)}
            placeholder="ex. ecuații de gradul 2, Moromeții, legile lui Newton"
            className="mt-1 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm"
          />
        </label>
        {eroare && <p className="mt-4 text-sm font-medium text-destructive">{eroare}</p>}
        <button
          type="button"
          onClick={genereaza}
          disabled={busy}
          className="btn-primary mt-5 h-12 w-full px-6 sm:w-auto"
        >
          {busy ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Pregătim testul… (poate dura un
              minut)
            </>
          ) : (
            <>
              Generează testul și pornește cronometrul <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          {LIMITA_TESTE_ZI} teste pe zi gratuit · întrebările sunt generate de AI și pot conține
          greșeli; semnalează-le meditatorului tău.
        </p>
      </div>
    );
  }

  // ── Rezultat ───────────────────────────────────────────────────────
  if (faza === "rezultat" && rezultat && test) {
    const notiuni = rezultat.deRecuperat.map(getBlocaj).filter((n) => !!n);
    return (
      <div className="space-y-6" aria-live="polite">
        <div className="card-soft p-6 text-center sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">{test.titlu}</p>
          <p className={`mt-2 text-6xl font-bold tracking-tight ${notaColor(rezultat.nota)}`}>
            {rezultat.nota.toFixed(2)}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {rezultat.obtinut} din {rezultat.total} puncte · 1 punct din oficiu
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed">{rezultat.rezumat}</p>
          <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
            <button type="button" onClick={discutaCuMeditatorul} className="btn-primary h-12 px-6">
              <Bot className="mr-2 h-4 w-4" /> Lămurește greșelile cu Meditatorul AI
            </button>
            <button type="button" onClick={reset} className="btn-outline h-12 px-5">
              <RotateCcw className="mr-2 h-4 w-4" /> Test nou
            </button>
          </div>
        </div>

        {notiuni.length > 0 && (
          <div className="card-soft p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <ScanSearch className="h-5 w-5 text-primary" /> Noțiuni de recuperat
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {notiuni.map((n) => (
                <li key={n!.slug}>
                  <Link
                    to="/harta-blocajelor/$materie/$blocaj"
                    params={{ materie: n!.materie, blocaj: n!.slug }}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                  >
                    {n!.titlu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ol className="space-y-4">
          {rezultat.feedback.map((f, i) => (
            <li key={f.id} className={`card-soft p-5 ${f.corect ? "" : "border-destructive/30"}`}>
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium leading-relaxed">
                  <span className="text-muted-foreground">{i + 1}. </span>
                  <span className="whitespace-pre-line">{f.enunt}</span>
                </p>
                <span
                  className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${f.corect ? "bg-accent text-success" : "bg-destructive/10 text-destructive"}`}
                >
                  {f.necorectat ? (
                    "necorectat"
                  ) : (
                    <>
                      {f.corect ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      {f.puncte}/{f.maxim}p
                    </>
                  )}
                </span>
              </div>
              <dl className="mt-3 grid gap-2 text-sm">
                <div>
                  <dt className="font-medium text-muted-foreground">Răspunsul tău</dt>
                  <dd className="whitespace-pre-line">{f.raspunsElev}</dd>
                </div>
                {!f.corect && (
                  <>
                    {f.unde && (
                      <div className="rounded-lg bg-destructive/5 p-3">
                        <dt className="inline-flex items-center gap-1 font-semibold text-destructive">
                          <MapPin className="h-3.5 w-3.5" /> Unde ai greșit
                        </dt>
                        <dd className="mt-1">{f.unde}</dd>
                      </div>
                    )}
                    {f.ce && (
                      <div>
                        <dt className="font-semibold">Ce e greșit</dt>
                        <dd className="mt-1">{f.ce}</dd>
                      </div>
                    )}
                    {f.deCe && (
                      <div>
                        <dt className="font-semibold">De ce și cum se face corect</dt>
                        <dd className="mt-1 whitespace-pre-line">{f.deCe}</dd>
                      </div>
                    )}
                    <div className="rounded-lg bg-accent p-3">
                      <dt className="font-semibold text-success">
                        {f.tip === "grila" ? "Răspunsul corect" : "Rezolvarea model"}
                      </dt>
                      <dd className="mt-1 whitespace-pre-line">{f.raspunsCorect}</dd>
                    </div>
                  </>
                )}
              </dl>
            </li>
          ))}
        </ol>
        <div className="card-soft bg-gradient-to-br from-primary-soft to-card p-6">
          <h3 className="font-bold">Vrei să recuperezi cu un profesor?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Postezi gratuit o cerere de meditații la {aiMaterieName(test.materie).toLowerCase()} și
            primești propuneri cu tarif și program.
          </p>
          <Link
            to="/meditatii"
            search={{ materie: test.materie }}
            className="btn-primary mt-4 h-11 px-5"
          >
            Cere un meditator <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  // ── Testul ─────────────────────────────────────────────────────────
  if (!test) return null;
  const raspunse = test.intrebari.filter((q) => (rasp[q.id] ?? "").trim() !== "").length;
  const putin = ramas < 60_000;
  return (
    <div className="space-y-4">
      <div className="sticky top-20 z-30 flex items-center justify-between gap-3 rounded-xl border border-border bg-background/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{test.titlu}</p>
          <p className="text-xs text-muted-foreground">
            {raspunse}/{test.intrebari.length} răspunse
            {ramase !== null ? ` · ${ramase} teste rămase azi` : ""}
          </p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 font-mono text-sm font-bold ${putin ? "bg-destructive/10 text-destructive" : "bg-primary-soft text-primary"}`}
          aria-label="Timp rămas"
        >
          <Clock className="h-4 w-4" /> {fmt(ramas)}
        </span>
      </div>

      <ol className="space-y-4">
        {test.intrebari.map((q, i) => (
          <li key={q.id} className="card-soft p-5">
            <p className="flex items-start justify-between gap-3 font-medium leading-relaxed">
              <span>
                <span className="text-muted-foreground">{i + 1}. </span>
                <span className="whitespace-pre-line">{q.enunt}</span>
              </span>
              <span className="shrink-0 text-xs text-muted-foreground">{q.puncte}p</span>
            </p>
            {q.tip === "grila" ? (
              <div role="radiogroup" className="mt-3 grid gap-2">
                {q.optiuni!.map((o, j) => {
                  const sel = rasp[q.id] === String(j);
                  return (
                    <label
                      key={j}
                      className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-sm transition ${sel ? "border-primary bg-primary-soft" : "border-border bg-background hover:border-primary/40"}`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        className="accent-primary"
                        checked={sel}
                        disabled={faza !== "test"}
                        onChange={() => setRasp((r) => ({ ...r, [q.id]: String(j) }))}
                      />
                      <span className="flex-1 whitespace-pre-line">{o}</span>
                    </label>
                  );
                })}
              </div>
            ) : (
              <textarea
                value={rasp[q.id] ?? ""}
                disabled={faza !== "test"}
                maxLength={4000}
                onChange={(e) => setRasp((r) => ({ ...r, [q.id]: e.target.value }))}
                rows={6}
                placeholder="Scrie rezolvarea pe pași, așa cum ai scrie-o pe foaie."
                className="mt-3 w-full rounded-xl border border-border bg-background p-3 text-sm"
              />
            )}
          </li>
        ))}
      </ol>
      {eroare && <p className="text-sm font-medium text-destructive">{eroare}</p>}
      <button
        type="button"
        onClick={() => void trimite()}
        disabled={faza === "corectare"}
        className="btn-primary h-12 w-full px-6"
      >
        {faza === "corectare" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Corectăm testul…
          </>
        ) : (
          "Predau lucrarea"
        )}
      </button>
    </div>
  );
}
