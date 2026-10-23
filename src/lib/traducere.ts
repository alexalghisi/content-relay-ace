// Whole-site translation for visitors who pick another language. The pages are written in
// Romanian (and stay Romanian for search engines); in the browser every visible text, placeholder,
// title and alt is sent to /api/traducere in small batches and replaced in place. Results are
// cached on the edge and in the browser, so a page is translated once and then instantly.
// Pure helpers here (bun tests); the DOM walker lives in components/traducere-automata.tsx.

export const TR_MAX_TEXTE = 60;
export const TR_MAX_CARACTERE = 2000;
export const TR_MAX_TOTAL = 24_000;

/** Language names as the translation model should read them. */
export const TR_LIMBI: Record<string, string> = {
  en: "English",
  fr: "French",
  de: "German",
  es: "Spanish",
  it: "Italian",
  hu: "Hungarian",
  uk: "Ukrainian",
  ru: "Russian",
};

/** Whether a text is worth translating (has letters, is not a URL, e-mail, code or a bare number). */
export function deTradus(t: string): boolean {
  const s = t.trim();
  if (s.length < 2 || s.length > TR_MAX_CARACTERE) return false;
  if (!/\p{L}{2,}/u.test(s)) return false;
  if (/^(https?:\/\/|www\.)\S+$/i.test(s) || /^\S+@\S+\.\S+$/.test(s)) return false;
  return true;
}

/** Keeps the original surrounding whitespace around a translated text. */
export function pastreazaSpatii(original: string, tradus: string): string {
  const lead = /^\s*/.exec(original)?.[0] ?? "";
  const trail = /\s*$/.exec(original)?.[0] ?? "";
  return lead + tradus.trim() + trail;
}

/** Splits texts into request batches within the server limits. */
export function loturi(texte: string[]): string[][] {
  const out: string[][] = [];
  let cur: string[] = [];
  let n = 0;
  for (const t of texte) {
    if (cur.length >= TR_MAX_TEXTE || n + t.length > TR_MAX_TOTAL) { out.push(cur); cur = []; n = 0; }
    cur.push(t);
    n += t.length;
  }
  if (cur.length) out.push(cur);
  return out;
}

/** Parses the model's JSON array; null when the shape does not match the request. */
export function parseTraduceri(text: string, n: number): string[] | null {
  const m = /\[[\s\S]*\]/.exec(text);
  if (!m) return null;
  try {
    const a = JSON.parse(m[0]) as unknown;
    if (!Array.isArray(a) || a.length !== n || !a.every((x) => typeof x === "string")) return null;
    return a as string[];
  } catch {
    return null;
  }
}
