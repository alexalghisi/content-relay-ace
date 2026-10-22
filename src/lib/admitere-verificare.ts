// Verificarea subiectelor de admitere publicate (admission_papers + bucket admitere-pdfs).
// Faptele vin din scripts/audit-admitere-pdfs.py (textul PDF-ului + sursa declarată); aici decidem,
// pur și testabil, ce afișăm și cu ce etichetă. Documentele neauditate sau neverificabile nu apar.
import audit from "@/data/admitere-verificare.generated.json";

export interface DocAdmitereAuditat {
  path: string;
  universitate: string;
  materie: string;
  an: number;
  sesiune: string | null;
  tip: string;
  text: boolean;
  ani_document: number[];
  simulare_document: boolean;
  sursa_url: string | null;
  sursa_domeniu: string | null;
}

/** Domenii ale universităților (sursă oficială). Adaugă aici doar domenii instituționale. */
export const DOMENII_OFICIALE = [
  "physics.pub.ro",
  "upb.ro",
  "admitere.pub.ro",
  "umfcd.ro",
  "umfcluj.ro",
  "umfiasi.ro",
  "umft.ro",
  "drept.unibuc.ro",
  "unibuc.ro",
  "ubbcluj.ro",
  "utcluj.ro",
  "ase.ro",
] as const;

export const MOTIVE_ADMITERE = {
  neauditat: "documentul nu a trecut încă prin auditul de conținut",
  fara_sursa: "nu are o sursă declarată, iar conținutul nu poate fi verificat",
  an: "anul din document diferă de anul arhivei",
} as const;
export type MotivAdmitere = keyof typeof MOTIVE_ADMITERE;

export type Provenienta = "oficiala" | "preluata";

export interface VerdictAdmitere {
  afisat: boolean;
  motive: MotivAdmitere[];
  /** oficiala = descărcat de pe site-ul universității; preluata = copie de pe alt site, confirmată după conținut. */
  provenienta: Provenienta | null;
  simulare: boolean;
  sursaUrl: string | null;
  sursaDomeniu: string | null;
}

const DOCS = (audit as { fisiere: DocAdmitereAuditat[] }).fisiere;
const DUPA_PATH = new Map(DOCS.map((d) => [d.path, d]));

export const esteDomeniuOficial = (host: string | null) =>
  !!host && DOMENII_OFICIALE.some((d) => host === d || host.endsWith(`.${d}`));

export function verdictDocument(d: DocAdmitereAuditat | undefined): VerdictAdmitere {
  if (!d)
    return { afisat: false, motive: ["neauditat"], provenienta: null, simulare: false, sursaUrl: null, sursaDomeniu: null };
  const oficial = esteDomeniuOficial(d.sursa_domeniu);
  const motive: MotivAdmitere[] = [];
  // Fără sursă oficială, documentul trebuie să se confirme singur prin text (an + conținut).
  if (!d.sursa_url) motive.push("fara_sursa");
  else if (!oficial && !d.text) motive.push("fara_sursa");
  if (d.ani_document.length > 0 && !d.ani_document.includes(d.an)) motive.push("an");
  return {
    afisat: motive.length === 0,
    motive,
    provenienta: d.sursa_url ? (oficial ? "oficiala" : "preluata") : null,
    simulare: d.simulare_document,
    sursaUrl: d.sursa_url,
    sursaDomeniu: d.sursa_domeniu,
  };
}

export const verdictAdmitere = (path: string) => verdictDocument(DUPA_PATH.get(path));
export const esteAdmitereAfisat = (path: string) => verdictAdmitere(path).afisat;

/** Filtrează rânduri din admission_papers la cele care trec auditul. */
export function filtreazaAfisate<T extends { storage_path: string }>(rows: T[] | null | undefined): T[] {
  return (rows ?? []).filter((r) => esteAdmitereAfisat(r.storage_path));
}

export function statisticiAdmitere() {
  const v = DOCS.map(verdictDocument);
  return {
    total: DOCS.length,
    afisate: v.filter((x) => x.afisat).length,
    oficiale: v.filter((x) => x.afisat && x.provenienta === "oficiala").length,
    preluate: v.filter((x) => x.afisat && x.provenienta === "preluata").length,
    simulari: v.filter((x) => x.afisat && x.simulare).length,
  };
}
