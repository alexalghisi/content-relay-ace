import { describe, expect, it, mock, beforeEach, afterEach } from "bun:test";
import { readFileSync } from "node:fs";
import { gasesteConflict } from "./conturi-unice";
import {
  emailCanonic,
  esteEmailDuplicat,
  MESAJ_EMAIL_FOLOSIT,
  MESAJ_TELEFON_FOLOSIT,
} from "./inregistrare";

describe("unicitate — reguli pure", () => {
  it("numărul proprietarului poate fi reutilizat în toate formatele românești", () => {
    const conturi = [{ email: "primul@example.ro", metadataPhone: "40770763175" }];
    for (const phone of ["0770763175", "+40770763175", "40770763175", "0770 763 175"]) {
      expect(gasesteConflict(conturi, "nou@example.ro", phone, ["40770763175"])).toBeNull();
    }
  });
  it("excepția telefonului nu permite dublarea emailului Gmail", () => {
    expect(gasesteConflict([{ email: "ana.pop@gmail.com", metadataPhone: "40770763175" }],
      "anapop+test@gmail.com", "0770763175", ["40770763175"])).toBe("email");
  });
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
  it("migrația 0022 scoate triggerul care bloca toate înregistrările", () => {
    const sql = readFileSync(
      new URL("../../drizzle/migrations/0022_scoate_trigger_email.sql", import.meta.url),
      "utf8",
    );
    expect(sql).toContain("DROP TRIGGER IF EXISTS blocheaza_email_duplicat ON auth.users");
    const journal = readFileSync(
      new URL("../../drizzle/migrations/meta/_journal.json", import.meta.url),
      "utf8",
    );
    expect(journal).toContain("0022_scoate_trigger_email");
  });
  it("gasesteConflict: telefonul are prioritate, emailul exact nu e „alt cont”", () => {
    const conturi = [
      { email: "ana.pop@gmail.com", metadataPhone: "40722123456" },
      { email: "ion@yahoo.com", metadataPhone: "+40 733 000 111" },
    ];
    expect(gasesteConflict(conturi, "nou@example.ro", "0722 123 456")).toBe("telefon");
    expect(gasesteConflict(conturi, "nou@example.ro", "0733000111")).toBe("telefon");
    expect(gasesteConflict(conturi, "anapop+x@gmail.com", "0744555666")).toBe("email");
    expect(gasesteConflict(conturi, "nou@example.ro", "0744555666")).toBeNull();
    // Același email exact: fluxul existent retrimite confirmarea, nu e conflict.
    expect(gasesteConflict(conturi, "ana.pop@gmail.com", "0722123456")).toBeNull();
    // Telefon verificat prin SMS pe un cont fără metadată.
    expect(gasesteConflict([], "nou@example.ro", "0755111222", ["40755111222"])).toBe("telefon");
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
  conturi: [] as { email: string; user_metadata: Record<string, unknown>; phone?: string }[],
  verificate: [] as string[],
  generateError: null as null | { message: string; code?: string },
  existentConfirmat: false,
  apeluri: [] as string[],
  emailSent: true,
};
// Chainable și „await”-abil: select("phone").not(...) întoarce telefoanele verificate.
const query: Record<string, unknown> = {
  select: () => query,
  eq: () => query,
  not: () => query,
  neq: () => query,
  limit: () => query,
  maybeSingle: async () => ({ data: null }),
  upsert: async () => ({ error: null }),
  update: () => query,
  then: (res: (v: unknown) => unknown) =>
    res({ data: st.verificate.map((phone) => ({ phone })), error: null }),
};
mock.module("@/integrations/supabase/client.server", () => ({
  supabaseAdmin: {
    from: () => query,
    auth: {
      admin: {
        listUsers: async () => {
          st.apeluri.push("listUsers");
          return { data: { users: st.conturi }, error: null };
        },
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
    return st.emailSent;
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
      conturi: [],
      verificate: [],
      generateError: null,
      existentConfirmat: false,
      apeluri: [],
      emailSent: true,
    });
  });

  const originalCaches = Object.getOwnPropertyDescriptor(globalThis, "caches");
  afterEach(() => {
    if (originalCaches) Object.defineProperty(globalThis, "caches", originalCaches);
    else Reflect.deleteProperty(globalThis, "caches");
  });
  function enableEdgeCache() {
    const entries = new Map<string, Response>();
    Object.defineProperty(globalThis, "caches", { configurable: true, value: { default: {
      match: async (r: Request) => entries.get(r.url)?.clone(),
      put: async (r: Request, response: Response) => { entries.set(r.url, response.clone()); },
      delete: async (r: Request) => entries.delete(r.url),
    } } });
  }
  it("same email retries immediately after correcting a conflicting phone", async () => {
    enableEdgeCache();
    const email = unic("retry-phone");
    st.conturi = [{ email: "other@example.ro", user_metadata: { phone: "40722123456" } }];
    expect((await inregistreaza(email)).stare).toBe("telefon");
    expect(await inregistreaza(email, "0744555666")).toEqual({ ok: true, stare: "trimis" });
    expect(st.apeluri.filter((a) => a === "email")).toHaveLength(1);
  });
  it("same email retries after generation fails without an email being sent", async () => {
    enableEdgeCache();
    const email = unic("retry-generation");
    st.generateError = { message: "upstream unavailable" };
    expect((await inregistreaza(email)).ok).toBe(false);
    st.generateError = null;
    expect(await inregistreaza(email)).toEqual({ ok: true, stare: "trimis" });
    expect(st.apeluri.filter((a) => a === "email")).toHaveLength(1);
  });
  it("delivery failure releases signup cooldown", async () => {
    enableEdgeCache();
    const email = unic("retry-delivery");
    st.emailSent = false;
    expect((await inregistreaza(email)).stare).toBe("netrimis");
    st.emailSent = true;
    st.generateError = { message: "already registered", code: "email_exists" };
    expect(await inregistreaza(email)).toEqual({ ok: true, stare: "retrimis" });
  });

  it("emailuri diferite și telefon nou → contul se creează și pleacă emailul", async () => {
    st.conturi = [{ email: "altcineva@yahoo.com", user_metadata: { phone: "40733000111" } }];
    const r = await inregistreaza(unic("ana"));
    expect(r).toEqual({ ok: true, stare: "trimis" });
    expect(st.apeluri).toContain("generateLink:signup");
    expect(st.apeluri).toContain("email");
  });

  it("telefon deja înregistrat pe alt cont (chiar neverificat) → mesaj clar, contul nu se creează", async () => {
    st.conturi = [{ email: "primul@example.ro", user_metadata: { phone: "40722123456" } }];
    const r = await inregistreaza(unic("ana"));
    expect(r).toEqual({ ok: false, stare: "telefon", error: MESAJ_TELEFON_FOLOSIT });
    expect(r.error).toContain("deja înregistrat");
    expect(st.apeluri.some((a) => a.startsWith("generateLink"))).toBe(false);
  });

  it("telefon verificat prin SMS pe alt cont → refuzat", async () => {
    st.verificate = ["40722123456"];
    const r = await inregistreaza(unic("ana"));
    expect(r.stare).toBe("telefon");
  });

  it("numărul de test deja verificat permite crearea contului și trimite confirmarea email", async () => {
    st.conturi = [{ email: "primul@example.ro", user_metadata: { phone: "40770763175" } }];
    st.verificate = ["40770763175"];
    const r = await inregistreaza(unic("test-proprietar"), "0770763175");
    expect(r).toEqual({ ok: true, stare: "trimis" });
    expect(st.apeluri).toContain("generateLink:signup");
    expect(st.apeluri).toContain("email");
  });

  it("variantă Gmail a unui cont existent → „există deja”", async () => {
    st.conturi = [{ email: "anapop@gmail.com", user_metadata: {} }];
    const r = await inregistreaza("ana.pop+x@gmail.com", "0744 555 666");
    expect(r).toMatchObject({ ok: false, stare: "exista", error: MESAJ_EMAIL_FOLOSIT });
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

  it("eroare a bazei de date NU mai e raportată ca „cont existent”", async () => {
    st.generateError = { message: "Database error saving new user" };
    const r = await inregistreaza(unic("ana"));
    expect(r.ok).toBe(false);
    expect(r.stare).toBeUndefined();
    expect(r.error).not.toContain("Există deja");
  });
});
