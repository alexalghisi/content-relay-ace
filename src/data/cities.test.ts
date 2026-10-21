/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { CITIES, citiesInCounty, getCityBySlug } from "./cities";

describe("Orașe SEO", () => {
  test("slug-uri unice, URL-safe", () => {
    const slugs = CITIES.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z]+(-[a-z]+)*$/);
  });
  test("nume unice și potrivire pe locație în litere mici", () => {
    expect(new Set(CITIES.map((c) => c.name)).size).toBe(CITIES.length);
    for (const c of CITIES) {
      expect(c.matchLocation.length).toBeGreaterThan(0);
      for (const m of c.matchLocation) expect(m).toBe(m.toLowerCase());
    }
  });
  test("acoperă toate cele 41 de reședințe de județ + București", () => {
    const resedinte = [
      "alba-iulia",
      "arad",
      "pitesti",
      "bacau",
      "oradea",
      "bistrita",
      "botosani",
      "braila",
      "brasov",
      "bucuresti",
      "buzau",
      "calarasi",
      "resita",
      "cluj-napoca",
      "constanta",
      "sfantu-gheorghe",
      "targoviste",
      "craiova",
      "galati",
      "giurgiu",
      "targu-jiu",
      "miercurea-ciuc",
      "deva",
      "slobozia",
      "iasi",
      "baia-mare",
      "drobeta-turnu-severin",
      "targu-mures",
      "piatra-neamt",
      "slatina",
      "ploiesti",
      "zalau",
      "satu-mare",
      "sibiu",
      "suceava",
      "alexandria",
      "timisoara",
      "tulcea",
      "vaslui",
      "ramnicu-valcea",
      "focsani",
    ];
    expect(resedinte.length).toBe(41);
    for (const r of resedinte) expect(getCityBySlug(r)).toBeDefined();
  });
  test("„Roman” nu se potrivește cu „România” sau „română”", () => {
    const roman = getCityBySlug("roman")!;
    for (const loc of ["Cluj-Napoca, România", "Online - limba română"]) {
      expect(roman.matchLocation.some((m) => loc.toLowerCase().includes(m))).toBe(false);
    }
  });
  test("orașele din același județ exclud orașul curent", () => {
    const cluj = getCityBySlug("cluj-napoca")!;
    const near = citiesInCounty(cluj).map((c) => c.slug);
    expect(near).toContain("turda");
    expect(near).not.toContain("cluj-napoca");
  });
});
