// Profesor AI — server functions: acces, plată Stripe, sesiune criptată, răspunsuri AI, token avatar HeyGen.
// Secrete (Lovable Cloud → Secrets): STRIPE_SECRET_KEY, HEYGEN_API_KEY, opțional HEYGEN_AVATAR_ID,
// HEYGEN_VOICE_ID, PROFESOR_AI_PRETURI (JSON), PROFESOR_AI_FREE_EMAILS (listă separată prin virgulă).
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { poateTestaProfesorAi } from "./profesor-ai-access";
import { poatePrimiLectiaGratuita } from "./profesor-ai-verificare";
import {
  PA_DURATE,
  PA_MATERII,
  PA_LIMBI,
  PA_NIVELURI,
  PA_OBIECTIVE,
  PRETURI_IMPLICITE,
  paMaterieName,
  paNivelName,
  paObiectivName,
  pretSesiune,
  type PaConfig,
  type PaDurata,
  type PaReplica,
  type PaResult,
  type TabelPreturi,
} from "./profesor-ai";

const SITE = "https://meditatiidirect.ro";
/** Limita internă de mesaje pe zi pentru conturile plătitoare (anti-abuz și plafon de cost). */
export const LIMITA_PROFESOR_ZI = 600;

const configSchema = z.object({
  materie: z.enum(PA_MATERII.map((m) => m.slug) as [string, ...string[]]),
  nivel: z.enum(PA_NIVELURI.map((m) => m.slug) as [string, ...string[]]),
  durata: z.number().refine((d): d is PaDurata => (PA_DURATE as readonly number[]).includes(d)),
  obiectiv: z.enum(PA_OBIECTIVE.map((m) => m.slug) as [string, ...string[]]),
  limba: z.string().max(10).optional().transform(() => "ro" as const), // site doar în română
});

type Sesiune = PaConfig & { kind: "profesor-ai"; uid: string; exp: number; gratuit: boolean };

function tabelPreturi(): TabelPreturi {
  const raw = process.env["PROFESOR_AI_PRETURI"];
  if (!raw) return PRETURI_IMPLICITE;
  try {
    const over = JSON.parse(raw) as TabelPreturi;
    const out: TabelPreturi = { ...PRETURI_IMPLICITE };
    for (const [k, v] of Object.entries(over)) out[k] = { ...(PRETURI_IMPLICITE[k] ?? {}), ...v };
    return out;
  } catch {
    return PRETURI_IMPLICITE;
  }
}

/** Temporary test access is pinned to the verified owner's stable account ID. */
async function esteGratuit(userId: string): Promise<boolean> {
  return poateTestaProfesorAi(userId);
}

/** Lecția de probă: durata gratuită pentru orice elev cu cont; restul duratelor = Premium (în curând). */
export const DURATA_GRATUITA: PaDurata = 15;
/** Câte lecții gratuite de probă pe zi per cont (plafon de cost); suprascris cu PROFESOR_AI_GRATIS_PE_ZI. */
export const LECTII_GRATUITE_PE_ZI = () =>
  Math.max(0, Number(process.env["PROFESOR_AI_GRATIS_PE_ZI"] ?? 1)) || 1;
export const MESAJ_PREMIUM =
  "Lecțiile de 30, 45 și 60 de minute vor fi disponibile cu contul Premium, în curând. Până atunci, lecția de 15 minute este gratuită.";
export const MESAJ_LIMITA_GRATIS = (_n: number) =>
  "Ai folosit deja lecția gratuită de 15 minute. Lecțiile mai lungi vin în curând; până atunci poți cere un meditator real.";

async function sigileaza(cfg: PaConfig, uid: string, gratuit: boolean, exp: number) {
  const { seal } = await import("./ai-gateway.server");
  const s: Sesiune = { kind: "profesor-ai", uid, gratuit, exp, ...cfg };
  return seal(s);
}

async function citesteSesiune(token: string, uid: string): Promise<Sesiune | null> {
  const { unseal } = await import("./ai-gateway.server");
  const s = await unseal<Sesiune>(token);
  if (!s || s.kind !== "profesor-ai" || s.uid !== uid) return null;
  if (!s.gratuit && Date.now() > s.exp) return null;
  return s;
}

/** Edge cache: prima confirmare a unei plăți fixează expirarea sesiunii (nu se poate „reîncărca”). */
async function expirarePentruPlata(checkoutId: string, durata: number): Promise<number> {
  const fresh = Date.now() + (durata + 5) * 60_000;
  try {
    const c = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
    if (!c) return fresh;
    const req = new Request(`https://profesor-ai.meditatiidirect.ro/plata/${checkoutId}`);
    const hit = await c.match(req);
    if (hit) return Number(await hit.text()) || fresh;
    await c.put(
      req,
      new Response(String(fresh), { headers: { "Cache-Control": "max-age=172800" } }),
    );
    return fresh;
  } catch {
    return fresh;
  }
}

