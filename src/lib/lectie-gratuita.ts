export const DURATA_LECTIE_GRATUITA = 15;
export const VALABILITATE_COD_MS = 10 * 60_000;
export const CODURI_SMS_PE_ZI = 3;

export type StareLectieGratuita = "neverificat" | "disponibila" | "folosita";

export interface RevendicareLectie {
  folosita_la: string | null;
}

export interface CodSms {
  kind: "cod-sms";
  uid: string;
  telefonHash: string;
  codHash: string;
  exp: number;
}

export function stareLectieGratuita(r: RevendicareLectie | null): StareLectieGratuita {
  if (!r) return "neverificat";
  return r.folosita_la ? "folosita" : "disponibila";
}

export function genereazaCod(
  random: Uint32Array = crypto.getRandomValues(new Uint32Array(1)),
): string {
  return String(random[0] % 1_000_000).padStart(6, "0");
}

export async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export const hashTelefon = (msisdn: string) => sha256(`telefon:${msisdn}`);
export const hashCod = (uid: string, cod: string) => sha256(`cod:${uid}:${cod}`);

export async function codCorect(
  c: CodSms | null,
  uid: string,
  cod: string,
  acum: number,
): Promise<boolean> {
  if (!c || c.kind !== "cod-sms" || c.uid !== uid || acum > c.exp) return false;
  return c.codHash === (await hashCod(uid, cod.trim()));
}
