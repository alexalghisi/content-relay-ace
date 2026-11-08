// Articole de blog scrise ca fișiere Markdown în repo: src/content/blog/{yyyy-mm-dd}-{slug}.md
// (formatul e descris în src/content/blog/README.md). Logică pură — parsare, validare, combinare cu
// articolele din baza de date și intrările de sitemap — ca să poată fi testată cu bun fără Vite.

export interface LinkArticol {
  to: string;
  label: string;
}

export interface PostMarkdown {
  slug: string;
  title: string;
  /** Meta description + rezumatul din listă. */
  description: string;
  /** Data publicării, YYYY-MM-DD (din numele fișierului). */
  date: string;
  /** Data ultimei actualizări, YYYY-MM-DD (opțional). */
  updated: string | null;
  category: string | null;
  tags: string[];
  related: LinkArticol[];
  content: string;
}

/** Forma comună a unui articol în listă (DB sau fișier). */
export interface ArticolLista {
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  published_at: string | null;
  tags: string[] | null;
}

export const NUME_FISIER = /^(\d{4}-\d{2}-\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;
const DATA = /^\d{4}-\d{2}-\d{2}$/;

type Valoare = string | string[];

const fara = (v: string) => {
  const t = v.trim();
  return (t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))
    ? t.slice(1, -1)
    : t;
};

/** Frontmatter YAML simplu: `cheie: valoare`, `cheie: [a, b]` și liste `cheie:` + rânduri `  - element`. */
export function parseFrontmatter(raw: string): { data: Record<string, Valoare>; body: string } {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);
  if (!m) throw new Error("Lipsește frontmatter-ul (--- … ---) de la începutul fișierului");
  const data: Record<string, Valoare> = {};
  let lista: string | null = null;
  for (const linie of m[1]!.split("\n")) {
    if (!linie.trim() || linie.trim().startsWith("#")) continue;
    const item = /^\s+-\s+(.*)$/.exec(linie);
    if (item) {
      if (!lista) throw new Error(`Element de listă fără cheie: "${linie.trim()}"`);
      (data[lista] as string[]).push(fara(item[1]!));
      continue;
    }
    const kv = /^([a-zA-Z_][\w-]*):\s*(.*)$/.exec(linie);
    if (!kv) throw new Error(`Rând de frontmatter invalid: "${linie}"`);
    const [, cheie, valoare] = kv as unknown as [string, string, string];
    if (valoare === "") {
      data[cheie] = [];
      lista = cheie;
    } else if (valoare.startsWith("[") && valoare.endsWith("]")) {
      data[cheie] = valoare.slice(1, -1).split(",").map(fara).filter(Boolean);
      lista = null;
    } else {
      data[cheie] = fara(valoare);
      lista = null;
    }
  }
  return { data, body: m[2]!.trim() };
}

const text = (v: Valoare | undefined) => (typeof v === "string" ? v.trim() : "");
const lista = (v: Valoare | undefined) =>
  Array.isArray(v) ? v : typeof v === "string" && v ? [v] : [];

/** Parsează și validează un fișier; aruncă o eroare clară dacă ceva lipsește. */
export function postDinFisier(numeFisier: string, raw: string): PostMarkdown {
  const nume = numeFisier.split("/").pop()!;
  const fm = NUME_FISIER.exec(nume);
  if (!fm)
    throw new Error(
      `${nume}: numele trebuie să fie yyyy-mm-dd-slug.md (litere mici, cifre, cratime)`,
    );
  const [, dataFisier, slug] = fm as unknown as [string, string, string];
  const { data, body } = parseFrontmatter(raw);
  const title = text(data.title);
  const description = text(data.description);
  const date = text(data.date) || dataFisier;
  const updated = text(data.updated) || null;
  if (!title) throw new Error(`${nume}: lipsește title`);
  if (!description) throw new Error(`${nume}: lipsește description`);
  if (date !== dataFisier)
    throw new Error(`${nume}: date (${date}) nu se potrivește cu data din numele fișierului`);
  if (updated && (!DATA.test(updated) || updated < date))
    throw new Error(`${nume}: updated invalid`);
  if (!body) throw new Error(`${nume}: articolul nu are conținut`);
  const related = lista(data.related).map((r) => {
    const [to, ...rest] = r.split("|");
    const label = rest.join("|").trim();
    if (!to?.trim().startsWith("/") || !label)
      throw new Error(`${nume}: related „${r}” trebuie să fie „/cale | Etichetă”`);
    return { to: to.trim(), label };
  });
  return {
    slug,
    title,
    description,
    date,
    updated,
    category: text(data.category) || null,
    tags: lista(data.tags),
    related,
    content: body,
  };
}

/** Data de azi în România (YYYY-MM-DD) — articolele cu dată viitoare apar abia în ziua lor. */
export const aziRo = (d = new Date()) =>
  d.toLocaleDateString("sv-SE", { timeZone: "Europe/Bucharest" });

/**
 * Articolele publicate (data ≤ azi), cele mai noi primele. Un fișier invalid e sărit (și raportat),
 * ca să nu oprească tot blogul; testele bun verifică toate fișierele din repo.
 */
export function postariPublicate(
  fisiere: Record<string, string>,
  azi: string,
  laEroare?: (e: Error) => void,
): PostMarkdown[] {
  const out: PostMarkdown[] = [];
  for (const [cale, raw] of Object.entries(fisiere)) {
    if (!cale.endsWith(".md") || /\/README\.md$/i.test(cale)) continue;
    try {
      const p = postDinFisier(cale, raw);
      if (p.date <= azi) out.push(p);
    } catch (e) {
      laEroare?.(e as Error);
    }
  }
  return out.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug),
  );
}

export const caArticolLista = (p: PostMarkdown): ArticolLista => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.description,
  category: p.category,
  published_at: p.date,
  tags: p.tags,
});

/** Lista blogului: articolele din fișiere + cele din DB, fără dubluri (fișierul câștigă), cele mai noi primele. */
export function combinaArticole(db: ArticolLista[], md: PostMarkdown[]): ArticolLista[] {
  const slugMd = new Set(md.map((p) => p.slug));
  return [...md.map(caArticolLista), ...db.filter((p) => !slugMd.has(p.slug))].sort((a, b) =>
    (b.published_at ?? "").localeCompare(a.published_at ?? ""),
  );
}

/** Intrările de sitemap pentru /blog/{slug}: fișiere + DB, fără dubluri, cu lastmod real. */
export function blogSitemapEntries(
  db: { slug: string; updated_at: string | null }[],
  md: PostMarkdown[],
): { path: string; lastmod: string | null }[] {
  const out: { path: string; lastmod: string | null }[] = md.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: p.updated ?? p.date,
  }));
  const vazute = new Set(md.map((p) => p.slug));
  for (const p of db) {
    if (vazute.has(p.slug)) continue;
    vazute.add(p.slug);
    out.push({
      path: `/blog/${p.slug}`,
      lastmod: p.updated_at ? new Date(p.updated_at).toISOString().slice(0, 10) : null,
    });
  }
  return out;
}
