// Filtrele `.or()` din Supabase ajung nemodificate în gramatica PostgREST, unde virgula
// separă condițiile. Orice termen care conține caractere rezervate trebuie citat.

const escapeazaValoare = (termen: string) => termen.replace(/["\\]/g, "\\$&");

/** Construiește un filtru `.or()`: coloana conține (case-insensitive) oricare dintre termeni. */
export function filtruContineOricare(coloana: string, termeni: readonly string[]): string {
  return termeni.map((t) => `${coloana}.ilike."%${escapeazaValoare(t)}%"`).join(",");
}
