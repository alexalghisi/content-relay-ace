export const BAC_MATH_YEARS = Array.from({ length: 17 }, (_, i) => 2026 - i);

export const BAC_SESSIONS: Record<string, string> = {
  simulare: "Simulare națională",
  "iunie-iulie": "Iunie–Iulie",
  "august-septembrie": "August–Septembrie",
  rezerva: "Rezervă",
  model: "Model oficial",
  "sesiune-speciala": "Sesiune specială",
  antrenament: "Test de antrenament",
};

/** Hub pages that group every profile/variant of one exam subject. */
export const BAC_AGGREGATES: Record<string, { prefix: string; name: string }> = {
  matematica: { prefix: "matematica-", name: "Matematică" },
  romana: { prefix: "romana", name: "Limba și literatura română" },
  biologie: { prefix: "biologie-", name: "Biologie" },
  chimie: { prefix: "chimie-", name: "Chimie" },
  fizica: { prefix: "fizica", name: "Fizică" },
};

export function matchesBacSubject(subject: string, requested: string) {
  const agg = BAC_AGGREGATES[requested];
  return subject === requested || (agg !== undefined && subject.startsWith(agg.prefix));
}

export function sameBacPaper(
  a: {
    subject_slug: string;
    year: number;
    session: string;
    variant: string | null;
    profil: string | null;
  },
  b: {
    subject_slug: string;
    year: number;
    session: string;
    variant: string | null;
    profil: string | null;
  },
) {
  return (
    a.subject_slug === b.subject_slug &&
    a.year === b.year &&
    a.session === b.session &&
    a.variant === b.variant &&
    a.profil === b.profil
  );
}

export function mergeBacRows<T extends { slug: string | null; source_url?: string | null }>(
  existing: T[],
  originals: T[],
): T[] {
  const byKey = new Map<string, T>();
  for (const row of [...existing, ...originals]) {
    const key = row.slug ?? row.source_url;
    if (key) byKey.set(key, row);
  }
  return [...byKey.values()];
}
