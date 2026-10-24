import { describe, expect, it } from "bun:test";
import { normalizeRoPhone, formatRoPhone } from "./phone";

describe("Prefix automat pentru mobil românesc", () => {
  it("adaugă +40 la numărul local fără să păstreze zero-ul inițial", () => {
    expect(formatRoPhone("0770763175")).toBe("+40770763175");
    expect(normalizeRoPhone("0770763175")).toBe("40770763175");
  });
  it("nu dublează prefixul deja introdus", () => {
    expect(formatRoPhone("+40770763175")).toBe("+40770763175");
    expect(formatRoPhone("0040770763175")).toBe("+40770763175");
  });
  it("respinge numerele incomplete, fixe sau cu litere", () => {
    expect(normalizeRoPhone("0770763")).toBeNull();
    expect(normalizeRoPhone("0211234567")).toBeNull();
    expect(normalizeRoPhone("0770763175abc")).toBeNull();
    expect(formatRoPhone("0770")).toBe("0770");
  });
});