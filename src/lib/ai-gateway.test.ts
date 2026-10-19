/// <reference types="bun" />
import { describe, it, expect } from "bun:test";
import { extractJson, seal, unseal } from "./ai-gateway.server";
import { notaDin, planTest, AI_DURATE } from "./simulare-ai";

describe("Simulare AI — utilitare", () => {
  it("token criptat: dus-întors, iar modificarea lui e respinsă", async () => {
    const t = await seal({ u: "user-1", chei: [{ id: "g1", corect: 2 }] });
    expect(t).not.toContain("corect");
    expect(await unseal<unknown>(t)).toEqual({ u: "user-1", chei: [{ id: "g1", corect: 2 }] });
    const bad = t.slice(0, -2) + (t.endsWith("A") ? "BB" : "AA");
    expect(await unseal(bad)).toBeNull();
    expect(await unseal("nimic")).toBeNull();
  });
  it("extrage JSON din răspunsuri cu ```json", () => {
    expect(extractJson('```json\n{"a":1}\n```')).toEqual({ a: 1 });
    expect(() => extractJson("fără json")).toThrow();
  });
  it("nota: 1 din oficiu, 10 la punctaj maxim, limitată", () => {
    expect(notaDin(0, 50)).toBe(1);
    expect(notaDin(50, 50)).toBe(10);
    expect(notaDin(25, 50)).toBe(5.5);
    expect(notaDin(80, 50)).toBe(10);
  });
  it("planul de întrebări crește cu durata", () => {
    const n = AI_DURATE.map((d) => planTest(d).grila + planTest(d).deschis);
    expect([...n].sort((a, b) => a - b)).toEqual(n);
  });
});
