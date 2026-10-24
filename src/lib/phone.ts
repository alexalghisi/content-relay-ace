/** Normalizează mobilele românești; 07… devine 407… pentru SMS. */
export function normalizeRoPhone(raw: string | null | undefined): string | null {
  if (!raw) return null;
  let phone = raw.trim().replace(/[\s().-]/g, "");
  if (phone.startsWith("+")) phone = phone.slice(1);
  if (phone.startsWith("00")) phone = phone.slice(2);
  if (/^07\d{8}$/.test(phone)) phone = "40" + phone.slice(1);
  return /^407\d{8}$/.test(phone) ? phone : null;
}

/** Afișează prefixul complet numai pentru un număr valid, fără a altera unul incomplet. */
export function formatRoPhone(raw: string): string {
  const phone = normalizeRoPhone(raw);
  return phone ? `+${phone}` : raw;
}