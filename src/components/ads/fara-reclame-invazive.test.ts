import { expect, test } from "bun:test";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// Politica site-ului: reclamele sunt doar în pagină (bannere / native), niciodată invazive.
// Fără popup, popunder sau Social Bar (overlay) Adsterra pe niciun ecran.
function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : /\.(tsx?|html)$/.test(name) && !/\.test\.tsx?$/.test(name) ? [path] : [];
  });
}
const sources = [...files("src"), ...files("public")].map((path) => ({ path, text: readFileSync(path, "utf8") }));

// Comments and policy wording may mention "popunder"; only executable ad code is checked.
const code = (text: string) => text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");

test("no popunder / popup ad scripts anywhere in the site", () => {
  const offenders = sources
    .filter(({ text }) => /src=["'`][^"'`]*(popunder|pop-under|popads)|\/(popunder|pu)\.js|onclick[a-z]*ads/i.test(code(text)))
    .map((f) => f.path);
  expect(offenders).toEqual([]);
});

test("the Adsterra Social Bar overlay is never rendered", () => {
  const offenders = sources
    .filter(({ path }) => !path.endsWith("adsterra-document.ts"))
    .filter(({ text }) => /ADSTERRA_SOCIAL_SCRIPT|AdsterraSocialBar|adsterraDocument\([^)]*,\s*true\s*\)/.test(text))
    .map((f) => f.path);
  expect(offenders).toEqual([]);
});

test("ads never open windows on their own", () => {
  const ads = sources.filter(({ path }) => path.includes(join("components", "ads")));
  expect(ads.filter(({ text }) => /window\.open\s*\(/.test(text)).map((f) => f.path)).toEqual([]);
});

test("in-page Adsterra banners are kept on content pages", () => {
  const withNative = sources.filter(({ text }) => text.includes("<AdsterraNativeBanner")).length;
  expect(withNative).toBeGreaterThanOrEqual(9);
});
