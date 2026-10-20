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
