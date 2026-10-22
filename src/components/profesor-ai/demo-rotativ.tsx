import { DemoVideoProfesoara } from "./demo-video";
import { useVariantaRotativa } from "./rotatie";

/**
 * The Profesor AI demo is always the voiced video of Hannah teaching a pupil,
 * so a visitor sees exactly what a lesson looks like before signing up.
 * No written chat/board demo is shown anywhere.
 */
export function DemoProfesorAiRotativ({ className = "" }: { className?: string }) {
  return <DemoVideoProfesoara className={className} />;
}

/** Text that changes on every visit; SSR keeps the first variant for crawlers. */
export function TextRotativ({
  cheie,
  variante,
  as: Tag = "p",
  className = "",
}: {
  cheie: string;
  variante: readonly string[];
  as?: "p" | "h2";
  className?: string;
}) {
  const idx = useVariantaRotativa(cheie, variante.length);
  return (
    <Tag
      className={`${className} transition-opacity duration-300 ${idx === null ? "opacity-0" : "opacity-100"}`}
    >
      {variante[idx ?? 0]}
    </Tag>
  );
}

export const TITLURI_PROFESOR_AI = [
  "Profesor individual cu AI, la orice oră din zi și din noapte",
  "E 2 noaptea și ai bacalaureat mâine? Profesorul AI e treaz",
  "Subiecte reale de bacalaureat, explicate live de un profesor AI, 24/7",
  "Meditație individuală cu AI, oricând: fără programare, 15 minute gratuit",
  "Pui întrebări oricând, o întrerupi oricând — ca la o meditație reală",
] as const;

export const TEXTE_PROFESOR_AI = [
  "Profesorul tău individual, disponibil 24/7: alegi materia și nivelul, vorbești cu el ca la telefon, iar el îți explică, te corectează și verifică dacă ai înțeles.",
  "Spui ce nu înțelegi, iar Hannah îți explică pas cu pas, scrie pe tablă și te lasă să încerci tu înainte să-ți dea răspunsul.",
  "Lucrează pe itemi din variantele oficiale de bacalaureat și Evaluare Națională din anii trecuți și îți arată cum se punctează după barem.",
  "Îți dă un exercițiu pe măsura ta, te corectează pe loc și trece mai departe doar când e sigură că ai prins ideea.",
  "Vorbești ca la telefon: o poți opri în mijlocul frazei, pui o întrebare nouă și îți răspunde imediat.",
] as const;
