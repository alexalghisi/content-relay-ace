import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { cheieLectie } from "./demo-repertoriu";
import { LECTII_VIDEO, posterLectie, videoLectie } from "./demo-video";
import { VIDEO_DEMO } from "./demo-video-lectii.generated";

describe("lecțiile video demo (HeyGen, profesor + elev)", () => {
  test("există cel puțin o lecție video", () => {
    expect(LECTII_VIDEO.length).toBeGreaterThan(0);
  });
  test("fiecare replică are un interval în video, în ordine", () => {
    for (const { l } of LECTII_VIDEO) {
      const t = VIDEO_DEMO[cheieLectie(l)];
      expect(t.replici.length).toBe(l.replici.length);
      t.replici.forEach(([s, e], i) => {
        expect(e).toBeGreaterThan(s);
        if (i) expect(s).toBeGreaterThanOrEqual(t.replici[i - 1][1] - 0.01);
      });
    }
  });
  test("video și poster există în public/", () => {
    for (const { l } of LECTII_VIDEO) {
      const k = cheieLectie(l);
      expect(existsSync(`public${videoLectie(k)}`)).toBe(true);
      expect(existsSync(`public${posterLectie(k)}`)).toBe(true);
    }
  });
});
