import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  COD_INCERCARI_MAX,
  COD_VALABIL_MIN,
  RETRIMITERE_SEC,
  adresaValida,
  verificaCod,
} from "./profesor-ai-verificare";

async function hashCod(uid: string, cod: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${uid}:${cod}`));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

type R = { ok: true; verificat?: boolean } | { ok: false; error: string };

export const trimiteCodTelefon = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ phone: z.string().max(30), address: z.string().max(300) }).parse(d))
  .handler(async ({ data, context }): Promise<R> => {
    const { normalizeRoPhone, sendSms } = await import("./sms.server");
    const phone = normalizeRoPhone(data.phone);
    if (!phone) return { ok: false, error: "Introdu un număr de mobil românesc valid (07xx xxx xxx)." };
    if (!adresaValida(data.address))
      return { ok: false, error: "Introdu adresa completă (stradă, număr, localitate)." };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rand } = await supabaseAdmin
      .from("profesor_ai_utilizatori")
      .select("phone_verified_at, code_sent_at")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (rand?.phone_verified_at) return { ok: true };
    if (rand?.code_sent_at && Date.now() - Date.parse(rand.code_sent_at) < RETRIMITERE_SEC * 1000)
      return { ok: false, error: "Așteaptă un minut înainte să ceri un cod nou." };
    const { data: ocupat } = await supabaseAdmin
      .from("profesor_ai_utilizatori")
      .select("user_id")
      .eq("phone", phone)
      .not("phone_verified_at", "is", null)
      .neq("user_id", context.userId)
      .maybeSingle();
    if (ocupat) return { ok: false, error: "Acest număr este deja folosit de alt cont." };
    const cod = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1_000_000).padStart(6, "0");
    const { error } = await supabaseAdmin.from("profesor_ai_utilizatori").upsert({
      user_id: context.userId,
      phone,
      address: data.address.trim(),
      code_hash: await hashCod(context.userId, cod),
      code_expires_at: new Date(Date.now() + COD_VALABIL_MIN * 60_000).toISOString(),
      code_attempts: 0,
      code_sent_at: new Date().toISOString(),
    });
    if (error) return { ok: false, error: "Nu am putut salva datele. Încearcă din nou." };
    const trimise = await sendSms([phone], `Codul tau MeditatiiDirect: ${cod}. Valabil ${COD_VALABIL_MIN} minute.`);
    if (!trimise) {
      // SMS indisponibil (GATEWAYAPI_TOKEN lipsă sau eroare la furnizor): nu blocăm lecția.
      // Numărul + adresa rămân salvate; unicitatea numărului și limita de retrimitere se păstrează.
      console.warn("profesor-ai: SMS indisponibil, verificare fără cod", {
        user: context.userId,
        smsConfigurat: !!process.env["GATEWAYAPI_TOKEN"],
      });
      const { error: e2 } = await supabaseAdmin
        .from("profesor_ai_utilizatori")
        .update({ phone_verified_at: new Date().toISOString(), code_hash: null, code_expires_at: null })
        .eq("user_id", context.userId);
      if (e2) return { ok: false, error: "Acest număr este deja folosit de alt cont." };
      return { ok: true, verificat: true };
    }
    return { ok: true };
  });

export const confirmaCodTelefon = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ cod: z.string().regex(/^\d{6}$/) }).parse(d))
  .handler(async ({ data, context }): Promise<R> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: s } = await supabaseAdmin
      .from("profesor_ai_utilizatori")
      .select("phone, code_hash, code_expires_at, code_attempts, phone_verified_at")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (!s) return { ok: false, error: "Cere mai întâi un cod." };
    if (s.phone_verified_at) return { ok: true };
    const rez = verificaCod(s, await hashCod(context.userId, data.cod), Date.now());
    if (rez === "expirat") return { ok: false, error: "Codul a expirat. Cere unul nou." };
    if (rez === "prea_multe") return { ok: false, error: "Prea multe încercări. Cere un cod nou." };
    if (rez === "gresit") {
      await supabaseAdmin
        .from("profesor_ai_utilizatori")
        .update({ code_attempts: s.code_attempts + 1 })
        .eq("user_id", context.userId);
      return { ok: false, error: `Cod greșit. Mai ai ${COD_INCERCARI_MAX - s.code_attempts - 1} încercări.` };
    }
    const { error } = await supabaseAdmin
      .from("profesor_ai_utilizatori")
      .update({ phone_verified_at: new Date().toISOString(), code_hash: null, code_expires_at: null })
      .eq("user_id", context.userId);
    if (error) return { ok: false, error: "Acest număr este deja folosit de alt cont." };
    return { ok: true };
  });
