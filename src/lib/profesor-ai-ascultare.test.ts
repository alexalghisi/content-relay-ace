import { expect, test } from "bun:test";
import { createTrimitereAnticipata, sttBrowserPreferat, trebuieTrimisFinal } from "./profesor-ai-ascultare";

function fakeTimers() {
  const pend = new Map<number, () => void>();
  let id = 0;
  return {
    timers: {
      set: (fn: () => void, _ms: number) => { pend.set(++id, fn); return id; },
      clear: (i: number) => { pend.delete(i); },
    },
    fire() { const fns = [...pend.values()]; pend.clear(); fns.forEach((f) => f()); },
    pending: () => pend.size,
  };
}

test("the question goes out when the interim text stays stable; the final is then skipped", () => {
  const sent: string[] = [];
  const { timers, fire, pending } = fakeTimers();
  const a = createTrimitereAnticipata((t) => sent.push(t), 700, timers);
  a.interim("cât face");
  a.interim("cât face doi plus");
  a.interim("cât face doi plus doi");
  expect(pending()).toBe(1); // only the latest interim is armed
  fire();
  expect(sent).toEqual(["cât face doi plus doi"]);
  a.final("Cât face doi plus doi?");
  expect(sent).toHaveLength(1);
});

test("a final that arrives before the timer cancels it and is sent once", () => {
  const sent: string[] = [];
  const { timers, fire, pending } = fakeTimers();
  const a = createTrimitereAnticipata((t) => sent.push(t), 700, timers);
  a.interim("ce este o fracție");
  a.final("Ce este o fracție?");
  expect(pending()).toBe(0);
  fire();
  expect(sent).toEqual(["Ce este o fracție?"]);
});

test("a final that says clearly more than the early text is sent as the corrected question", () => {
  const sent: string[] = [];
  const { timers, fire } = fakeTimers();
  const a = createTrimitereAnticipata((t) => sent.push(t), 700, timers);
  a.interim("explică-mi");
  fire();
  a.final("explică-mi te rog cum se rezolvă ecuația de gradul doi");
  expect(sent).toEqual(["explică-mi", "explică-mi te rog cum se rezolvă ecuația de gradul doi"]);
});

test("trebuieTrimisFinal tolerates small recognizer corrections", () => {
  expect(trebuieTrimisFinal("Cât face doi plus doi?", "cât face doi plus doi")).toBe(false);
  expect(trebuieTrimisFinal("Cât face doi plus doi, te rog?", "cât face doi plus doi")).toBe(false);
  expect(trebuieTrimisFinal("Cât face doi plus doi ori trei minus unu?", "cât face doi")).toBe(true);
  expect(trebuieTrimisFinal("oricum", null)).toBe(true);
});

test("browser recognition is preferred everywhere except iOS or when missing", () => {
  const mac = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/130";
  const iphone = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) Safari/604.1";
  expect(sttBrowserPreferat(mac, true)).toBe(true);
  expect(sttBrowserPreferat(mac, false)).toBe(false);
  expect(sttBrowserPreferat(iphone, true)).toBe(false);
});
