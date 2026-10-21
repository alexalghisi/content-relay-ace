import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  CODURI_SMS_PE_ZI,
  DURATA_LECTIE_GRATUITA,
  VALABILITATE_COD_MS,
  codCorect,
  genereazaCod,
  hashCod,
  hashTelefon,
  rateUtilizare,
  stareLectieGratuita,
  type CodSms,
  type StareLectieGratuita,
  type StatisticiLectie,
} from "./lectie-gratuita";
import type { PaResult } from "./profesor-ai";

const TABEL = "profesor_ai_lectii_gratuite";

async function admin() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

async function emailConfirmat(userId: string): Promise<boolean> {
  const { data } = await (await admin()).auth.admin.getUserById(userId);
  return !!data.user?.email_confirmed_at;
}

export async function stareLectie(userId: string): Promise<StareLectieGratuita> {
  const { data } = await (await admin())
    .from(TABEL)
    .select("folosita_la")
    .eq("user_id", userId)
    .maybeSingle();
  return stareLectieGratuita(data);
}

export async function consumaLectia(userId: string): Promise<boolean> {
  const { data } = await (await admin())
    .from(TABEL)
    .update({ folosita_la: new Date().toISOString() })
    .eq("user_id", userId)
    .is("folosita_la", null)
    .select("user_id");
  return !!data?.length;
}

export const lectieGratuitaTrimiteCod = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ telefon: z.string().max(30) }).parse(d))
  .handler(async ({ data, context }): Promise<PaResult<{ token: string }>> => {
    const { normalizeRoPhone, sendSms } = await import("./sms.server");
    const { seal, takeQuota } = await import("./ai-gateway.server");
    if (!(await emailConfirmat(context.userId)))
      return {
        ok: false,
        error: "Confirmă mai întâi adresa de email din mesajul primit la înregistrare.",
      };
    if ((await stareLectie(context.userId)) !== "neverificat")
      return { ok: false, error: "Numărul tău de telefon este deja verificat." };
    const msisdn = normalizeRoPhone(data.telefon);
    if (!msisdn)
      return { ok: false, error: "Introdu un număr de mobil din România, de forma 07xx xxx xxx." };
    const telefonHash = await hashTelefon(msisdn);
    const { data: existent } = await (await admin())
      .from(TABEL)
      .select("user_id")
      .eq("telefon_hash", telefonHash)
      .maybeSingle();
    if (existent)
      return { ok: false, error: "Acest număr a primit deja lecția gratuită pe alt cont." };
    if (!(await takeQuota(context.userId, "cod-sms", CODURI_SMS_PE_ZI)).ok)
      return { ok: false, error: "Ai cerut prea multe coduri azi. Încearcă din nou mâine." };
    const cod = genereazaCod();
    const trimise = await sendSms(
      [msisdn],
      `Codul tău MeditatiiDirect: ${cod}. Expiră în 10 minute.`,
    );
    if (!trimise)
      return { ok: false, error: "Nu am putut trimite SMS-ul. Încearcă puțin mai târziu." };
    const token: CodSms = {
      kind: "cod-sms",
      uid: context.userId,
      telefonHash,
      codHash: await hashCod(context.userId, cod),
      exp: Date.now() + VALABILITATE_COD_MS,
    };
    return { ok: true, data: { token: await seal(token) } };
  });

export const lectieGratuitaVerificaCod = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({ token: z.string().max(2000), cod: z.string().max(10) }).parse(d),
  )
  .handler(async ({ data, context }): Promise<PaResult<{ minute: number }>> => {
    const { unseal } = await import("./ai-gateway.server");
    const c = await unseal<CodSms>(data.token);
    if (!c || !(await codCorect(c, context.userId, data.cod, Date.now())))
      return { ok: false, error: "Cod greșit sau expirat." };
    const { error } = await (await admin())
      .from(TABEL)
      .insert({ user_id: context.userId, telefon_hash: c.telefonHash });
    if (error)
      return { ok: false, error: "Acest număr a primit deja lecția gratuită pe alt cont." };
    return { ok: true, data: { minute: DURATA_LECTIE_GRATUITA } };
  });

export const lectieGratuitaStatistici = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(
    async ({ context }): Promise<PaResult<StatisticiLectie & ReturnType<typeof rateUtilizare>>> => {
      const { data: esteAdmin } = await context.supabase.rpc("has_role", {
        _user_id: context.userId,
        _role: "admin",
      });
      if (!esteAdmin) return { ok: false, error: "Doar administratorul vede statisticile." };
      const db = await admin();
      const [utilizatori, verificate, folosite] = await Promise.all([
        db.auth.admin.listUsers({ page: 1, perPage: 1 }),
        db.from(TABEL).select("user_id", { count: "exact", head: true }),
        db
          .from(TABEL)
          .select("user_id", { count: "exact", head: true })
          .not("folosita_la", "is", null),
      ]);
      const s: StatisticiLectie = {
        conturi: "total" in utilizatori.data ? utilizatori.data.total : 0,
        verificate: verificate.count ?? 0,
        folosite: folosite.count ?? 0,
      };
      return { ok: true, data: { ...s, ...rateUtilizare(s) } };
    },
  );
