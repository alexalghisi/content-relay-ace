/**
 * „Am uitat parola” — reguli pure (testate cu bun).
 * Linkul de resetare e generat pe server (admin.generateLink type "recovery") și trimis prin providerul
 * nostru de email, ca la înscriere: mailerul implicit Supabase nu livrează utilizatorilor reali.
 */
import { originSigur } from "./inregistrare";
import { motivParolaSlaba } from "./parola-slaba";
export { motivParolaSlaba };

export const PAROLA_MIN = 6;

/** Linkul din email duce pe pagina noastră, care confirmă tokenul în browser și cere parola nouă. */
export function linkResetare(origin: string, tokenHash: string): string {
  const u = new URL("/resetare-parola", originSigur(origin));
  u.searchParams.set("token_hash", tokenHash);
  u.searchParams.set("type", "recovery");
  return u.toString();
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export function subiectResetare(): string {
  return "Resetează parola contului MeditatiiDirect.ro";
}

export function textResetare(nume: string, link: string): string {
  return [
    `Bună, ${nume || "acolo"}!`,
    "",
    "Ai cerut resetarea parolei pentru contul tău MeditatiiDirect.ro.",
    "Deschide linkul de mai jos și alege o parolă nouă (linkul e valabil o oră și se poate folosi o singură dată):",
    link,
    "",
    "Dacă nu tu ai cerut resetarea, ignoră acest email — parola ta rămâne neschimbată.",
  ].join("\n");
}

export function htmlResetare(nume: string, link: string): string {
  const l = esc(link);
  return `<!doctype html><html lang="ro"><body style="margin:0;background:#f6f7fb;font-family:Arial,Helvetica,sans-serif;color:#111">
<div style="max-width:520px;margin:0 auto;padding:32px 20px">
<h1 style="font-size:22px;margin:0 0 16px">Bună, ${esc(nume || "acolo")}!</h1>
<p style="font-size:15px;line-height:1.6">Ai cerut resetarea parolei pentru contul tău <strong>MeditatiiDirect.ro</strong>.</p>
<p style="margin:28px 0"><a href="${l}" style="background:#2563eb;color:#fff;text-decoration:none;padding:14px 24px;border-radius:999px;font-weight:bold;display:inline-block">Alege o parolă nouă</a></p>
<p style="font-size:13px;line-height:1.6;color:#555">Dacă butonul nu merge, copiază linkul în browser:<br><a href="${l}" style="color:#2563eb;word-break:break-all">${l}</a></p>
<p style="font-size:13px;color:#555">Linkul e valabil o oră și se poate folosi o singură dată. Dacă nu tu ai cerut resetarea, ignoră acest email — parola rămâne neschimbată.</p>
</div></body></html>`;
}

/** Validarea parolei noi (aceeași regulă ca la înscriere). Întoarce mesajul de eroare sau null. */
export function verificaParolaNoua(parola: string, confirmare: string): string | null {
  if (parola.length < PAROLA_MIN) return `Parola trebuie să aibă minim ${PAROLA_MIN} caractere.`;
  if (parola.length > 72) return "Parola poate avea maxim 72 de caractere.";
  if (parola !== confirmare) return "Parolele nu coincid. Scrie aceeași parolă în ambele câmpuri.";
  return null;
}

/** Erorile Supabase la schimbarea parolei → română, cu motivul exact când parola e respinsă. */
export function eroareParolaRo(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("same") || m.includes("different from the old")) return "Parola nouă trebuie să fie diferită de cea veche.";
  const slaba = motivParolaSlaba(message);
  if (slaba) return slaba;
  if (m.includes("session") || m.includes("jwt") || m.includes("expired") || m.includes("reauthentication"))
    return "Linkul de resetare a expirat. Cere unul nou.";
  if (m.includes("rate limit") || m.includes("too many")) return "Prea multe încercări. Mai încearcă peste câteva minute.";
  return "Nu am putut schimba parola. Mai încearcă o dată.";
}
