/// <reference types="bun" />
import { describe, it, expect } from "bun:test";
import { BLOCAJE, BLOCAJE_MATERII, getBlocaj, blocajeForMaterie } from "./index";

describe("Harta Blocajelor — integritatea grafului", () => {
  it("are slug-uri unice pe tot site-ul", () => {
    const slugs = BLOCAJE.map((n) => n.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });
  it("toate prerechizitele și continuările există", () => {
    for (const n of BLOCAJE) {
      for (const s of [...n.lipsa, ...n.urmeaza])
        expect(getBlocaj(s), `${n.slug} → ${s}`).toBeDefined();
      expect(n.lipsa).not.toContain(n.slug);
    }
  });
  it("nu are cicluri în prerechizite", () => {
    const visiting = new Set<string>();
    const done = new Set<string>();
    const visit = (slug: string) => {
      if (done.has(slug)) return;
      expect(visiting.has(slug), `ciclu la ${slug}`).toBe(false);
      visiting.add(slug);
      for (const p of getBlocaj(slug)!.lipsa) visit(p);
      visiting.delete(slug);
      done.add(slug);
    };
    for (const n of BLOCAJE) visit(n.slug);
  });
  it("verificarea are 2–4 opțiuni distincte și un index corect valid", () => {
    for (const n of BLOCAJE) {
      const o = n.verificare.optiuni;
      expect(o.length, n.slug).toBeGreaterThanOrEqual(2);
      expect(o.length, n.slug).toBeLessThanOrEqual(4);
      expect(new Set(o).size, n.slug).toBe(o.length);
      expect(n.verificare.corect, n.slug).toBeGreaterThanOrEqual(0);
      expect(n.verificare.corect, n.slug).toBeLessThan(o.length);
    }
  });
  it("fiecare nod are conținut complet și clase valide", () => {
    for (const n of BLOCAJE) {
      expect(n.explicatie.length, n.slug).toBeGreaterThanOrEqual(2);
      expect(n.exemplu.pasi.length, n.slug).toBeGreaterThanOrEqual(2);
      expect(n.simptome.length, n.slug).toBeGreaterThanOrEqual(2);
      expect(n.clase.length, n.slug).toBeGreaterThan(0);
      for (const c of n.clase) expect(c >= 5 && c <= 12, `${n.slug} clasa ${c}`).toBe(true);
      expect(
        BLOCAJE_MATERII.some((m) => m.slug === n.materie),
        n.slug,
      ).toBe(true);
    }
  });
  it("fiecare materie listată are cel puțin 4 blocaje", () => {
    for (const m of BLOCAJE_MATERII)
      expect(blocajeForMaterie(m.slug).length, m.slug).toBeGreaterThanOrEqual(4);
  });
});
