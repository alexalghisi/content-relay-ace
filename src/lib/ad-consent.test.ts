import { expect, test } from "bun:test";
import { canServeAdsterra } from "./ad-consent";

test("Adsterra is blocked before consent", () => {
  expect(canServeAdsterra(null)).toBe(false);
});
test("Adsterra is blocked after refusal or withdrawal", () => {
  expect(canServeAdsterra("rejected")).toBe(false);
});
test("Adsterra is permitted only after explicit acceptance", () => {
  expect(canServeAdsterra("accepted")).toBe(true);
  expect(canServeAdsterra("true")).toBe(false);
});