import { describe, expect, test } from "bun:test";
import { parseReply, tutorPrompt } from "./profesor-ai-tutor.server";
import { PA_START, PA_TACERE, paEsteControl } from "./profesor-ai";

const cfg = { materie: "matematica", nivel: "liceu", durata: 30, obiectiv: "lectie" } as Parameters<typeof tutorPrompt>[0];

describe("tutorPrompt", () => {
  test("profesoara conduce ora și știe mesajele de control", () => {
    const p = tutorPrompt(cfg, 30);
    expect(p).toContain("intri direct în primul concept");
    expect(p).not.toContain("o singură întrebare despre ce vrea elevul");
    expect(p).toContain(PA_TACERE);
    expect(p).toContain(PA_START);
  });
  test("fiecare obiectiv are o regulă de pornire", () => {
    for (const obiectiv of ["explicatii", "lectie", "exercitii", "intrebari"]) {
      expect(tutorPrompt({ ...cfg, obiectiv } as typeof cfg, 15)).toContain("La pornire:");
    }
  });
});

test("mesajele de control nu apar în transcript", () => {
  expect(paEsteControl(PA_START)).toBe(true);
  expect(paEsteControl(PA_TACERE)).toBe(true);
  expect(paEsteControl("cât face doi plus doi")).toBe(false);
});

test("parseReply separă tabla", () => {
  expect(parseReply("Bună.\nTABLA: x² + 1")).toEqual({ vorbit: "Bună.", tabla: "x² + 1" });
});

describe("variatieOra", () => {
  test("picks a different topic position and opening per session seed", async () => {
    const { variatieOra } = await import("./profesor-ai-tutor.server");
    const a = variatieOra(1_700_000_000_000);
    const b = variatieOra(1_700_000_000_123);
    expect(a).toContain("codul orei");
    expect(a).not.toBe(b);
    expect(tutorPrompt(cfg, 15, 42)).toContain("Varietate obligatorie");
  });
});
