import { useCallback, useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { amestecaLectii, LECTII } from "./demo-repertoriu";

const ULTIMA_LECTIE = "profesor-ai-demo-ultima";

export function DemoConversatie() {
  const [idx, setIdx] = useState<number | null>(null);
  const [n, setN] = useState(1);

  const ordine = useRef<number[]>([]);
  const precedenta = useRef<number | null>(null);

  const urmatoarea = useCallback(() => {
    if (!ordine.current.length) {
      ordine.current = amestecaLectii(LECTII.length, precedenta.current);
    }
    const noua = ordine.current.shift();
    if (noua === undefined) return;
    precedenta.current = noua;
    try { localStorage.setItem(ULTIMA_LECTIE, String(noua)); } catch { /* Storage is optional. */ }
    setIdx(noua);
    setN(1);
  }, []);

  useEffect(() => {
    try {
      const ultima = localStorage.getItem(ULTIMA_LECTIE);
      if (ultima !== null && /^\d+$/.test(ultima)) precedenta.current = Number(ultima);
    } catch { /* Shuffle still works with storage disabled. */ }
    urmatoarea();
  }, [urmatoarea]);

  const lectie = LECTII[idx ?? 0];
  useEffect(() => {
    if (idx === null) return;
    const t = n >= lectie.replici.length
      ? setTimeout(urmatoarea, 5000)
      : setTimeout(() => setN((x) => x + 1), 2200);
    return () => clearTimeout(t);
  }, [n, idx, lectie, urmatoarea]);

  if (idx === null) return <div className="card-soft h-[28rem] animate-pulse" aria-busy="true" aria-label="Se pregătește exemplul de lecție" />;

  const vizibile = lectie.replici.slice(0, n);
  const tabla = [...vizibile].reverse().find((r) => r.tabla)?.tabla;
  const scrie = n < lectie.replici.length;

  return (
    <div className="card-soft overflow-hidden" aria-label="Exemplu de lecție cu Profesorul AI">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-bold">
          Exemplu de lecție · {lectie.materie} <span className="font-normal text-muted-foreground">· {lectie.nivel}</span>
        </p>
        <Button type="button" variant="outline" size="sm" onClick={urmatoarea} className="shrink-0">
          <RefreshCw className="mr-1 h-3 w-3" /> Altă lecție
        </Button>
      </div>
      <div className="min-h-12 border-b border-border bg-foreground px-4 py-3 font-mono text-sm text-background">
        {tabla ? <>Tabla: {tabla}</> : <span className="opacity-60">Tabla</span>}
      </div>
      <div className="flex h-80 flex-col justify-end gap-2 overflow-hidden p-4">
        {vizibile.slice(-4).map((r, i) => (
          <div
            key={`${idx}-${n}-${i}`}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
              r.cine === "prof" ? "self-start bg-primary-soft" : "self-end bg-primary text-primary-foreground"
            }`}
          >
            <span className="block text-[11px] font-bold opacity-70">{r.cine === "prof" ? "Hannah · Profesor AI" : "Elev"}</span>
            {r.text}
          </div>
        ))}
        {scrie && <p className="text-xs text-muted-foreground animate-pulse">{lectie.replici[n].cine === "prof" ? "Hannah vorbește…" : "Elevul răspunde…"}</p>}
      </div>
    </div>
  );
}
