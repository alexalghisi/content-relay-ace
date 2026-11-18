import { describe, expect, test } from "bun:test";
import { cuDe, DESCRIERE_MAX, snippetMaterie, TITLU_MAX } from "./snippet-materie";

const fallback = {
  title: "Meditații matematică online sau acasă",
  description: "Text scris de mână.",
};
const pret = (median: number, n = 120) => ({ min: 15, median, max: 150, n });

describe("cuDe", () => {
  test("acordul numeralului", () => {
    expect(cuDe(1, "anunțuri")).toBe("1 anunțuri");
    expect(cuDe(19, "anunțuri")).toBe("19 anunțuri");
    expect(cuDe(20, "anunțuri")).toBe("20 de anunțuri");
    expect(cuDe(100, "anunțuri")).toBe("100 de anunțuri");
    expect(cuDe(101, "anunțuri")).toBe("101 anunțuri");
    expect(cuDe(119, "anunțuri")).toBe("119 anunțuri");
    expect(cuDe(120, "anunțuri")).toBe("120 de anunțuri");
    expect(cuDe(408, "anunțuri")).toBe("408 anunțuri");
    expect(cuDe(0, "anunțuri")).toBe("0 anunțuri");
  });
});

describe("snippetMaterie", () => {
  test("date reale suficiente: număr de anunțuri și tarif median în titlu", () => {
    const s = snippetMaterie(
      "matematică",
      { listings: 408, teachers: 32, price: pret(80) },
      fallback,
    );
    expect(s.title).toBe("Meditații matematică: 408 anunțuri, tarif median 80 lei/oră");
    expect(s.title.length).toBeLessThanOrEqual(TITLU_MAX);
    expect(s.description).toContain(
      "408 anunțuri de meditații matematică de la 32 de profesori, online sau acasă.",
    );
    expect(s.description).toContain("Tarife reale: 15–150 lei/oră, median 80.");
    expect(s.description.length).toBeLessThanOrEqual(DESCRIERE_MAX);
  });

  test("fără destule tarife reale nu afișează niciun preț", () => {
    const s = snippetMaterie(
      "germană",
      { listings: 30, teachers: 3, price: pret(150, 1) },
      fallback,
    );
    expect(s.title).toBe("Meditații germană: 30 de anunțuri, online sau acasă");
    expect(s.title).not.toContain("lei");
    expect(s.description).not.toContain("lei");
  });

  test("sub pragul de indexare sau fără date păstrează textul scris de mână", () => {
    expect(
      snippetMaterie("chimie", { listings: 2, teachers: 1, price: pret(80) }, fallback),
    ).toEqual(fallback);
    expect(snippetMaterie("chimie", null, fallback)).toEqual(fallback);
    expect(snippetMaterie("chimie", undefined, fallback)).toEqual(fallback);
  });

  test("un nume lung de materie scurtează titlul, nu îl taie la mijloc", () => {
    const s = snippetMaterie(
      "limba și literatura română",
      { listings: 130, teachers: 13, price: pret(70, 81) },
      fallback,
    );
    expect(s.title.length).toBeLessThanOrEqual(TITLU_MAX);
    expect(s.title.startsWith("Meditații limba și literatura română: 130 de anunțuri")).toBe(true);
  });

  test("numărul de profesori apare doar peste pragul minim", () => {
    const s = snippetMaterie("chimie", { listings: 20, teachers: 2, price: pret(85, 7) }, fallback);
    expect(s.description).not.toContain("profesori");
    expect(s.description.startsWith("20 de anunțuri de meditații chimie, online sau acasă")).toBe(
      true,
    );
  });

  test("descrierea rămâne sub limită și se termină cu o frază întreagă", () => {
    for (const n of [3, 25, 408, 12345]) {
      const s = snippetMaterie(
        "informatică",
        { listings: n, teachers: n, price: pret(100) },
        fallback,
      );
      expect(s.description.length).toBeLessThanOrEqual(DESCRIERE_MAX);
      expect(s.description.endsWith(".")).toBe(true);
      expect(s.title.length).toBeLessThanOrEqual(TITLU_MAX);
    }
  });
});
