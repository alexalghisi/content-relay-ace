// Harta Blocajelor — graful de concepte și funcțiile de acces.
// Conținutul este scris manual; nu conține date despre profesori, prețuri sau recenzii.
import type { BlocajMaterie, BlocajNode } from "./types";
import { MATEMATICA } from "./matematica";
import { ROMANA } from "./romana";
import { FIZICA, CHIMIE } from "./stiinte";
import { ENGLEZA, INFORMATICA } from "./limbi-info";

export type { BlocajMaterie, BlocajNode, BlocajExemplu, BlocajVerificare } from "./types";

export interface BlocajMaterieInfo {
  slug: BlocajMaterie;
  /** Cu diacritice, pentru titluri. */
  name: string;
  /** Forma din text curent („la matematică”). */
  nameLower: string;
  /** Pagina de meditații a materiei (pentru linkuri interne). */
  landing: string;
  /** Scurtă descriere a ceea ce acoperă harta la materia respectivă. */
  descriere: string;
}

export const BLOCAJE_MATERII: BlocajMaterieInfo[] = [
  {
    slug: "matematica",
    name: "Matematică",
    nameLower: "matematică",
    landing: "/meditatii-matematica",
    descriere:
      "De la ordinea operațiilor și fracții până la derivate și integrale: lanțul de noțiuni pe care se sprijină fiecare capitol.",
  },
  {
    slug: "romana",
    name: "Limba română",
    nameLower: "limba română",
    landing: "/meditatii-romana",
    descriere:
      "Părți de vorbire, sintaxă, ortografie, figuri de stil și structura textelor cerute la Evaluarea Națională și la BAC.",
  },
  {
    slug: "fizica",
    name: "Fizică",
    nameLower: "fizică",
    landing: "/meditatii-fizica",
    descriere:
      "Unități de măsură, mișcare, forțe, energie, circuite și căldură — cu matematica de care ai nevoie la fiecare pas.",
  },
  {
    slug: "chimie",
    name: "Chimie",
    nameLower: "chimie",
    landing: "/meditatii-chimie",
    descriere:
      "Structura atomului, valență, egalarea ecuațiilor, mol și concentrații — baza calculelor din chimie.",
  },
  {
    slug: "engleza",
    name: "Engleză",
    nameLower: "engleză",
    landing: "/meditatii-engleza",
    descriere:
      "Timpurile verbale care se confundă cel mai des, condiționalele, pasivul și vorbirea indirectă.",
  },
  {
    slug: "informatica",
    name: "Informatică",
    nameLower: "informatică",
    landing: "/meditatii-informatica",
    descriere:
      "Variabile, bucle, prelucrarea cifrelor, vectori și recursivitate — primele blocaje din programare.",
  },
];

export const BLOCAJE: BlocajNode[] = [
  ...MATEMATICA,
  ...ROMANA,
  ...FIZICA,
  ...CHIMIE,
  ...ENGLEZA,
  ...INFORMATICA,
];

const BY_SLUG = new Map(BLOCAJE.map((n) => [n.slug, n]));

export const getBlocajMaterie = (slug: string) => BLOCAJE_MATERII.find((m) => m.slug === slug);
export const getBlocaj = (slug: string) => BY_SLUG.get(slug);
export const blocajeForMaterie = (materie: BlocajMaterie) =>
  BLOCAJE.filter((n) => n.materie === materie);

/** Nodurile pe care se sprijină un blocaj (noțiunile care lipsesc de obicei). */
export const prerequisitesOf = (n: BlocajNode) =>
  n.lipsa.map(getBlocaj).filter((x): x is BlocajNode => !!x);
/** Nodurile care urmează după un blocaj (ce poți învăța mai departe). */
export const nextOf = (n: BlocajNode) =>
  n.urmeaza.map(getBlocaj).filter((x): x is BlocajNode => !!x);
/** Nodurile care îl au pe acesta ca prerechizit — de ce merită rezolvat acum. */
export const dependentsOf = (n: BlocajNode) => BLOCAJE.filter((x) => x.lipsa.includes(n.slug));

/** Clasele distincte acoperite la o materie, crescător. */
export const claseForMaterie = (materie: BlocajMaterie) =>
  Array.from(new Set(blocajeForMaterie(materie).flatMap((n) => n.clase))).sort((a, b) => a - b);

export const clasaRoman = (c: number) =>
  ["V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][c - 5] ?? String(c);

export const claseLabel = (clase: number[]) => {
  const sorted = [...clase].sort((a, b) => a - b);
  const roman = clasaRoman;
  if (sorted.length === 1) return `clasa a ${roman(sorted[0])}-a`;
  return `clasele ${roman(sorted[0])}–${roman(sorted[sorted.length - 1])}`;
};

export const blocajPath = (n: BlocajNode) => `/harta-blocajelor/${n.materie}/${n.slug}`;
export const materiePath = (m: BlocajMaterie) => `/harta-blocajelor/${m}`;
