// Title/description pentru /subiecte-bac/materie/$materie, formulate cum caută elevii
// („subiecte bac fizica”, „subiecte fizica bac”, „bac sociologie 2026”) — fără diacritice în cuvântul-cheie.
import { BAC_AGGREGATES } from "@/lib/bac-archive";

/** Forma scurtă, fără diacritice, a materiei (cum se tastează în Google). */
const SCURT: Record<string, string> = {
  matematica: "matematica",
  "matematica-mate-info": "matematica mate-info",
  "matematica-st-nat": "matematica st-nat",
  "matematica-tehnologic": "matematica tehnologic",
  "matematica-pedagogic": "matematica pedagogic",
  romana: "romana",
  "romana-real": "romana real",
  "romana-uman": "romana uman",
  fizica: "fizica",
  "fizica-teoretic": "fizica teoretic",
  "fizica-tehnologic": "fizica tehnologic",
  chimie: "chimie",
  "chimie-organica": "chimie organica",
  "chimie-anorganica": "chimie anorganica",
  biologie: "biologie",
  "biologie-anatomie": "biologie anatomie",
  "biologie-vegetala-animala": "biologie vegetala",
  informatica: "informatica",
  istorie: "istorie",
  geografie: "geografie",
  logica: "logica",
  psihologie: "psihologie",
  filosofie: "filosofie",
  economie: "economie",
  sociologie: "sociologie",
};

const fara = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

export function numeScurtBac(slug: string, name: string): string {
  return SCURT[slug] ?? fara(name).toLowerCase().split(/[,(]/)[0]!.trim();
}

/** Materia „părinte” (pagina cu toate profilurile) pentru un slug, dacă există. */
export function agregatBac(slug: string): string | null {
  if (BAC_AGGREGATES[slug]) return slug;
  return (
    Object.entries(BAC_AGGREGATES).find(([k, a]) => k !== slug && slug.startsWith(a.prefix))?.[0] ??
    null
  );
}

export function titluMaterieBac(slug: string, name: string, ani: number[]): string {
  const n = numeScurtBac(slug, name);
  if (!ani.length) return `Subiecte BAC ${n} cu barem`;
  const min = Math.min(...ani);
  const max = Math.max(...ani);
  const perioada = min === max ? `${max}` : `${min}–${max}`;
  const candidati = [
    `Subiecte BAC ${n} ${max} cu barem — variante ${perioada}`,
    `Subiecte BAC ${n} ${max} cu barem (${perioada})`,
    `Subiecte BAC ${n} ${max} cu barem`,
  ];
  return candidati.find((c) => c.length <= 60) ?? candidati[candidati.length - 1]!;
}

export function descriereMaterieBac(opts: {
  slug: string;
  name: string;
  ani: number[];
  profiluri: string[];
  areRezolvari: boolean;
}): string {
  const n = numeScurtBac(opts.slug, opts.name);
  const perioada = opts.ani.length ? `${Math.min(...opts.ani)}–${Math.max(...opts.ani)}` : "";
  const prof = opts.profiluri.length > 1 ? ` (${opts.profiluri.join(", ")})` : "";
  const rez = opts.areRezolvari ? " și rezolvări pas cu pas" : "";
  const d =
    `Subiecte ${n} BAC ${perioada}${prof} cu barem oficial PDF${rez}, pe ani și sesiuni, cu sursa fiecărui document. Gratuit, fără cont.`.replace(
      /\s+/g,
      " ",
    );
  return d.length > 160 ? d.replace(", cu sursa fiecărui document", "") : d;
}
