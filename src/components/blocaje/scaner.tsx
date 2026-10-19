import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleHelp,
  RotateCcw,
  ScanSearch,
  Sprout,
  Target,
  X,
} from "lucide-react";
import {
  claseLabel,
  clasaRoman,
  getBlocaj,
  getBlocajMaterie,
  type BlocajMaterie,
} from "@/data/blocaje";
import {
  MAX_INTREBARI,
  answer,
  encodeTraseu,
  learningOrder,
  nextQuestion,
  result,
  startScan,
  type ScanState,
} from "@/lib/scaner-lacune";

/**
 * Scanerul de lacune: diagnostic adaptiv, rulat integral în browser.
 * Nu trimite și nu salvează nimic; rezultatul ajunge în cererea de meditații doar
 * dacă elevul apasă butonul (ca slug-uri în URL, fără date personale).
 */
export function ScanerLacune({
  materie,
  tintaInitiala,
}: {
  materie: BlocajMaterie;
  tintaInitiala?: string;
}) {
  const m = getBlocajMaterie(materie)!;
  const order = useMemo(() => learningOrder(materie), [materie]);
  const valid = tintaInitiala && getBlocaj(tintaInitiala)?.materie === materie ? tintaInitiala : "";
  const [tinta, setTinta] = useState(valid || order[order.length - 1]?.slug || "");
  const [scan, setScan] = useState<ScanState | null>(null);
  const [ales, setAles] = useState<number | "nu-stiu" | null>(null);

  const q = scan ? nextQuestion(scan) : null;
  const done = scan !== null && q === null && ales === null;
  const r = done ? result(scan) : null;

  const groups = useMemo(() => {
    const map = new Map<number, typeof order>();
    for (const n of order) {
      const c = Math.min(...n.clase);
      map.set(c, [...(map.get(c) ?? []), n]);
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [order]);

  const reset = () => {
    setScan(null);
    setAles(null);
  };

  // ── 1. Alegerea țintei ─────────────────────────────────────────────
  if (!scan) {
    return (
      <div className="card-soft p-5 sm:p-7">
        <div className="flex items-center gap-2 text-primary">
          <ScanSearch className="h-5 w-5" />
          <span className="text-sm font-semibold">Pasul 1 din 3 · Unde te-ai blocat?</span>
        </div>
        <label htmlFor="scaner-tinta" className="mt-4 block font-medium">
          Alege capitolul la {m.nameLower} care nu îți iese
        </label>
        <select
          id="scaner-tinta"
          value={tinta}
          onChange={(e) => setTinta(e.target.value)}
          className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm"
        >
          {groups.map(([c, list]) => (
            <optgroup key={c} label={`Clasa a ${clasaRoman(c)}-a`}>
              {list.map((n) => (
                <option key={n.slug} value={n.slug}>
                  {n.titlu}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {getBlocaj(tinta) && (
          <p className="mt-3 text-sm italic text-muted-foreground">„{getBlocaj(tinta)!.blocaj}”</p>
        )}
        <button
          type="button"
          onClick={() => setScan(startScan(tinta))}
          className="btn-primary mt-5 h-12 px-6"
        >
          Pornește scanarea <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Cel mult {MAX_INTREBARI} întrebări scurte · rulează doar în browserul tău · nu salvăm
          răspunsurile
        </p>
      </div>
    );
  }

  // ── 3. Rezultatul ─────────────────────────────────────────────────
  if (r) {
    const cereSearch = { materie, traseu: encodeTraseu(r) };
    return (
      <div className="card-soft p-5 sm:p-7" aria-live="polite">
        <div className="flex items-center gap-2 text-primary">
          <Target className="h-5 w-5" />
          <span className="text-sm font-semibold">Pasul 3 din 3 · Diagnosticul tău</span>
        </div>

        {r.tintaOk ? (
          <>
            <h3 className="mt-3 text-2xl font-bold">„{r.tinta.titlu}” e la locul ei</h3>
            <p className="mt-2 text-muted-foreground">
              Ai rezolvat corect verificarea, deci blocajul nu pare să vină din noțiunea în sine.
              Poate e nevoie de mai mult exercițiu sau de capitolul următor:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {r.tinta.urmeaza
                .map(getBlocaj)
                .filter((n) => n && n.materie === materie)
                .map((n) => (
                  <li key={n!.slug}>
                    <button
                      type="button"
                      onClick={() => {
                        setTinta(n!.slug);
                        setScan(startScan(n!.slug));
                        setAles(null);
                      }}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                    >
                      Scanează: {n!.titlu}
                    </button>
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <>
            <h3 className="mt-3 text-2xl font-bold">
              {r.radacini.length === 1 ? (
                <>
                  Rădăcina blocajului: <span className="text-primary">{r.radacini[0].titlu}</span>
                </>
              ) : (
                <>
                  Blocajul pornește din{" "}
                  <span className="text-primary">{r.radacini.length} noțiuni de bază</span>
                </>
              )}
            </h3>
            <p className="mt-2 text-muted-foreground">
              Ai pornit de la „{r.tinta.titlu}”. Răspunsurile tale arată că problema începe mai jos.
              Dacă recuperezi întâi rădăcina, capitolele de deasupra devin mult mai ușoare.
            </p>

            <h4 className="mt-6 font-semibold">Traseul tău de recuperare, în ordine</h4>
            <ol className="mt-3 space-y-2">
              {r.traseu.map((n, i) => {
                const root = r.radacini.some((x) => x.slug === n.slug);
                return (
                  <li key={n.slug}>
                    <Link
                      to="/harta-blocajelor/$materie/$blocaj"
                      params={{ materie: n.materie, blocaj: n.slug }}
                      className={`flex items-center gap-3 rounded-xl border p-3 text-sm transition hover:border-primary/40 ${root ? "border-primary/50 bg-primary-soft" : "border-border bg-background"}`}
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium">{n.titlu}</span>
                        <span className="block text-xs text-muted-foreground">
                          {getBlocajMaterie(n.materie)?.name} · {claseLabel(n.clase)}
                          {root ? " · începe de aici" : ""}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                    </Link>
                  </li>
                );
              })}
            </ol>
            {r.neverificate.length > 0 && (
              <p className="mt-3 text-xs text-muted-foreground">
                Neverificate (s-a atins limita de {MAX_INTREBARI} întrebări):{" "}
                {r.neverificate.map((n) => n.titlu).join("; ")}. Merită o privire pe Harta
                Blocajelor.
              </p>
            )}
          </>
        )}

        {r.stiute.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Sprout className="h-4 w-4 text-success" /> Știi deja:
            {r.stiute.map((n) => (
              <span key={n.slug} className="rounded-full bg-accent px-2 py-1 text-foreground/80">
                {n.titlu}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link to="/meditatii" search={cereSearch} className="btn-primary h-12 px-6">
            Cere un meditator cu acest diagnostic <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button type="button" onClick={reset} className="btn-outline h-12 px-5">
            <RotateCcw className="mr-2 h-4 w-4" /> Scanează alt capitol
          </button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Diagnosticul se completează automat în cerere; profesorii văd exact de unde să înceapă.
        </p>
      </div>
    );
  }

  // ── 2. Întrebările ────────────────────────────────────────────────
  const answered = ales !== null;
  const current = answered ? getBlocaj(scan.istoric[scan.istoric.length - 1])! : q!;
  const ok = ales === current.verificare.corect;
  const nr = scan.istoric.length + (answered ? 0 : 1);

  const submit = (choice: number | "nu-stiu") => {
    setAles(choice);
    setScan(answer(scan, current.slug, choice === current.verificare.corect ? "stiu" : "lacuna"));
  };

  return (
    <div className="card-soft p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="inline-flex items-center gap-2 font-semibold text-primary">
          <ScanSearch className="h-5 w-5" /> Pasul 2 din 3 · Întrebarea {nr}
        </span>
        <button
          type="button"
          onClick={reset}
          className="text-xs text-muted-foreground hover:text-primary"
        >
          Renunță
        </button>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted" aria-hidden="true">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${(nr / MAX_INTREBARI) * 100}%` }}
        />
      </div>

      {scan.istoric.length > 0 && (
        <ol className="mt-4 flex flex-wrap gap-1.5" aria-label="Noțiuni verificate">
          {scan.istoric.map((s) => {
            const n = getBlocaj(s)!;
            const good = scan.raspunsuri[s] === "stiu";
            return (
              <li
                key={s}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${good ? "bg-accent text-foreground/80" : "bg-destructive/10 text-destructive"}`}
              >
                {good ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />} {n.titlu}
              </li>
            );
          })}
        </ol>
      )}

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {current.titlu} · {claseLabel(current.clase)}
      </p>
      <p className="mt-1 font-medium leading-relaxed">{current.verificare.intrebare}</p>

      <div className="mt-4 grid gap-2">
        {current.verificare.optiuni.map((opt, i) => {
          const state = !answered
            ? "border-border bg-background hover:border-primary/40"
            : i === current.verificare.corect
              ? "border-success bg-accent"
              : ales === i
                ? "border-destructive/60 bg-destructive/5"
                : "border-border opacity-60";
          return (
            <button
              key={opt}
              type="button"
              disabled={answered}
              onClick={() => submit(i)}
              className={`flex min-h-12 w-full items-center justify-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${state}`}
            >
              <span className="flex-1 text-left">{opt}</span>
              {answered && i === current.verificare.corect && (
                <Check className="h-4 w-4 text-success" />
              )}
              {answered && ales === i && i !== current.verificare.corect && (
                <X className="h-4 w-4 text-destructive" />
              )}
            </button>
          );
        })}
        {!answered && (
          <button
            type="button"
            onClick={() => submit("nu-stiu")}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm text-muted-foreground hover:text-primary"
          >
            <CircleHelp className="h-4 w-4" /> Nu știu încă
          </button>
        )}
      </div>

      {answered && (
        <div className="mt-4" aria-live="polite">
          <p className={`font-semibold ${ok ? "text-success" : "text-destructive"}`}>
            {ok
              ? "Corect, ramura asta e în regulă."
              : current.lipsa.length
                ? "Notat. Verificăm acum pe ce se sprijină noțiunea."
                : "Notat. Ai ajuns la baza lanțului."}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {current.verificare.explicatie}
          </p>
          <button
            type="button"
            onClick={() => setAles(null)}
            className="btn-primary mt-4 h-11 px-5"
          >
            {nextQuestion(scan) ? "Următoarea întrebare" : "Vezi diagnosticul"}{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
