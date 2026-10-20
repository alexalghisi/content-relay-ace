import { useEffect, useRef, useState } from "react";
import { Eraser, ImagePlus, Paperclip, Pencil, Send, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Fisier = { id: number; nume: string; url: string; imagine: boolean };
const CERNELURI = ["#111827", "#1d4ed8", "#dc2626"];

/** Shared whiteboard: student draws, shares files, and sends a snapshot for the teacher to see. */
export function TablaComuna({
  textProfesor,
  onTrimite,
  dezactivat,
}: {
  textProfesor: string;
  onTrimite: (jpeg: string, descriere: string) => void;
  dezactivat?: boolean;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const [unealta, setUnealta] = useState<"creion" | "radiera">("creion");
  const [culoare, setCuloare] = useState(0);
  const [fisiere, setFisiere] = useState<Fisier[]>([]);
  const [desenat, setDesenat] = useState(false);
  const fundal = useRef<HTMLImageElement | null>(null);
  const jos = useRef(false);
  const ultim = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const c = canvas.current;
    const w = wrap.current;
    if (!c || !w) return;
    const fit = () => {
      const r = w.getBoundingClientRect();
      const copie = document.createElement("canvas");
      copie.width = c.width;
      copie.height = c.height;
      copie.getContext("2d")?.drawImage(c, 0, 0);
      c.width = Math.round(r.width * devicePixelRatio);
      c.height = Math.round(r.height * devicePixelRatio);
      const x = c.getContext("2d");
      if (!x) return;
      x.fillStyle = "#ffffff";
      x.fillRect(0, 0, c.width, c.height);
      x.drawImage(copie, 0, 0, c.width, c.height);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(w);
    return () => ro.disconnect();
  }, []);

  const punct = (e: React.PointerEvent) => {
    const r = canvas.current!.getBoundingClientRect();
    return { x: (e.clientX - r.left) * devicePixelRatio, y: (e.clientY - r.top) * devicePixelRatio };
  };
  const deseneaza = (e: React.PointerEvent) => {
    if (!jos.current) return;
    const x = canvas.current?.getContext("2d");
    const p = punct(e);
    if (!x || !ultim.current) return;
    // The board is always a white sheet, so ink colours are fixed like real markers.
    x.strokeStyle = unealta === "radiera" ? "#ffffff" : CERNELURI[culoare];
    x.lineWidth = (unealta === "radiera" ? 22 : 3.5) * devicePixelRatio;
    x.lineCap = "round";
    x.lineJoin = "round";
    x.beginPath();
    x.moveTo(ultim.current.x, ultim.current.y);
    x.lineTo(p.x, p.y);
    x.stroke();
    ultim.current = p;
    setDesenat(true);
  };

  const sterge = () => {
    const c = canvas.current;
    const x = c?.getContext("2d");
    if (!c || !x) return;
    x.fillStyle = "#ffffff";
    x.fillRect(0, 0, c.width, c.height);
    fundal.current = null;
    setDesenat(false);
  };

  const puneImagine = (url: string) => {
    const img = new Image();
    img.onload = () => {
      const c = canvas.current;
      const x = c?.getContext("2d");
      if (!c || !x) return;
      const k = Math.min(c.width / img.width, c.height / img.height);
      const w = img.width * k;
      const h = img.height * k;
      x.drawImage(img, (c.width - w) / 2, (c.height - h) / 2, w, h);
      fundal.current = img;
      setDesenat(true);
    };
    img.src = url;
  };

  const adauga = (lista: FileList | null) => {
    for (const f of Array.from(lista ?? []).slice(0, 5)) {
      if (f.size > 15 * 1024 * 1024) continue;
      const url = URL.createObjectURL(f);
      const imagine = f.type.startsWith("image/");
      setFisiere((v) => [...v, { id: Date.now() + Math.random(), nume: f.name, url, imagine }]);
      if (imagine) puneImagine(url);
    }
  };

  const trimite = () => {
    const c = canvas.current;
    if (!c) return;
    // Re-encode at most 1280 px wide as JPEG so the upload stays small.
    const k = Math.min(1, 1280 / c.width);
    const out = document.createElement("canvas");
    out.width = Math.round(c.width * k);
    out.height = Math.round(c.height * k);
    out.getContext("2d")?.drawImage(c, 0, 0, out.width, out.height);
    onTrimite(out.toDataURL("image/jpeg", 0.8), fundal.current ? "Uite poza/fișierul pe care l-am pus pe tablă." : "Uite ce am desenat pe tablă.");
  };

  return (
    <div className="flex h-full min-h-[420px] flex-col">
      <div className="flex flex-wrap items-center gap-1.5 border-b border-border px-3 py-2">
        <Button type="button" variant={unealta === "creion" ? "default" : "outline"} size="sm" onClick={() => setUnealta("creion")} aria-label="Creion">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button type="button" variant={unealta === "radiera" ? "default" : "outline"} size="sm" onClick={() => setUnealta("radiera")} aria-label="Radieră">
          <Eraser className="h-4 w-4" />
        </Button>
        {["Negru", "Albastru", "Roșu"].map((n, i) => (
          <button
            key={n}
            type="button"
            aria-label={n}
            onClick={() => { setCuloare(i); setUnealta("creion"); }}
            style={{ backgroundColor: CERNELURI[i] }}
            className={`h-7 w-7 rounded-full border-2 ${culoare === i ? "border-ring" : "border-border"}`}
          />
        ))}
        <label className="inline-flex h-9 cursor-pointer items-center gap-1 rounded-md border border-border px-3 text-xs font-medium">
          <ImagePlus className="h-4 w-4" /> Fișier / poză
          <input type="file" accept="image/*,application/pdf" multiple className="sr-only" onChange={(e) => { adauga(e.target.files); e.target.value = ""; }} />
        </label>
        <Button type="button" variant="outline" size="sm" onClick={sterge} aria-label="Șterge tabla">
          <Trash2 className="h-4 w-4" />
        </Button>
        <Button type="button" size="sm" className="ml-auto" disabled={!desenat || dezactivat} onClick={trimite}>
          <Send className="mr-1 h-4 w-4" /> Arată profesoarei
        </Button>
      </div>
      <div ref={wrap} className="relative flex-1 touch-none">
        <canvas
          ref={canvas}
          className="absolute inset-0 h-full w-full cursor-crosshair rounded-b-3xl"
          onPointerDown={(e) => { jos.current = true; ultim.current = punct(e); (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
          onPointerMove={deseneaza}
          onPointerUp={() => { jos.current = false; ultim.current = null; }}
          onPointerCancel={() => { jos.current = false; ultim.current = null; }}
          aria-label="Tablă de desen"
        />
      </div>
      {fisiere.length > 0 && (
        <ul className="flex flex-wrap gap-2 border-t border-border px-3 py-2 text-xs">
          {fisiere.map((f) => (
            <li key={f.id} className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-1">
              <Paperclip className="h-3 w-3" />
              {f.imagine ? (
                <button type="button" onClick={() => puneImagine(f.url)} className="max-w-[140px] truncate underline">{f.nume}</button>
              ) : (
                <a href={f.url} target="_blank" rel="noreferrer" className="max-w-[140px] truncate underline">{f.nume}</a>
              )}
              <button type="button" aria-label={`Elimină ${f.nume}`} onClick={() => { URL.revokeObjectURL(f.url); setFisiere((v) => v.filter((x) => x.id !== f.id)); }}>
                <X className="h-3 w-3" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {textProfesor && (
        <div className="border-t border-border bg-muted px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Profesoara a scris</p>
          <pre className="mt-1 max-h-40 overflow-auto whitespace-pre-wrap font-mono text-sm leading-relaxed">{textProfesor}</pre>
        </div>
      )}
    </div>
  );
}
