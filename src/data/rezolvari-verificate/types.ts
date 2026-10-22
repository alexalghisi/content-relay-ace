// Rezolvări originale MeditatiiDirect.ro, scrise pe subiectul oficial și verificate reproductibil.
// Conținutul este în repo (revizuibil prin git), nu generat la cerere. Reguli:
// - `status: "publicat"` numai dacă toate verificările listate au rezultat PASS și au fost rulate efectiv;
// - răspunsurile nu se prezintă ca barem oficial; baremul oficial e alt document (vezi `documente`);
// - `documente.subiect` trebuie să fie un PDF care trece auditul din src/lib/bac-verificare.ts.
import type { Sesiune } from "@/lib/bac-verificare";

export type StatusEditorial = "draft" | "in_revizuire" | "verificat" | "publicat";

export interface Verificare {
  /** Ce s-a verificat, pe scurt. */
  ce: string;
  /** Unealta reală folosită (ex. „g++ 13, rulare pe exemple și cazuri limită”). */
  metoda: string;
  /** Comanda din repo care reproduce verificarea. */
  comanda: string;
  /** Data rulării (YYYY-MM-DD). */
  data: string;
  rezultat: "PASS" | "FAIL";
}

export interface ItemRezolvat {
  /** Identificator stabil, unic în rezolvare: ex. "s1-1", "s3-2". Folosit și ca ancoră (#s3-2). */
  id: string;
  /** Eticheta itemului: „Subiectul I, 1”. */
  eticheta: string;
  puncte: number;
  /** Reformularea fidelă, pe scurt, a cerinței (enunțul complet e în PDF-ul oficial). */
  cerinta: string;
  /** Ce trebuie să obții, în cuvintele elevului. */
  ceSeCere: string;
  notiuni: string[];
  /** Pașii raționamentului (Markdown simplu). */
  pasi: string[];
  /** Răspunsul final, identificat clar. */
  raspuns: string;
  /** Cum ne-am verificat rezultatul (independent de raționament). */
  verificare: string;
  greseli: string[];
  /** Cod sursă, când cerința îl cere. */
  cod?: { limbaj: "cpp" | "pseudocod"; sursa: string };
  /** Complexitate, pentru itemii de programare. */
  complexitate?: string;
}

export interface SectiuneRezolvata {
  titlu: string;
  puncte: number;
  itemi: ItemRezolvat[];
}

export interface RezolvareVerificata {
  materie: string;
  an: number;
  sesiune: Sesiune;
  /** Ce scrie pe subiect: proba, programa și varianta. */
  proba: string;
  programa: string;
  /** Numărul variantei de pe subiect; null când documentul nu are variantă (ex. simulările). */
  varianta: number | null;
  specializare: string;
  titlu: string;
  descriere: string;
  status: StatusEditorial;
  dificultate: "ușor" | "mediu" | "dificil";
  timpMinute: number;
  /** Data ultimei revizii a conținutului (YYYY-MM-DD). */
  actualizat: string;
  documente: {
    /** Calea în bucketul bac-pdfs a subiectului oficial pe care s-a lucrat. */
    subiect: string;
    /** Nota despre barem: de ce e sau nu e afișat lângă rezolvare. */
    notaBarem: string;
  };
  sursa: { emitent: string; detalii: string };
  verificari: Verificare[];
  sectiuni: SectiuneRezolvata[];
  /** Notă generală de punctaj (doar ce reiese din regulile publice ale probei). */
  notaPunctaj: string;
}

/**
 * Rezolvare pe un subiect oficial de ADMITERE la facultate (tabelul admission_papers, bucket admitere-pdfs).
 * Aceleași reguli editoriale ca la BAC; documentul trebuie să treacă auditul din src/lib/admitere-verificare.ts.
 */
export interface RezolvareAdmitere extends Omit<RezolvareVerificata, "sesiune" | "documente"> {
  examen: "admitere";
  /** Slug-ul universității din admission_papers (ex. "upb"). */
  universitate: string;
  universitateNume: string;
  /** Sesiunea din admission_papers (ex. "iulie"). */
  sesiune: string;
  documente: {
    /** storage_path în bucketul admitere-pdfs. */
    subiect: string;
    /** Sursa oficială declarată în admission_papers.description (URL). */
    sursaUrl: string;
    notaBarem: string;
  };
  /** Total puncte pe itemi (la admitere diferă de la o universitate la alta). */
  punctajTotal: number;
}

export type OriceRezolvare = RezolvareVerificata | RezolvareAdmitere;
export const esteAdmitere = (r: OriceRezolvare): r is RezolvareAdmitere =>
  (r as RezolvareAdmitere).examen === "admitere";
