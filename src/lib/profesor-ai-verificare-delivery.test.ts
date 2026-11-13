import { describe, expect, it, mock } from "bun:test";

// Invoke the real handler, replacing only RPC transport, auth and external services.
mock.module("@tanstack/react-start", () => ({
  createServerFn: () => {
    const builder = {
      middleware: () => builder,
      inputValidator: () => builder,
      handler: (fn: unknown) => fn,
    };
    return builder;
  },
}));
mock.module("@/integrations/supabase/auth-middleware", () => ({ requireSupabaseAuth: {} }));
// No mock.module("./sms.server"): Bun module mocks are global across test files and broke
// signup/SMS suites depending on file order. The real sendSms runs; the provider call is
// made to fail via a fetch stub scoped to this test.

const writes: Record<string, unknown>[] = [];
let occupied = false;
let selected = "";
let ownRow: Record<string, unknown> | null = null;
let occupantDeleted = false;
const deletes: string[] = [];
const query = {
  select: (columns: string) => { selected = columns; return query; },
  eq: () => query,
  not: () => query,
  neq: () => query,
  maybeSingle: async () => ({
    data: selected === "user_id" ? (occupied ? { user_id: "other-user" } : null) : selected.includes("code_sent_at") ? ownRow : null,
  }),
  upsert: async (value: Record<string, unknown>) => { writes.push(value); return { error: null }; },
  update: (value: Record<string, unknown>) => { writes.push(value); return query; },
  delete: () => ({ eq: async (_c: string, id: string) => { deletes.push(id); return { error: null }; } }),
};
const auth = {
  admin: {
    getUserById: async (id: string) =>
      occupantDeleted
        ? { data: { user: null }, error: { message: "User not found" } }
        : { data: { user: { id } }, error: null },
  },
};
mock.module("@/integrations/supabase/client.server", () => ({ supabaseAdmin: { from: () => query, auth } }));

