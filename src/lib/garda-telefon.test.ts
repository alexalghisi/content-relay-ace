import { describe, expect, it } from "bun:test";
import { trebuieVerificatTelefon } from "./garda-telefon";

const u = { email_confirmed_at: "2026-11-05" };

describe("trebuieVerificatTelefon", () => {
  it("cont confirmat fără telefon verificat → spre verificare SMS", () => {
    expect(trebuieVerificatTelefon("/meditatii", u, false, true)).toBe(true);
    expect(trebuieVerificatTelefon("/", u, false, true)).toBe(true);
  });
  it("telefon verificat → acces normal", () => {
    expect(trebuieVerificatTelefon("/meditatii", u, true, true)).toBe(false);
  });
  it("vizitator nelogat sau email neconfirmat → nimic", () => {
    expect(trebuieVerificatTelefon("/meditatii", null, false, true)).toBe(false);
    expect(trebuieVerificatTelefon("/meditatii", { email_confirmed_at: null }, false, true)).toBe(false);
  });
  it("cât timp starea nu e cunoscută nu redirecționează", () => {
    expect(trebuieVerificatTelefon("/meditatii", u, null, true)).toBe(false);
  });
  it("pagina de verificare și cele legale rămân accesibile", () => {
    for (const p of ["/confirmare-cont", "/login", "/termeni", "/confidentialitate"])
      expect(trebuieVerificatTelefon(p, u, false, true)).toBe(false);
  });
  it("cât timp telefonul nu se cere la înscriere, nu redirecționează niciodată", () => {
    expect(trebuieVerificatTelefon("/meditatii", u, false, false)).toBe(false);
    expect(trebuieVerificatTelefon("/meditatii", u, false)).toBe(false); // comutatorul e oprit
  });
});
