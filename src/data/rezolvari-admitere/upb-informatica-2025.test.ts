import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { UPB_INFORMATICA_2025 as r } from "./upb-informatica-2025";
import { rezolvareAdmitere } from "./index";

const ROOT = join(import.meta.dir, "..", "..", "..");
const DIR = "scripts/verificare-rezolvari/admitere-upb-informatica-2025";
const SURSE_TESTATE = [
  "q1.cpp",
  "q2.cpp",
  "q3.cpp",
  "q4.cpp",
  "q5.cpp",
  "q6.cpp",
  "q7.cpp",
  "q8.cpp",
  "q9.cpp",
  "q10/main.cpp",
];

describe("admitere UPB Informatică 2025 (iulie, Varianta S)", () => {
  const itemi = r.sectiuni.flatMap((s) => s.itemi);

  test("este înregistrată și publicată", () => {
    expect(rezolvareAdmitere("upb", "informatica", 2025)).toBe(r);
    expect(r.examen).toBe("admitere");
    expect(r.varianta).toBeNull();
  });

  test("punctaj: secțiunea = suma itemilor, total = suma secțiunilor = 10 × 9 p", () => {
    for (const s of r.sectiuni) expect(s.itemi.reduce((a, i) => a + i.puncte, 0)).toBe(s.puncte);
    expect(r.sectiuni.reduce((a, s) => a + s.puncte, 0)).toBe(r.punctajTotal);
    expect(itemi.length).toBe(10);
    expect(r.punctajTotal).toBe(90);
  });

  test("id-uri unice și valide, câmpuri didactice completate", () => {
    expect(new Set(itemi.map((i) => i.id)).size).toBe(itemi.length);
    for (const i of itemi) {
      expect(i.id).toMatch(/^[a-z0-9-]{1,20}$/);
      expect(i.pasi.length).toBeGreaterThan(0);
      expect(i.raspuns.length).toBeGreaterThan(0);
      expect(i.verificare.length).toBeGreaterThan(0);
    }
  });

  test("„publicat” cere verificări PASS cu script existent", () => {
    expect(r.status).toBe("publicat");
    expect(r.verificari.length).toBeGreaterThan(0);
    for (const v of r.verificari) {
      expect(v.rezultat).toBe("PASS");
      expect(v.data).toBe("2026-10-23");
      const script = v.comanda.split(" ").find((p) => p.startsWith("scripts/"));
      expect(script && existsSync(join(ROOT, script))).toBe(true);
    }
  });

  test("codul C++ afișat este exact codul compilat și testat", () => {
    const surse = SURSE_TESTATE.map((f) => readFileSync(join(ROOT, DIR, f), "utf8"));
    const itemiCpp = itemi.filter((i) => i.cod?.limbaj === "cpp");
    expect(itemiCpp.length).toBeGreaterThan(0);
    for (const item of itemiCpp) expect(surse.some((s) => s.includes(item.cod!.sursa))).toBe(true);
  });
});
