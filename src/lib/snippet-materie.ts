// Titlul și descrierea din Google pentru paginile /meditatii-{materie}, construite din cifre reale
// (src/lib/market-stats.functions.ts). În Search Console aceste pagini apar în top 5 pentru
// „meditatii {materie}” cu CTR aproape zero: competitorii afișează numărul de profesori și prețul
// direct în titlu. Folosim doar agregate reale; fără destule date rămâne textul scris de mână.
import {
  MIN_LISTINGS_FOR_INDEX,
  pretAfisabil,
  type ComboStats,
} from "@/lib/market-stats.functions";

/** Lungimea după care Google taie de obicei titlul pe desktop. */
export const TITLU_MAX = 60;
export const DESCRIERE_MAX = 160;

/** Acordul numeralului în română: „19 anunțuri”, dar „20 de anunțuri”, „101 anunțuri”, „120 de anunțuri”. */
export function cuDe(n: number, substantiv: string): string {
  const r = n % 100;
  return n > 0 && (r === 0 || r >= 20) ? `${n} de ${substantiv}` : `${n} ${substantiv}`;
}

export interface Snippet {
  title: string;
  description: string;
}

/**
 * @param materie numele materiei, cu diacritice și litere mici („matematică”)
 * @param fallback titlul și descrierea scrise de mână, folosite când nu avem destule date reale
 */
export function snippetMaterie(
  materie: string,
  stats: Pick<ComboStats, "listings" | "teachers" | "price"> | null | undefined,
  fallback: Snippet,
): Snippet {
  if (!stats || stats.listings < MIN_LISTINGS_FOR_INDEX) return fallback;
  const pret = pretAfisabil(stats.price);
  const anunturi = cuDe(stats.listings, "anunțuri");

  const variante = [
    pret ? `Meditații ${materie}: ${anunturi}, tarif median ${pret.median} lei/oră` : null,
    pret ? `Meditații ${materie}: ${anunturi}, ${pret.median} lei/oră` : null,
    `Meditații ${materie}: ${anunturi}, online sau acasă`,
    `Meditații ${materie}: ${anunturi}`,
  ].filter((t): t is string => !!t);
  const title = variante.find((t) => t.length <= TITLU_MAX) ?? fallback.title;

  const profesori =
    stats.teachers >= MIN_LISTINGS_FOR_INDEX ? ` de la ${cuDe(stats.teachers, "profesori")}` : "";
  const fraze = [
    `${anunturi} de meditații ${materie}${profesori}, online sau acasă.`,
    pret ? `Tarife reale: ${pret.min}–${pret.max} lei/oră, median ${pret.median}.` : null,
    "Oferte gratuite, fără comision.",
  ].filter((f): f is string => !!f);
  // Păstrăm frazele întregi; dacă nu încap, renunțăm întâi la ultima (îndemnul), apoi la preț.
  let description = fraze.join(" ");
  while (description.length > DESCRIERE_MAX && fraze.length > 1) {
    fraze.pop();
    description = fraze.join(" ");
  }
  if (description.length > DESCRIERE_MAX) description = fallback.description;
  return { title, description };
}
