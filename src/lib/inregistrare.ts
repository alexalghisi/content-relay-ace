import { motivParolaSlaba } from "./parola-slaba";
/**
 * Reguli pure pentru fluxul de înregistrare (testate cu bun).
 *
 * Emailul de confirmare NU mai e trimis de mailer-ul implicit Supabase (fără SMTP propriu el livrează
 * doar membrilor echipei proiectului, câteva mesaje pe oră — utilizatorii reali nu primeau nimic).
 * Serverul generează linkul cu admin.generateLink și îl trimite prin providerul nostru de email.
 */

export const SITE_URL = "https://meditatiidirect.ro";

/** Originile din care acceptăm linkuri de confirmare; orice altceva → site-ul public. */
export function originSigur(origin: string | null | undefined): string {
  if (!origin) return SITE_URL;
  try {
    const u = new URL(origin);
    const host = u.hostname;
    const ok =
      (u.protocol === "https:" &&
        (host === "meditatiidirect.ro" ||
          host === "www.meditatiidirect.ro" ||
          host.endsWith(".lovable.app") ||
          host.endsWith(".lovableproject.com"))) ||
      ((u.protocol === "http:" || u.protocol === "https:") &&
        (host === "localhost" || host === "127.0.0.1"));
    return ok ? u.origin : SITE_URL;
  } catch {
    return SITE_URL;
  }
}

export type TipConfirmare = "signup" | "magiclink";

/** Link către pagina noastră care confirmă tokenul în browser (nu depinde de lista de redirect Supabase). */
export function linkConfirmare(origin: string, tokenHash: string, tip: TipConfirmare): string {
  const u = new URL("/confirmare-cont", originSigur(origin));
  u.searchParams.set("token_hash", tokenHash);
  u.searchParams.set("type", tip);
  return u.toString();
}

/**
 * Numele cu care salutăm utilizatorul în emailuri: numele din cont (înscriere), apoi cel de la Google
 * (full_name / name / given_name), apoi partea din fața „@” a emailului — niciodată „acolo”.
 */
export function numeSalut(
  meta: Record<string, unknown> | null | undefined,
  email?: string | null,
): string {
  for (const k of ["display_name", "full_name", "name", "given_name"]) {
    const v = meta?.[k];
    if (typeof v === "string" && v.trim()) return v.trim().slice(0, 60);
  }
  const local = (email ?? "").split("@")[0]?.split("+")[0]?.trim() ?? "";
  return local.slice(0, 60);
}

/** „Bună, Ana!” sau, fără niciun nume, „Bună!”. */
export function salut(nume: string): string {
  return nume.trim() ? `Bună, ${nume.trim()}!` : "Bună!";
}

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export function subiectConfirmare(): string {
  return "Confirmă-ți contul MeditatiiDirect.ro";
}

export function textConfirmare(nume: string, link: string): string {
  return [
    salut(nume),
    "",
    "Mulțumim că ți-ai creat cont pe MeditatiiDirect.ro.",
    "Confirmă adresa de email deschizând linkul de mai jos (valabil 24 de ore):",
    link,
    "",
    "Dacă nu tu ai creat contul, ignoră acest email.",
  ].join("\n");
}

export function htmlConfirmare(nume: string, link: string): string {
  const l = esc(link);
  return `<!doctype html><html lang="ro"><body style="margin:0;background:#f6f7fb;font-family:Arial,Helvetica,sans-serif;color:#111">
<div style="max-width:520px;margin:0 auto;padding:32px 20px">
<h1 style="font-size:22px;margin:0 0 16px">${esc(salut(nume))}</h1>
<p style="font-size:15px;line-height:1.6">Mulțumim că ți-ai creat cont pe <strong>MeditatiiDirect.ro</strong>. Confirmă adresa de email ca să-ți activezi contul.</p>
<p style="margin:28px 0"><a href="${l}" style="background:#2563eb;color:#fff;text-decoration:none;padding:14px 24px;border-radius:999px;font-weight:bold;display:inline-block">Confirmă contul</a></p>
<p style="font-size:13px;line-height:1.6;color:#555">Dacă butonul nu merge, copiază linkul în browser:<br><a href="${l}" style="color:#2563eb;word-break:break-all">${l}</a></p>
<p style="font-size:13px;color:#555">Linkul e valabil 24 de ore. Dacă nu tu ai creat contul, ignoră acest email.</p>
</div></body></html>`;
}

/**
 * Forma canonică a unui email, folosită pentru unicitatea conturilor (src/lib/conturi-unice.ts).
 * La Gmail punctele și +eticheta duc în aceeași căsuță.
 */
export function emailCanonic(email: string): string {
  const e = email.trim().toLowerCase();
  const at = e.lastIndexOf("@");
  if (at < 0) return e;
  let local = e.slice(0, at);
  let domeniu = e.slice(at + 1);
  if (domeniu === "gmail.com" || domeniu === "googlemail.com") {
    local = local.split("+")[0].replace(/\./g, "");
    domeniu = "gmail.com";
  }
  return `${local}@${domeniu}`;
}

export const MESAJ_EMAIL_FOLOSIT = "Există deja un cont cu acest email. Autentifică-te.";
export const MESAJ_TELEFON_FOLOSIT =
  "Acest număr de telefon este deja înregistrat. Ai deja un cont, nu poți crea altul cu același număr — autentifică-te în contul existent.";

/**
 * „exact”: Supabase are deja contul pe adresa asta; „varianta”: triggerul blocheaza_email_duplicat a refuzat
 * o variantă a unui email existent (Supabase o raportează ca „Database error saving new user”).
 */
export function esteEmailDuplicat(message: string, code?: string): "exact" | "varianta" | null {
  const m = message.toLowerCase();
  if (
    code === "email_exists" ||
    (m.includes("already") && (m.includes("registered") || m.includes("exists")))
  )
    return "exact";
  if (m.includes("email_duplicat") || m.includes("database error saving new user"))
    return "varianta";
  return null;
}

/** Mesaje Supabase Auth (engleză) → română, fără a expune textul brut. */
export function eroareInregistrareRo(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("already") && (m.includes("registered") || m.includes("exists")))
    return "Există deja un cont cu acest email. Autentifică-te.";
  const slaba = motivParolaSlaba(message);
  if (slaba) return slaba;
  if (m.includes("password")) return "Parola nu este acceptată. Alege altă parolă.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "Prea multe încercări. Mai încearcă peste câteva minute.";
  if (m.includes("invalid") && m.includes("email")) return "Adresa de email nu este validă.";
  return "Nu am putut crea contul. Mai încearcă o dată.";
}
