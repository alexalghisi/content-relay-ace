import { describe, expect, test } from "bun:test";
import { LOCALES, MESSAGES, localeFromCookieHeader, translate } from "./i18n";

describe("site language", () => {
  test("Romanian is the default when no cookie is set", () => {
    expect(localeFromCookieHeader("")).toBe("ro");
    expect(localeFromCookieHeader("md_lang=xx")).toBe("ro");
  });
  test("the chosen language is read from the cookie", () => {
    expect(localeFromCookieHeader("a=1; md_lang=en; b=2")).toBe("en");
  });
  test("all 9 languages have every phrase translated", () => {
    expect(LOCALES.length).toBe(9);
    const keys = Object.keys(MESSAGES.ro);
    for (const l of LOCALES) expect(Object.keys(MESSAGES[l.code]).sort()).toEqual(keys.sort());
  });
  test("translation returns the chosen language", () => {
    expect(translate("en", "auth.login")).toBe("Log in");
  });
});
