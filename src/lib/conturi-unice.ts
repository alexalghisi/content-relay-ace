import { normalizeRoPhone } from "./phone";
import { emailCanonic } from "./inregistrare";

/** Ce știm despre un cont existent (din API-ul admin Supabase și din verificarea SMS). */
export type ContExistent = {
  email?: string | null;
  phone?: string | null; // telefonul din auth.users (rar folosit)
  metadataPhone?: unknown; // telefonul introdus la înregistrare (user_metadata.phone)
};

export type Conflict = "telefon" | "email" | null;

/**
 * Un email și un telefon per cont. Telefonul are prioritate: dacă numărul e deja pe alt cont, persoana are
 * deja cont. Contul cu exact același email nu e „alt cont” — fluxul existent îi retrimite confirmarea.
 * Emailul se compară canonic (la Gmail punctele și +eticheta duc în aceeași căsuță).
 */
export function gasesteConflict(
  conturi: ContExistent[],
  email: string,
  telefon: string,
  telefoaneVerificate: string[] = [],
): Conflict {
  const exact = email.trim().toLowerCase();
  const canonic = emailCanonic(exact);
  const tel = normalizeRoPhone(telefon);
  const altele = conturi.filter((c) => (c.email ?? "").trim().toLowerCase() !== exact);
  if (tel) {
    if (telefoaneVerificate.some((t) => normalizeRoPhone(t) === tel)) {
      // Numărul verificat e chiar al contului cu același email? Atunci nu e conflict.
      const alAcestuiCont = conturi.some(
        (c) => (c.email ?? "").trim().toLowerCase() === exact && telefonCont(c) === tel,
      );
      if (!alAcestuiCont) return "telefon";
    }
    if (altele.some((c) => telefonCont(c) === tel)) return "telefon";
  }
  if (altele.some((c) => c.email && emailCanonic(c.email) === canonic)) return "email";
  return null;
}

function telefonCont(c: ContExistent): string | null {
  const meta = typeof c.metadataPhone === "string" ? c.metadataPhone : null;
  return normalizeRoPhone(meta) ?? normalizeRoPhone(c.phone ?? null);
}

/**
 * Telefoanele verificate care aparțin unor conturi încă existente. Un rând rămas de la un cont șters
 * (profesor_ai_utilizatori nu avea cheie străină spre auth.users) nu mai blochează numărul.
 */
export function telefoaneConturiExistente(
  randuri: { user_id: string; phone: string | null }[],
  idConturi: Set<string>,
): string[] {
  return randuri
    .filter((r) => idConturi.has(r.user_id))
    .map((r) => r.phone)
    .filter((p): p is string => !!p);
}
