/// <reference types="bun" />
// (a) Fără prețuri inventate în paginile SEO; (b) /meditatii-{oras} → 301 /meditatii-in/{oras};
// (c) sitemap-ul nu listează URL-uri redirecționate.
import { describe, expect, it, mock } from "bun:test";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { CITIES, getCityBySlug } from "@/data/cities";
import { ORASE_HUB } from "@/data/orase-hub";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { CITY_REDIRECTS, consolidatedTarget } from "./seo-redirects";
import { MIN_PRICE_SAMPLES, pretAfisabil } from "./market-stats.functions";
import { rutaExista } from "./rute-test-utils";

const surse = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return surse(p);
    return /\.tsx?$/.test(f) && !f.includes(".test.") && !f.endsWith(".gen.ts") ? [p] : [];
  });

// Exemple explicite de calcul / exerciții de matematică, nu prețuri de piață.
const PERMISE = new Set([
  "src/routes/tutoriale.tsx", // „Exemplu de calcul, nu tarife de pe platformă”
  "src/lib/request-validation.ts", // limita de validare a bugetului
]);
const SEO = [
  ...surse("src/routes"),
  ...surse("src/data"),
  ...surse("src/components"),
  ...surse("src/lib"),
]
  .filter((f) => !f.startsWith("src/data/blocaje") && !f.includes("profesor-ai"))
  .filter((f) => !PERMISE.has(f));

describe("(a) prețuri doar din date reale", () => {
  it("nicio pagină SEO nu are sume în lei scrise de mână („50–150 lei”, „de la 30 lei/oră”)", () => {
    const suma = /\b\d{2,4}\s*(?:[–-]\s*\d{2,4}\s*)?(?:de\s+)?(?:lei|RON)\b/;
    const gasite = SEO.flatMap((f) => {
      const m = suma.exec(readFileSync(f, "utf8"));
      return m ? [`${f}: ${m[0]}`] : [];
    });
    expect(gasite).toEqual([]);
  });

  it("JSON-LD AggregateOffer nu are valori constante (lowPrice/highPrice/offerCount)", () => {
    const constant = /(lowPrice|highPrice|offerCount|price)\s*["']?\s*:\s*["'`]?\d/;
    const gasite = SEO.filter((f) => constant.test(readFileSync(f, "utf8")));
    // marketplace-mock nu e randat cu prețuri (doar POPULAR_SUBJECTS e folosit, fără câmpul price).
    expect(gasite.filter((f) => f !== "src/data/marketplace-mock.ts")).toEqual([]);
  });

  it("câmpurile de preț inventate și multiplicatorii pe oraș au dispărut", () => {
    const gasite = surse("src").filter((f) =>
      /\b(pretMin|pretMax|pretMediu|priceIndex)\b/.test(readFileSync(f, "utf8")),
    );
    expect(gasite).toEqual([]);
    for (const s of SUBJECTS_SEO)
      expect(Object.keys(s).sort()).toEqual(["dbSlugs", "name", "nameLower", "slug"]);
    for (const c of CITIES) expect("priceIndex" in c).toBe(false);
  });

  it("paginile de prețuri iau cifrele din funcțiile de statistici reale", () => {
    const index = readFileSync("src/routes/preturi-meditatii.index.tsx", "utf8");
    expect(index).toContain("getSubjectPriceTable");
    expect(index).toContain("pretAfisabil");
    expect(index).not.toMatch(/Încă nu avem|Poți fi primul/);
    const splat = readFileSync("src/routes/$.tsx", "utf8");
    expect(splat).toContain("getComboStats");
    expect(splat).toContain("pretAfisabil");
  });

  it("un interval de preț apare doar din destule tarife reale", () => {
    expect(MIN_PRICE_SAMPLES).toBe(3);
    expect(pretAfisabil(null)).toBeNull();
    expect(pretAfisabil({ min: 60, median: 60, max: 60, n: 1 })).toBeNull();
    expect(pretAfisabil({ min: 50, median: 80, max: 120, n: 3 })).toEqual({
      min: 50,
      median: 80,
      max: 120,
      n: 3,
    });
  });
});

describe("(b) o singură pagină canonică pe oraș", () => {
  it("fiecare /meditatii-{oras} face 301 către /meditatii-in/{oras-slug} existent", () => {
    expect(Object.keys(CITY_REDIRECTS).length).toBe(ORASE_HUB.length);
    for (const o of ORASE_HUB) {
      const vechi = `/meditatii-${o.path}`;
      const tinta = `/meditatii-in/${o.citySlug}`;
      expect(consolidatedTarget(vechi)).toBe(tinta);
      expect(getCityBySlug(o.citySlug)).toBeTruthy();
      expect(consolidatedTarget(tinta)).toBeNull(); // fără lanțuri de redirect
      expect(rutaExista(tinta)).toBe(true);
      expect(rutaExista(vechi)).toBe(false); // ruta veche a fost ștearsă
    }
  });

  it("cazuri cunoscute: Cluj, București, Bacău (oraș, nu BAC)", () => {
    expect(consolidatedTarget("/meditatii-cluj")).toBe("/meditatii-in/cluj-napoca");
    expect(consolidatedTarget("/meditatii-bucuresti")).toBe("/meditatii-in/bucuresti");
    expect(consolidatedTarget("/meditatii-timisoara")).toBe("/meditatii-in/timisoara");
    expect(consolidatedTarget("/meditatii-iasi")).toBe("/meditatii-in/iasi");
    expect(consolidatedTarget("/meditatii-bacau")).toBe("/meditatii-in/bacau");
    for (const p of [
      "/meditatii-bac",
      "/meditatii-bucuresti-sectoare",
      "/meditatii-matematica",
      "/meditatii-in/bacau",
    ])
      expect(consolidatedTarget(p)).toBeNull();
  });

  it("nicio rută /meditatii-{oras} nouă nu mai dublează pagina orașului", () => {
    const orase = new Set(CITIES.map((c) => c.slug));
    const dubluri = readdirSync("src/routes")
      .map((f) => /^meditatii-([a-z-]+)\.tsx$/.exec(f)?.[1])
      .filter((x): x is string => !!x && (orase.has(x) || x === "cluj"));
    expect(dubluri).toEqual([]);
  });

  it("301 se aplică în server.ts și în ruta catch-all", () => {
    const server = readFileSync("src/server.ts", "utf8");
    expect(server).toContain("consolidatedTarget(url.pathname)");
    expect(server).toContain("Response.redirect(url.toString(), 301)");
    const splat = readFileSync("src/routes/$.tsx", "utf8");
    expect(splat).toMatch(/consolidatedTarget\([^)]*\)[\s\S]{0,120}statusCode: 301/);
  });

  it("niciun link intern nu mai duce la o pagină de oraș redirecționată", () => {
    const vechi = Object.keys(CITY_REDIRECTS).map((p) => p.replace(/[-/]/g, "\\$&"));
    const re = new RegExp(`["'\`](${vechi.join("|")})["'\`?#]`);
    const gasite = surse("src").filter((f) => re.test(readFileSync(f, "utf8")));
    expect(gasite).toEqual([]);
  });
});

