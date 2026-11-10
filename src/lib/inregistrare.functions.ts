import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { signupSchema } from "./signup-validation";
import { cuFereastraEmail } from "./inregistrare-fereastra";
import { MESAJ_PAROLA_COMPROMISA, parolaCompromisa } from "./parola-compromisa";
import {
  MESAJ_EMAIL_FOLOSIT,
  MESAJ_TELEFON_FOLOSIT,
  eroareInregistrareRo,
  esteEmailDuplicat,
  htmlConfirmare,
  numeSalut,
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

/** Citește conturile existente (API admin) și telefoanele verificate prin SMS. */
async function conflictCont(email: string, telefon: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { gasesteConflict } = await import("./conturi-unice");
  const conturi: {
    email?: string | null;
    phone?: string | null;
    metadataPhone?: unknown;
    confirmat?: boolean;
  }[] = [];
  for (let page = 1; page <= 50; page++) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) {
      console.error(`[inregistrare] listUsers ${error.message.slice(0, 80)}`);
      // Fără lista conturilor nu putem garanta unicitatea: nu creăm nimic.
      throw new Error("listUsers");
    }
    for (const u of data.users)
      conturi.push({
        email: u.email,
        phone: u.phone,
        metadataPhone: u.user_metadata?.phone,
        confirmat: !!u.email_confirmed_at,
      });
    if (data.users.length < 1000) break;
  }
  const { data: verificate, error: verificareError } = await supabaseAdmin
    .from("profesor_ai_utilizatori")
    .select("phone")
    .not("phone_verified_at", "is", null);
  if (verificareError) throw new Error("verifiedPhones");
  const telefoane = (verificate ?? []).map((r) => r.phone).filter((p): p is string => !!p);
  const exact = conturi.find((c) => (c.email ?? "").trim().toLowerCase() === email);
  return {
    conflict: gasesteConflict(conturi, email, telefon, telefoane),
    exista: exact ? (exact.confirmat ? ("confirmat" as const) : ("neconfirmat" as const)) : null,
  };
}

type Rezultat =
  | { ok: true; stare: "trimis" | "retrimis" }
  | { ok: false; error: string; stare?: "exista" | "netrimis" | "telefon" };

async function trimiteConfirmare(
  email: string,
  nume: string,
  origin: string,
  tokenHash: string,
  tip: TipConfirmare,
) {
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
  if (error || !data?.user)
    return { ok: false, error: "Nu am găsit un cont cu acest email.", stare: "netrimis" };
  if (data.user.email_confirmed_at)
    return { ok: false, error: MESAJ_EMAIL_FOLOSIT, stare: "exista" };
  const nume = numeSalut(data.user.user_metadata, data.user.email ?? email);
  const trimis = await trimiteConfirmare(
    email,
    nume,
    origin,
    data.properties.hashed_token,
    "magiclink",
  );
  return trimis
    ? { ok: true, stare: "retrimis" }
    : {
        ok: false,
        error: "Emailul nu a putut fi trimis acum. Încearcă din nou peste un minut.",
        stare: "netrimis",
      };
}

/**
 * Creează contul și trimite emailul de confirmare prin providerul nostru (nu prin mailer-ul implicit
 * Supabase, care nu livrează utilizatorilor reali). Telefonul rămâne metadată neverificată până la codul SMS.
 */
export const creeazaCont = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        name: z.string().max(100),
        email: z.string().max(255),
        phone: z.string().max(30),
        password: z.string().max(72),
        origin: z.string().max(200),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<Rezultat> => {
    try {
      return await creeaza(data);
    } catch (e) {
      console.error(`[inregistrare] ${(e as Error)?.name ?? "error"}`);
      return {
        ok: false,
        error: "Înregistrarea nu este disponibilă momentan. Încearcă din nou peste câteva minute.",
      };
    }
  });

