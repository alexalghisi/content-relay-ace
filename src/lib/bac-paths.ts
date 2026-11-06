/**
 * SEO-friendly URLs for bundled original BAC papers:
 *   /subiecte-bac/{an}/{materie}/{sesiune}[-varianta-{n}]
 *   /subiecte-bac/{an}/{materie}/{sesiune}[-varianta-{n}]/rezolvare
 * e.g. /subiecte-bac/2024/matematica-mate-info/iunie-iulie-varianta-2/rezolvare
 * Client-safe: no bundled data is imported here.
 */

type PathRow = {
  id?: string;
  year: number;
  session: string;
  subject_slug: string;
  profil: string | null;
  variant: string | null;
};

const PROFIL_SLUG: Record<string, string> = {
  "mate-info": "mate-info",
  "științe ale naturii": "stiinte-ale-naturii",
};

/** Subject segment; includes the profile when the exam differs per profile. */
export function bacMaterieSegment(r: Pick<PathRow, "subject_slug" | "profil">) {
  if (r.subject_slug === "informatica") {
    return `informatica-${PROFIL_SLUG[r.profil ?? ""] ?? "mate-info"}`;
  }
  return r.subject_slug;
}

export function bacLucrareSegment(r: Pick<PathRow, "session" | "variant">) {
  return r.variant ? `${r.session}-varianta-${r.variant}` : r.session;
}

export function isBundledOriginal(r: { id?: string | null }) {
  return !!r.id && r.id.startsWith("orig-");
}

export function bacPaperPath(r: PathRow) {
  return `/subiecte-bac/${r.year}/${bacMaterieSegment(r)}/${bacLucrareSegment(r)}`;
}

export function bacRezolvarePath(r: PathRow) {
  return `${bacPaperPath(r)}/rezolvare`;
}

export function bacPaperKey(r: PathRow) {
  return `${r.year}-${bacMaterieSegment(r)}-${bacLucrareSegment(r)}`;
}

/** Human subject label for headings, e.g. "Matematică M1 (mate-info)". */
export function bacMaterieLabel(materie: string) {
  const map: Record<string, string> = {
    "matematica-mate-info": "Matematică M1 (mate-info)",
    "matematica-st-nat": "Matematică M2 (științe ale naturii)",
    "matematica-tehnologic": "Matematică (tehnologic)",
    "matematica-pedagogic": "Matematică (pedagogic)",
    "informatica-mate-info": "Informatică C/C++ (mate-info)",
    "informatica-stiinte-ale-naturii": "Informatică C/C++ (științe ale naturii)",
    "romana-real": "Limba și literatura română (real)",
    "romana-uman": "Limba și literatura română (uman)",
    romana: "Limba și literatura română",
    istorie: "Istorie",
    geografie: "Geografie",
    "biologie-vegetala-animala": "Biologie vegetală și animală",
    "biologie-anatomie": "Anatomie și fiziologie umană (Biologie XI–XII)",
    "chimie-organica": "Chimie organică",
    "chimie-anorganica": "Chimie anorganică",
    "fizica-teoretic": "Fizică (teoretic/vocațional)",
    "fizica-tehnologic": "Fizică (tehnologic)",
    economie: "Economie",
    filosofie: "Filosofie",
    logica: "Logică, argumentare și comunicare",
    psihologie: "Psihologie",
    sociologie: "Sociologie",
  };
  return map[materie] ?? materie;
}
