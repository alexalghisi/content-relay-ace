// Pauză de respirație de 2 minute, afișată înainte de pornirea cronometrului în simularea BAC.
// Nu promite nimic medical: e doar un exercițiu scurt de respirație, opțional, care poate fi sărit.
import { useEffect, useRef, useState } from "react";
import { Play, SkipForward } from "lucide-react";

const TOTAL_SEC = 120;
// Un ciclu: 4 secunde inspiri, 4 ții, 6 expiri = 14 secunde.
const PHASES = [
  { key: "inhala", label: "Inspiri pe nas", seconds: 4 },
  { key: "ține", label: "Ții aerul", seconds: 4 },
  { key: "expiră", label: "Expiri pe gură", seconds: 6 },
] as const;
const CYCLE = PHASES.reduce((s, p) => s + p.seconds, 0);

function fmt(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function CalmStart({ onDone }: { onDone: () => void }) {
  const [left, setLeft] = useState(TOTAL_SEC);
  const [running, setRunning] = useState(true);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = window.setInterval(() => setLeft((v) => (v <= 1 ? 0 : v - 1)), 1000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [running]);

  const elapsed = TOTAL_SEC - left;
  const pos = elapsed % CYCLE;
  const phase = PHASES.find((p) => pos < p.seconds + PHASES.slice(0, PHASES.indexOf(p)).reduce((s, q) => s + q.seconds, 0)) ?? PHASES[PHASES.length - 1];

  return (
    <section className="card-soft mt-8 p-5 sm:p-6" aria-labelledby="calm-title">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 id="calm-title" className="text-lg font-semibold">2 minute de respirație înainte de start</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Opțional. Mulți elevi spun că le e greu să înceapă din cauza emoțiilor, nu din cauza subiectului.
            Respiri liniștit cât contează cronometrul, apoi pornești simularea. Nu este sfat medical.
          </p>
        </div>
        <p className="font-mono text-2xl font-bold tabular-nums text-primary" aria-live="off">{fmt(left)}</p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-5">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-primary/20 bg-primary-soft/40">
          <div
            className="breathe-orb flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30"
            data-phase={phase.key}
            aria-hidden="true"
          >
            <span className="text-sm font-medium text-primary" aria-live="polite">{phase.label}</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-center text-sm font-medium leading-5 hover:border-primary/40"
          >
            {running ? "Pauză" : "Continuă respirația"}
          </button>
          <button
            type="button"
            onClick={onDone}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium leading-5 text-primary-foreground hover:opacity-90"
          >
            <Play className="h-4 w-4" /> Gata, trec la simulare
          </button>
          <button
            type="button"
            onClick={onDone}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm font-medium leading-5 text-muted-foreground hover:text-foreground"
          >
            <SkipForward className="h-4 w-4" /> Sari peste
          </button>
        </div>
      </div>
    </section>
  );
}