// Sitemap-ul real, cu baza de date înlocuită de un răspuns gol (fără anunțuri/cereri):
// paginile de oraș cu conținut local scris de mână rămân, cele redirecționate nu apar.
const gol = { data: [], error: null, count: 0 };
const q: Record<string, unknown> = {};
for (const m of ["select", "eq", "in", "not", "order", "limit", "neq", "gte", "lte", "is"])
  q[m] = () => q;
q["then"] = (res: (v: typeof gol) => unknown) => Promise.resolve(gol).then(res);
mock.module("@/integrations/supabase/client.server", () => ({
  supabaseAdmin: { from: () => q, rpc: async () => gol },
}));
mock.module("@/lib/blog-fisiere", () => ({
  postariMarkdown: () => [],
  postareMarkdown: () => null,
}));

describe("(c) sitemap", () => {
  it("nu conține URL-uri redirecționate și include paginile canonice ale orașelor", async () => {
    const { Route } = await import("@/routes/sitemap[.]xml");
    const handlers = (Route.options as { server: { handlers: { GET: () => Promise<Response> } } })
      .server.handlers;
    const xml = await (await handlers.GET()).text();
    const locs = [...xml.matchAll(/<loc>https:\/\/meditatiidirect\.ro([^<]*)<\/loc>/g)].map(
      (m) => m[1]!,
    );
    expect(locs.length).toBeGreaterThan(50);
    expect(locs.filter((p) => consolidatedTarget(p) !== null)).toEqual([]);
    for (const o of ORASE_HUB) {
      expect(locs).not.toContain(`/meditatii-${o.path}`);
      expect(locs).toContain(`/meditatii-in/${o.citySlug}`);
    }
    expect(new Set(locs).size).toBe(locs.length);
  });
});
