import { z } from "zod";
import { normalizeRoPhone } from "./phone";

export const signupSchema = z.object({
  name: z.string().trim().min(2, "Nume prea scurt").max(100),
  email: z.string().trim().email("Email invalid").max(255),
  phone: z.string().trim().max(30).transform((raw) => normalizeRoPhone(raw) ?? "")
    .pipe(z.string().regex(/^407\d{8}$/, "Introdu un telefon mobil românesc valid (07xx xxx xxx).")),
  password: z.string().min(6, "Parola minim 6 caractere").max(72),
});