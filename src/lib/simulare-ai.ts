// Simulare AI + Meditator AI — configurație și tipuri comune (sigure pentru client).

export const AI_MATERII = [
  { slug: "matematica", name: "Matematică" },
  { slug: "romana", name: "Limba și literatura română" },
  { slug: "engleza", name: "Engleză" },
  { slug: "fizica", name: "Fizică" },
  { slug: "chimie", name: "Chimie" },
  { slug: "biologie", name: "Biologie" },
  { slug: "informatica", name: "Informatică" },
  { slug: "istorie", name: "Istorie" },
  { slug: "geografie", name: "Geografie" },
] as const;
export type AiMaterie = (typeof AI_MATERII)[number]["slug"];
export const AI_MATERIE_SLUGS = AI_MATERII.map((m) => m.slug) as [AiMaterie, ...AiMaterie[]];
export const aiMaterieName = (s: string) => AI_MATERII.find((m) => m.slug === s)?.name ?? s;

export const AI_CLASE = [5, 6, 7, 8, 9, 10, 11, 12] as const;
export const clasaLabel = (c: number) =>
  c === 8
    ? "Clasa a VIII-a (Evaluare Națională)"
    : c === 12
      ? "Clasa a XII-a (BAC)"
      : `Clasa a ${["V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][c - 5]}-a`;

export const AI_DURATE = [15, 30, 45, 60] as const;
export type AiDurata = (typeof AI_DURATE)[number];

/** Câte întrebări de fiecare fel, după durată (ritm realist: ~2–3 min / grilă, ~8–10 min / problemă). */
export const planTest = (d: AiDurata) =>
  ({
    15: { grila: 5, deschis: 1 },
    30: { grila: 8, deschis: 2 },
    45: { grila: 10, deschis: 3 },
    60: { grila: 12, deschis: 4 },
  })[d];

export const PUNCTE_GRILA = 5;
export const PUNCTE_DESCHIS = 10;

/** Nota pe scala 1–10, cu 1 punct din oficiu, ca la examenele naționale. */
export const notaDin = (obtinut: number, total: number) =>
  total > 0 ? Math.round((1 + (9 * Math.max(0, Math.min(obtinut, total))) / total) * 100) / 100 : 1;

export const LIMITA_TESTE_ZI = 3;
export const LIMITA_MESAJE_ZI = 30;
/** Timp de grație după expirarea cronometrului, pentru trimiterea răspunsurilor. */
export const GRATIE_MIN = 10;

// ── Tipuri publice (fără barem) ────────────────────────────────────────

export interface IntrebarePublica {
  id: string;
  tip: "grila" | "deschis";
  enunt: string;
  optiuni?: string[];
  puncte: number;
}

export interface TestPublic {
  titlu: string;
  materie: AiMaterie;
  clasa: number;
  durata: AiDurata;
  intrebari: IntrebarePublica[];
  /** Momentul generării (ms), pentru cronometru. */
  start: number;
}

export interface FeedbackItem {
  id: string;
  tip: "grila" | "deschis";
  enunt: string;
  raspunsElev: string;
  raspunsCorect: string;
  puncte: number;
  maxim: number;
  corect: boolean;
  /** Unde a apărut greșeala (pasul / partea din rezolvare). */
  unde: string;
  /** Ce anume e greșit. */
  ce: string;
  /** De ce e greșit / ce regulă se aplică. */
  deCe: string;
  /** Problemă scrisă care nu a putut fi corectată automat (nu intră în notă). */
  necorectat?: boolean;
  /** Slug din Harta Blocajelor, dacă există o noțiune potrivită. */
  notiune: string | null;
}

export interface RezultatTest {
  nota: number;
  obtinut: number;
  total: number;
  feedback: FeedbackItem[];
  rezumat: string;
  deRecuperat: string[];
}

export type AiResult<T> = { ok: true; data: T; ramase?: number } | { ok: false; error: string };
