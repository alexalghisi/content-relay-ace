import { useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";
import type { BlocajVerificare } from "@/data/blocaje";

/**
 * Exercițiu scurt de verificare, rezolvat în browser. Nu trimite și nu stochează
 * nimic: răspunsul elevului rămâne pe pagină (fără date personale, fără rezultate publicate).
 */
export function VerificareRapida({ v }: { v: BlocajVerificare }) {
  const [ales, setAles] = useState<number | null>(null);
  const [trimis, setTrimis] = useState(false);
  const corect = trimis && ales === v.corect;

  return (
    <div className="card-soft p-5 sm:p-6">
      <p className="font-medium leading-relaxed">{v.intrebare}</p>
      <div role="radiogroup" aria-label="Variante de răspuns" className="mt-4 grid gap-2">
        {v.optiuni.map((opt, i) => {
          const selected = ales === i;
          const state = !trimis
            ? ""
            : i === v.corect
              ? "border-success bg-accent"
              : selected
                ? "border-destructive/60 bg-destructive/5"
                : "opacity-70";
          return (
            <label
              key={opt}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${selected && !trimis ? "border-primary bg-primary-soft" : "border-border bg-background"} ${state}`}
            >
              <input
                type="radio"
                name="verificare"
                className="accent-primary"
                checked={selected}
                disabled={trimis}
                onChange={() => setAles(i)}
              />
              <span className="flex-1">{opt}</span>
              {trimis && i === v.corect && (
                <Check className="h-4 w-4 text-success" aria-label="Răspuns corect" />
              )}
              {trimis && selected && i !== v.corect && (
                <X className="h-4 w-4 text-destructive" aria-label="Răspuns greșit" />
              )}
            </label>
          );
        })}
      </div>

      {!trimis ? (
        <button
          type="button"
          onClick={() => ales !== null && setTrimis(true)}
          disabled={ales === null}
          className="btn-primary mt-4 h-11 px-5 disabled:opacity-50"
        >
          Verifică răspunsul
        </button>
      ) : (
        <div className="mt-4" aria-live="polite">
          <p className={`font-semibold ${corect ? "text-success" : "text-destructive"}`}>
            {corect
              ? "Corect! Noțiunea e la locul ei."
              : "Nu încă — citește explicația de mai jos și încearcă din nou."}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.explicatie}</p>
          <button
            type="button"
            onClick={() => {
              setAles(null);
              setTrimis(false);
            }}
            className="btn-outline mt-4 h-10 px-4 text-sm"
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Reia verificarea
          </button>
        </div>
      )}
    </div>
  );
}
