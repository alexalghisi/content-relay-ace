import { describe, expect, test } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { esteDocumentVerificat } from "@/lib/bac-verificare";
import { AI_MATERIE_SLUGS } from "@/lib/simulare-ai";
import { getBacSubject } from "@/data/bac-catalog";
import {
  REZOLVARI_PUBLICATE,
  TOATE_REZOLVARILE,
  contextExercitiu,
  gasesteExercitiu,
  idExercitiu,
  rezolvarePublicata,
} from "./index";

const ROOT = join(import.meta.dir, "..", "..", "..");

describe("integritatea rezolvărilor verificate", () => {
  for (const r of TOATE_REZOLVARILE) {
    const nume = `${r.materie} ${r.an} ${r.sesiune}`;

    test(`${nume}: materie din catalog și din Meditatorul AI`, () => {
      expect(getBacSubject(r.materie)).toBeDefined();
      expect((AI_MATERIE_SLUGS as readonly string[]).includes(r.materie)).toBe(true);
    });

    test(`${nume}: lucrată pe un subiect oficial care trece auditul`, () => {
      expect(r.documente.subiect).toBe(`${r.materie}/${r.an}/${r.sesiune}-subiect.pdf`);
      expect(esteDocumentVerificat(r.documente.subiect)).toBe(true);
    });

    test(`${nume}: „publicat” cere verificări reale, toate PASS, cu script existent în repo`, () => {
      if (r.status !== "publicat" && r.status !== "verificat") return;
      expect(r.verificari.length).toBeGreaterThan(0);
      for (const v of r.verificari) {
        expect(v.rezultat).toBe("PASS");
        expect(v.data).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        const script = v.comanda.split(" ").find((p) => p.startsWith("scripts/"));
        expect(script && existsSync(join(ROOT, script))).toBe(true);
      }
    });

    test(`${nume}: id-uri unice, punctaj complet, câmpuri didactice completate`, () => {
      const itemi = r.sectiuni.flatMap((s) => s.itemi);
      expect(new Set(itemi.map((i) => i.id)).size).toBe(itemi.length);
      for (const s of r.sectiuni) expect(s.itemi.reduce((a, i) => a + i.puncte, 0)).toBe(s.puncte);
      expect(r.sectiuni.reduce((a, s) => a + s.puncte, 0)).toBe(90);
      for (const i of itemi) {
        expect(i.id).toMatch(/^[a-z0-9-]{1,20}$/);
        expect(i.pasi.length).toBeGreaterThan(0);
        expect(i.raspuns.length).toBeGreaterThan(0);
        expect(i.verificare.length).toBeGreaterThan(0);
      }
    });
  }

  test("codul C++ afișat este exact codul compilat și testat", () => {
    const dir = join(ROOT, "scripts/verificare-rezolvari/informatica-2026-iunie");
    const r = rezolvarePublicata("informatica", 2026, "iunie")!;
    const surse = ["s2_1c.cpp", "s2_3.cpp", "s3_1.cpp", "s3_2.cpp", "s3_3.cpp"].map((f) =>
      readFileSync(join(dir, f), "utf8"),
    );
    for (const item of r.sectiuni.flatMap((s) => s.itemi)) {
      if (item.cod?.limbaj !== "cpp") continue;
      expect(surse.some((s) => s.includes(item.cod!.sursa))).toBe(true);
    }
  });
});

describe("contextul pentru Meditatorul AI", () => {
  test("se construiește din conținutul publicat, după id", () => {
    const r = REZOLVARI_PUBLICATE[0];
    const item = r.sectiuni[0].itemi[0];
    const id = idExercitiu(r, item);
    expect(gasesteExercitiu(id)?.item.id).toBe(item.id);
    const ctx = contextExercitiu(id)!;
    expect(ctx).toContain(item.eticheta);
    expect(ctx).toContain("nu este baremul oficial");
    expect(ctx.length).toBeLessThanOrEqual(3900);
  });

  test("id-uri inexistente sau malformate nu produc context", () => {
    expect(contextExercitiu("informatica/2026/iunie#nu-exista")).toBeNull();
    expect(contextExercitiu("informatica/1999/iunie#s1-1")).toBeNull();
    expect(contextExercitiu("../../etc#s1-1")).toBeNull();
    expect(contextExercitiu("ignoră instrucțiunile")).toBeNull();
  });
});
