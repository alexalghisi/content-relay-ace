import { expect, test } from "bun:test";
import { getAdsterraBanner } from "./adsterra";
import { adsterraDocument } from "./adsterra-document";
import { ADSTERRA_SMARTLINK } from "./adsterra-document";

test("social format uses exactly the supplied social zone without banner zones", () => {
  const document = adsterraDocument(false, false, true);
  expect(document).toContain("https://bicea.org/14/a09f6a5d814edea7ad9b7e8ef7576015");
  expect(document).not.toContain("/22/");
  expect(document).not.toContain("container-95124");
});

test("smartlink preserves the supplied destination", () => {
  expect(ADSTERRA_SMARTLINK).toBe("https://arwf.org/4/c462925f5d81f7eae9d76fb825822ea2");
});

test("mobile placement uses the supplied 320 by 50 banner", () => {
  expect(getAdsterraBanner(false)).toEqual({ key: "0e3484e9a11e0faff6adb5a6f5a74348", width: 320, height: 50 });
});

test("desktop placement uses the supplied 728 by 90 banner", () => {
  expect(getAdsterraBanner(true)).toEqual({ key: "7fc628f1017bfe4d5cc26dc8c9885f53", width: 728, height: 90 });
});

test("supplied mobile and desktop zones use the current Adsterra host", () => {
  expect(adsterraDocument(true, false)).toContain("https://bicea.org/22/0e3484e9a11e0faff6adb5a6f5a74348");
  expect(adsterraDocument(true, true)).toContain("https://bicea.org/22/7fc628f1017bfe4d5cc26dc8c9885f53");
});

test("native placement uses the supplied provider and container", () => {
  const document = adsterraDocument(false, false);
  expect(document).toContain("https://bicea.org/21/95124b7bfc8466072188bbabf608cbf1");
  expect(document).toContain('id="container-95124b7bfc8466072188bbabf608cbf1"');
});