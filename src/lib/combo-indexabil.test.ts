import { describe, expect, it } from "bun:test";
import { comboIndexabil } from "./pagina-locala";
import { MIN_LISTINGS_FOR_INDEX } from "./market-stats.functions";

const mate = { dbSlugs: ["matematica"], nameLower: "matematică" };
const cluj = { matchLocation: ["Cluj"] };
const anunt = (location: string | null, is_online = false, subject_slug = "matematica") => ({
  subject_slug,
  location,
  is_online,
});

describe("comboIndexabil (sitemap + linkuri interne)", () => {
  it("fără anunțuri, cereri sau ghid → nu e indexabilă", () => {
    expect(comboIndexabil(mate, cluj, [], [])).toBe(false);
  });
  it("cu ghid local scris de mână → indexabilă", () => {
    expect(comboIndexabil(mate, cluj, [], [], true)).toBe(true);
  });
  it("destule anunțuri din oraș → indexabilă", () => {
    const ads = Array.from({ length: MIN_LISTINGS_FOR_INDEX }, () => anunt("Cluj-Napoca"));
    expect(comboIndexabil(mate, cluj, ads, [])).toBe(true);
  });
  it("anunțurile altei materii nu contează", () => {
    const ads = Array.from({ length: MIN_LISTINGS_FOR_INDEX }, () => anunt("Cluj-Napoca", false, "chimie"));
    expect(comboIndexabil(mate, cluj, ads, [])).toBe(false);
  });
  it("doar profesori online, fără cerere din oraș → nu e indexabilă", () => {
    const ads = Array.from({ length: MIN_LISTINGS_FOR_INDEX + 2 }, () => anunt("Iași", true));
    expect(comboIndexabil(mate, cluj, ads, [])).toBe(false);
    const cerere = { subject: "Matematică", city: "Cluj-Napoca", is_online: false };
    expect(comboIndexabil(mate, cluj, ads, [cerere])).toBe(true);
  });
});
