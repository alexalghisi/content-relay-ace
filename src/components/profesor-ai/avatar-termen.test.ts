import { describe, expect, it } from "bun:test";

const { pornesteCuTermen } = await import("./sesiune-live");

describe("pornesteCuTermen (avatar)", () => {
  it("nu oprește avatarul după ce a pornit", async () => {
    let oprit = false;
    await pornesteCuTermen(Promise.resolve("ok"), 30, () => (oprit = true));
    await new Promise((r) => setTimeout(r, 60));
    expect(oprit).toBe(false);
  });
  it("îl oprește dacă nu pornește la timp", async () => {
    let oprit = false;
    const nuPorneste = new Promise<string>(() => {});
    await expect(pornesteCuTermen(nuPorneste, 20, () => (oprit = true))).rejects.toThrow(
      "avatar timeout",
    );
    expect(oprit).toBe(true);
  });
});
