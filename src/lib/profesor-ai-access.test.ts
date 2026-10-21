import { describe, expect, it } from "bun:test";
import { poateTestaProfesorAi } from "./profesor-ai-access";

describe("Profesor AI — owner-only preview", () => {
  it("allows the verified alexalghisi@gmail.com account", () => {
    expect(poateTestaProfesorAi("2760ea44-3f28-47ff-b3b1-a544f245aeea")).toBe(true);
  });
  it("denies every other account, including email impersonation", () => {
    expect(poateTestaProfesorAi("11111111-1111-4111-8111-111111111111")).toBe(false);
    expect(poateTestaProfesorAi("alexalghisi@gmail.com")).toBe(false);
  });
  it("denies anonymous visitors", () => {
    expect(poateTestaProfesorAi(null)).toBe(false);
    expect(poateTestaProfesorAi(undefined)).toBe(false);
  });
});