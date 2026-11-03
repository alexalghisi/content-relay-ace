import { describe, expect, it } from "bun:test";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { LANDING_REDIRECTS } from "./seo-redirects";

// Paginile 301 (LANDING_REDIRECTS) nu se mai afișează, deci nu le verificăm.
const redirectate = new Set(Object.keys(LANDING_REDIRECTS).map((p) => p.slice(1)));
const ROUTES = "src/routes";
const pagini = readdirSync(ROUTES)
  .filter((f) => f.endsWith(".tsx") && !f.includes("$") && !f.startsWith("__") && !f.includes(".test."))
  .map((f) => ({ f, slug: f.replace(/\.tsx$/, "").replace(/\.index$/, ""), src: readFileSync(join(ROUTES, f), "utf8") }))
  .filter((p) => !redirectate.has(p.slug) && !p.src.includes("noindex"));

const extrage = (src: string, re: RegExp) => re.exec(src)?.[1];
const titlu = (src: string) =>
  extrage(src, /const TITLE\s*=\s*"([^"]+)"/) ?? extrage(src, /^\s*title:\s*"([^"]+)",/m) ?? extrage(src, /\{\s*title:\s*"([^"]+)"\s*\}/);
const descriere = (src: string) =>
  extrage(src, /const DESC(?:RIPTION)?\s*=\s*"([^"]+)"/) ?? extrage(src, /^\s*description:\s*"([^"]+)",/m);

describe("calitate SEO — paginile indexabile", () => {
  it("nu conțin afirmații pe care nu le putem dovedi", () => {
    // Cifre despre numărul de profesori/elevi, procente de piață, titluri sau rezultate atribuite profesorilor.
    const interzis = /peste \d+ ?(%|de (profesori|meditatori|elevi))|\d+\+ (profesori|elevi)|mii de elevi|doctoranzi|autori de manuale|rezultate la fazele|cu experiență dovedită/i;
    const gasite = pagini.filter((p) => interzis.test(p.src)).map((p) => `${p.f}: ${interzis.exec(p.src)![0]}`);
    expect(gasite).toEqual([]);
  });

  it("titlurile și descrierile nu se repetă între pagini (fără canibalizare evidentă)", () => {
    const vazute = new Map<string, string>();
    const dubluri: string[] = [];
    for (const p of pagini) {
      for (const v of [titlu(p.src), descriere(p.src)]) {
        if (!v) continue;
        const k = v.toLowerCase();
        if (vazute.has(k)) dubluri.push(`${p.f} = ${vazute.get(k)}: ${v}`);
        else vazute.set(k, p.f);
      }
    }
    expect(dubluri).toEqual([]);
  });

  it("descrierile au o lungime rezonabilă pentru Google", () => {
    const prea = pagini
      .map((p) => ({ f: p.f, d: descriere(p.src) }))
      .filter((x) => x.d && (x.d.length < 70 || x.d.length > 200))
      .map((x) => `${x.f} (${x.d!.length})`);
    expect(prea).toEqual([]);
  });

  it("linkurile interne din paginile noi duc la rute existente, nu la pagini redirectate", () => {
    const fisiere = ["meditatii-evaluare-nationala.tsx", "admitere-liceu-2027.tsx", "calendar-bac-2027.tsx", "calendar-evaluare-nationala-2027.tsx", "profesor-particular.tsx"];
    const continut = readFileSync("src/data/continut-pagini.tsx", "utf8") + fisiere.map((f) => readFileSync(join(ROUTES, f), "utf8")).join("\n");
    const linkuri = [...continut.matchAll(/(?:to|href)[:=]\s*["{]?"(\/[a-z0-9\-\/]*)"/g)].map((m) => m[1]!).filter((l) => !l.startsWith("/blog/"));
    const lipsa = [...new Set(linkuri)].filter((l) => {
      const slug = l.slice(1).split("/")[0]!;
      if (redirectate.has(slug)) return true;
      const cand = [`${slug}.tsx`, `${slug}.index.tsx`];
      return slug !== "" && !cand.some((c) => existsSync(join(ROUTES, c))) && !readdirSync(ROUTES).some((f) => f.startsWith(`${slug}.`));
    });
    expect(lipsa).toEqual([]);
  });

  it("paginile noi sunt în sitemap", () => {
    const sm = readFileSync("src/routes/sitemap[.]xml.ts", "utf8");
    for (const p of ["/admitere-liceu-2027", "/calendar-bac-2027", "/calendar-evaluare-nationala-2027"]) expect(sm).toContain(`"${p}"`);
    expect(sm).toContain("meditatii-evaluare-nationala");
  });
});
