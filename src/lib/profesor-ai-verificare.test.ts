import { describe, expect, it } from "bun:test";
import { poatePrimiLectiaGratuita, verificaCod } from "./profesor-ai-verificare";

describe("Profesor AI — lecția gratuită", () => {
  it("cere telefon verificat", () => {
    expect(poatePrimiLectiaGratuita(null)).toBe("neverificat");
    expect(poatePrimiLectiaGratuita({ phone_verified_at: null, free_lesson_used_at: null })).toBe("neverificat");
  });
  it("se acordă o singură dată", () => {
    expect(poatePrimiLectiaGratuita({ phone_verified_at: "2026-10-21", free_lesson_used_at: null })).toBe("ok");
    expect(poatePrimiLectiaGratuita({ phone_verified_at: "2026-10-21", free_lesson_used_at: "2026-10-22" })).toBe("folosita");
  });
  it("codul SMS expiră și are maximum 5 încercări", () => {
    const exp = new Date(1000_000).toISOString();
    expect(verificaCod({ code_hash: "a", code_expires_at: exp, code_attempts: 0 }, "a", 2000_000)).toBe("expirat");
    expect(verificaCod({ code_hash: "a", code_expires_at: exp, code_attempts: 5 }, "a", 0)).toBe("prea_multe");
    expect(verificaCod({ code_hash: "a", code_expires_at: exp, code_attempts: 4 }, "b", 0)).toBe("gresit");
    expect(verificaCod({ code_hash: "a", code_expires_at: exp, code_attempts: 4 }, "a", 0)).toBe("ok");
  });
});