async function stripe(path: string, body?: URLSearchParams) {
  const key = process.env["STRIPE_SECRET_KEY"];
  if (!key) return null;
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const json = (await res.json()) as Record<string, unknown>;
  if (!res.ok) {
    console.error("stripe error", res.status, JSON.stringify(json).slice(0, 300));
    return null;
  }
  return json;
}

/** Ce vede utilizatorul în configurator: gratuit sau prețurile curente. */
export const profesorAiAcces = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { aiStare } = await import("./ai-gateway.server");
    const { data: r } = await context.supabase
      .from("profesor_ai_utilizatori")
      .select("phone_verified_at, free_lesson_used_at")
      .eq("user_id", context.userId)
      .maybeSingle();
    return {
      poateTesta: poateTestaProfesorAi(context.userId),
      gratuit: await esteGratuit(context.userId),
      preturi: tabelPreturi(),
      plataActiva: !!process.env["STRIPE_SECRET_KEY"],
      // Premium (30/45/60 min) nu se vinde încă: fără firmă, fără plăți.
      premiumActiv: false,
      durataGratuita: DURATA_GRATUITA,
      telefonVerificat: !!r?.phone_verified_at,
      lectiaGratuitaFolosita: !!r?.free_lesson_used_at,
      // Un furnizor AI poate răspunde acum (Lovable fără pauză sau rezerva Gemini).
      aiDisponibil: (await aiStare()).ok,
    };
  });

/** Pornește sesiunea: gratuit → token direct; altfel → link Stripe Checkout. */
export const profesorAiPorneste = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => configSchema.parse(d))
  .handler(
    async ({ data, context }): Promise<PaResult<{ token?: string; checkoutUrl?: string }>> => {
      const cfg = data as PaConfig;
      // Nu pornim (și mai ales nu încasăm) o sesiune dacă furnizorul AI e indisponibil.
      const { aiStare, takeQuota } = await import("./ai-gateway.server");
      const stare = await aiStare();
      if (!stare.ok) return { ok: false, error: stare.mesaj, cod: stare.kind };
      if (await esteGratuit(context.userId)) {
        return {
          ok: true,
          data: { token: await sigileaza(cfg, context.userId, true, Date.now() + 24 * 3600_000) },
        };
      }
      // Elevi: lecția de 15 minute e gratuită o singură dată, cu telefonul verificat prin SMS.
      if (cfg.durata === DURATA_GRATUITA) {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: r } = await supabaseAdmin
          .from("profesor_ai_utilizatori")
          .select("phone_verified_at, free_lesson_used_at, lessons_started")
          .eq("user_id", context.userId)
          .maybeSingle();
        const st = poatePrimiLectiaGratuita(r);
        if (st === "neverificat")
          return { ok: false, error: "Verifică-ți telefonul ca să primești lecția gratuită.", cod: "neverificat" };
        if (st === "folosita") return { ok: false, error: MESAJ_LIMITA_GRATIS(1), cod: "limita_gratis" };
        const acum = new Date().toISOString();
        const { data: luat } = await supabaseAdmin
          .from("profesor_ai_utilizatori")
          .update({ free_lesson_used_at: acum, last_lesson_at: acum, lessons_started: (r?.lessons_started ?? 0) + 1 })
          .eq("user_id", context.userId)
          .is("free_lesson_used_at", null)
          .select("user_id");
        if (!luat?.length) return { ok: false, error: MESAJ_LIMITA_GRATIS(1), cod: "limita_gratis" };
        void takeQuota;
        const exp = Date.now() + (DURATA_GRATUITA + 2) * 60_000;
        return { ok: true, data: { token: await sigileaza(cfg, context.userId, false, exp) } };
      }
      if (!process.env["STRIPE_SECRET_KEY"])
        return { ok: false, error: MESAJ_PREMIUM, cod: "premium" };
      const lei = pretSesiune(cfg.materie, cfg.durata, tabelPreturi());
      const email = typeof context.claims.email === "string" ? context.claims.email : "";
      const p = new URLSearchParams({
        mode: "payment",
        "line_items[0][quantity]": "1",
        "line_items[0][price_data][currency]": "ron",
        "line_items[0][price_data][unit_amount]": String(Math.round(lei * 100)),
        "line_items[0][price_data][product_data][name]": `Profesor AI — ${paMaterieName(cfg.materie)}, ${cfg.durata} min`,
        "line_items[0][price_data][product_data][description]": `${paNivelName(cfg.nivel)} · ${paObiectivName(cfg.obiectiv)}`,
        client_reference_id: context.userId,
        success_url: `${SITE}/profesor-ai/sesiune?plata={CHECKOUT_SESSION_ID}`,
        cancel_url: `${SITE}/profesor-ai?anulat=1`,
        locale: "ro",
        "metadata[materie]": cfg.materie,
        "metadata[limba]": cfg.limba ?? "ro",
        "metadata[nivel]": cfg.nivel,
        "metadata[durata]": String(cfg.durata),
        "metadata[obiectiv]": cfg.obiectiv,
        "metadata[lei]": String(lei),
      });
      if (email) p.set("customer_email", email);
      const s = await stripe("checkout/sessions", p);
      if (!s)
        return {
          ok: false,
          error: "Plata nu este disponibilă momentan. Încearcă puțin mai târziu.",
        };
      return { ok: true, data: { checkoutUrl: String(s.url) } };
    },
  );

