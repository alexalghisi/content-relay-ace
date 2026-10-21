import { describe, expect, it } from "bun:test";
import {
  codCorect,
  genereazaCod,
  hashCod,
  hashTelefon,
  rateUtilizare,
  stareLectieGratuita,
  VALABILITATE_COD_MS,
  type CodSms,
} from "./lectie-gratuita";

const UID = "11111111-1111-4111-8111-111111111111";

async function cod(c: string, exp = 1_000 + VALABILITATE_COD_MS): Promise<CodSms> {
  return {
    kind: "cod-sms",
    uid: UID,
    telefonHash: await hashTelefon("40712345678"),
    codHash: await hashCod(UID, c),
    exp,
  };
}

describe("Lecția gratuită de 15 minute", () => {
  it("cere verificarea telefonului înainte de prima lecție", () => {
    expect(stareLectieGratuita(null)).toBe("neverificat");
  });
  it("este disponibilă o singură dată după verificare", () => {
    expect(stareLectieGratuita({ folosita_la: null })).toBe("disponibila");
    expect(stareLectieGratuita({ folosita_la: "2026-10-21T10:00:00Z" })).toBe("folosita");
  });
});

describe("Codul SMS", () => {
  it("are mereu 6 cifre", () => {
    expect(genereazaCod(new Uint32Array([7]))).toBe("000007");
    expect(genereazaCod(new Uint32Array([4_294_967_295]))).toMatch(/^\d{6}$/);
    expect(genereazaCod()).toMatch(/^\d{6}$/);
  });
  it("același număr dă același hash, numere diferite dau hash-uri diferite", async () => {
    expect(await hashTelefon("40712345678")).toBe(await hashTelefon("40712345678"));
    expect(await hashTelefon("40712345678")).not.toBe(await hashTelefon("40712345679"));
  });
  it("acceptă codul corect înainte de expirare", async () => {
    expect(await codCorect(await cod("123456"), UID, " 123456 ", 2_000)).toBe(true);
  });
  it("respinge codul greșit, expirat sau emis pentru alt cont", async () => {
    const c = await cod("123456");
    expect(await codCorect(c, UID, "654321", 2_000)).toBe(false);
    expect(await codCorect(c, UID, "123456", c.exp + 1)).toBe(false);
    expect(await codCorect(c, "22222222-2222-4222-8222-222222222222", "123456", 2_000)).toBe(false);
    expect(await codCorect(null, UID, "123456", 2_000)).toBe(false);
  });
});

describe("Statistica de utilizare", () => {
  it("calculează procentele cu o zecimală", () => {
    expect(rateUtilizare({ conturi: 200, verificate: 50, folosite: 30 })).toEqual({
      verificareDinConturi: 25,
      utilizareDinConturi: 15,
      utilizareDinVerificate: 60,
    });
    expect(rateUtilizare({ conturi: 3, verificate: 3, folosite: 1 }).utilizareDinConturi).toBe(
      33.3,
    );
  });
  it("întoarce 0% când nu există încă date", () => {
    expect(rateUtilizare({ conturi: 0, verificate: 0, folosite: 0 })).toEqual({
      verificareDinConturi: 0,
      utilizareDinConturi: 0,
      utilizareDinVerificate: 0,
    });
  });
});
