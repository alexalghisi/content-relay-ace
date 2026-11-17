import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { AN_SCOLAR_2026_2027 } from "./an-scolar-2026-2027";

describe("structura anului școlar 2026-2027", () => {
  it("datele sunt ISO valide și în ordine cronologică în fiecare grup", () => {
    for (const g of AN_SCOLAR_2026_2027) {
      const d = g.evenimente.map((e) => e.data);
      for (const x of d) expect(Number.isNaN(Date.parse(x))).toBe(false);
      expect([...d].sort()).toEqual(d);
    }
  });
  it("datele cheie din Ordinul 3.194/2026", () => {
    const [module, terminale] = AN_SCOLAR_2026_2027;
    expect(module!.evenimente[0]!.data).toBe("2026-09-07");
    expect(module!.evenimente.find((e) => e.ce === "Vacanța de iarnă")?.data).toBe("2026-12-23");
    expect(module!.evenimente.find((e) => e.ce === "Vacanța de primăvară")?.data).toBe(
      "2027-04-24",
    );
    expect(terminale!.evenimente.find((e) => e.ce.startsWith("Clasa a XII-a"))?.data).toBe(
      "2027-06-04",
    );
    expect(terminale!.evenimente.find((e) => e.ce.startsWith("Clasa a VIII-a"))?.data).toBe(
      "2027-06-11",
    );
  });
  it("paginile noi sunt în sitemap și nu trimit la pagini redirectate", () => {
    const sitemap = readFileSync("src/routes/sitemap[.]xml.ts", "utf8");
    for (const p of [
      "/structura-an-scolar-2026-2027",
      "/modele-subiecte-bac-2027",
      "/modele-subiecte-evaluare-nationala-2027",
      "/simulare-evaluare-nationala-2027",
    ]) {
      expect(sitemap).toContain(`"${p}"`);
      expect(readFileSync(`src/routes${p}.tsx`, "utf8")).not.toContain(
        "/simulari-bacalaureat-2026",
      );
    }
  });
});
