import { describe, expect, test } from "bun:test";
import { amestecaLectii, LECTII } from "./demo-repertoriu";

describe("Demonstrații Profesor AI fără repetare", () => {
  test("parcurge fiecare lecție exact o dată într-un ciclu", () => {
    const ordine = amestecaLectii(20, null);
    expect(ordine.length).toBe(20);
    expect(new Set(ordine).size).toBe(20);
    expect([...ordine].sort((a, b) => a - b)).toEqual(Array.from({ length: 20 }, (_, i) => i));
  });
  test("evită lecția precedentă chiar dacă amestecarea o pune prima", () => {
    expect(amestecaLectii(20, 0, () => 0.999)[0]).not.toBe(0);
  });
  test("nu depinde de existența a două lecții", () => {
    expect(amestecaLectii(1, 0)).toEqual([0]);
    expect(amestecaLectii(0, null)).toEqual([]);
  });
  test("repertoriul acoperă și materii diferite de matematică", () => {
    const materii = new Set(LECTII.map((lectie) => lectie.materie));
    for (const materie of ["Istorie", "Geografie", "Informatică", "Chimie", "Biologie", "Limba română", "Fizică", "Economie"]) {
      expect(materii.has(materie)).toBe(true);
    }
  });
  test("fiecare lecție pornește de la un subiect oficial și o începe profesoara", () => {
    for (const l of LECTII) {
      expect(l.sursa ?? "").toMatch(/20\d\d/);
      expect(l.replici[0].cine).toBe("prof");
    }
  });
});
describe("Lecțiile video cu voce", () => {
  test("fiecare lecție are fișier audio cu câte un interval pentru fiecare replică", async () => {
    const { AUDIO_DEMO } = await import("./demo-audio.generated");
    const { existsSync } = await import("node:fs");
    const { LECTII, cheieLectie } = await import("./demo-repertoriu");
    for (const lectie of LECTII) {
      const cheie = cheieLectie(lectie);
      expect(AUDIO_DEMO[cheie]?.replici.length).toBe(lectie.replici.length);
      expect(existsSync(`public/demo-lectii/${cheie}.mp3`)).toBe(true);
    }
    expect(new Set(LECTII.map(cheieLectie)).size).toBe(LECTII.length);
  });
  test("fiecare lecție pornește de la un subiect oficial și o începe profesoara", () => {
    for (const l of LECTII) {
      expect(l.sursa ?? "").toMatch(/20\d\d/);
      expect(l.replici[0].cine).toBe("prof");
    }
  });
});
