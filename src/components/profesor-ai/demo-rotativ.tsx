import { useEffect, useState } from "react";
import { MessageSquareText, PlayCircle } from "lucide-react";
import { DemoVideoProfesoara } from "./demo-video";
import { DemoConversatie } from "./demo-conversatie";
import { useVariantaRotativa } from "./rotatie";

/**
 * Rotates what the visitor sees first: the video appears only one visit in four;
 * the other visits show a different written lesson each time (20-lesson shuffled deck).
 */
export function DemoProfesorAiRotativ({ className = "" }: { className?: string }) {
  const slot = useVariantaRotativa("profesor-ai-demo-slot", 4);
  const [mod, setMod] = useState<"video" | "lectie" | null>(null);

  useEffect(() => {
    if (slot !== null) setMod(slot === 0 ? "video" : "lectie");
  }, [slot]);

  if (mod === null) return <div className={`card-soft h-[28rem] animate-pulse ${className}`} aria-busy="true" />;

  return (
    <div className={className}>
      {mod === "video" ? <DemoVideoProfesoara /> : <DemoConversatie />}
      <button
        type="button"
        onClick={() => setMod(mod === "video" ? "lectie" : "video")}
        className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-3 text-center text-sm font-medium text-primary hover:bg-primary-soft"
      >
        {mod === "video"
          ? <><MessageSquareText className="h-4 w-4" /> Vezi o lecție întreagă cu întrebări și răspunsuri</>
          : <><PlayCircle className="h-4 w-4" /> Vezi video cu profesoara</>}
      </button>
    </div>
  );
}

/** Text that changes on every visit; SSR keeps the first variant for crawlers. */
export function TextRotativ({ cheie, variante, as: Tag = "p", className = "" }: {
  cheie: string;
  variante: readonly string[];
  as?: "p" | "h2";
  className?: string;
}) {
  const idx = useVariantaRotativa(cheie, variante.length);
  return (
    <Tag className={`${className} transition-opacity duration-300 ${idx === null ? "opacity-0" : "opacity-100"}`}>
      {variante[idx ?? 0]}
    </Tag>
  );
}

export const TITLURI_PROFESOR_AI = [
  "Profesor AI: primele 15 minute gratuit, live, în română",
  "Blocat la o temă? Întreab-o pe Hannah, chiar acum",
  "O lecție adevărată, cu voce și tablă — 15 minute gratuit",
  "Pregătire pentru BAC sau test cu un profesor AI care te ascultă",
  "Pui întrebări oricând, o întrerupi oricând — ca la o meditație reală",
] as const;

export const TEXTE_PROFESOR_AI = [
  "Alegi materia, nivelul și durata, apoi vorbești sau scrii. Profesorul îți explică, îți dă exerciții, te corectează și verifică dacă ai înțeles.",
  "Spui ce nu înțelegi, iar Hannah îți explică pas cu pas, scrie pe tablă și te lasă să încerci tu înainte să-ți dea răspunsul.",
  "De la ecuații și integrale la eseul de română, genetică sau present simple: 28 de materii, în limba pe care o alegi.",
  "Îți dă un exercițiu pe măsura ta, te corectează pe loc și trece mai departe doar când e sigură că ai prins ideea.",
  "Vorbești ca la telefon: o poți opri în mijlocul frazei, pui o întrebare nouă și îți răspunde imediat.",
] as const;
