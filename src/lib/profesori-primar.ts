// Nivelul „Primar” din profilurile profesorilor (aceeași etichetă ca în formularul /profesor).
export const NIVEL_PRIMAR = "Primar";

/** Materiile la care se cer de obicei meditații în ciclul primar (/meditatii-copii). */
export const MATERII_PRIMAR = ["matematica", "romana", "engleza", "germana", "franceza"];

/** Câți profesori au „Primar” printre nivelurile predate; null când datele lipsesc. */
export function profesoriPrimar(
  teachersByLevel: { level: string; count: number }[] | null | undefined,
): number | null {
  if (!teachersByLevel) return null;
  return teachersByLevel.find((l) => l.level === NIVEL_PRIMAR)?.count ?? 0;
}
