import { describe, expect, it } from "bun:test";
import { textSmsSigur } from "./sms.server";
import { textSms } from "./notify-student-mesaje";

describe("SMS: text acceptat de GatewayAPI", () => {
  it("scoate linkurile (respinse cu 0x1903) și diacriticele", () => {
    expect(textSmsSigur("MeditatiiDirect: elev nou caută meditații. Trimite propunerea: https://meditatiidirect.ro/cereri"))
      .toBe("MeditatiiDirect: elev nou cauta meditatii. Trimite propunerea.");
    expect(textSmsSigur("Vezi www.meditatiidirect.ro/x acum")).toBe("Vezi acum");
    expect(textSmsSigur("Intra pe meditatiidirect.ro/cont azi")).toBe("Intra pe azi");
  });
  it("păstrează codul de verificare și numele brandului", () => {
    expect(textSmsSigur("Codul tau MeditatiiDirect: 669663. Valabil 10 minute."))
      .toBe("Codul tau MeditatiiDirect: 669663. Valabil 10 minute.");
  });
  it("notificarea către elev nu mai conține link", () => {
    const s = textSms({ profesor: "Ana Pop", materie: "Matematică", link: "https://meditatiidirect.ro/cererea-mea/x?t=y" } as never);
    expect(s).not.toMatch(/https?:|meditatiidirect\.ro/);
    expect(textSmsSigur(s)).toBe(s);
  });
});
