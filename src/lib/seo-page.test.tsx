import { describe, expect, test } from "bun:test";
import { seoPage } from "./seo-page";

const stats = { listings: 408, teachers: 32, price: { min: 15, median: 80, max: 150, n: 120 } };
const cfg = (path: string) =>
  seoPage({
    path,
    title: "Titlu scris de mână",
    description: "Descriere scrisă de mână.",
    h1: "H1",
    intro: "Intro",
  });
type Meta = { title?: string; name?: string; content?: string; property?: string };
const titlu = (h: { meta: Meta[] }) => h.meta.find((m) => m.title)?.title;
const desc = (h: { meta: Meta[] }) => h.meta.find((m) => m.name === "description")?.content;

describe("seoPage — titluri din date reale", () => {
  test("pe o pagină de materie folosește cifrele reale din loader", () => {
    const h = cfg("/meditatii-germana").head({
      loaderData: { subjectName: "germană", subjectStats: stats },
    });
    expect(titlu(h)).toBe("Meditații germană: 408 anunțuri, tarif median 80 lei/oră");
    expect(desc(h)).toContain("Tarife reale: 15–150 lei/oră, median 80.");
    // og și twitter primesc același titlu
    expect(h.meta.filter((m) => m.content === titlu(h)).length).toBe(2);
  });

  test("fără date reale păstrează textul scris de mână", () => {
    const h = cfg("/meditatii-germana").head({
      loaderData: { subjectName: "germană", subjectStats: null },
    });
    expect(titlu(h)).toBe("Titlu scris de mână");
  });

  test("pe o pagină care nu e de materie nu pune niciodată cifrele altor pagini în titlu", () => {
    const h = cfg("/meditatii-copii").head({
      loaderData: { subjectName: "pentru copii", subjectStats: stats },
    });
    expect(titlu(h)).toBe("Titlu scris de mână");
    expect(desc(h)).toBe("Descriere scrisă de mână.");
  });
});
