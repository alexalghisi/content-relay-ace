import { expect, test } from "bun:test";
import { AD_SERVING_ENABLED } from "./ads-policy";

test("ad serving stays suspended during the AdSense rejection review", () => {
  expect(AD_SERVING_ENABLED).toBe(false);
});