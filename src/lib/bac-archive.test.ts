import { describe, expect, it } from "bun:test";
import { BAC_MATH_YEARS, matchesBacSubject, sameBacPaper, mergeBacRows } from "./bac-archive";

describe("Original mathematics BAC archive", () => {
  it("covers the ten years 2017–2026 inclusive", () => {
    expect(BAC_MATH_YEARS).toEqual(Array.from({ length: 17 }, (_, i) => 2026 - i));
  });
  it("includes all four mathematics tracks without including other subjects", () => {
    for (const track of ["mate-info", "st-nat", "tehnologic", "pedagogic"]) {
      expect(matchesBacSubject(`matematica-${track}`, "matematica")).toBe(true);
    }
    expect(matchesBacSubject("fizica", "matematica")).toBe(false);
    expect(matchesBacSubject("matematica-st-nat", "matematica-mate-info")).toBe(false);
  });
  it("never pairs the answer key from a different mathematics track", () => {
    const paper = {
      subject_slug: "matematica-mate-info",
      year: 2026,
      session: "iunie-iulie",
      variant: "1",
      profil: "mate-info",
    };
    expect(sameBacPaper(paper, { ...paper })).toBe(true);
    expect(sameBacPaper(paper, { ...paper, profil: "tehnologic" })).toBe(false);
    expect(sameBacPaper(paper, { ...paper, subject_slug: "matematica-st-nat" })).toBe(false);
    expect(sameBacPaper(paper, { ...paper, variant: "2" })).toBe(false);
  });
  it("keeps one document per descriptive slug when merging original PDFs", () => {
    expect(
      mergeBacRows(
        [{ slug: "matematica-2026", source_url: "old" }],
        [{ slug: "matematica-2026", source_url: "original" }],
      ),
    ).toEqual([{ slug: "matematica-2026", source_url: "original" }]);
  });
});
