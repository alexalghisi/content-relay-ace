/**
 * Subiecte Evaluarea Națională (clasa a VIII-a): documentele oficiale (subiect + barem, PDF găzduit în
 * public/evaluare-nationala/**) și rezolvarea scrisă de echipă (src/content/rezolvari-en/{slug}.md).
 */
export type MaterieEn = "matematica" | "romana";

export interface LucrareEn {
  slug: string;
  an: number; // anul examenului (2027 = anul școlar 2026–2027)
  tip: "model" | "sesiune";
  materie: MaterieEn;
  /** Eticheta scurtă din titluri: „Model 2027”, „Sesiunea iunie 2026, varianta 1”. */
  eticheta: string;
  subiect: string;
  barem: string;
  /** Data publicării de către CNCE (ISO). */
  publicat: string;
  rezumat: string;
}

export const MATERIE_EN: Record<MaterieEn, string> = {
  matematica: "Matematică",
  romana: "Limba și literatura română",
};

export const LUCRARI_EN: LucrareEn[] = [
  {
    slug: "model-2027-matematica",
    an: 2027,
    tip: "model",
    materie: "matematica",
    eticheta: "Model 2027",
    subiect: "/evaluare-nationala/2027/model-matematica-subiect.pdf",
    barem: "/evaluare-nationala/2027/model-matematica-barem.pdf",
    publicat: "2026-11-01",
    rezumat:
      "Modelul oficial publicat de CNCE pe 1 noiembrie 2026: 12 itemi grilă și 6 probleme cu rezolvare completă (pixuri și resturi, expresii raționale, funcția liniară, dreptunghi și centru de greutate, trapez, piramidă pe romb).",
  },
  {
    slug: "model-2027-romana",
    an: 2027,
    tip: "model",
    materie: "romana",
    eticheta: "Model 2027",
    subiect: "/evaluare-nationala/2027/model-romana-subiect.pdf",
    barem: "/evaluare-nationala/2027/model-romana-barem.pdf",
    publicat: "2026-11-01",
    rezumat:
      "Modelul oficial 2027 la română: un text literar („Caise cu ceapă”, Mircea Sântimbreanu) și unul nonliterar (Alexandru N. Stermin), gramatică și compunerea despre mesajul textului.",
  },
  {
    slug: "2026-matematica",
    an: 2026,
    tip: "sesiune",
    materie: "matematica",
    eticheta: "Sesiunea iunie 2026, varianta 1",
    subiect: "/evaluare-nationala/2026/matematica-subiect.pdf",
    barem: "/evaluare-nationala/2026/matematica-barem.pdf",
    publicat: "2026-06-24",
    rezumat:
      "Subiectul dat la examen pe 24 iunie 2026: procente, fracții periodice, centrul de greutate, piramida regulată, problema cu mingea, funcția f(x) = 3x − 6, cerc, paralelogram și prisma.",
  },
  {
    slug: "2026-romana",
    an: 2026,
    tip: "sesiune",
    materie: "romana",
    eticheta: "Sesiunea iunie 2026, varianta 3",
    subiect: "/evaluare-nationala/2026/romana-subiect.pdf",
    barem: "/evaluare-nationala/2026/romana-barem.pdf",
    publicat: "2026-06-22",
    rezumat:
      "Subiectul dat la examen pe 22 iunie 2026: „Mesteceni de hârtie” de Veronica D. Niculescu și un jurnal de călătorie, gramatică și rezumatul textului 1 (100–150 de cuvinte).",
  },
];

const REZOLVARI = import.meta.glob("/src/content/rezolvari-en/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function rezolvareEn(slug: string): string | null {
  return REZOLVARI[`/src/content/rezolvari-en/${slug}.md`] ?? null;
}

export function lucrareEn(slug: string): LucrareEn | undefined {
  return LUCRARI_EN.find((l) => l.slug === slug);
}

export function titluLucrareEn(l: LucrareEn): string {
  const m = l.materie === "matematica" ? "matematică" : "română";
  return l.tip === "model"
    ? `Model Evaluare Națională ${l.an} ${m}`
    : `Subiecte Evaluare Națională ${l.an} ${m}`;
}
