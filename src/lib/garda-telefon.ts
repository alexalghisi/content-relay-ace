import { TELEFON_LA_INREGISTRARE } from "./telefon-inregistrare";

/** Pagini accesibile unui cont logat care nu și-a verificat încă telefonul prin SMS. */
const PERMISE = [
  "/confirmare-cont",
  "/login",
  "/signup",
  "/parola-uitata",
  "/resetare-parola",
  "/termeni",
  "/confidentialitate",
];

/**
 * Contul e complet doar cu email confirmat ȘI telefon unic verificat prin SMS.
 * Întoarce true dacă utilizatorul logat trebuie trimis la verificarea telefonului.
 */
export function trebuieVerificatTelefon(
  path: string,
  user: { email_confirmed_at?: string | null } | null,
  telefonVerificat: boolean | null,
  activ: boolean = TELEFON_LA_INREGISTRARE,
): boolean {
  if (!activ) return false; // verificarea SMS la înscriere e oprită temporar
  if (!user || !user.email_confirmed_at) return false;
  if (telefonVerificat !== false) return false; // null = încă nu știm
  return !PERMISE.some((p) => path === p || path.startsWith(`${p}/`));
}