describe("Phone ownership when SMS fails", () => {
  it("numerele foste de test respectă verificarea și limita de retrimitere", async () => {
    const realFetch = globalThis.fetch;
    const realToken = process.env["GATEWAYAPI_TOKEN"];
    process.env["GATEWAYAPI_TOKEN"] = "test-token";
    let sends = 0;
    globalThis.fetch = (async () => { sends++; return new Response('{"ids":[1]}', { status: 200 }); }) as unknown as typeof fetch;
    const recent = { phone: "40770763175", phone_verified_at: new Date().toISOString(), code_sent_at: new Date(Date.now() - 5000).toISOString(), code_expires_at: new Date(Date.now() + 500000).toISOString() };
    try {
      const { trimiteCodTelefon } = await import("./profesor-ai-verificare.functions");
      const send = trimiteCodTelefon as unknown as (input: { data: { phone: string }; context: { userId: string } }) =>
        Promise<{ ok: boolean; verificat?: boolean; dejaTrimis?: boolean; retrimitereIn?: number }>;
      ownRow = recent;
      for (const phone of ["0770763175", "+40770763175", "0770763175"]) {
        const r = await send({ data: { phone }, context: { userId: "u" } });
        expect(r.ok).toBe(true);
        expect(r.verificat).toBe(true);
      }
      expect(sends).toBe(0);
      // Orice alt număr păstrează regulile: cont verificat → fără SMS; cod recent → fără SMS nou.
      ownRow = { ...recent, phone: "40712345678" };
      expect((await send({ data: { phone: "0712345678" }, context: { userId: "u" } })).verificat).toBe(true);
      ownRow = { ...recent, phone: "40712345678", phone_verified_at: null };
      expect((await send({ data: { phone: "0712345678" }, context: { userId: "u" } })).dejaTrimis).toBe(true);
      expect(sends).toBe(0);
    } finally {
      ownRow = null;
      writes.length = 0;
      globalThis.fetch = realFetch;
      if (realToken === undefined) delete process.env["GATEWAYAPI_TOKEN"];
      else process.env["GATEWAYAPI_TOKEN"] = realToken;
    }
  });
  it("former test phone owned by another account is rejected without SMS", async () => {
    const realFetch = globalThis.fetch;
    const realToken = process.env["GATEWAYAPI_TOKEN"];
    process.env["GATEWAYAPI_TOKEN"] = "test-token";
    occupied = true;
    writes.length = 0;
    let sends = 0;
    globalThis.fetch = (async () => { sends++; return new Response('{"ids":[123]}', { status: 200 }); }) as unknown as typeof fetch;
    try {
      const { trimiteCodTelefon, confirmaCodTelefon } = await import("./profesor-ai-verificare.functions");
      const handler = trimiteCodTelefon as unknown as (input: {
        data: { phone: string }; context: { userId: string };
      }) => Promise<{ ok: boolean; verificat?: boolean }>;
      const result = await handler({ data: { phone: "0770763175" }, context: { userId: "test-user" } });
      expect(result.ok).toBe(false);
      expect(result.verificat).not.toBe(true);
      expect(sends).toBe(0);
      expect(writes).toHaveLength(0);
      expect(writes.some((write) => "phone_verified_at" in write)).toBe(false);
      const confirm = confirmaCodTelefon as unknown as (input: {
        data: { cod: string }; context: { userId: string };
      }) => Promise<{ ok: boolean }>;
      expect((await confirm({ data: { cod: "000000" }, context: { userId: "test-user" } })).ok).toBe(false);
    } finally {
      occupied = false;
      writes.length = 0;
      globalThis.fetch = realFetch;
      if (realToken === undefined) delete process.env["GATEWAYAPI_TOKEN"];
      else process.env["GATEWAYAPI_TOKEN"] = realToken;
    }
  });
  it("numărul rămas pe un cont șters se eliberează: rândul orfan e șters și codul pleacă", async () => {
    const realFetch = globalThis.fetch;
    const realToken = process.env["GATEWAYAPI_TOKEN"];
    process.env["GATEWAYAPI_TOKEN"] = "test-token";
    occupied = true;
    occupantDeleted = true;
    writes.length = 0;
    deletes.length = 0;
    let sends = 0;
    globalThis.fetch = (async () => { sends++; return new Response('{"ids":[7]}', { status: 200 }); }) as unknown as typeof fetch;
    try {
      const { trimiteCodTelefon } = await import("./profesor-ai-verificare.functions");
      const handler = trimiteCodTelefon as unknown as (input: {
        data: { phone: string }; context: { userId: string };
      }) => Promise<{ ok: boolean }>;
      const r = await handler({ data: { phone: "0712345678" }, context: { userId: "nou" } });
      expect(r.ok).toBe(true);
      expect(deletes).toEqual(["other-user"]);
      expect(sends).toBe(1);
      expect(writes.some((w) => "phone_verified_at" in w)).toBe(false);
    } finally {
      occupied = false;
      occupantDeleted = false;
      writes.length = 0;
      deletes.length = 0;
      globalThis.fetch = realFetch;
      if (realToken === undefined) delete process.env["GATEWAYAPI_TOKEN"];
      else process.env["GATEWAYAPI_TOKEN"] = realToken;
    }
  });
  it("never grants verification or writes phone_verified_at after failed delivery", async () => {
    const realFetch = globalThis.fetch;
    const realToken = process.env["GATEWAYAPI_TOKEN"];
    process.env["GATEWAYAPI_TOKEN"] = "test-token";
    globalThis.fetch = (async () => new Response("{}", { status: 401 })) as unknown as typeof fetch;
    try {
    const { trimiteCodTelefon } = await import("./profesor-ai-verificare.functions");
    const handler = trimiteCodTelefon as unknown as (input: {
      data: { phone: string; address: string }; context: { userId: string };
    }) => Promise<{ ok: boolean; verificat?: boolean }>;
    const result = await handler({
      data: { phone: "0712345678", address: "Strada Exemplu 10, București" },
      context: { userId: "test-user" },
    });
    expect(result.ok).toBe(false);
    expect(result.verificat).not.toBe(true);
    // 1) codul salvat, 2) codul anulat după eșecul SMS (ca o nouă încercare să nu fie blocată un minut)
    expect(writes.length).toBe(2);
    expect(writes[1]).toEqual({ code_sent_at: null, code_hash: null });
    expect(writes.some((write) => "phone_verified_at" in write)).toBe(false);
    } finally {
      globalThis.fetch = realFetch;
      if (realToken === undefined) delete process.env["GATEWAYAPI_TOKEN"];
      else process.env["GATEWAYAPI_TOKEN"] = realToken;
    }
  });
});