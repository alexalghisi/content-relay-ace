import { expect, test } from "bun:test";
import { AD_SERVING_ENABLED } from "./ads-policy";

test("ads are served to every visitor", () => {
  expect(AD_SERVING_ENABLED).toBe(true);
});
