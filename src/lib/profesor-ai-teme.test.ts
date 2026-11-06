import { describe, expect, it } from "bun:test";
import { dimensiuneScalata, mesajTema, tipTema, TEME_LATURA_MAX } from "./profesor-ai-teme";

describe("teme încărcate în lecția live", () => {
  it("recunoaște poze și PDF-uri", () => {
    expect(tipTema({ type: "application/pdf", name: "bac.pdf" })).toBe("pdf");
    expect(tipTema({ type: "", name: "Subiect BAC M1.PDF" })).toBe("pdf");
    expect(tipTema({ type: "image/jpeg", name: "tema.jpg" })).toBe("imagine");
    expect(tipTema({ type: "", name: "IMG_0001.HEIC" })).toBe("imagine");
    expect(tipTema({ type: "application/zip", name: "a.zip" })).toBeNull();
  });
  it("micșorează pozele mari păstrând proporția, nu le mărește pe cele mici", () => {
    expect(dimensiuneScalata(4000, 3000)).toEqual({ w: TEME_LATURA_MAX, h: 1200 });
    expect(dimensiuneScalata(800, 600)).toEqual({ w: 800, h: 600 });
  });
  it("cere lucru pas cu pas, nu rezolvarea directă, și spune câte pagini s-au trimis", () => {
    const m = mesajTema(["subiect.pdf"], 8, 12);
    expect(m).toContain("subiect.pdf");
    expect(m).toContain("primele 8 pagini din 12");
    expect(m).toContain("nu îi dai direct rezolvarea");
  });
});
