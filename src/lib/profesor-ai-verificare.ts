// Reguli pure pentru verificarea telefonului înainte de lecția gratuită Profesor AI (testate cu bun).
export const COD_VALABIL_MIN = 10;
export const COD_INCERCARI_MAX = 5;
export const RETRIMITERE_SEC = 60;

export function adresaValida(a: string): boolean {
  const t = a.trim();
  return t.length >= 10 && t.length <= 300 && /\d/.test(t) && /[a-zA-ZăâîșțĂÂÎȘȚ]{3}/.test(t);
}

export type StareCod = { code_hash: string | null; code_expires_at: string | null; code_attempts: number };

export function verificaCod(
  s: StareCod,
  hashIntrodus: string,
  acum: number,
): "ok" | "expirat" | "prea_multe" | "gresit" {
  if (!s.code_hash || !s.code_expires_at || acum > Date.parse(s.code_expires_at)) return "expirat";
  if (s.code_attempts >= COD_INCERCARI_MAX) return "prea_multe";
  return s.code_hash === hashIntrodus ? "ok" : "gresit";
}

/** Lecția gratuită: o singură dată per cont, doar cu telefonul verificat. */
export function poatePrimiLectiaGratuita(r: {
  phone_verified_at: string | null;
  free_lesson_used_at: string | null;
} | null): "ok" | "neverificat" | "folosita" {
  if (!r?.phone_verified_at) return "neverificat";
  if (r.free_lesson_used_at) return "folosita";
  return "ok";
}
