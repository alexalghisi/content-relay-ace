import { expect, test } from "bun:test";
import { getAdsterraBanner } from "./adsterra";

test("mobile placement uses the supplied 320 by 50 banner", () => {
  expect(getAdsterraBanner(false)).toEqual({ key: "0e3484e9a11e0faff6adb5a6f5a74348", width: 320, height: 50 });
});

test("desktop placement uses the supplied 728 by 90 banner", () => {
  expect(getAdsterraBanner(true)).toEqual({ key: "7fc628f1017bfe4d5cc26dc8c9885f53", width: 728, height: 90 });
});