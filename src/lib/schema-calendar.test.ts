import { describe, expect, it } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

// Search Console semnala „Event” fără description/offers/performer/image. Paginile de calendar
// folosesc Article cu toate câmpurile recomandate; Event nu mai apare nicăieri pe site.
describe("date structurate pe paginile de calendar", () => {
  for (const slug of ["calendar-bac-2027", "calendar-evaluare-nationala-2027"]) {
    const src = readFileSync(`src/routes/${slug}.tsx`, "utf8");
    it(`${slug}: Article complet, fără Event`, () => {
      expect(src).not.toContain('"@type": "Event"');
      expect(src).toContain('"@type": "Article"');
      for (const camp of ["headline:", "description:", "image:", "datePublished:", "dateModified:", "author:", "publisher:"]) expect(src).toContain(camp);
      expect(existsSync(`public/og/calendar/${slug}.jpg`)).toBe(true);
    });
  }
});
