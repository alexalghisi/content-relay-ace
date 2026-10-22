import { describe, expect, test } from "bun:test";
import audit from "@/data/admitere-verificare.generated.json";
import {
  esteAdmitereAfisat,
  filtreazaAfisate,
  verdictAdmitere,
  verdictDocument,
  type DocAdmitereAuditat,
} from "./admitere-verificare";
import { TOATE_REZOLVARILE_ADMITERE } from "@/data/rezolvari-admitere";
import { contextExercitiu, gasesteExercitiu, idExercitiu } from "@/data/rezolvari-verificate";

const baza: DocAdmitereAuditat = {
  path: "upb/informatica/2025-iulie-subiect.pdf",
  universitate: "upb",
  materie: "informatica",
  an: 2025,
  sesiune: "iulie",
  tip: "subiect",
  text: true,
  ani_document: [2025],
  simulare_document: false,
  sursa_url: "http://www.physics.pub.ro/Admitere/2025/x.pdf",
  sursa_domeniu: "www.physics.pub.ro",
};

describe("verdictDocument", () => {
  test("sursă oficială + an corect → afișat, proveniență oficială", () => {
    expect(verdictDocument(baza)).toMatchObject({
      afisat: true,
      provenienta: "oficiala",
      simulare: false,
    });
  });
  test("fără sursă → ascuns, chiar dacă are text", () => {
    expect(verdictDocument({ ...baza, sursa_url: null, sursa_domeniu: null }).afisat).toBe(false);
  });
  test("copie de pe alt site: afișată doar dacă textul se poate verifica", () => {
    const c = { ...baza, sursa_url: "https://submed.ro/a.pdf", sursa_domeniu: "submed.ro" };
    expect(verdictDocument(c)).toMatchObject({ afisat: true, provenienta: "preluata" });
    expect(verdictDocument({ ...c, text: false }).afisat).toBe(false);
  });
  test("an diferit în document → ascuns", () => {
    expect(verdictDocument({ ...baza, ani_document: [2019] }).motive).toContain("an");
  });
  test("domeniu care doar conține numele universității nu e oficial", () => {
    expect(verdictDocument({ ...baza, sursa_domeniu: "physics.pub.ro.evil.com" }).provenienta).toBe(
      "preluata",
    );
  });
});

describe("date reale din audit", () => {
  const docs = (audit as { fisiere: DocAdmitereAuditat[] }).fisiere;
  test("Drept București (scanări fără sursă) și simulările UMF Timișoara fără sursă sunt ascunse", () => {
    for (const d of docs.filter(
      (x) => x.universitate === "drept-bucuresti" || x.universitate === "umf-timisoara",
    ))
      expect(esteAdmitereAfisat(d.path)).toBe(false);
  });
  test("subiectele UPB 2025 de pe physics.pub.ro sunt afișate ca oficiale", () => {
    expect(verdictAdmitere("upb/informatica/2025-iulie-subiect.pdf").provenienta).toBe("oficiala");
    expect(esteAdmitereAfisat("upb/matematica/2025-iulie-subiect.pdf")).toBe(true);
  });
  test("simulările UMF Cluj sunt etichetate ca simulări", () => {
    expect(verdictAdmitere("umf-cluj/medicina/2026-mai-subiect.pdf").simulare).toBe(true);
  });
  test("filtreazaAfisate păstrează doar rândurile auditate", () => {
    expect(
      filtreazaAfisate([{ storage_path: "nu/exista.pdf" }, { storage_path: baza.path }]),
    ).toEqual([{ storage_path: baza.path }]);
  });
});

describe("rezolvările de admitere", () => {
  for (const r of TOATE_REZOLVARILE_ADMITERE) {
    test(`${r.universitate} ${r.materie} ${r.an}: subiect auditat, punctaj coerent, context AI`, () => {
      expect(esteAdmitereAfisat(r.documente.subiect)).toBe(true);
      expect(verdictAdmitere(r.documente.subiect).sursaUrl).toBe(r.documente.sursaUrl);
      expect(r.sectiuni.reduce((a, s) => a + s.puncte, 0)).toBe(r.punctajTotal);
      const item = r.sectiuni[0].itemi[0];
      const id = idExercitiu(r, item);
      expect(gasesteExercitiu(id)?.item.id).toBe(item.id);
      expect(contextExercitiu(id)).toContain(r.universitateNume);
    });
  }
});
