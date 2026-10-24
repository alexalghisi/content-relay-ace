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
mock.module("./sms.server", () => ({ normalizeRoPhone: () => "40712345678", sendSms: async () => 0 }));

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
    expect(writes.length).toBe(1);
    expect(writes.some((write) => "phone_verified_at" in write)).toBe(false);
  });
});