// Titlul <title> al paginii /anunt/{slug}. Titlul scris de profesor rămâne primul; dacă nu
// numește materia anunțului („Meditatii pentru copii”), adăugăm materia și locația, ca pagina
// să poată fi găsită pe căutarea reală și ca titlurile anunțurilor aceluiași profesor să difere.

const fara = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

// „Limba Română” → „romana”: cuvântul distinctiv al materiei, fără „limba”.
const cuvinteMaterie = (materie: string) =>
  fara(materie)
    .split(" ")
    .filter((w) => w.length > 2 && w !== "limba");

export function titluAnunt(ad: {
  title: string;
  subject_name?: string | null;
  location?: string | null;
  is_online?: boolean | null;
}): string {
  const titlu = ad.title.trim();
  const materie = ad.subject_name?.trim();
  if (!materie) return titlu;
  const t = ` ${fara(titlu)} `;
  const cuv = cuvinteMaterie(materie);
  if (!cuv.length || cuv.some((w) => t.includes(` ${w}`))) return titlu;
  const unde = ad.location?.trim() || (ad.is_online ? "Online" : "");
  const sufix = unde ? `${materie}, ${unde}` : materie;
  // Locația se renunță dacă ar lungi prea mult titlul; materia rămâne.
  return `${titlu} — ${(titlu + sufix).length > 75 ? materie : sufix}`;
}
