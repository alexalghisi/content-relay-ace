/**
 * Verifică parola în baza Have I Been Pwned (k-anonimitate: trimitem doar primele 5 caractere din SHA-1).
 * Aceeași regulă ca la resetarea parolei în Supabase, aplicată și la înregistrare.
 * Dacă serviciul nu răspunde, nu blocăm înregistrarea (fail-open).
 */
export const MESAJ_PAROLA_COMPROMISA =
  "Parola aleasă apare în listele publice de parole furate sau foarte des folosite (ca 123456), așa că nu e acceptată. Alege una pe care n-o folosești și în alte părți.";

export async function sha1Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

export async function parolaCompromisa(
  parola: string,
  cauta: (prefix: string) => Promise<string | null> = cautaHibp,
): Promise<boolean> {
  const h = await sha1Hex(parola);
  const lista = await cauta(h.slice(0, 5)).catch(() => null);
  if (!lista) return false;
  const sufix = h.slice(5);
  return lista.split("\n").some((linie) => {
    const [s, n] = linie.trim().split(":");
    return s?.toUpperCase() === sufix && Number(n) > 0;
  });
}

async function cautaHibp(prefix: string): Promise<string | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 3000);
  try {
    const r = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
      headers: { "Add-Padding": "true" },
      signal: ctrl.signal,
    });
    return r.ok ? await r.text() : null;
  } finally {
    clearTimeout(t);
  }
}
