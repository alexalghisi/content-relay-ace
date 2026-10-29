import { describe, expect, test } from "bun:test";
import { creeazaPoartaEcou } from "./profesor-ai-live";

const f = () => new ArrayBuffer(2);

describe("poarta de ecou", () => {
  test("cât profesoara tace, tot trece", () => {
    const p = creeazaPoartaEcou(100);
    expect(p(f(), 0.01, false)).toHaveLength(1);
    expect(p(f(), 0.5, false)).toHaveLength(1);
  });

  test("ecoul scurt al vocii ei nu întrerupe lecția", () => {
    const p = creeazaPoartaEcou(100);
    // 300 ms of loud echo, then quiet, repeated: never opens
    for (let k = 0; k < 10; k++) {
      for (let i = 0; i < 3; i++) expect(p(f(), 0.3, true)).toHaveLength(0);
      expect(p(f(), 0.02, true)).toHaveLength(0);
    }
  });

  test("ecoul slab nu trece deloc", () => {
    const p = creeazaPoartaEcou(100);
    for (let i = 0; i < 50; i++) expect(p(f(), 0.09, true)).toHaveLength(0);
  });

  test("elevul care vorbește peste ea trece, cu tot cu primele cuvinte și pauzele", () => {
    const p = creeazaPoartaEcou(100);
    for (let i = 0; i < 4; i++) expect(p(f(), 0.3, true)).toHaveLength(0);
    expect(p(f(), 0.3, true)).toHaveLength(5); // 500 ms buffered, sent at once
    expect(p(f(), 0.02, true)).toHaveLength(1); // short pause between words still passes
    expect(p(f(), 0.3, true)).toHaveLength(1);
  });
});
