/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { ORASE_HUB } from "./orase-hub";
import { getCityBySlug } from "./cities";

describe("Pagini /meditatii-<oras>", () => {
  test("slug-uri unice, fără diacritice, legate de un oraș existent", () => {
    const paths = ORASE_HUB.map((o) => o.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const o of ORASE_HUB) {
      expect(o.path).toMatch(/^[a-z]+(-[a-z]+)*$/);
      expect(o.plain).toMatch(/^[A-Za-z ]+$/);
      expect(getCityBySlug(o.citySlug)).toBeTruthy();
    }
  });
  test("context unic pe oraș", () => {
    expect(new Set(ORASE_HUB.map((o) => o.context)).size).toBe(ORASE_HUB.length);
  });
});
