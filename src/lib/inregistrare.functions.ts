import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { signupSchema } from "./signup-validation";
import {
  eroareInregistrareRo,
  htmlConfirmare,
  linkConfirmare,
  subiectConfirmare,
  textConfirmare,
  type TipConfirmare,
} from "./inregistrare";

/** Max. un email de confirmare pe adresă la 60 s (cache edge Cloudflare; în dev nu limitează). */
async function claimFereastra(key: string, sec = 60): Promise<boolean> {
  try {
    const c = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
    if (!c) return true;
    const req = new Request(`https://inregistrare.meditatiidirect.ro/${encodeURIComponent(key)}`);
    if (await c.match(req)) return false;
    await c.put(req, new Response("1", { headers: { "Cache-Control": `max-age=${sec}` } }));
    return true;
  } catch {
    return true;
  }
}

type Rezultat =
  | { ok: true; stare: "trimis" | "retrimis" }
  | { ok: false; error: string; stare?: "exista" | "netrimis" };

async function trimiteConfirmare(email: string, nume: string, origin: string, tokenHash: string, tip: TipConfirmare) {
  const { trimiteEmailCont } = await import("./email-cont.server");
  const link = linkConfirmare(origin, tokenHash, tip);
  return trimiteEmailCont({
    to: email,
    subject: subiectConfirmare(),
    html: htmlConfirmare(nume, link),
    text: textConfirmare(nume, link),
    label: "confirmare-cont",
  });
}

/** Pentru un cont existent: retrimite confirmarea doar dacă emailul nu e confirmat încă. */
async function retrimitePentruExistent(email: string, origin: string): Promise<Rezultat> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.auth.admin.generateLink({ type: "magiclink", email });
  if (error || !data?.user) return { ok: false, error: "Nu am găsit un cont cu acest email.", stare: "netrimis" };
  if (data.user.email_confirmed_at) return { ok: false, error: "Există deja un cont cu acest email. Autentifică-te.", stare: "exista" };
  const nume = typeof data.user.user_metadata?.display_name === "string" ? data.user.user_metadata.display_name : "";
  const trimis = await trimiteConfirmare(email, nume, origin, data.properties.hashed_token, "magiclink");
  return trimis
    ? { ok: true, stare: "retrimis" }
    : { ok: false, error: "Emailul nu a putut fi trimis acum. Încearcă din nou peste un minut.", stare: "netrimis" };
}

/**
 * Creează contul și trimite emailul de confirmare prin providerul nostru (nu prin mailer-ul implicit
 * Supabase, care nu livrează utilizatorilor reali). Telefonul rămâne metadată neverificată până la codul SMS.
 */
export const creeazaCont = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      name: z.string().max(100),
      email: z.string().max(255),
      phone: z.string().max(30),
      password: z.string().max(72),
      origin: z.string().max(200),
    }).parse(d),
  )
  .handler(async ({ data }): Promise<Rezultat> => {
    try {
      return await creeaza(data);
    } catch (e) {
      console.error(`[inregistrare] ${(e as Error)?.name ?? "error"}`);
      return { ok: false, error: "Înregistrarea nu este disponibilă momentan. Încearcă din nou peste câteva minute." };
    }
  });

async function creeaza(data: { name: string; email: string; phone: string; password: string; origin: string }): Promise<Rezultat> {
    const parsed = signupSchema.safeParse(data);
    if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Date invalide." };
    const email = parsed.data.email.toLowerCase();
    if (!(await claimFereastra(`signup:${email}`)))
      return { ok: false, error: "Ți-am trimis deja un email acum câteva secunde. Verifică și folderul Spam." };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: link, error } = await supabaseAdmin.auth.admin.generateLink({
      type: "signup",
      email,
      password: parsed.data.password,
      options: { data: { display_name: parsed.data.name, phone: parsed.data.phone } },
    });
    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("already") || (error as { code?: string }).code === "email_exists")
        return retrimitePentruExistent(email, data.origin);
      console.error(`[inregistrare] generateLink ${(error as { status?: number }).status ?? ""}`);
      return { ok: false, error: eroareInregistrareRo(error.message) };
    }
    const trimis = await trimiteConfirmare(email, parsed.data.name, data.origin, link.properties.hashed_token, "signup");
    if (!trimis)
      return {
        ok: false,
        stare: "netrimis",
        error: "Contul a fost creat, dar emailul de confirmare nu a putut fi trimis. Apasă „Trimite din nou emailul”.",
      };
    return { ok: true, stare: "trimis" };
}

/** „Trimite din nou emailul” din /signup și /login. Nu dezvăluie dacă adresa există. */
export const retrimiteConfirmare = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ email: z.string().trim().email().max(255), origin: z.string().max(200) }).parse(d))
  .handler(async ({ data }): Promise<Rezultat> => {
    const email = data.email.toLowerCase();
    if (!(await claimFereastra(`resend:${email}`)))
      return { ok: false, error: "Așteaptă un minut înainte să ceri un email nou." };
    const r = await retrimitePentruExistent(email, data.origin).catch((): Rezultat => ({
      ok: false,
      error: "Emailul nu a putut fi trimis acum. Încearcă din nou peste un minut.",
      stare: "netrimis",
    }));
    if (!r.ok && r.stare === "exista") return { ok: false, error: "Contul este deja confirmat. Autentifică-te.", stare: "exista" };
    if (!r.ok && r.error.startsWith("Nu am găsit")) return { ok: true, stare: "retrimis" };
    return r;
  });
