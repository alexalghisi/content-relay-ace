import { describe, expect, it, mock } from "bun:test";

mock.module("@/integrations/supabase/auth-middleware", () => ({ requireSupabaseAuth: {} }));
const { confirmaVerificarea } = await import("./profesor-ai-verificare.functions");

const dup = { code: "23505" };

describe("confirmaVerificarea", () => {
  for (const tel of [
    "40770763175",
    "+40770763175",
    "0770763175",
    "40744340622",
    "+40744340622",
    "0744340622",
  ]) {
    it(`numărul de test ${tel} se confirmă chiar dacă e verificat pe alt cont`, async () => {
      let n = 0;
      const marcheaza = mock(async () => (n++ === 0 ? dup : null));
      const elibereaza = mock(async () => null);
      expect(await confirmaVerificarea(tel, marcheaza, elibereaza)).toEqual({ ok: true });
      expect(elibereaza).toHaveBeenCalledTimes(1);
    });
  }
  it("un număr real ocupat rămâne refuzat, fără să atingă alte conturi", async () => {
    const elibereaza = mock(async () => null);
    const r = await confirmaVerificarea("40722000000", async () => dup, elibereaza);
    expect(r.ok).toBe(false);
    expect(elibereaza).not.toHaveBeenCalled();
  });
  it("fără conflict nu eliberează nimic", async () => {
    const elibereaza = mock(async () => null);
    expect(await confirmaVerificarea("40744340622", async () => null, elibereaza)).toEqual({
      ok: true,
    });
    expect(elibereaza).not.toHaveBeenCalled();
  });
});
