import { describe, expect, test } from "bun:test";
import { MAX_INPUT_BYTES, MAX_SOURCE_BYTES } from "./code-runner.server";

// Regulile care protejează endpoint-ul de rulare: sursa și intrarea au limite stricte,
// iar funcția server cere autentificare (middleware requireSupabaseAuth).
describe("code-runner", () => {
  test("limitele de dimensiune sunt cele anunțate utilizatorului", () => {
    expect(MAX_SOURCE_BYTES).toBe(32_000);
    expect(MAX_INPUT_BYTES).toBe(4_000);
  });

  test("funcția server este protejată prin middleware de autentificare", async () => {
    const sursa = await Bun.file(new URL("./code-runner.functions.ts", import.meta.url)).text();
    expect(sursa).toContain("requireSupabaseAuth");
    expect(sursa).toContain('z.enum(["cpp", "python"])');
    expect(sursa).toContain("MAX_SOURCE_BYTES");
    expect(sursa).toContain("MAX_INPUT_BYTES");
  });
});
