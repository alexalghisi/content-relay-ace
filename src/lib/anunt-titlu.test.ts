import { describe, expect, test } from "bun:test";
import { titluAnunt } from "./anunt-titlu";

describe("titluAnunt", () => {
  test("păstrează titlul care numește deja materia (cu sau fără diacritice)", () => {
    expect(
      titluAnunt({ title: "Meditatii engleza pentru orice varsta", subject_name: "Limba Engleză" }),
    ).toBe("Meditatii engleza pentru orice varsta");
    expect(
      titluAnunt({
        title: "Meditații matematică BAC",
        subject_name: "Matematică",
        location: "Cluj",
      }),
    ).toBe("Meditații matematică BAC");
  });

  test("adaugă materia și locația când titlul nu numește materia", () => {
    expect(
      titluAnunt({
        title: "Meditatii pentru copii",
        subject_name: "Limba Engleză",
        location: "Sector 6, București",
      }),
    ).toBe("Meditatii pentru copii — Limba Engleză, Sector 6, București");
    expect(
      titluAnunt({ title: "Lecții pentru cei mici", subject_name: "Matematică", is_online: true }),
    ).toBe("Lecții pentru cei mici — Matematică, Online");
  });

  test("anunțurile aceluiași profesor pe materii diferite primesc titluri diferite", () => {
    const t = "Meditatii desen si pictura/ admitere arte plastice";
    const a = titluAnunt({
      title: t,
      subject_name: "Limba Română",
      location: "Sector 6, București / Online",
    });
    const b = titluAnunt({
      title: t,
      subject_name: "Matematică",
      location: "Sector 6, București / Online",
    });
    expect(a).not.toBe(b);
    expect(a.startsWith(t)).toBe(true);
  });

  test("renunță la locație dacă titlul ar deveni prea lung, nu la materie", () => {
    const r = titluAnunt({
      title: "Meditatii desen si pictura/ admitere arte plastice",
      subject_name: "Limba Română",
      location: "Sector 6, București / Online",
    });
    expect(r).toBe("Meditatii desen si pictura/ admitere arte plastice — Limba Română");
  });

  test("fără materie, titlul rămâne neschimbat", () => {
    expect(titluAnunt({ title: "Meditatii", subject_name: null })).toBe("Meditatii");
  });

  test("nu confundă un cuvânt care doar începe la fel", () => {
    // „Informatică” nu e numită de „informare”; prefix pe cuvânt întreg, nu substring oriunde
    expect(titluAnunt({ title: "Lecții de reformare", subject_name: "Fizică" })).toBe(
      "Lecții de reformare — Fizică",
    );
  });
});
