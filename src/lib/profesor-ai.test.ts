/// <reference types="bun" />
import { describe, expect, it } from "bun:test";
import { PA_DURATE, PA_MATERII, PRETURI_IMPLICITE, pretSesiune } from "./profesor-ai";

describe("Profesor AI — prețuri", () => {
  it("fiecare materie și durată are un preț pozitiv", () => {
    for (const m of PA_MATERII)
      for (const d of PA_DURATE) expect(pretSesiune(m.slug, d)).toBeGreaterThan(0);
  });
  it("prețul crește cu durata", () => {
    for (const m of PA_MATERII) {
      const p = PA_DURATE.map((d) => pretSesiune(m.slug, d));
      for (let i = 1; i < p.length; i++) expect(p[i]).toBeGreaterThan(p[i - 1]);
    }
  });
  it("materiile fără rând propriu folosesc tariful implicit", () => {
    expect(pretSesiune("istorie", 30)).toBe(PRETURI_IMPLICITE.implicit["30"]!);
  });
  it("un tabel suprascris (secretul PROFESOR_AI_PRETURI) are prioritate", () => {
    expect(pretSesiune("matematica", 30, { ...PRETURI_IMPLICITE, matematica: { "30": 99 } })).toBe(
      99,
    );
  });
});
