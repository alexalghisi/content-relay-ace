import { z } from "zod";
import { normalizeRoPhone } from "./phone";
import { TELEFON_LA_INREGISTRARE } from "./telefon-inregistrare";

const MESAJ_TELEFON = "Introdu un telefon mobil românesc valid (07xx xxx xxx).";

/** Telefonul e obligatoriu doar cât timp TELEFON_LA_INREGISTRARE e activ; altfel e opțional (gol = fără telefon). */
export function telefonSchema(obligatoriu: boolean) {
  return z
    .string()
    .trim()
    .max(30)
    .refine((raw) => (raw ? !!normalizeRoPhone(raw)?.match(/^407\d{8}$/) : !obligatoriu), MESAJ_TELEFON)
    .transform((raw) => (raw ? (normalizeRoPhone(raw) ?? "") : ""));
}

export const signupSchema = z.object({
  name: z.string().trim().min(2, "Nume prea scurt").max(100),
  email: z.string().trim().email("Email invalid").max(255),
  phone: telefonSchema(TELEFON_LA_INREGISTRARE).optional().default(""),
  password: z.string().min(6, "Parola minim 6 caractere").max(72),
});
