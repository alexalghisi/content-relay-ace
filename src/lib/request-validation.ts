// Mirrors the "validated_request_submission" INSERT policy on student_requests.
export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const clip = (v: string | null | undefined, max: number) => {
  const t = (v ?? "").trim();
  return t ? t.slice(0, max) : null;
};

export function validateRequest(r: { subject: string; name: string; email: string; details?: string; phone?: string; budget?: number | null }): string | null {
  const subject = r.subject.trim();
  const name = r.name.trim();
  if (subject.length < 2 || subject.length > 120) return "Alege o materie validă (2–120 caractere).";
  if (name.length < 2 || name.length > 120) return "Numele trebuie să aibă între 2 și 120 de caractere.";
  if (!EMAIL_RE.test(r.email.trim())) return "Adresa de email nu pare corectă (ex: nume@exemplu.ro).";
  if ((r.details ?? "").trim().length > 4000) return "Detaliile pot avea cel mult 4000 de caractere.";
  if ((r.phone ?? "").trim().length > 40) return "Numărul de telefon e prea lung.";
  if (r.budget != null && (Number.isNaN(r.budget) || r.budget < 0 || r.budget > 10000)) return "Bugetul trebuie să fie între 0 și 10.000 lei.";
  return null;
}
