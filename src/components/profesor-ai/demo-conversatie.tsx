import { useCallback, useEffect, useRef, useState } from "react";
import { Hand, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { amestecaLectii } from "./demo-repertoriu";
import { LECTII_SCRISE } from "./demo-lectii-scrise";

const ULTIMA_LECTIE = "profesor-ai-lectie-scrisa-ultima";

/** Written lesson: the teacher presents step by step; the student only asks when something is unclear. */
export function DemoConversatie() {
  const [idx, setIdx] = useState<number | null>(null);
  const [n, setN] = useState(1);

  const ordine = useRef<number[]>([]);
  const precedenta = useRef<number | null>(null);
  const corp = useRef<HTMLDivElement>(null);

  const urmatoarea = useCallback(() => {
    if (!ordine.current.length) {
      ordine.current = amestecaLectii(LECTII_SCRISE.length, precedenta.current);
    }
    const noua = ordine.current.shift();
    if (noua === undefined) return;
    precedenta.current = noua;
    try {
      localStorage.setItem(ULTIMA_LECTIE, String(noua));
    } catch {
      /* Storage is optional. */
    }
    setIdx(noua);
    setN(1);
  }, []);

  useEffect(() => {
    try {
      const ultima = localStorage.getItem(ULTIMA_LECTIE);
      if (ultima !== null && /^\d+$/.test(ultima)) precedenta.current = Number(ultima);
    } catch {
      /* Shuffle still works with storage disabled. */
    }
    urmatoarea();
  }, [urmatoarea]);

  const lectie = LECTII_SCRISE[idx ?? 0];
  useEffect(() => {
    if (idx === null) return;
    const t =
      n >= lectie.blocuri.length
        ? setTimeout(urmatoarea, 9000)
        : setTimeout(() => setN((x) => x + 1), 3800);
    return () => clearTimeout(t);
  }, [n, idx, lectie, urmatoarea]);

  useEffect(() => {
    const el = corp.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [n, idx]);

  if (idx === null)
    return (
      <div
        className="card-soft h-[28rem] animate-pulse"
        aria-busy="true"
        aria-label="Se pregătește exemplul de lecție"
      />
    );

  const vizibile = lectie.blocuri.slice(0, n);
  const continua = n < lectie.blocuri.length;

  return (
    <article className="card-soft overflow-hidden" aria-label="Exemplu de lecție cu Profesorul AI">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-bold">
          Exemplu de lecție · {lectie.materie}{" "}
          <span className="font-normal text-muted-foreground">· {lectie.nivel}</span>
        </p>
        <Button type="button" variant="outline" size="sm" onClick={urmatoarea} className="shrink-0">
          <RefreshCw className="mr-1 h-3 w-3" /> Altă lecție
        </Button>
      </div>
      <div ref={corp} className="h-96 space-y-4 overflow-y-auto px-5 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Lecția predată de Hannah · Profesor AI
          </p>
          <h3 className="mt-1 text-xl font-bold">{lectie.titlu}</h3>
        </div>
        {vizibile.map((b, i) =>
          b.tip === "prof" ? (
            <div key={`${idx}-${i}`} className="space-y-2 animate-in fade-in duration-500">
              <p className="leading-7">{b.text}</p>
              {b.tabla && (
                <p className="rounded-lg bg-foreground px-4 py-2 font-mono text-sm text-background">
                  {b.tabla}
                </p>
              )}
            </div>
          ) : (
            <div
              key={`${idx}-${i}`}
              className="ml-4 flex gap-2 border-l-4 border-primary bg-primary-soft px-3 py-2 text-sm animate-in fade-in duration-500"
            >
              <Hand className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <p>
                <span className="font-semibold">Elevul întreabă:</span> {b.text}
              </p>
            </div>
          ),
        )}
        {continua && (
          <p className="text-xs text-muted-foreground animate-pulse">
            {lectie.blocuri[n].tip === "prof" ? "Hannah continuă lecția…" : "Elevul ridică mâna…"}
          </p>
        )}
      </div>
    </article>
  );
}
