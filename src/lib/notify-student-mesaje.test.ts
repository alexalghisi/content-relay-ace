import { describe, expect, test } from "bun:test";
import {
  detaliiPropunere,
  htmlEmail,
  linkCerere,
  numeProfesor,
  subiectEmail,
  textEmail,
  textSms,
} from "./notify-student-mesaje";

const baza = {
  numeElev: "Mihaila Elisa",
  profesor: "Alessandro",
  materie: "Informatică",
  pretPeOra: 50,
  data: "2026-11-03",
  ora: "18:00:00",
  link: linkCerere("abc", "tok"),
};

describe("notificare propunere", () => {
  test("link privat către cererea elevului", () => {
    expect(linkCerere("abc", "tok")).toBe("https://meditatiidirect.ro/cererea-mea/abc?t=tok");
    expect(linkCerere("abc", null)).toBe("https://meditatiidirect.ro/cererea-mea/abc");
  });

  test("nume profesor implicit", () => {
    expect(numeProfesor("  ")).toBe("Un profesor");
    expect(numeProfesor(null)).toBe("Un profesor");
  });

  test("detalii formatate", () => {
    expect(detaliiPropunere(baza)).toBe("50 lei/oră, din 2026-11-03, ora 18:00");
    expect(detaliiPropunere({ materie: "x", link: "l" })).toBe("");
  });

  test("email în română, cu link complet https", () => {
    expect(subiectEmail(baza)).toContain("Informatică");
    const h = htmlEmail(baza);
    expect(h).toContain("Bună, Mihaila Elisa!");
    expect(h).toContain("s-a oferit să-ți fie profesor");
    expect(h).toContain("https://meditatiidirect.ro/cererea-mea/abc?t=tok");
    expect(textEmail(baza)).toContain("https://meditatiidirect.ro/cererea-mea/abc?t=tok");
  });

  test("HTML escapat", () => {
    const h = htmlEmail({ ...baza, profesor: "<script>", numeElev: "a&b" });
    expect(h).not.toContain("<script>");
    expect(h).toContain("&lt;script&gt;");
    expect(h).toContain("a&amp;b");
  });

  test("SMS fără diacritice, cu link", () => {
    const s = textSms(baza);
    expect(s).toBe(
      "MeditatiiDirect: Alessandro vrea sa-ti fie profesor la Informatica. Vezi propunerea: https://meditatiidirect.ro/cererea-mea/abc?t=tok",
    );
    expect(/[ăâîșțĂÂÎȘȚ]/.test(s)).toBe(false);
  });
});
