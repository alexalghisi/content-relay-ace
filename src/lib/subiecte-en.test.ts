import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// import.meta.glob nu există în bun: verificăm direct fișierele de pe disc.
const src = readFileSync(join(import.meta.dir, "subiecte-en.ts"), "utf8");
const slugs = [...src.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const pdfs = [...src.matchAll(/"(\/evaluare-nationala\/[^"]+\.pdf)"/g)].map((m) => m[1]);
const root = join(import.meta.dir, "..", "..");

describe("subiecte Evaluare Națională", () => {
  test("fiecare lucrare are rezolvare scrisă", () => {
    expect(slugs.length).toBe(4);
    for (const s of slugs) {
      const md = join(root, "src/content/rezolvari-en", `${s}.md`);
      expect(existsSync(md)).toBe(true);
      expect(readFileSync(md, "utf8").length).toBeGreaterThan(3000);
    }
  });

  test("PDF-urile oficiale (subiect + barem) există în public/", () => {
    expect(pdfs.length).toBe(8);
    for (const p of pdfs) {
      const buf = readFileSync(join(root, "public", p));
      expect(buf.subarray(0, 4).toString()).toBe("%PDF");
    }
  });

  test("rezolvările la matematică au răspunsurile din baremul oficial", () => {
    const m27 = readFileSync(
      join(root, "src/content/rezolvari-en/model-2027-matematica.md"),
      "utf8",
    );
    expect(m27).toContain("Subiectul I — B, C, B, C, C, A");
    expect(m27).toContain("Subiectul al II-lea — D, C, B, C, B, A");
    const m26 = readFileSync(join(root, "src/content/rezolvari-en/2026-matematica.md"), "utf8");
    expect(m26).toContain("Subiectul I — c, c, d, c, b, a");
    expect(m26).toContain("Subiectul al II-lea — c, b, d, b, b, a");
  });
});
