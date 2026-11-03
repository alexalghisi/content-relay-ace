import { describe, expect, it } from "bun:test";
import { eroareInregistrareRo, htmlConfirmare, linkConfirmare, originSigur, textConfirmare } from "./inregistrare";

describe("înregistrare — linkul de confirmare", () => {
  it("acceptă doar originile site-ului, ale preview-urilor Lovable și localhost", () => {
    expect(originSigur("https://meditatiidirect.ro")).toBe("https://meditatiidirect.ro");
    expect(originSigur("https://x-y.lovable.app")).toBe("https://x-y.lovable.app");
    expect(originSigur("http://localhost:8080")).toBe("http://localhost:8080");
    expect(originSigur("https://evil.example")).toBe("https://meditatiidirect.ro");
    expect(originSigur("https://meditatiidirect.ro.evil.example")).toBe("https://meditatiidirect.ro");
    expect(originSigur("javascript:alert(1)")).toBe("https://meditatiidirect.ro");
    expect(originSigur(undefined)).toBe("https://meditatiidirect.ro");
  });
  it("duce pe pagina noastră de confirmare cu token și tip", () => {
    const u = new URL(linkConfirmare("https://meditatiidirect.ro", "abc/+=", "signup"));
    expect(u.pathname).toBe("/confirmare-cont");
    expect(u.searchParams.get("token_hash")).toBe("abc/+=");
    expect(u.searchParams.get("type")).toBe("signup");
  });
  it("emailul conține linkul și escapează numele", () => {
    const link = "https://meditatiidirect.ro/confirmare-cont?token_hash=t&type=signup";
    const html = htmlConfirmare("<b>Ana</b>", link);
    expect(html).toContain("&lt;b&gt;Ana&lt;/b&gt;");
    expect(html).toContain("token_hash=t&amp;type=signup");
    expect(textConfirmare("Ana", link)).toContain(link);
  });
  it("erorile Supabase devin mesaje în română", () => {
    expect(eroareInregistrareRo("A user with this email address has already been registered")).toContain("Există deja");
    expect(eroareInregistrareRo("Password should be at least 6 characters")).toContain("Parola");
    expect(eroareInregistrareRo("Email rate limit exceeded")).toContain("Prea multe");
    expect(eroareInregistrareRo("something weird")).not.toContain("weird");
  });
});
