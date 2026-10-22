import { LECTII_BAC } from "./lectii-bac";
export type Replica = { cine: "elev" | "prof"; text: string; tabla?: string };
/** `sursa`: the official exam item the lesson is built on (year, session, variant, item, PDF). */
export type Lectie = { materie: string; nivel: string; sursa?: string; replici: Replica[] };



const DESCHIDERI = [
  (m: string) => `Bună! Azi lucrăm împreună la ${m}. Spune-mi ce te încurcă.`,
  (m: string) => `Salut! Începem lecția de ${m}. Cu ce exercițiu vrei să pornim?`,
  (m: string) => `Bine ai venit! Hai să vedem la ${m} unde te-ai blocat.`,
  (m: string) => `Salut! Sunt profesoara ta de ${m}. Ce nu ți-a ieșit la temă?`,
] as const;

/** The teacher always speaks first, so the demo never opens with silence while the pupil talks. */
export function cuDeschidere(l: Lectie, i: number): Lectie {
  if (l.replici[0]?.cine === "prof") return l;
  const text = DESCHIDERI[i % DESCHIDERI.length](l.materie.replace(/ M1$/, "").toLowerCase());
  return { ...l, replici: [{ cine: "prof", text }, ...l.replici] };
}

/** Every demo lesson is built on a real item from a past Bacalaureat / Evaluare Națională variant. */
export const LECTII: Lectie[] = LECTII_BAC.map(cuDeschidere);

/** Stable key per lesson, used for the pre-generated voice files. */
export function cheieLectie(l: Lectie): string {
  return `${l.materie}-${l.nivel}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** A shuffled deck visits every example once; its first item avoids the previous lesson. */
export function amestecaLectii(total: number, precedenta: number | null, random = Math.random): number[] {
  const ordine = Array.from({ length: total }, (_, i) => i);
  for (let i = ordine.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [ordine[i], ordine[j]] = [ordine[j], ordine[i]];
  }
  if (ordine.length > 1 && ordine[0] === precedenta) {
    [ordine[0], ordine[1]] = [ordine[1], ordine[0]];
  }
  return ordine;
}