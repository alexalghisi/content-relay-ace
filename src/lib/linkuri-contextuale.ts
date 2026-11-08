// Linkuri interne contextuale pentru paginile SEO (înlocuiesc vechiul bloc sitewide de cuvinte-cheie).
// Fiecare pagină primește 6–10 linkuri legate de subiectul ei: aceeași materie în orașe mari sau
// apropiate, alte materii în același oraș, hub-ul materiei, subiectele BAC ale materiei și Profesorul AI.
// Pur (fără React / DB), ca să poată fi testat cu bun.
import { CITIES, citiesInCounty, getCityBySlug } from "@/data/cities";
import { ORASE_HUB } from "@/data/orase-hub";
import { getSubjectSeo } from "@/data/subjects-seo";

export interface LinkContextual {
  to: string;
  label: string;
}

export interface ContextPagina {
  materie?: string;
  oras?: string;
}

export const MIN_LINKURI = 6;
export const MAX_LINKURI = 10;
const MAX_RELATED = 5;

/** Hub-urile statice /meditatii-{materie} existente în src/routes. */
export const HUB_MATERIE: Record<string, string> = {
  matematica: "/meditatii-matematica",
  romana: "/meditatii-romana",
  engleza: "/meditatii-engleza",
  germana: "/meditatii-germana",
  franceza: "/meditatii-franceza",
  fizica: "/meditatii-fizica",
  chimie: "/meditatii-chimie",
  biologie: "/meditatii-biologie",
  informatica: "/meditatii-informatica",
  istorie: "/meditatii-istorie",
  geografie: "/meditatii-geografie",
};

/**
 * Pagina /subiecte-bac/materie/{slug} pentru fiecare materie care are subiecte oficiale în arhivă
 * (src/lib/bac-originals.json; un test verifică fiecare intrare).
 */
export const SUBIECTE_BAC_MATERIE: Record<string, { slug: string; label: string }> = {
  matematica: { slug: "matematica", label: "Subiecte BAC matematică cu barem" },
  romana: { slug: "romana", label: "Subiecte BAC română cu barem" },
  fizica: { slug: "fizica", label: "Subiecte BAC fizică cu barem" },
  chimie: { slug: "chimie", label: "Subiecte BAC chimie cu barem" },
  biologie: { slug: "biologie", label: "Subiecte BAC biologie cu barem" },
  informatica: { slug: "informatica", label: "Subiecte BAC informatică cu barem" },
  istorie: { slug: "istorie", label: "Subiecte BAC istorie cu barem" },
  geografie: { slug: "geografie", label: "Subiecte BAC geografie cu barem" },
  logica: { slug: "logica", label: "Subiecte BAC logică cu barem" },
  psihologie: { slug: "psihologie", label: "Subiecte BAC psihologie cu barem" },
  filosofie: { slug: "filosofie", label: "Subiecte BAC filosofie cu barem" },
  economie: { slug: "economie", label: "Subiecte BAC economie cu barem" },
};

/** Orașele cu cele mai multe căutări — folosite când nu există orașe în același județ. */
export const ORASE_MARI = ["bucuresti", "cluj-napoca", "timisoara", "iasi", "brasov", "constanta"];
/** Materiile cele mai căutate — folosite pentru „alte materii în același oraș”. */
export const MATERII_TOP = [
  "matematica",
  "romana",
  "engleza",
  "fizica",
  "chimie",
  "biologie",
  "informatica",
  "germana",
];

/** Deduce materia și orașul dintr-o cale de pagină SEO. */
export function contextDinCale(pathname: string): ContextPagina {
  const p = pathname.replace(/\/+$/, "") || "/";
  let m = /^\/meditatii\/([^/]+)\/([^/]+)$/.exec(p);
  if (m)
    return {
      materie: getSubjectSeo(m[1]!) ? m[1] : undefined,
      oras: getCityBySlug(m[2]!) ? m[2] : undefined,
    };
  m = /^\/(?:meditatii-in|profesori)\/([^/]+)$/.exec(p);
  if (m) return getCityBySlug(m[1]!) ? { oras: m[1] } : {};
  m = /^\/preturi-meditatii\/([^/]+)$/.exec(p);
  if (m) return getSubjectSeo(m[1]!) ? { materie: m[1] } : {};
  m = /^\/meditatii-([a-z-]+)$/.exec(p);
  if (m) {
    const rest = m[1]!;
    // Vechile pagini /meditatii-{oras} (acum 301 → /meditatii-in/{oras}); „bacau” e orașul, nu BAC.
    const hub = ORASE_HUB.find((o) => o.path === rest);
    if (hub) return { oras: hub.citySlug };
    // /meditatii-matematica, /meditatii-matematica-bac, /meditatii-engleza-online …
    const materie = Object.keys(HUB_MATERIE).find((s) => rest === s || rest.startsWith(`${s}-`));
    if (materie) return { materie };
  }
  return {};
}

const comboLabel = (materie: string, oras: string) => {
  const s = getSubjectSeo(materie)!;
  const c = getCityBySlug(oras)!;
  return `Meditații ${s.nameLower} în ${c.name}`;
};

