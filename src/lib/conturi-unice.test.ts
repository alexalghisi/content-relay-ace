import { describe, expect, it, mock, beforeEach } from "bun:test";
import { readFileSync } from "node:fs";
import {
  emailCanonic,
  esteEmailDuplicat,
  MESAJ_EMAIL_FOLOSIT,
  MESAJ_TELEFON_FOLOSIT,
} from "./inregistrare";

describe("unicitate — reguli pure", () => {
  it("emailCanonic: litere mici, iar la Gmail fără puncte și fără +eticheta", () => {
    expect(emailCanonic("  Ana.Pop@Example.ro ")).toBe("ana.pop@example.ro");
    expect(emailCanonic("ana.pop+test@gmail.com")).toBe("anapop@gmail.com");
    expect(emailCanonic("A.N.A.POP@googlemail.com")).toBe("anapop@gmail.com");
    expect(emailCanonic("ana+x@yahoo.com")).toBe("ana+x@yahoo.com"); // alte domenii: neschimbat
  });
  it("esteEmailDuplicat deosebește contul exact de o variantă blocată de trigger", () => {
    expect(esteEmailDuplicat("A user with this email address has already been registered")).toBe(
      "exact",
    );
    expect(esteEmailDuplicat("x", "email_exists")).toBe("exact");
    expect(esteEmailDuplicat("Database error saving new user")).toBe("varianta");
    expect(esteEmailDuplicat("Password should be at least 6 characters")).toBeNull();
  });
  it("migrația SQL aplică aceleași reguli ca emailCanonic", () => {
    const sql = readFileSync(
      new URL("../../drizzle/migrations/0021_conturi_unice.sql", import.meta.url),
      "utf8",
    );
    expect(sql).toContain("'gmail.com', 'googlemail.com'");
    expect(sql).toContain("replace(split_part(local, '+', 1), '.', '')");
    expect(sql).toContain("BEFORE INSERT OR UPDATE OF email ON auth.users");
    const journal = readFileSync(
      new URL("../../drizzle/migrations/meta/_journal.json", import.meta.url),
      "utf8",
    );
    expect(journal).toContain("0021_conturi_unice");
  });
});

// ---- Handlerul real creeazaCont, cu Supabase și emailul simulate ----
mock.module("@tanstack/react-start", () => ({
  createServerFn: () => {
    const b = { middleware: () => b, inputValidator: () => b, handler: (fn: unknown) => fn };
    return b;
  },
}));
mock.module("@/integrations/supabase/auth-middleware", () => ({ requireSupabaseAuth: {} }));

const st = {
  telefonVerificatDeAltul: false,
  variantaEmail: false,
  generateError: null as null | { message: string; code?: string },
  existentConfirmat: false,
  apeluri: [] as string[],
};
const query = {
  select: () => query,
  eq: () => query,
  not: () => query,
  neq: () => query,
  limit: () => query,
  maybeSingle: async () => ({ data: st.telefonVerificatDeAltul ? { user_id: "alt-cont" } : null }),
  upsert: async () => ({ error: null }),
  update: () => query,
};
mock.module("@/integrations/supabase/client.server", () => ({
  supabaseAdmin: {
    from: () => query,
    rpc: async (fn: string) => {
      st.apeluri.push(`rpc:${fn}`);
      return { data: st.variantaEmail, error: null };
    },
    auth: {
      admin: {
        generateLink: async ({ type }: { type: string }) => {
          st.apeluri.push(`generateLink:${type}`);
          if (type === "signup" && st.generateError) return { data: null, error: st.generateError };
          if (type === "magiclink")
            return {
              data: {
                user: {
                  email_confirmed_at: st.existentConfirmat ? "2026-01-01" : null,
                  user_metadata: {},
                },
                properties: { hashed_token: "h" },
              },
              error: null,
            };
          return { data: { user: {}, properties: { hashed_token: "h" } }, error: null };
        },
      },
    },
  },
}));
mock.module("./email-cont.server", () => ({
  trimiteEmailCont: async () => {
    st.apeluri.push("email");
    return true;
  },
}));

type R = { ok: boolean; stare?: string; error?: string };
async function inregistreaza(email: string, phone = "0722 123 456"): Promise<R> {
  const { creeazaCont } = await import("./inregistrare.functions");
  const h = creeazaCont as unknown as (i: { data: Record<string, string> }) => Promise<R>;
  return h({
    data: {
      name: "Ana Pop",
      email,
      phone,
      password: "parola123",
      origin: "https://meditatiidirect.ro",
    },
  });
}

let n = 0;
const unic = (local: string, domeniu = "example.ro") => `${local}${++n}@${domeniu}`; // ocolește fereastra de 60 s

describe("creeazaCont — un email și un telefon per cont", () => {
  beforeEach(() => {
    Object.assign(st, {
      telefonVerificatDeAltul: false,
      variantaEmail: false,
      generateError: null,
      existentConfirmat: false,
      apeluri: [],
    });
  });

  it("cont nou valid → trimite emailul de confirmare", async () => {
    const r = await inregistreaza(unic("ana"));
    expect(r).toEqual({ ok: true, stare: "trimis" });
    expect(st.apeluri).toContain("generateLink:signup");
    expect(st.apeluri).toContain("email");
  });

  it("telefon deja verificat pe alt cont → refuzat, contul nu se creează", async () => {
    st.telefonVerificatDeAltul = true;
    const r = await inregistreaza(unic("ana"));
    expect(r.ok).toBe(false);
    expect(r.stare).toBe("telefon");
    expect(r.error).toBe(MESAJ_TELEFON_FOLOSIT);
    expect(st.apeluri.some((a) => a.startsWith("generateLink"))).toBe(false);
  });

  it("variantă Gmail a unui cont existent → refuzată înainte de creare", async () => {
    st.variantaEmail = true;
    const r = await inregistreaza(unic("ana.pop+x", "gmail.com"));
    expect(r).toMatchObject({ ok: false, stare: "exista", error: MESAJ_EMAIL_FOLOSIT });
    expect(st.apeluri).toContain("rpc:exista_email_canonic");
    expect(st.apeluri).not.toContain("generateLink:signup");
  });

  it("email exact existent și confirmat → „există deja”, fără email nou", async () => {
    st.generateError = {
      message: "A user with this email address has already been registered",
      code: "email_exists",
    };
    st.existentConfirmat = true;
    const r = await inregistreaza(unic("ana"));
    expect(r).toMatchObject({ ok: false, stare: "exista" });
    expect(st.apeluri).not.toContain("email");
  });

  it("email exact existent, neconfirmat → retrimite confirmarea", async () => {
    st.generateError = { message: "already registered", code: "email_exists" };
    const r = await inregistreaza(unic("ana"));
    expect(r).toEqual({ ok: true, stare: "retrimis" });
    expect(st.apeluri).toContain("email");
  });

  it("triggerul din baza de date blochează o variantă (cursă) → „există deja”", async () => {
    st.generateError = { message: "Database error saving new user" };
    const r = await inregistreaza(unic("ana"));
    expect(r).toMatchObject({ ok: false, stare: "exista", error: MESAJ_EMAIL_FOLOSIT });
    expect(st.apeluri).not.toContain("generateLink:magiclink");
  });
});
