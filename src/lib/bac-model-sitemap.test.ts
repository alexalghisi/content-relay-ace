import { describe, expect, test } from "bun:test";
import { bacModelSitemapPaths } from "./bac-model-sitemap";

describe("audited BAC 2027 models in the sitemap", () => {
  test("all thirteen audited subjects have an indexable model page", () => {
    const paths = bacModelSitemapPaths();
    const subjects = ["biologie", "chimie", "economie", "filosofie", "fizica", "geografie", "informatica", "istorie", "logica", "matematica", "psihologie", "romana", "sociologie"];
    expect(paths.filter((p) => p.endsWith("/2027/model"))).toEqual(
      subjects.map((subject) => `/bac/${subject}/2027/model`),
    );
    expect(paths).toContain("/bac/informatica/2027/model");
    expect(paths).toContain("/bac/matematica/2027/model");
    expect(paths).toContain("/bac/romana/2027/model");
  });
  test("profiles share one canonical subject/year page, with crawlable parents", () => {
    const paths = bacModelSitemapPaths();
    expect(new Set(paths).size).toBe(paths.length);
    expect(paths.filter((p) => p === "/bac/informatica/2027/model")).toHaveLength(1);
    expect(paths).toContain("/bac/informatica/2027");
    expect(paths).toContain("/bac/informatica");
    expect(paths).toContain("/bac");
  });
  test("no model documents means no model URLs or unpublished exam sessions", () => {
    expect(bacModelSitemapPaths([])).toEqual([]);
    expect(bacModelSitemapPaths().some((p) => /\/2027\/(iunie|august|simulare)$/.test(p))).toBe(false);
  });
});