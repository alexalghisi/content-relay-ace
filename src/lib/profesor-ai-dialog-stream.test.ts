import { expect, test } from "bun:test";
import { isEcho, spokenPart, takeSentences } from "./profesor-ai-dialog";

test("first complete sentence is released before the reply finishes", () => {
  const r = takeSentences("Hai să vedem împreună ecuația. Cum ai înce");
  expect(r.sentences).toEqual(["Hai să vedem împreună ecuația."]);
  expect(r.rest).toBe(" Cum ai înce");
});
test("decimal numbers do not split a sentence", () => {
  expect(takeSentences("Rezultatul este 3.5 metri pe secundă. ").sentences).toEqual(["Rezultatul este 3.5 metri pe secundă."]);
});
test("board content is never spoken", () => {
  expect(spokenPart("Uite pașii.\nTABLA:\nx² = 4").spoken).toBe("Uite pașii.");
  expect(spokenPart("Uite pașii.\nTAB").spoken).toBe("Uite pașii.");
});
test("speaker echo of the professor is ignored, a real question is not", () => {
  expect(isEcho("trei ori patru fac doisprezece", "Trei ori patru fac doisprezece.")).toBe(true);
  expect(isEcho("cat face cinci plus sapte", "Trei ori patru fac doisprezece.")).toBe(false);
});
test("the opening clause of a long first sentence is spoken before the sentence ends", () => {
  const r = takeSentences("E o întrebare foarte bună, pentru că dacă înțelegi logica din spate", true);
  expect(r.sentences).toEqual(["E o întrebare foarte bună,"]);
  expect(r.rest).toBe(" pentru că dacă înțelegi logica din spate");
});
test("short clauses, numbers and later sentences are not cut at commas", () => {
  expect(takeSentences("Da, hai să vedem", true).sentences).toEqual([]);
  expect(takeSentences("Avem 3,5 metri pe secundă și mergem", true).sentences).toEqual([]);
  expect(takeSentences("Acum, după ce ai înțeles regula, trecem mai departe", false).sentences).toEqual([]);
});
test("echo of earlier sentences is still recognised as the professor's voice", async () => {
  const { createEchoLog } = await import("./profesor-ai-dialog");
  let t = 0;
  const log = createEchoLog(() => t);
  log.add("Exact, laturile paralele se numesc baze.");
  log.add("Acum calculăm aria trapezului.");
  t = 5_000;
  expect(log.isEcho("laturile paralele se numesc", false)).toBe(true);
  expect(log.isEcho("exact laturile alea", true)).toBe(true);
  expect(log.isEcho("nu înțeleg de ce împărțim la doi", false)).toBe(false);
  t = 60_000;
  expect(log.isEcho("laturile paralele se numesc", false)).toBe(false);
});
