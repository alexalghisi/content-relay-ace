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
  "Profesor AI: primele 15 minute gratuit, live, în română",
  "Blocat la o temă? Întreab-o pe profesoara AI, chiar acum",
  "O lecție adevărată, cu voce și tablă — 15 minute gratuit",
  "Pregătire pentru bacalaureat sau test cu un profesor AI care te ascultă",
  "Pui întrebări oricând, o întrerupi oricând — ca la o meditație reală",
] as const;

export const TEXTE_PROFESOR_AI = [
  "Alegi materia, nivelul și durata, apoi vorbești sau scrii. Profesorul îți explică, îți dă exerciții, te corectează și verifică dacă ai înțeles.",
  "Spui ce nu înțelegi, iar Hannah îți explică pas cu pas, scrie pe tablă și te lasă să încerci tu înainte să-ți dea răspunsul.",
  "De la ecuații și integrale la eseul de română, genetică sau present simple: 28 de materii, în limba pe care o alegi.",
  "Îți dă un exercițiu pe măsura ta, te corectează pe loc și trece mai departe doar când e sigură că ai prins ideea.",
  "Vorbești ca la telefon: o poți opri în mijlocul frazei, pui o întrebare nouă și îți răspunde imediat.",
] as const;
