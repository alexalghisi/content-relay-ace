import { describe, expect, test } from "bun:test";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { BAC_ORIGINALS, SITE_URL, absolutePdfUrl } from "@/lib/bac-originals";
import { bacPaperKey, bacPaperPath, bacRezolvarePath } from "@/lib/bac-paths";
import { bacSitemapEntries, bacSitemapXml } from "@/lib/bac-sitemap";

const ROOT = join(import.meta.dir, "..", "..");
const REZ_DIR = join(ROOT, "src/content/rezolvari-bac");
const REZ_KEYS = new Set(readdirSync(REZ_DIR).map((f) => f.replace(/\.md$/, "")));
const hasRez = (k: string) => REZ_KEYS.has(k);

/** Every file added by the /subiecte-bac port. */
const PORTED_FILES = [
  "src/lib/bac-originals.ts",
  "src/lib/bac-originals.json",
  "src/lib/bac-paths.ts",
  "src/lib/bac-archive.ts",
  "src/lib/bac-rezolvari.ts",
  "src/lib/bac-rezolvari-index.ts",
  "src/lib/bac-lucrare.functions.ts",
  "src/lib/subiecte-bac.functions.ts",
  "src/lib/bac-sitemap.ts",
  "src/components/bac-lucrare-actions.tsx",
  "src/components/bac-paper-card.tsx",
  "src/components/bac-tabel-an.tsx",
  "src/components/bac-rezolvare-markdown.tsx",
  "src/components/bac-meditatii-cta.tsx",
  "src/routes/subiecte-bac.tsx",
  "src/routes/subiecte-bac.$an.$materie.$lucrare.index.tsx",
  "src/routes/subiecte-bac.$an.$materie.$lucrare.rezolvare.tsx",
  "src/routes/subiecte-bac.an.$an.tsx",
  "src/routes/subiecte-bac.materie.$materie.tsx",
  "src/routes/subiecte-bac.lucrare.$slug.tsx",
  "src/routes/subiecte-bac.matematica.tsx",
  "src/routes/sitemap-subiecte-bac[.]xml.ts",
  "e2e/subiecte-bac.spec.ts",
];

describe("/subiecte-bac archive", () => {
  test("ships 506 written solutions, each matching a bundled paper", () => {
    expect(REZ_KEYS.size).toBe(506);
    const paperKeys = new Set(BAC_ORIGINALS.map((r) => bacPaperKey(r)));
    for (const k of REZ_KEYS) expect(paperKeys.has(k)).toBe(true);
  });

  test("every BAC_ORIGINALS pdf_url is a self-hosted file under public/", () => {
    const missing = BAC_ORIGINALS.filter((r) => r.pdf_url).filter((r) => {
      const p = join(ROOT, "public", r.pdf_url!);
      return !r.pdf_url!.startsWith("/bac/") || !existsSync(p) || statSync(p).size === 0;
    });
    expect(missing.map((r) => r.pdf_url)).toEqual([]);
  });

  test("absolute URLs use meditatiidirect.ro", () => {
    expect(SITE_URL).toBe("https://meditatiidirect.ro");
    expect(absolutePdfUrl("/bac/2026/x.pdf")).toBe("https://meditatiidirect.ro/bac/2026/x.pdf");
  });

  test("sitemap lists the hub, subject and year hubs, a paper and a rezolvare URL", () => {
    const entries = bacSitemapEntries(hasRez);
    const paths = new Set(entries.map((e) => e.path));
    expect(paths.size).toBe(entries.length);
    expect(paths.has("/subiecte-bac")).toBe(true);
    expect(paths.has("/subiecte-bac/materie/matematica")).toBe(true);
    expect(paths.has("/subiecte-bac/an/2026")).toBe(true);

    const solved = BAC_ORIGINALS.find((r) => r.pdf_url && hasRez(bacPaperKey(r)))!;
    expect(paths.has(bacPaperPath(solved))).toBe(true);
    expect(paths.has(bacRezolvarePath(solved))).toBe(true);

    // Rezolvare pages without a written solution redirect, so they are never listed.
    const rezolvari = entries.filter((e) => e.path.endsWith("/rezolvare"));
    expect(rezolvari.length).toBe(REZ_KEYS.size);

    const xml = bacSitemapXml(entries);
    expect(xml).toContain(`<loc>https://meditatiidirect.ro${bacRezolvarePath(solved)}</loc>`);
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
  });

  test("robots.txt references the BAC sitemap", () => {
    const robots = readFileSync(join(ROOT, "public/robots.txt"), "utf8");
    expect(robots).toContain("Sitemap: https://meditatiidirect.ro/sitemap-subiecte-bac.xml");
  });

  test("no ported file mentions the source site or its builder", () => {
    // Built from parts so this test file itself stays clean.
    const banned = ["grile" + "admitere", "lov" + "able"];
    const files = [
      ...PORTED_FILES,
      "src/lib/subiecte-bac.test.ts",
      "src/lib/bac-archive.test.ts",
      ...[...REZ_KEYS].map((k) => `src/content/rezolvari-bac/${k}.md`),
    ];
    const offenders = files.filter((f) => {
      const text = readFileSync(join(ROOT, f), "utf8").toLowerCase();
      return banned.some((b) => text.includes(b));
    });
    expect(offenders).toEqual([]);
  });
});
