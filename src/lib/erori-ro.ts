import { motivParolaSlaba } from "./parola-slaba";
/** Mesaje de eroare clare, în română, în locul textelor brute (în engleză) de la Supabase. */
export function erroareRo(message: string | null | undefined, fallback = "A apărut o eroare. Mai încearcă o dată."): string {
  const m = (message || "").toLowerCase();
  if (!m) return fallback;
  if (m.includes("different from the old password") || m.includes("same password")) return "Parola nouă trebuie să fie diferită de cea veche.";
  const slaba = motivParolaSlaba(message ?? "");
  if (slaba) return slaba;
  if (m.includes("already registered") || m.includes("already been registered") || m.includes("email address is already")) return "Există deja un cont cu acest email.";
  if (m.includes("invalid email") || (m.includes("email address") && m.includes("invalid"))) return "Adresa de email nu este validă.";
  if (m.includes("rate limit") || m.includes("too many")) return "Prea multe încercări. Mai încearcă peste câteva minute.";
  if (m.includes("duplicate key") || m.includes("unique constraint")) return "Există deja o înregistrare cu aceste date.";
  if (m.includes("row-level security") || m.includes("permission denied") || m.includes("jwt") || m.includes("not authorized") || m.includes("unauthorized")) return "Sesiunea a expirat. Reautentifică-te și încearcă din nou.";
  if (m.includes("failed to fetch") || m.includes("network") || m.includes("load failed") || m.includes("timeout")) return "Conexiune slabă. Verifică internetul și încearcă din nou.";
  if (m.includes("value too long") || m.includes("too long")) return "Textul este prea lung. Scurtează-l și încearcă din nou.";
  return fallback;
}
