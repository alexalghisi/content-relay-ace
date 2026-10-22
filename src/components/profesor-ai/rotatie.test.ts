import { describe, expect, test } from "bun:test";
import { urmatorulIndex } from "./rotatie";

describe("rotație demo Profesor AI", () => {
  test("nu repetă varianta de la vizita precedentă", () => {
    for (let p = 0; p < 5; p++) expect(urmatorulIndex(p, 5)).not.toBe(p);
  });
  test("parcurge toate variantele înainte de a reveni", () => {
    const vazute = new Set<number>();
    let p: number | null = 0;
    for (let i = 0; i < 5; i++) { p = urmatorulIndex(p, 5); vazute.add(p); }
    expect(vazute.size).toBe(5);
  });
  test("prima vizită alege o variantă validă", () => {
    const i = urmatorulIndex(null, 4);
    expect(i).toBeGreaterThanOrEqual(0);
    expect(i).toBeLessThan(4);
  });
});
