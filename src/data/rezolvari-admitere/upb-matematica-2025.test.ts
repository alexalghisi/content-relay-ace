import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { UPB_MATEMATICA_2025 as r } from "./upb-matematica-2025";
import { TOATE_REZOLVARILE_ADMITERE, rezolvareAdmitere } from "./index";

const ROOT = join(import.meta.dir, "..", "..", "..");

describe("UPB matematică 2025 (iulie), Varianta S", () => {
  test("este înregistrată și publicată", () => {
    expect(TOATE_REZOLVARILE_ADMITERE).toContain(r);
    expect(rezolvareAdmitere("upb", "matematica", 2025)).toBe(r);
  });

  test("10 itemi a câte 9 puncte; secțiunile și totalul se adună corect", () => {
    const itemi = r.sectiuni.flatMap((s) => s.itemi);
    expect(itemi.length).toBe(10);
    for (const it of itemi) expect(it.puncte).toBe(9);
    for (const s of r.sectiuni) expect(s.itemi.reduce((a, it) => a + it.puncte, 0)).toBe(s.puncte);
    expect(r.sectiuni.reduce((a, s) => a + s.puncte, 0)).toBe(r.punctajTotal);
    expect(r.punctajTotal).toBe(90);
  });

  test("id-uri unice și valide", () => {
    const ids = r.sectiuni.flatMap((s) => s.itemi.map((it) => it.id));
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9-]{1,20}$/);
  });

  test("fiecare răspuns numește o variantă a)–f)", () => {
    for (const it of r.sectiuni.flatMap((s) => s.itemi)) expect(it.raspuns).toMatch(/^\*\*[a-f]\) /);
  });

  test("„publicat” cere verificări PASS cu script existent", () => {
    expect(r.status).toBe("publicat");
    expect(r.verificari.length).toBeGreaterThan(0);
    for (const v of r.verificari) {
      expect(v.rezultat).toBe("PASS");
      const script = v.comanda.split(" ").find((p) => p.startsWith("scripts/"));
      expect(script && existsSync(join(ROOT, script))).toBe(true);
    }
  });

  test("câmpurile de identificare", () => {
    expect(r.examen).toBe("admitere");
    expect(r.varianta).toBeNull();
    expect(r.proba).toContain("Varianta S");
    expect(r.documente.subiect).toBe("upb/matematica/2025-iulie-subiect.pdf");
  });
});
