/// <reference types="bun" />
import { describe, expect, it } from "bun:test";
import { GHIDURI_LOCALE, getGhidLocal, ghiduriPentruOras } from "./ghiduri-locale";
import { SUBJECT_SEO_SLUGS } from "./subjects-seo";
import { CITIES } from "./cities";

describe("Ghiduri locale materie × oraș", () => {
  it("folosesc doar materii și orașe existente, fără duplicate", () => {
    const chei = new Set<string>();
    for (const g of GHIDURI_LOCALE) {
      expect(SUBJECT_SEO_SLUGS).toContain(g.materie);
      expect(CITIES.map((c) => c.slug)).toContain(g.oras);
      const k = `${g.materie}/${g.oras}`;
      expect(chei.has(k)).toBe(false);
      chei.add(k);
    }
    expect(getGhidLocal("matematica", "cluj-napoca")).toBeDefined();
    expect(getGhidLocal("matematica", "oras-inexistent")).toBeUndefined();
    expect(ghiduriPentruOras("cluj-napoca").length).toBeGreaterThanOrEqual(10);
  });

  it("au titluri și descrieri unice, de lungime potrivită pentru Google", () => {
    const titluri = new Set(GHIDURI_LOCALE.map((g) => g.title));
    expect(titluri.size).toBe(GHIDURI_LOCALE.length);
    for (const g of GHIDURI_LOCALE) {
      expect(g.title.length).toBeGreaterThan(30);
      expect(g.title.length).toBeLessThanOrEqual(95);
      expect(g.description.length).toBeGreaterThan(80);
      expect(g.description.length).toBeLessThanOrEqual(220);
      expect(g.title.toLowerCase()).toContain("meditații");
      expect(g.sectiuni.length).toBeGreaterThanOrEqual(2);
      expect(g.faq.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("nu conțin date de piață inventate (prețuri, număr de profesori, recenzii)", () => {
    const interzis =
      /\b\d+\s*(lei|ron)\b|\b\d+\s*profesori\b|\brecenzi|\bstele\b|\b\d+(\.\d+)?\s*\/\s*5\b/i;
    for (const g of GHIDURI_LOCALE) {
      const text = [
        g.title,
        g.description,
        g.intro,
        ...g.sectiuni.flatMap((s) => [s.titlu, ...s.paragrafe]),
        ...g.faq.flatMap((f) => [f.q, f.a]),
      ].join("\n");
      expect(text).not.toMatch(interzis);
    }
  });
});