async function creeaza(data: {
  name: string;
  email: string;
  phone: string;
  password: string;
  origin: string;
}): Promise<Rezultat> {
  const parsed = signupSchema.safeParse(data);
  if (!parsed.success)
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Date invalide." };
  const email = parsed.data.email.toLowerCase();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  // Un email și un telefon per cont, verificat înainte de creare (telefonul are prioritate).
  const { conflict, exista } = await conflictCont(email, parsed.data.phone);
  if (conflict === "telefon") return { ok: false, error: MESAJ_TELEFON_FOLOSIT, stare: "telefon" };
  if (conflict === "email") return { ok: false, error: MESAJ_EMAIL_FOLOSIT, stare: "exista" };
  // Cont existent cu exact acest email: nu „creăm” altul (parola nouă nu s-ar aplica) — spunem clar.
  if (exista === "confirmat") return { ok: false, error: MESAJ_EMAIL_FOLOSIT, stare: "exista" };
  if (exista === "neconfirmat") return retrimitePentruExistent(email, data.origin);
  // Aceeași regulă ca la resetarea parolei: parolele din listele de parole furate sunt refuzate.
  if (await parolaCompromisa(parsed.data.password))
    return { ok: false, error: MESAJ_PAROLA_COMPROMISA };

  const cache = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
  return cuFereastraEmail<Rezultat>(
    cache,
    `signup:${email}`,
    async () => {
      const { data: link, error } = await supabaseAdmin.auth.admin.generateLink({
        type: "signup",
        email,
        password: parsed.data.password,
        options: { data: { display_name: parsed.data.name, phone: parsed.data.phone } },
      });
      if (error) {
        if (esteEmailDuplicat(error.message, (error as { code?: string }).code) === "exact")
          return retrimitePentruExistent(email, data.origin);
        // Altă eroare (ex. baza de date) NU înseamnă cont existent: o logăm și spunem adevărul.
        console.error(
          `[inregistrare] generateLink ${(error as { status?: number }).status ?? ""} ${error.message.slice(0, 120)}`,
        );
        return { ok: false, error: eroareInregistrareRo(error.message) };
      }
      const trimis = await trimiteConfirmare(
        email,
        parsed.data.name,
        data.origin,
        link.properties.hashed_token,
        "signup",
      );
      if (!trimis)
        return {
          ok: false,
          stare: "netrimis",
          error:
            "Contul a fost creat, dar emailul de confirmare nu a putut fi trimis. Apasă „Trimite din nou emailul”.",
        };
      return { ok: true, stare: "trimis" };
    },
    {
      ok: false,
      error:
        "O cerere recentă este în curs sau a fost deja procesată. Așteaptă un minut înainte să reîncerci.",
    },
  );
}

/** „Trimite din nou emailul” din /signup și /login. Nu dezvăluie dacă adresa există. */
export const retrimiteConfirmare = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({ email: z.string().trim().email().max(255), origin: z.string().max(200) }).parse(d),
  )
  .handler(async ({ data }): Promise<Rezultat> => {
    const email = data.email.toLowerCase();
    if (!(await claimFereastra(`resend:${email}`)))
      return { ok: false, error: "Așteaptă un minut înainte să ceri un email nou." };
    const r = await retrimitePentruExistent(email, data.origin).catch(
      (): Rezultat => ({
        ok: false,
        error: "Emailul nu a putut fi trimis acum. Încearcă din nou peste un minut.",
        stare: "netrimis",
      }),
    );
    if (!r.ok && r.stare === "exista")
      return { ok: false, error: "Contul este deja confirmat. Autentifică-te.", stare: "exista" };
    if (!r.ok && r.error.startsWith("Nu am găsit")) return { ok: true, stare: "retrimis" };
    return r;
  });

/**
 * „Am uitat parola”: generează linkul de recuperare pe server și îl trimite prin providerul nostru
 * (nu prin mailerul implicit Supabase). Nu dezvăluie dacă adresa are cont: răspunsul e același.
 */
export const trimiteResetareParola = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({ email: z.string().trim().email().max(255), origin: z.string().max(200) }).parse(d),
  )
  .handler(async ({ data }): Promise<{ ok: true } | { ok: false; error: string }> => {
    const email = data.email.toLowerCase();
    if (!(await claimFereastra(`reset:${email}`)))
      return {
        ok: false,
        error:
          "Ți-am trimis deja un email acum câteva secunde. Așteaptă un minut și verifică și folderul Spam.",
      };
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: link, error } = await supabaseAdmin.auth.admin.generateLink({
        type: "recovery",
        email,
      });
      // Adresă fără cont (sau cont doar cu Google): același răspuns, ca să nu se poată afla cine are cont.
      if (error || !link?.user) return { ok: true };
      const { linkResetare, subiectResetare, htmlResetare, textResetare } =
        await import("./parola");
      const { trimiteEmailCont } = await import("./email-cont.server");
      const nume = numeSalut(link.user.user_metadata, link.user.email ?? email);
      const url = linkResetare(data.origin, link.properties.hashed_token);
      const trimis = await trimiteEmailCont({
        to: email,
        subject: subiectResetare(),
        html: htmlResetare(nume, url),
        text: textResetare(nume, url),
        label: "resetare-parola",
      });
      return trimis
        ? { ok: true }
        : {
            ok: false,
            error: "Emailul nu a putut fi trimis acum. Încearcă din nou peste un minut.",
          };
    } catch (e) {
      console.error(`[resetare-parola] ${(e as Error)?.name ?? "error"}`);
      return {
        ok: false,
        error:
          "Resetarea parolei nu este disponibilă momentan. Încearcă din nou peste câteva minute.",
      };
    }
  });
