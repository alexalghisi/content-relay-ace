import { describe, expect, test } from "bun:test";
import audit from "@/data/bac-verificare.generated.json";
import {
  esteDocumentVerificat,
  motiveFisier,
  motivePereche,
  statisticiAudit,
  subiecteVerificate,
  verificaVarianta,
  type FisierAuditat,
} from "./bac-verificare";

const baza: FisierAuditat = {
  path: "informatica/2026/iunie-subiect.pdf",
  materie: "informatica",
  an: 2026,
  sesiune: "iunie",
  tip: "subiect",
  text: true,
  an_document: 2026,
  tip_document: "subiect",
  specializare: "mate-info",
  varianta: 4,
  simulare_document: false,
  model_document: false,
  emitent_oficial: true,
};

describe("motiveFisier", () => {
  test("document oficial, an/tip/sesiune corecte → OK", () => {
    expect(motiveFisier(baza)).toEqual([]);
  });
  test("neauditat → ascuns", () => expect(motiveFisier(undefined)).toEqual(["neauditat"]));
  test("an greșit, emitent neoficial, model", () => {
    expect(
      motiveFisier({ ...baza, an_document: 2012, emitent_oficial: false, model_document: true }),
    ).toEqual(["emitent", "an", "model"]);
  });
  test("subiect pus în locul baremului", () => {
    expect(motiveFisier({ ...baza, tip: "barem", tip_document: "subiect" })).toEqual(["tip"]);
  });
  test("sesiunea de simulare cere un document de simulare și invers", () => {
    expect(motiveFisier({ ...baza, sesiune: "simulare" })).toEqual(["sesiune"]);
    expect(motiveFisier({ ...baza, simulare_document: true })).toEqual(["sesiune"]);
    expect(motiveFisier({ ...baza, sesiune: "simulare", simulare_document: true })).toEqual([]);
  });
});

describe("motivePereche", () => {
  test("barem de la altă specializare/variantă nu se afișează lângă subiect", () => {
    const barem = {
      ...baza,
      tip: "barem" as const,
      tip_document: "barem" as const,
      specializare: "st-nat",
    };
    expect(motivePereche(baza, barem)).toEqual(["specializare"]);
    expect(motivePereche(baza, { ...barem, specializare: "mate-info", varianta: 7 })).toEqual([
      "varianta",
    ]);
    expect(motivePereche(baza, { ...barem, specializare: null, varianta: null })).toEqual([]);
  });
});

describe("date reale din audit", () => {
  const nume = new Set((audit as { fisiere: FisierAuditat[] }).fisiere.map((f) => f.path));

  test("Informatică 2026 iunie: subiectul mate-info e verificat, baremul de științe ale naturii nu", () => {
    const v = verificaVarianta("informatica", 2026, "iunie", nume);
    expect(v.subiect).toBe("informatica/2026/iunie-subiect.pdf");
    expect(v.barem).toBeNull();
    expect(v.specializare).toBe("mate-info");
    expect(v.varianta).toBe(4);
  });

  test("Matematică 2024 august: subiect M_tehnologic, baremul M_șt-nat ascuns", () => {
    const v = verificaVarianta("matematica", 2024, "august", nume);
    expect(v.subiect).toBe("matematica/2024/august-subiect.pdf");
    expect(v.barem).toBeNull();
    expect(v.baremAscuns).toContain("specializare");
  });

  test("fișiere neoficiale cunoscute sunt respinse", () => {
    // bibliografie a Bibliotecii Naționale, încărcată greșit ca subiect de economie
    expect(esteDocumentVerificat("economie/2017/august-subiect.pdf")).toBe(false);
    // barem din 2012 pus la 2018
    expect(esteDocumentVerificat("matematica/2018/iunie-barem.pdf")).toBe(false);
    // culegere a unui inspectorat județean pusă ca barem de simulare națională
    expect(esteDocumentVerificat("informatica/2017/simulare-barem.pdf")).toBe(false);
  });

  test("un fișier care nu există în Storage nu apare, chiar dacă e în audit", () => {
    const v = verificaVarianta("informatica", 2026, "iunie", new Set());
    expect(v.subiect).toBeNull();
    expect(v.subiectAscuns).toEqual([]);
  });

  test("subiecteVerificate păstrează doar subiecte care trec auditul", () => {
    const s = subiecteVerificate(nume);
    for (const p of s) expect(p.endsWith("-subiect.pdf") && esteDocumentVerificat(p)).toBe(true);
    const st = statisticiAudit();
    expect(st.total).toBe(nume.size);
    expect(st.verificate + st.respinse).toBe(st.total);
    expect(s.size).toBeGreaterThan(0);
  });
});
