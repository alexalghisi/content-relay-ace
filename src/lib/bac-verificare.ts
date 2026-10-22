// Verificarea documentelor BAC găzduite în bucketul `bac-pdfs`.
// Datele vin din scripts/audit-bac-pdfs.py, care citește TEXTUL fiecărui PDF (nu numele fișierului)
// și notează ce spune documentul despre el însuși. Aici decidem, pur și testabil, ce publicăm:
// un document apare ca „oficial” doar dacă textul confirmă emitentul, anul, tipul și sesiunea;
// un barem apare lângă un subiect doar dacă are aceeași specializare și aceeași variantă.
// Fișierele noi, neauditate încă, NU se publică până la rularea din nou a auditului.
import audit from "@/data/bac-verificare.generated.json";

export type Sesiune = "iunie" | "august" | "speciala" | "simulare";

export interface FisierAuditat {
  path: string;
  materie: string;
  an: number;
  sesiune: Sesiune;
  tip: "subiect" | "barem";
  text: boolean;
  an_document: number | null;
  tip_document: "subiect" | "barem" | null;
  specializare: string | null;
  varianta: number | null;
  simulare_document: boolean;
  model_document: boolean;
  emitent_oficial: boolean;
}

export const MOTIVE = {
  neauditat: "documentul nu a trecut încă prin auditul de conținut",
  fara_text: "PDF fără text care să poată fi verificat",
  emitent: "documentul nu provine de la Ministerul Educației / Centrul Național",
  an: "anul din document diferă de anul arhivei",
  tip: "documentul nu este de tipul declarat (subiect/barem)",
  model: "este un model de subiect, nu un subiect dat în sesiune",
  sesiune: "documentul nu corespunde sesiunii declarate",
  specializare: "baremul este pentru altă specializare decât subiectul",
  varianta: "baremul este pentru altă variantă decât subiectul",
} as const;
export type Motiv = keyof typeof MOTIVE;

const FISIERE = (audit as { fisiere: FisierAuditat[] }).fisiere;
const DUPA_PATH = new Map(FISIERE.map((f) => [f.path, f]));

export const AUDIT_GENERAT: string = (audit as { generat: string }).generat;

/** Motivele pentru care un fișier nu poate fi prezentat ca document oficial (listă goală = OK). */
export function motiveFisier(f: FisierAuditat | undefined): Motiv[] {
  if (!f) return ["neauditat"];
  if (!f.text) return ["fara_text"];
  const m: Motiv[] = [];
  if (!f.emitent_oficial) m.push("emitent");
  if (f.an_document !== f.an) m.push("an");
  if (f.tip_document !== f.tip) m.push("tip");
  if (f.model_document) m.push("model");
  if (f.sesiune === "simulare" ? !f.simulare_document : f.simulare_document) m.push("sesiune");
  return m;
}

export function fisierAuditat(path: string): FisierAuditat | undefined {
  return DUPA_PATH.get(path);
}

export function esteDocumentVerificat(path: string): boolean {
  return motiveFisier(DUPA_PATH.get(path)).length === 0;
}

/** Baremul se potrivește subiectului? Câmpurile necunoscute (null) nu blochează, valorile diferite da. */
export function motivePereche(subiect: FisierAuditat, barem: FisierAuditat): Motiv[] {
  const m: Motiv[] = [];
  if (subiect.specializare && barem.specializare && subiect.specializare !== barem.specializare)
    m.push("specializare");
  if (subiect.varianta != null && barem.varianta != null && subiect.varianta !== barem.varianta)
    m.push("varianta");
  return m;
}

export interface VariantaVerificata {
  subiect: string | null;
  barem: string | null;
  specializare: string | null;
  varianta: number | null;
  /** De ce lipsește subiectul/baremul (pentru transparență în pagină). */
  subiectAscuns: Motiv[];
  baremAscuns: Motiv[];
}

const SPECIALIZARI: Record<string, string> = {
  "mate-info": "matematică-informatică",
  "st-nat": "științe ale naturii",
  tehnologic: "filiera tehnologică",
  pedagogic: "profil pedagogic",
  uman: "profil uman",
};
export const specializareLabel = (s: string | null) => (s ? (SPECIALIZARI[s] ?? s) : null);

/**
 * Pentru o combinație materie/an/sesiune: ce subiect și ce barem putem afișa ca oficiale.
 * `existente` = numele fișierelor prezente efectiv în Storage.
 */
export function verificaVarianta(
  materie: string,
  an: number,
  sesiune: Sesiune,
  existente: Set<string>,
): VariantaVerificata {
  const ps = `${materie}/${an}/${sesiune}-subiect.pdf`;
  const pb = `${materie}/${an}/${sesiune}-barem.pdf`;
  const fs = existente.has(ps) ? DUPA_PATH.get(ps) : undefined;
  const fb = existente.has(pb) ? DUPA_PATH.get(pb) : undefined;
  const subiectAscuns = existente.has(ps) ? motiveFisier(fs) : [];
  const subiectOk = existente.has(ps) && subiectAscuns.length === 0;
  let baremAscuns: Motiv[] = existente.has(pb) ? motiveFisier(fb) : [];
  if (baremAscuns.length === 0 && subiectOk && fs && fb) baremAscuns = motivePereche(fs, fb);
  const baremOk = subiectOk && existente.has(pb) && baremAscuns.length === 0;
  return {
    subiect: subiectOk ? ps : null,
    barem: baremOk ? pb : null,
    specializare: subiectOk ? (fs?.specializare ?? null) : null,
    varianta: subiectOk ? (fs?.varianta ?? null) : null,
    subiectAscuns,
    baremAscuns,
  };
}

/** Filtrează o listă de nume din Storage la subiectele verificate (pentru hub-uri și sitemap). */
export function subiecteVerificate(names: Iterable<string>): Set<string> {
  const out = new Set<string>();
  for (const n of names) if (n.endsWith("-subiect.pdf") && esteDocumentVerificat(n)) out.add(n);
  return out;
}

/** Statistici de transparență pentru raport/admin. */
export function statisticiAudit() {
  const pe: Record<string, number> = {};
  let ok = 0;
  for (const f of FISIERE) {
    const m = motiveFisier(f);
    if (m.length === 0) ok++;
    for (const x of m) pe[x] = (pe[x] ?? 0) + 1;
  }
  return { total: FISIERE.length, verificate: ok, respinse: FISIERE.length - ok, motive: pe };
}
