import { getComboStats } from "@/lib/market-stats.functions";
import { getPaginaMaterieData, type PaginaMaterieData } from "@/lib/pagina-materie.functions";

const NAMES: Record<string, string> = {
  matematica: "matematică", romana: "română", engleza: "engleză", informatica: "informatică",
  biologie: "biologie", chimie: "chimie", fizica: "fizică", germana: "germană", franceza: "franceză",
  geografie: "geografie", istorie: "istorie",
};

export const subjectNameFor = (slug: string) => NAMES[slug];

/** Route loader: real national aggregates for a /meditatii-{materie} page (all cities + online). */
export function subjectLoader(slug: string) {
  return async () => {
    const name = NAMES[slug];
    if (!name) return { subjectStats: null };
    // Anunțurile reale și orașele: o eroare aici nu ascunde statisticile (și invers).
    const [stats, materie] = await Promise.allSettled([
      getComboStats({ data: { subjectSlugs: [slug], subjectName: name, cityName: "România", cityMatch: [] } }),
      getPaginaMaterieData({ data: { materie: slug } }),
    ]);
    const paginaMaterie: PaginaMaterieData | null = materie.status === "fulfilled" ? materie.value : null;
    if (materie.status === "rejected") console.error("subject page data failed", materie.reason);
    return {
      subjectStats: stats.status === "fulfilled" ? stats.value : null,
      subjectName: name,
      subjectSlug: slug,
      paginaMaterie,
    };
  };
}
