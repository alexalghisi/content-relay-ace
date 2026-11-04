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
const query = {
  select: () => query,
  eq: () => query,
  not: () => query,
  neq: () => query,
  maybeSingle: async () => ({ data: null }),
  upsert: async (value: Record<string, unknown>) => { writes.push(value); return { error: null }; },
  update: (value: Record<string, unknown>) => { writes.push(value); return query; },
};
mock.module("@/integrations/supabase/client.server", () => ({ supabaseAdmin: { from: () => query } }));

describe("Phone ownership when SMS fails", () => {
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