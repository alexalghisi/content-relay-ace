import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { NIVEL_PRIMAR, profesoriPrimar } from "./profesori-primar";

describe("profesoriPrimar", () => {
  test("numără doar nivelul Primar", () => {
    expect(
      profesoriPrimar([
        { level: "Gimnaziu", count: 11 },
        { level: "Primar", count: 10 },
      ]),
    ).toBe(10);
  });
  test("fără nivel Primar → 0; fără date → null", () => {
    expect(profesoriPrimar([{ level: "Liceu", count: 4 }])).toBe(0);
    expect(profesoriPrimar([])).toBe(0);
    expect(profesoriPrimar(null)).toBeNull();
    expect(profesoriPrimar(undefined)).toBeNull();
  });
  test("eticheta e aceeași ca în formularul de profil al profesorului", () => {
    const form = readFileSync(new URL("../routes/profesor.index.tsx", import.meta.url), "utf8");
    expect(form).toContain(`"${NIVEL_PRIMAR}"`);
  });
});
