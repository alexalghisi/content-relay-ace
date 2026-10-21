/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { SEO_DOMAINS, SEO_MARKET, providerFailure, romaniaReportDate } from "./seo-monitor-config";

describe("Daily SEO monitoring", () => {
  test("tracks the site's Romanian competitors", () => {
    expect(SEO_MARKET).toBe("ro");
    expect(SEO_DOMAINS).toEqual(["meditatiidirect.ro", "meditatii.ro", "anunturi-meditatii.ro", "superprof.com.ro", "meetnlearn.ro", "yoolearn.ro"]);
  });
  test("groups runs by the Romanian day", () => {
    expect(romaniaReportDate(new Date("2026-10-08T22:00:00Z"))).toBe("2026-10-09");
  });
  test("detects quota exhaustion even in a successful HTTP response", () => {
    expect(providerFailure(200, { error: "ERROR 134 :: TOTAL LIMIT EXCEEDED", status: 403 })).toContain("TOTAL LIMIT EXCEEDED");
    expect(providerFailure(200, { data: { rows: [] }, status: 200 })).toBeNull();
  });
});