/** După plată: verifică la Stripe și emite tokenul sesiunii. */
export const profesorAiConfirma = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z
      .object({
        plata: z
          .string()
          .regex(/^cs_[A-Za-z0-9_]+$/)
          .max(200),
      })
      .parse(d),
  )
  .handler(async ({ data, context }): Promise<PaResult<{ token: string; config: PaConfig }>> => {
    const s = await stripe(`checkout/sessions/${data.plata}`);
    if (!s) return { ok: false, error: "Nu am putut verifica plata." };
    if (s.payment_status !== "paid") return { ok: false, error: "Plata nu a fost finalizată." };
    if (s.client_reference_id !== context.userId)
      return { ok: false, error: "Această plată aparține altui cont." };
    const m = (s.metadata ?? {}) as Record<string, string>;
    const cfg = configSchema.safeParse({ ...m, durata: Number(m.durata) });
    if (!cfg.success) return { ok: false, error: "Detaliile sesiunii nu sunt valide." };
    const exp = await expirarePentruPlata(data.plata, cfg.data.durata);
    if (Date.now() > exp) return { ok: false, error: "Sesiunea plătită s-a încheiat." };
    const c = cfg.data as PaConfig;
    return { ok: true, data: { token: await sigileaza(c, context.userId, false, exp), config: c } };
  });

/** Detaliile unei sesiuni existente (pentru reîncărcarea paginii). */
export const profesorAiSesiune = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ token: z.string().max(4000) }).parse(d))
  .handler(
    async ({
      data,
      context,
    }): Promise<PaResult<{ config: PaConfig; exp: number; gratuit: boolean }>> => {
      const s = await citesteSesiune(data.token, context.userId);
      if (!s) return { ok: false, error: "Sesiunea a expirat sau nu este validă." };
      const { materie, nivel, durata, obiectiv, limba } = s;
      return {
        ok: true,
        data: { config: { materie, nivel, durata, obiectiv, limba: limba ?? "ro" }, exp: s.exp, gratuit: s.gratuit },
      };
    },
  );

const STIL: Record<string, string> = {
  primar:
    "Elevul e copil de școală primară: propoziții foarte scurte, cuvinte simple, exemple din viața de zi cu zi, multă încurajare.",
  gimnaziu: "Elev de gimnaziu: limbaj simplu, pași mici, exemple concrete.",
  evaluare:
    "Elev de clasa a VIII-a care se pregătește de Evaluarea Națională: legi explicațiile de tipul de subiecte de la examen.",
  liceu: "Elev de liceu: explicații riguroase dar prietenoase, cu notațiile de la școală.",
  bac: "Elev care se pregătește de Bacalaureat: legi explicațiile de cerințele și baremul de la bacalaureat. Spune mereu „bacalaureat”, niciodată prescurtarea „BAC”.",
  student: "Student: poți fi mai tehnic și mai rapid, cu rigoare.",
  adult: "Adult care învață pentru el: respectuos, practic, fără ton școlăresc.",
};
const MOD: Record<string, string> = {
  explicatii:
    "Obiectiv: explicații. Explici noțiunea cerută cu un exemplu, apoi întrebi dacă e clar.",
  lectie:
    "Obiectiv: lecție interactivă. Conduci tu lecția pas cu pas: un concept, un exemplu, o întrebare scurtă de verificare, apoi pasul următor după răspunsul elevului.",
  exercitii:
    "Obiectiv: exerciții. Dai câte un exercițiu potrivit nivelului, aștepți răspunsul, îl corectezi și explici greșeala, apoi crești treptat dificultatea.",
  intrebari:
    "Obiectiv: întrebări directe. Răspunzi clar și concis la ce întreabă elevul, cu un exemplu dacă ajută.",
};

