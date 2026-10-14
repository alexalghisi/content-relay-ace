import { getComboStats } from "@/lib/market-stats.functions";

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
    try {
      const subjectStats = await getComboStats({ data: { subjectSlugs: [slug], subjectName: name, cityName: "România", cityMatch: [] } });
      return { subjectStats, subjectName: name };
    } catch {
      return { subjectStats: null };
    }
  };
}
