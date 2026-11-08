/// <reference types="bun" />
import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { agregatBac, descriereMaterieBac, titluMaterieBac } from "./bac-materie-seo";

const BAC = JSON.parse(readFileSync("src/lib/bac-originals.json", "utf8")) as {
  subject_slug: string;
  subject_name: string;
  year: number;
}[];
const ani = (prefix: string) => [
  ...new Set(BAC.filter((r) => r.subject_slug.startsWith(prefix)).map((r) => r.year)),
];

describe("SEO pentru /subiecte-bac/materie/$materie", () => {
  it("fizica: titlul răspunde la „subiecte bac fizica”, descrierea la „subiecte fizica bac”", () => {
    const t = titluMaterieBac("fizica", "Fizică", ani("fizica"));
    expect(t.toLowerCase()).toContain("subiecte bac fizica");
    expect(t.length).toBeLessThanOrEqual(60);
    const d = descriereMaterieBac({
      slug: "fizica",
      name: "Fizică",
      ani: ani("fizica"),
      profiluri: ["teoretic", "tehnologic"],
      areRezolvari: false,
    });
    expect(d.toLowerCase()).toContain("subiecte fizica bac");
    expect(d).not.toContain("rezolvări");
  });

  it("sociologie 2026 și profilurile de fizică au titluri cu anul și ≤ 60 de caractere", () => {
    expect(titluMaterieBac("sociologie", "Sociologie", ani("sociologie"))).toContain(
      "Subiecte BAC sociologie 2026",
    );
    for (const slug of ["fizica-teoretic", "fizica-tehnologic"]) {
      const t = titluMaterieBac(slug, "x", ani(slug));
      expect(t).toContain(`Subiecte BAC ${slug.replace("-", " ")} 2026`);
      expect(t.length).toBeLessThanOrEqual(60);
    }
  });

  it("fiecare materie din arhivă are titlu ≤ 60 și descriere ≤ 160", () => {
    const materii = new Map(BAC.map((r) => [r.subject_slug, r.subject_name]));
    for (const [slug, name] of materii) {
      expect(titluMaterieBac(slug, name, ani(slug)).length).toBeLessThanOrEqual(60);
      expect(
        descriereMaterieBac({ slug, name, ani: ani(slug), profiluri: [], areRezolvari: true })
          .length,
      ).toBeLessThanOrEqual(160);
    }
  });

  it("profilurile se leagă de pagina cu toate profilurile", () => {
    expect(agregatBac("fizica-teoretic")).toBe("fizica");
    expect(agregatBac("fizica")).toBe("fizica");
    expect(agregatBac("matematica-mate-info")).toBe("matematica");
    expect(agregatBac("sociologie")).toBeNull();
  });
});
