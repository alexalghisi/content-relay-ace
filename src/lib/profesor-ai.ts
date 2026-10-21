// Profesor AI — configurație, prețuri și tipuri (sigure pentru client).
// PREȚURI: modifică tabelul de mai jos (lei per sesiune). Serverul poate suprascrie oricare valoare
// fără deploy de cod prin secretul PROFESOR_AI_PRETURI (JSON cu aceeași formă, ex.
// {"matematica":{"30":39},"implicit":{"60":69}}). Prețul afișat și cel încasat vin din aceeași funcție.

import { AI_MATERII, type AiMaterie } from "./simulare-ai";

export const PA_MATERII = AI_MATERII;
export type PaMaterie = AiMaterie;

export const PA_NIVELURI = [
  { slug: "primar", name: "Școala primară (I–IV)" },
  { slug: "gimnaziu", name: "Gimnaziu (V–VIII)" },
  { slug: "evaluare", name: "Evaluarea Națională" },
  { slug: "liceu", name: "Liceu (IX–XII)" },
  { slug: "bac", name: "Bacalaureat" },
  { slug: "student", name: "Facultate / student" },
  { slug: "adult", name: "Adult — învăț pentru mine" },
] as const;
export type PaNivel = (typeof PA_NIVELURI)[number]["slug"];

export const PA_DURATE = [15, 30, 45, 60, 90] as const;
export type PaDurata = (typeof PA_DURATE)[number];

export const PA_OBIECTIVE = [
  { slug: "explicatii", name: "Explicații", desc: "Îți explică pe înțeles o noțiune, cu exemple." },
  {
    slug: "lectie",
    name: "Lecție interactivă",
    desc: "O lecție pas cu pas, cu întrebări pe parcurs.",
  },
  { slug: "exercitii", name: "Exerciții", desc: "Îți dă exerciții, te corectează și îți explică." },
  {
    slug: "intrebari",
    name: "Întrebări directe",
    desc: "Întrebi orice, primești răspunsuri clare.",
  },
] as const;
export type PaObiectiv = (typeof PA_OBIECTIVE)[number]["slug"];

export type TabelPreturi = Record<string, Partial<Record<`${PaDurata}`, number>>>;

/** Prețuri implicite în lei per sesiune. „implicit” se aplică materiilor fără rând propriu. */
export const PRETURI_IMPLICITE: TabelPreturi = {
  implicit: { "15": 19, "30": 35, "45": 49, "60": 59, "90": 85 },
  matematica: { "15": 22, "30": 39, "45": 55, "60": 69, "90": 99 },
  fizica: { "15": 22, "30": 39, "45": 55, "60": 69, "90": 99 },
  chimie: { "15": 22, "30": 39, "45": 55, "60": 69, "90": 99 },
  informatica: { "15": 24, "30": 42, "45": 59, "60": 75, "90": 109 },
};

export function pretSesiune(
  materie: string,
  durata: PaDurata,
  tabel: TabelPreturi = PRETURI_IMPLICITE,
): number {
  const d = String(durata) as `${PaDurata}`;
  return tabel[materie]?.[d] ?? tabel.implicit?.[d] ?? PRETURI_IMPLICITE.implicit[d] ?? 0;
}

export const paMaterieName = (s: string) => PA_MATERII.find((m) => m.slug === s)?.name ?? s;
export const paNivelName = (s: string) => PA_NIVELURI.find((m) => m.slug === s)?.name ?? s;
export const paObiectivName = (s: string) => PA_OBIECTIVE.find((m) => m.slug === s)?.name ?? s;

export interface PaConfig {
  materie: PaMaterie;
  nivel: PaNivel;
  durata: PaDurata;
  obiectiv: PaObiectiv;
}

/** Răspunsul profesorului: ce spune (vocea avatarului) și ce scrie pe tablă. */
export interface PaReplica {
  vorbit: string;
  tabla?: string;
  emotie: "zambet" | "gandire" | "incurajare" | "neutru";
}

/** `cod` = tipul erorii AI (ex. „credits”, „rate_limit”), ca interfața să reacționeze corect. */
export type PaResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; cod?: string; reiaPesteSec?: number };
