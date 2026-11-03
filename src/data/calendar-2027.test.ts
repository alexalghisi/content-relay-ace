import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { BAC_2027, EN_2027, zilePana } from "./calendar-2027";

describe("calendar examene 2027", () => {
  it("toate datele sunt ISO valide, în 2027 și în ordine cronologică", () => {
    for (const grupe of [BAC_2027, EN_2027]) {
      const toate = grupe.flatMap((g) => g.evenimente.map((e) => e.data));
      for (const d of toate) {
        expect(d).toMatch(/^2027-\d{2}-\d{2}$/);
        expect(Number.isNaN(Date.parse(d))).toBe(false);
      }
      expect([...toate].sort()).toEqual(toate);
    }
  });
  it("datele cheie anunțate de minister", () => {
    const bac = BAC_2027.flatMap((g) => g.evenimente);
    expect(bac.find((e) => e.ce.startsWith("Limba și literatura română") && e.data.startsWith("2027-06"))?.data).toBe("2027-06-14");
    expect(bac.find((e) => e.ce.startsWith("Rezultate finale"))?.data).toBe("2027-07-01");
    const en = EN_2027.flatMap((g) => g.evenimente);
    expect(en.find((e) => e.ce === "Matematică" && e.data.startsWith("2027-06"))?.data).toBe("2027-06-24");
  });
  it("zilePana nu devine negativ", () => {
    expect(zilePana("2027-06-14", new Date("2027-07-01T10:00:00Z"))).toBe(0);
    expect(zilePana("2027-06-14", new Date("2027-06-13T00:00:00+02:00"))).toBe(1);
  });
  it("paginile noi sunt în sitemap", () => {
    const sitemap = readFileSync("src/routes/sitemap[.]xml.ts", "utf8");
    expect(sitemap).toContain('"/calendar-bac-2027"');
    expect(sitemap).toContain('"/calendar-evaluare-nationala-2027"');
  });
});
