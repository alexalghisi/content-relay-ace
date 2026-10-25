// Profesor AI — configurație, prețuri și tipuri (sigure pentru client).
// PREȚURI: modifică tabelul de mai jos (lei per sesiune). Serverul poate suprascrie oricare valoare
// fără deploy de cod prin secretul PROFESOR_AI_PRETURI (JSON cu aceeași formă, ex.
// {"matematica":{"30":39},"implicit":{"60":69}}). Prețul afișat și cel încasat vin din aceeași funcție.

export const PA_MATERII = [
  { slug: "matematica", name: "Matematică" },
  { slug: "romana", name: "Limba și literatura română" },
  { slug: "engleza", name: "Limba engleză" },
  { slug: "franceza", name: "Limba franceză" },
  { slug: "germana", name: "Limba germană" },
  { slug: "spaniola", name: "Limba spaniolă" },
  { slug: "italiana", name: "Limba italiană" },
  { slug: "latina", name: "Limba latină" },
  { slug: "fizica", name: "Fizică" },
  { slug: "chimie", name: "Chimie" },
  { slug: "biologie", name: "Biologie" },
  { slug: "informatica", name: "Informatică" },
  { slug: "tic", name: "TIC (tehnologia informației)" },
  { slug: "interviu-it", name: "Pregătire interviu de angajare (IT)" },
  { slug: "programare", name: "Programare (Python, JavaScript, Java, C++)" },
  { slug: "orice", name: "Altă temă (spui tu ce vrei)" },
  { slug: "istorie", name: "Istorie" },
  { slug: "geografie", name: "Geografie" },
  { slug: "economie", name: "Economie" },
  { slug: "filosofie", name: "Filosofie" },
  { slug: "logica", name: "Logică și argumentare" },
  { slug: "psihologie", name: "Psihologie" },
  { slug: "sociologie", name: "Sociologie" },
  { slug: "educatie-sociala", name: "Educație socială / civică" },
  { slug: "stiinte", name: "Științe ale naturii (primar)" },
  { slug: "comunicare", name: "Comunicare în limba română (primar)" },
  { slug: "contabilitate", name: "Contabilitate" },
  { slug: "statistica", name: "Statistică" },
  { slug: "muzica", name: "Educație muzicală (teorie)" },
  { slug: "arte", name: "Istoria artei" },
  { slug: "religie", name: "Religie" },
] as const;
export type PaMaterie = (typeof PA_MATERII)[number]["slug"];

/** Limba în care vorbește profesoara (voce, transcriere și text). */
export const PA_LIMBI = [
  { slug: "ro", name: "Română", bcp47: "ro-RO", prompt: "română" },
  { slug: "en", name: "English", bcp47: "en-US", prompt: "engleză" },
  { slug: "fr", name: "Français", bcp47: "fr-FR", prompt: "franceză" },
  { slug: "de", name: "Deutsch", bcp47: "de-DE", prompt: "germană" },
  { slug: "es", name: "Español", bcp47: "es-ES", prompt: "spaniolă" },
  { slug: "it", name: "Italiano", bcp47: "it-IT", prompt: "italiană" },
  { slug: "hu", name: "Magyar", bcp47: "hu-HU", prompt: "maghiară" },
  { slug: "uk", name: "Українська", bcp47: "uk-UA", prompt: "ucraineană" },
  { slug: "ru", name: "Русский", bcp47: "ru-RU", prompt: "rusă" },
] as const;
export type PaLimba = (typeof PA_LIMBI)[number]["slug"];
export const paLimba = (s?: string) => PA_LIMBI.find((l) => l.slug === s) ?? PA_LIMBI[0];

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

export const PA_DURATE = [15, 30, 45, 60] as const;
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
  implicit: { "15": 19, "30": 35, "45": 49, "60": 59 },
  matematica: { "15": 22, "30": 39, "45": 55, "60": 69 },
  fizica: { "15": 22, "30": 39, "45": 55, "60": 69 },
  chimie: { "15": 22, "30": 39, "45": 55, "60": 69 },
  informatica: { "15": 24, "30": 42, "45": 59, "60": 75 },
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
  /** Lipsă în sesiunile vechi = română. */
  limba?: PaLimba;
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

/** Mesaje de control trimise de client (ascunse în transcript, nu sunt vorbe ale elevului). */
export const PA_START = "[START] Începe ora.";
export const PA_TACERE = "[TĂCERE] Elevul nu a spus nimic de ceva vreme.";
/** Secunde de liniște (după ce profesoara a terminat de vorbit) până când reia singură. */
export const PA_TACERE_SEC = 25;
/** După atâtea reluări consecutive fără răspuns, profesoara nu mai insistă. */
export const PA_TACERE_MAX = 2;
export const paEsteControl = (text: string) => text === PA_START || text === PA_TACERE;
