import { describe, expect, it } from "bun:test";
import { motivParolaSlaba } from "./parola";
import { eroareInregistrareRo } from "./inregistrare";
import { erroareRo } from "./erori-ro";
import { eroareParolaRo, htmlResetare, linkResetare, textResetare, verificaParolaNoua } from "./parola";

describe("am uitat parola", () => {
  it("linkul duce pe pagina noastră de resetare, doar pe origini sigure", () => {
    const u = new URL(linkResetare("https://meditatiidirect.ro", "abc/+="));
    expect(u.origin + u.pathname).toBe("https://meditatiidirect.ro/resetare-parola");
    expect(u.searchParams.get("token_hash")).toBe("abc/+=");
    expect(u.searchParams.get("type")).toBe("recovery");
    expect(new URL(linkResetare("https://evil.example", "t")).origin).toBe("https://meditatiidirect.ro");
  });
  it("emailul conține linkul și escapează numele", () => {
    const link = "https://meditatiidirect.ro/resetare-parola?token_hash=t&type=recovery";
    expect(htmlResetare("<b>Ana</b>", link)).toContain("&lt;b&gt;Ana&lt;/b&gt;");
    expect(htmlResetare("Ana", link)).toContain("token_hash=t&amp;type=recovery");
    expect(textResetare("Ana", link)).toContain(link);
  });
  it("validează parola nouă", () => {
    expect(verificaParolaNoua("123", "123")).toContain("minim 6");
    expect(verificaParolaNoua("parola123", "parola124")).toContain("nu coincid");
    expect(verificaParolaNoua("x".repeat(73), "x".repeat(73))).toContain("maxim 72");
    expect(verificaParolaNoua("parola123", "parola123")).toBeNull();
  });
  it("erorile Supabase devin mesaje în română", () => {
    expect(eroareParolaRo("New password should be different from the old password.")).toContain("diferită");
    expect(eroareParolaRo("Auth session missing!")).toContain("expirat");
    expect(eroareParolaRo("ceva necunoscut")).not.toContain("necunoscut");
  });
});

describe("parolă respinsă de Supabase → motivul exact", () => {
  it("parolă din listele de parole furate (ex. 1234567)", () => {
    const r = motivParolaSlaba("Password is known to be weak and easy to guess, please choose a different one.")!;
    expect(r).toContain("parole furate");
    expect(r).not.toContain("minim 6");
  });
  it("lipsesc litere / cifre: spune exact ce să adaugi", () => {
    expect(motivParolaSlaba("Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789"))
      .toBe("Parola trebuie să conțină cel puțin o literă și o cifră (0–9).");
    expect(motivParolaSlaba("Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789"))
      .toBe("Parola trebuie să conțină cel puțin o literă mică (a–z), o literă mare (A–Z) și o cifră (0–9).");
    expect(motivParolaSlaba("Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789, !@#$%^&*()_+-=[]{};'\\:\"|<>?,./`~"))
      .toContain("și un simbol");
  });
  it("lungime + caractere în același mesaj", () => {
    expect(motivParolaSlaba("Password should be at least 8 characters. Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789"))
      .toBe("Parola trebuie să aibă cel puțin 8 caractere și să conțină cel puțin o literă și o cifră (0–9).");
  });
  it("mesaje care nu sunt despre parolă → null", () => {
    expect(motivParolaSlaba("Invalid login credentials")).toBeNull();
  });
  it("același motiv exact la înscriere, resetare și în cont", () => {
    const msg = "Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789";
    const asteptat = "Parola trebuie să conțină cel puțin o literă și o cifră (0–9).";
    expect(eroareParolaRo(msg)).toBe(asteptat);
    expect(eroareInregistrareRo(msg)).toBe(asteptat);
    expect(erroareRo(msg)).toBe(asteptat);
  });
});