/** Profesorul răspunde: textul vorbit de avatar + ce scrie pe tablă. */
export const profesorAiRaspunde = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z
      .object({
        token: z.string().max(4000),
        mesaje: z
          .array(
            z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1).max(3000) }),
          )
          .min(1)
          .max(40)
          .refine((m) => m[m.length - 1].role === "user"),
      })
      .parse(d),
  )
  .handler(async ({ data, context }): Promise<PaResult<PaReplica>> => {
    const s = await citesteSesiune(data.token, context.userId);
    if (!s) return { ok: false, error: "Sesiunea s-a încheiat. Poți începe o sesiune nouă." };
    let cotaLuata = false;
    try {
      const ai = await import("./ai-gateway.server");
      const { callAi, extractJson, takeQuota } = ai;
      if (!s.gratuit) {
        const q = await takeQuota(context.userId, "profesor-ai", LIMITA_PROFESOR_ZI);
        if (!q.ok)
          return {
            ok: false,
            error: `Ai atins limita de ${LIMITA_PROFESOR_ZI} de mesaje pe zi. Revino mâine.`,
            cod: "limita_interna",
          };
        cotaLuata = true;
      }
      const t = await import("./profesor-ai-tutor.server");
      const system = t.tutorPrompt(s, s.durata, s.exp);
      const text = await callAi({ system, messages: data.mesaje, maxTokens: 900 });
      void extractJson;
      const j: Partial<PaReplica> = t.parseReply(text);
      const emotii = ["zambet", "gandire", "incurajare", "neutru"] as const;
      const vorbit = String(j.vorbit ?? "")
        .trim()
        .slice(0, 1200);
      if (!vorbit) return { ok: false, error: "Nu am primit un răspuns. Încearcă din nou." };
      return {
        ok: true,
        data: {
          vorbit,
          tabla: j.tabla ? String(j.tabla).slice(0, 1500) : undefined,
          emotie: emotii.includes(j.emotie as (typeof emotii)[number])
            ? (j.emotie as PaReplica["emotie"])
            : "neutru",
        },
      };
    } catch (e) {
      const { AiError, eroareFurnizor, refundQuota } = await import("./ai-gateway.server");
      // Elevul nu a primit răspuns din motive externe: îi returnăm mesajul din limita zilnică.
      if (cotaLuata && eroareFurnizor(e)) await refundQuota(context.userId, "profesor-ai");
      if (e instanceof AiError)
        return { ok: false, error: e.userMessage, cod: e.kind, reiaPesteSec: e.retryAfterSec };
      console.error("[profesor-ai] eroare neașteptată");
      return { ok: false, error: "A apărut o problemă. Încearcă din nou.", cod: "necunoscut" };
    }
  });

/** Token pentru avatarul realist: LiveAvatar dacă e configurat, altfel contractul HeyGen vechi. */
export const profesorAiAvatar = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ token: z.string().max(4000) }).parse(d))
  .handler(async ({ data, context }) => {
    const s = await citesteSesiune(data.token, context.userId);
    if (!s)
      return {
        heygen: null as null | import("./profesor-ai-avatar.server").AvatarAccess,
        error: "Sesiunea nu este validă.",
      };
    const av = await import("./profesor-ai-avatar.server");
    return av.createLiveAvatarAccess({
      ...av.liveAvatarConfig(process.env),
      maxSeconds: Math.min(3600, (s.durata + 5) * 60),
      language: s.limba ?? "ro",
    });
  });

/**
 * Live lesson access: a single-use Gemini Live token plus the setup the client must send, and a
 * LiveAvatar LITE token for the video (null → the voice still plays without video).
 */
export const profesorAiLive = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ token: z.string().max(4000) }).parse(d))
  .handler(async ({ data, context }) => {
    const s = await citesteSesiune(data.token, context.userId);
    if (!s) return { ok: false as const, error: "Sesiunea nu este validă." };
    const live = await import("./profesor-ai-live.server");
    const [g, avatar] = await Promise.all([
      live.createGeminiLiveToken(s.durata),
      live.createLiteAvatarToken(Math.min(3600, (s.durata + 5) * 60)),
    ]);
    if (!("token" in g)) return { ok: false as const, error: g.error };
    return {
      ok: true as const,
      geminiToken: g.token,
      setup: live.liveSetup(live.livePrompt(s, s.durata, s.exp)),
      avatarToken: avatar,
    };
  });
