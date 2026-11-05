import { describe, expect, it } from "bun:test";
import { htmlConfirmare, numeSalut, salut, textConfirmare } from "./inregistrare";
import { htmlResetare, textResetare } from "./parola";

describe("salutul din emailuri", () => {
  it("folosește numele din cont", () => {
    expect(numeSalut({ display_name: "Ana Pop" }, "ana@x.ro")).toBe("Ana Pop");
  });
  it("cade pe numele de la Google", () => {
    expect(numeSalut({ full_name: "Alessandro Alghisi" }, "a@gmail.com")).toBe(
      "Alessandro Alghisi",
    );
    expect(numeSalut({ name: "Ion" }, null)).toBe("Ion");
  });
  it("fără nume, folosește utilizatorul din email", () => {
    expect(numeSalut({}, "alexalghisi+test@gmail.com")).toBe("alexalghisi");
  });
  it("niciodată „acolo”", () => {
    expect(salut("")).toBe("Bună!");
    for (const s of [
      htmlResetare("", "https://meditatiidirect.ro/x"),
      textResetare("", "https://meditatiidirect.ro/x"),
      htmlConfirmare("", "https://meditatiidirect.ro/x"),
      textConfirmare("", "https://meditatiidirect.ro/x"),
    ])
      expect(s).not.toContain("acolo");
    expect(htmlResetare("alexalghisi", "https://meditatiidirect.ro/x")).toContain(
      "Bună, alexalghisi!",
    );
  });
});
