/// <reference types="bun" />
import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { CITIES } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import {
  descriereCombo,
  descriereOras,
  inLocalitate,
  necesitaDateNationale,
  paginaLocalaIndexabila,
  potrivesteMaterie,
  titluCombo,
  titluOras,
} from "./pagina-locala";

const PRET = { min: 40, median: 90, max: 250, n: 14 };

describe("paginaLocalaIndexabila", () => {
  it("o pagină complet goală rămâne noindex", () => {
    expect(paginaLocalaIndexabila({ localAds: 0, onlineAds: 0, cityRequests: 0 })).toBe(false);
  });
  it("profesorii online singuri (identici în toate orașele) nu fac pagina indexabilă", () => {
    expect(paginaLocalaIndexabila({ localAds: 0, onlineAds: 9, cityRequests: 0 })).toBe(false);
  });
  it("profesori online reali + o cerere reală din oraș o fac indexabilă", () => {
    expect(paginaLocalaIndexabila({ localAds: 0, onlineAds: 3, cityRequests: 1 })).toBe(true);
    expect(paginaLocalaIndexabila({ localAds: 1, onlineAds: 2, cityRequests: 1 })).toBe(true);
    expect(paginaLocalaIndexabila({ localAds: 0, onlineAds: 2, cityRequests: 4 })).toBe(false);
  });
  it("3 anunțuri locale sau un ghid scris de mână sunt suficiente", () => {
    expect(paginaLocalaIndexabila({ localAds: 3, onlineAds: 0, cityRequests: 0 })).toBe(true);
    expect(paginaLocalaIndexabila({ localAds: 0, onlineAds: 0, cityRequests: 0, ghid: true })).toBe(
      true,
    );
  });
  it("sitemap-ul folosește aceeași regulă ca paginile", () => {
    const sm = readFileSync("src/routes/sitemap[.]xml.ts", "utf8");
    expect(sm.match(/paginaLocalaIndexabila\(/g)?.length).toBeGreaterThanOrEqual(2);
    expect(readFileSync("src/routes/meditatii.$materie.$oras.tsx", "utf8")).toContain(
      "paginaLocalaIndexabila(",
    );
    expect(readFileSync("src/routes/meditatii-in.$oras.tsx", "utf8")).toContain(
      "paginaLocalaIndexabila(",
    );
  });
});

describe("necesitaDateNationale", () => {
  it("completează cu date naționale când orașul are sub 3 tarife sau cereri", () => {
    expect(necesitaDateNationale({ price: null, recentRequests: [1, 2, 3] })).toBe(true);
    expect(necesitaDateNationale({ price: { n: 2 }, recentRequests: [1, 2, 3] })).toBe(true);
    expect(necesitaDateNationale({ price: { n: 5 }, recentRequests: [1] })).toBe(true);
    expect(necesitaDateNationale({ price: { n: 5 }, recentRequests: [1, 2, 3] })).toBe(false);
  });
});

describe("potrivire materie / oraș (aceeași în statistici și sitemap)", () => {
  it("ignoră diacriticele și majusculele", () => {
    expect(potrivesteMaterie("Matematică", "matematică", ["matematica"])).toBe(true);
    expect(potrivesteMaterie("Limba română", "română", ["romana", "limba-romana"])).toBe(true);
    expect(potrivesteMaterie("Chimie", "fizică", ["fizica"])).toBe(false);
    expect(potrivesteMaterie(null, "fizică", ["fizica"])).toBe(false);
    expect(inLocalitate("Timișoara, Timiș", ["timi"])).toBe(true);
    expect(inLocalitate("Brașov", ["brasov"])).toBe(true);
    expect(inLocalitate("Arad", ["timi"])).toBe(false);
    expect(inLocalitate("oriunde", [])).toBe(true);
  });
});

describe("title și description pentru paginile locale", () => {
  it("titlurile combo conțin căutarea exactă fără diacritice și au ≤ 60 de caractere", () => {
    expect(titluCombo("matematică", "Timișoara", 2026)).toBe(
      "Meditatii matematica Timisoara 2026 — online sau acasă",
    );
    for (const s of SUBJECTS_SEO)
      for (const c of CITIES) {
        const t = titluCombo(s.nameLower, c.name, 2026);
        expect(t.length).toBeLessThanOrEqual(60);
        expect(t.startsWith("Meditatii ")).toBe(true);
      }
  });

  it("descrierile au 140–160 de caractere în orice combinație și nu promit profesori locali inexistenți", () => {
    for (const s of SUBJECTS_SEO)
      for (const c of CITIES)
        for (const pret of [null, PRET])
          for (const profesoriLocali of [false, true]) {
            const d = descriereCombo({
              materie: s.nameLower,
              oras: c.name,
              pret,
              pretNational: !profesoriLocali,
              profesoriLocali,
            });
            expect(d.length).toBeGreaterThanOrEqual(140);
            expect(d.length).toBeLessThanOrEqual(160);
            if (!profesoriLocali) expect(d).not.toContain(`profesori din ${c.name}`);
          }
  });

  it("un tarif național e marcat ca atare, nu prezentat ca tarif al orașului", () => {
    const d = descriereCombo({
      materie: "chimie",
      oras: "Deva",
      pret: PRET,
      pretNational: true,
      profesoriLocali: false,
    });
    expect(d).toMatch(/90 lei\/oră \((național|RO)\)/);
  });

  it("paginile de oraș au title ≤ 60 și description 140–160", () => {
    for (const c of CITIES) {
      expect(titluOras(c.name, 2026).length).toBeLessThanOrEqual(60);
      for (const pret of [null, PRET])
        for (const profesoriLocali of [false, true]) {
          const d = descriereOras({ oras: c.name, pret, profesoriLocali });
          expect(d.length).toBeGreaterThanOrEqual(140);
          expect(d.length).toBeLessThanOrEqual(160);
        }
    }
  });
});