/** Orașe „apropiate”: întâi cele din același județ, apoi orașele mari. */
function oraseApropiate(oras: string | undefined, n: number): string[] {
  const city = oras ? getCityBySlug(oras) : undefined;
  const lista = [...(city ? citiesInCounty(city).map((c) => c.slug) : []), ...ORASE_MARI];
  return [...new Set(lista)]
    .filter((s) => s !== oras && CITIES.some((c) => c.slug === s))
    .slice(0, n);
}

function linkuriPentru(ctx: ContextPagina): LinkContextual[] {
  const { materie, oras } = ctx;
  const subj = materie ? getSubjectSeo(materie) : undefined;
  const city = oras ? getCityBySlug(oras) : undefined;
  const out: LinkContextual[] = [];
  const bac = materie ? SUBIECTE_BAC_MATERIE[materie] : undefined;
  const ai = { to: "/profesor-ai", label: "Profesorul AI — explicații la orice oră" };

  if (subj && city) {
    for (const c of oraseApropiate(city.slug, 3))
      out.push({ to: `/meditatii/${subj.slug}/${c}`, label: comboLabel(subj.slug, c) });
    for (const s of MATERII_TOP.filter((x) => x !== subj.slug).slice(0, 3))
      out.push({ to: `/meditatii/${s}/${city.slug}`, label: comboLabel(s, city.slug) });
    if (HUB_MATERIE[subj.slug])
      out.push({
        to: HUB_MATERIE[subj.slug]!,
        label: `Meditații ${subj.nameLower} — toată țara și online`,
      });
    out.push({ to: `/meditatii-in/${city.slug}`, label: `Toate meditațiile din ${city.name}` });
    if (bac) out.push({ to: `/subiecte-bac/materie/${bac.slug}`, label: bac.label });
    out.push(ai);
    out.push({
      to: `/preturi-meditatii/${subj.slug}`,
      label: `Prețuri meditații ${subj.nameLower}`,
    });
  } else if (subj) {
    if (HUB_MATERIE[subj.slug])
      out.push({ to: HUB_MATERIE[subj.slug]!, label: `Meditații ${subj.nameLower}` });
    for (const c of ORASE_MARI.slice(0, 4))
      out.push({ to: `/meditatii/${subj.slug}/${c}`, label: comboLabel(subj.slug, c) });
    if (bac) out.push({ to: `/subiecte-bac/materie/${bac.slug}`, label: bac.label });
    out.push({
      to: `/preturi-meditatii/${subj.slug}`,
      label: `Prețuri meditații ${subj.nameLower}`,
    });
    out.push({ to: "/meditatii-online", label: "Meditații online" });
    out.push(ai);
  } else if (city) {
    out.push({ to: `/meditatii-in/${city.slug}`, label: `Profesori și cereri din ${city.name}` });
    for (const s of MATERII_TOP.slice(0, 4))
      out.push({ to: `/meditatii/${s}/${city.slug}`, label: comboLabel(s, city.slug) });
    for (const c of oraseApropiate(city.slug, 2))
      out.push({ to: `/meditatii-in/${c}`, label: `Meditații ${getCityBySlug(c)!.name}` });
    out.push({ to: "/meditatii-online", label: "Meditații online" });
    out.push(ai);
  } else {
    for (const s of ["matematica", "romana", "engleza", "fizica", "chimie"])
      out.push({ to: HUB_MATERIE[s]!, label: `Meditații ${getSubjectSeo(s)!.nameLower}` });
    out.push({ to: "/meditatii-bac", label: "Meditații BAC" });
    out.push({ to: "/meditatii-online", label: "Meditații online" });
    out.push({ to: "/subiecte-bac", label: "Subiecte BAC cu barem" });
    out.push({ to: "/preturi-meditatii/matematica", label: "Prețuri meditații matematică" });
    out.push(ai);
  }
  return out;
}

/**
 * 6–10 linkuri contextuale pentru o pagină: întâi până la 5 alese de mână (`related`), apoi cele
 * deduse din materie/oraș; fără dubluri și fără un link către pagina curentă.
 */
export function linkuriContextuale(opts: {
  cale: string;
  context?: ContextPagina;
  related?: LinkContextual[];
}): LinkContextual[] {
  const curent = opts.cale.replace(/\/+$/, "") || "/";
  const ctx = opts.context ?? contextDinCale(curent);
  const vazute = new Set<string>([curent]);
  const out: LinkContextual[] = [];
  const adauga = (lista: LinkContextual[], limita: number) => {
    for (const l of lista) {
      if (out.length >= limita) return;
      if (vazute.has(l.to)) continue;
      vazute.add(l.to);
      out.push(l);
    }
  };
  // Cel mult 5 linkuri alese de mână, ca să rămână loc pentru cele contextuale (materie/oraș).
  const related = opts.related ?? [];
  adauga(related.slice(0, MAX_RELATED), MAX_LINKURI);
  adauga(linkuriPentru(ctx), MAX_LINKURI);
  adauga(related.slice(MAX_RELATED), MAX_LINKURI);
  // Un context îngust (sau multe dubluri) se completează cu linkurile generale până la minim.
  adauga(linkuriPentru({}), MIN_LINKURI);
  return out;
}
