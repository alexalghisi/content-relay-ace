/** Step-by-step solutions, one Markdown file per paper: src/content/rezolvari-bac/{an}-{materie}-{lucrare}.md */
const REZOLVARI = import.meta.glob("/src/content/rezolvari-bac/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function rezolvareFor(key: string): string | null {
  return REZOLVARI[`/src/content/rezolvari-bac/${key}.md`] ?? null;
}

export function hasRezolvare(key: string) {
  return rezolvareFor(key) !== null;
}
