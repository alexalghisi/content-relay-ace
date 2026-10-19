/// <reference types="bun" />
import { describe, it, expect } from "bun:test";
import { BLOCAJE, BLOCAJE_MATERII, blocajeForMaterie, getBlocaj } from "@/data/blocaje";
import {
  MAX_INTREBARI,
  answer,
  encodeTraseu,
  isDone,
  learningOrder,
  nextQuestion,
  result,
  startScan,
  textFromTraseuParam,
} from "./scaner-lacune";

describe("Scanerul de lacune", () => {
  it("ordinea de învățare pune prerechizitele înainte, la fiecare materie", () => {
    for (const m of BLOCAJE_MATERII) {
      const order = learningOrder(m.slug);
      expect(order.length).toBe(blocajeForMaterie(m.slug).length);
      const idx = new Map(order.map((n, i) => [n.slug, i]));
      for (const n of order)
        for (const p of n.lipsa) if (idx.has(p)) expect(idx.get(p)!).toBeLessThan(idx.get(n.slug)!);
    }
  });

  it("răspuns corect la țintă → scan încheiat, fără lacune", () => {
    let s = startScan("derivate");
    expect(nextQuestion(s)?.slug).toBe("derivate");
    s = answer(s, "derivate", "stiu");
    expect(isDone(s)).toBe(true);
    const r = result(s)!;
    expect(r.tintaOk).toBe(true);
    expect(r.traseu).toHaveLength(0);
  });

  it("lacune în lanț → găsește rădăcina și ordonează traseul", () => {
    const tinta = getBlocaj("derivate")!;
    let s = startScan(tinta.slug);
    // Tot ce nu are prerechizite e știut; restul — lacună.
    while (!isDone(s)) {
      const q = nextQuestion(s)!;
      s = answer(s, q.slug, q.lipsa.length === 0 ? "stiu" : "lacuna");
    }
    const r = result(s)!;
    expect(r.tintaOk).toBe(false);
    expect(s.istoric.length).toBeLessThanOrEqual(MAX_INTREBARI);
    expect(r.traseu[r.traseu.length - 1].slug).toBe("derivate");
    for (const root of r.radacini)
      for (const p of root.lipsa) expect(r.traseu.map((n) => n.slug)).not.toContain(p);
    const text = textFromTraseuParam(encodeTraseu(r));
    expect(text).toContain("Rădăcina problemei");
    expect(text.length).toBeLessThan(4000);
  });

  it("nu întreabă de două ori aceeași noțiune și respectă limita", () => {
    for (const n of BLOCAJE) {
      let s = startScan(n.slug);
      while (!isDone(s)) s = answer(s, nextQuestion(s)!.slug, "lacuna");
      expect(new Set(s.istoric).size).toBe(s.istoric.length);
      expect(s.istoric.length).toBeLessThanOrEqual(MAX_INTREBARI);
    }
  });

  it("ignoră parametri invalizi", () => {
    expect(textFromTraseuParam("nu-exista")).toBe("");
    expect(nextQuestion(startScan("nu-exista"))).toBeNull();
  });
});
