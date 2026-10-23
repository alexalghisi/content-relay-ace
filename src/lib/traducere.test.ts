import { expect, test } from "bun:test";
import { deTradus, loturi, parseTraduceri, pastreazaSpatii, TR_MAX_TEXTE } from "./traducere";

test("only real words are sent for translation", () => {
  expect(deTradus("Cere ofertă")).toBe(true);
  expect(deTradus("150 lei")).toBe(true);
  expect(deTradus("42")).toBe(false);
  expect(deTradus("  ")).toBe(false);
  expect(deTradus("https://meditatiidirect.ro/cereri")).toBe(false);
  expect(deTradus("admin@meditatiidirect.ro")).toBe(false);
});
test("surrounding spaces of the original text are kept", () => {
  expect(pastreazaSpatii("  Cere ofertă ", "Request a quote")).toBe("  Request a quote ");
});
test("batches respect the server limits", () => {
  const b = loturi(Array.from({ length: 130 }, (_, i) => `text ${i}`));
  expect(b.length).toBe(3);
  expect(b.every((x) => x.length <= TR_MAX_TEXTE)).toBe(true);
});
test("model answers with a different length are rejected", () => {
  expect(parseTraduceri('["a","b"]', 2)).toEqual(["a", "b"]);
  expect(parseTraduceri('```json\n["a"]\n```', 1)).toEqual(["a"]);
  expect(parseTraduceri('["a"]', 2)).toBeNull();
  expect(parseTraduceri("nope", 1)).toBeNull();
});
