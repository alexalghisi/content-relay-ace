import { useEffect, useState } from "react";

/** Next slot in a cycle: never the same as the previous visit. */
export function urmatorulIndex(precedent: number | null, total: number): number {
  if (total <= 1) return 0;
  if (precedent === null || !Number.isInteger(precedent) || precedent < 0) return Math.floor(Math.random() * total);
  return (precedent + 1) % total;
}

/** Picks a different variant on every visit (browser storage); null before hydration. */
export function useVariantaRotativa(cheie: string, total: number): number | null {
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    let precedent: number | null = null;
    try {
      const v = localStorage.getItem(cheie);
      if (v !== null && /^\d+$/.test(v)) precedent = Number(v);
    } catch { /* storage optional */ }
    const nou = urmatorulIndex(precedent, total);
    try { localStorage.setItem(cheie, String(nou)); } catch { /* storage optional */ }
    setIdx(nou);
  }, [cheie, total]);
  return idx;
}
