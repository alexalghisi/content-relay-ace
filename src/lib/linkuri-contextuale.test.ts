/// <reference types="bun" />
import { describe, expect, it } from "bun:test";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { CITIES } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { ORASE_HUB } from "@/data/orase-hub";
import { SCURTATURI_ACASA } from "@/data/cautari-populare";
import {
  HUB_MATERIE,
  MAX_LINKURI,
  MIN_LINKURI,
  SUBIECTE_BAC_MATERIE,
  contextDinCale,
  linkuriContextuale,
} from "./linkuri-contextuale";
import { rutaExista, rutaRedirectata } from "./rute-test-utils";

const BAC = JSON.parse(readFileSync("src/lib/bac-originals.json", "utf8")) as {
  subject_slug: string;
}[];

describe("contextDinCale", () => {
  it("deduce materia și orașul din URL-urile SEO", () => {
    expect(contextDinCale("/meditatii/matematica/timisoara")).toEqual({
      materie: "matematica",
      oras: "timisoara",
    });
    expect(contextDinCale("/meditatii-in/cluj-napoca")).toEqual({ oras: "cluj-napoca" });
    expect(contextDinCale("/meditatii-matematica")).toEqual({ materie: "matematica" });
    expect(contextDinCale("/meditatii-matematica-bac")).toEqual({ materie: "matematica" });
    expect(contextDinCale("/meditatii-engleza-online")).toEqual({ materie: "engleza" });
    expect(contextDinCale("/meditatii-timisoara")).toEqual({ oras: "timisoara" });
    expect(contextDinCale("/meditatii-cluj")).toEqual({ oras: "cluj-napoca" });
    expect(contextDinCale("/preturi-meditatii/chimie")).toEqual({ materie: "chimie" });
    expect(contextDinCale("/meditatii-bac")).toEqual({});
    expect(contextDinCale("/meditatii/inexistent/timisoara")).toEqual({
      materie: undefined,
      oras: "timisoara",
    });
  });
});

describe("linkuriContextuale", () => {
  const cazuri: string[] = [
    "/",
    "/meditatii-bac",
    "/meditatii-online",
    "/anunturi-meditatii",
    ...Object.values(HUB_MATERIE),
    ...ORASE_HUB.map((o) => `/meditatii-${o.path}`),
    ...CITIES.map((c) => `/meditatii-in/${c.slug}`),
    ...SUBJECTS_SEO.flatMap((s) => CITIES.map((c) => `/meditatii/${s.slug}/${c.slug}`)),
  ];

  it("dă 6–10 linkuri unice, fără pagina curentă, pe fiecare pagină", () => {
    const gresite: string[] = [];
    for (const cale of cazuri) {
      const l = linkuriContextuale({ cale });
      const hrefs = l.map((x) => x.to);
      if (l.length < MIN_LINKURI || l.length > MAX_LINKURI)
        gresite.push(`${cale}: ${l.length} linkuri`);
      if (new Set(hrefs).size !== hrefs.length) gresite.push(`${cale}: dubluri`);
      if (hrefs.includes(cale)) gresite.push(`${cale}: link către ea însăși`);
    }
    expect(gresite).toEqual([]);
  });

  it("duce doar la rute existente, niciodată la pagini redirecționate", () => {
    const toate = new Set(cazuri.flatMap((cale) => linkuriContextuale({ cale }).map((l) => l.to)));
    const gresite = [...toate].filter((to) => !rutaExista(to) || rutaRedirectata(to));
    expect(gresite).toEqual([]);
  });

  it("pe o pagină materie × oraș leagă aceeași materie în alte orașe, alte materii în oraș, hub-ul, BAC și Profesorul AI", () => {
    const l = linkuriContextuale({ cale: "/meditatii/matematica/timisoara" }).map((x) => x.to);
    expect(l.some((t) => /^\/meditatii\/matematica\/(?!timisoara)/.test(t))).toBe(true);
    expect(l.some((t) => /^\/meditatii\/(?!matematica)[^/]+\/timisoara$/.test(t))).toBe(true);
    expect(l).toContain("/meditatii-matematica");
    expect(l).toContain("/meditatii-in/timisoara");
    expect(l).toContain("/subiecte-bac/materie/matematica");
    expect(l).toContain("/profesor-ai");
  });

  it("pune întâi linkurile alese de mână și le păstrează fără dubluri", () => {
    const l = linkuriContextuale({
      cale: "/meditatii-chimie",
      related: [
        { to: "/meditatii-admitere-medicina", label: "Admitere medicină" },
        { to: "/meditatii-admitere-medicina", label: "dublură" },
      ],
    });
    expect(l[0]).toEqual({ to: "/meditatii-admitere-medicina", label: "Admitere medicină" });
    expect(l.filter((x) => x.to === "/meditatii-admitere-medicina")).toHaveLength(1);
  });

  it("hub-urile de materie și paginile de subiecte BAC există cu adevărat", () => {
    for (const p of Object.values(HUB_MATERIE))
      expect(existsSync(join("src/routes", `${p.slice(1)}.tsx`))).toBe(true);
    const materiiBac = new Set(BAC.map((r) => r.subject_slug));
    for (const { slug } of Object.values(SUBIECTE_BAC_MATERIE)) {
      expect(
        [...materiiBac].some(
          (m) =>
            m === slug || m.startsWith(`${slug}-`) || (slug === "romana" && m.startsWith("romana")),
        ),
      ).toBe(true);
    }
  });
});

describe("blocul sitewide „Căutări populare” a dispărut", () => {
  const surse = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory()
        ? surse(join(dir, e.name))
        : /\.tsx?$/.test(e.name) && !e.name.includes(".test.")
          ? [join(dir, e.name)]
          : [],
    );
  const fisiere = surse("src").filter((f) => !f.endsWith("routeTree.gen.ts"));

  it("nicio pagină nu mai randează lista de ~60 de cuvinte-cheie", () => {
    const cuBloc = fisiere.filter((f) =>
      /CautariPopulare|CAUTARI_POPULARE|Căutări populare/.test(readFileSync(f, "utf8")),
    );
    expect(cuBloc).toEqual([]);
  });

  it("SeoLanding folosește linkuri contextuale, nu un bloc sitewide", () => {
    const src = readFileSync("src/components/seo-landing.tsx", "utf8");
    expect(src).toContain("linkuriContextuale");
    expect(src).not.toContain("cautari-populare");
  });

  it("scurtăturile sunt folosite doar pe pagina principală, organizate și fără linkuri repetate", () => {
    const folosiri = fisiere.filter((f) => readFileSync(f, "utf8").includes("ScurtaturiAcasa"));
    expect(folosiri.sort()).toEqual([
      "src/components/cautari-populare.tsx",
      "src/routes/index.tsx",
    ]);
    const hrefs = SCURTATURI_ACASA.flatMap((g) => g.linkuri.map((l) => l.href));
    expect(hrefs.length).toBeLessThanOrEqual(24);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(hrefs.filter((h) => !rutaExista(h) || rutaRedirectata(h))).toEqual([]);
  });

  it("paginile locale nu mai afișează textele „goale” („Poți fi primul”, „Încă nu avem…”)", () => {
    const locale = [
      "src/components/market-data.tsx",
      "src/routes/meditatii.$materie.$oras.tsx",
      "src/routes/meditatii-in.$oras.tsx",
    ];
    for (const f of locale) {
      const src = readFileSync(f, "utf8");
      expect(src).not.toMatch(/Poți fi primul|Încă nu avem|Încă nu există/);
    }
  });
});
