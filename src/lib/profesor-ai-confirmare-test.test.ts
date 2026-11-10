import { describe, expect, it, mock } from "bun:test";

// Același mock ca în profesor-ai-verificare-delivery.test.ts: modulele Bun sunt partajate între fișiere,
// iar dacă acest fișier încarcă primul modulul cu createServerFn real, testele de livrare SMS pică
// („No Start context found”) în funcție de ordinea fișierelor.
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
const { confirmaVerificarea } = await import("./profesor-ai-verificare.functions");

const dup = { code: "23505" };

describe("confirmaVerificarea", () => {
  it("refuză un telefon duplicat fără reîncercare sau modificarea altui cont", async () => {
    const marcheaza = mock(async () => dup);
    expect(await confirmaVerificarea(marcheaza)).toEqual({ ok: false, error: "Acest număr este deja folosit de alt cont." });
    expect(marcheaza).toHaveBeenCalledTimes(1);
  });
  it("confirmă numai după salvarea verificării", async () => {
    expect(await confirmaVerificarea(async () => null)).toEqual({ ok: true });
  });
  it("o eroare tehnică nu este raportată ca telefon duplicat", async () => {
    expect(await confirmaVerificarea(async () => ({ code: "08006" }))).toEqual({ ok: false, error: "Nu am putut confirma telefonul. Încearcă din nou." });
  });
});
