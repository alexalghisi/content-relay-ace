import { describe, expect, test } from "bun:test";
import { CLIPURI, urmatorulClip } from "./demo-video";

describe("rotația clipurilor demo", () => {
  test("nu arată același clip de două ori la rând", () => {
    for (let p = 0; p < CLIPURI.length; p++) expect(urmatorulClip(p)).not.toBe(p);
  });
  test("trece prin toate clipurile", () => {
    const vazute = new Set<number>();
    let p: number | null = 0;
    for (let i = 0; i < CLIPURI.length; i++) { p = urmatorulClip(p); vazute.add(p); }
    expect(vazute.size).toBe(CLIPURI.length);
  });
});
