import { describe, expect, it } from "bun:test";
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
