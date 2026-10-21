import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(2, "Nume prea scurt").max(100),
  email: z.string().trim().email("Email invalid").max(255),
  phone: z.string().trim().max(30).transform((raw) => {
    let d = raw.replace(/[\s().-]/g, "");
    if (d.startsWith("+")) d = d.slice(1);
    if (d.startsWith("00")) d = d.slice(2);
    if (/^07\d{8}$/.test(d)) d = "40" + d.slice(1);
    return d;
  }).pipe(z.string().regex(/^407\d{8}$/, "Introdu un telefon mobil românesc valid (07xx xxx xxx).")),
  password: z.string().min(6, "Parola minim 6 caractere").max(72),
});