/// <reference types="bun" />
import { describe, expect, it } from "bun:test";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  blogSitemapEntries,
  combinaArticole,
  parseFrontmatter,
  postDinFisier,
  postariPublicate,
  type PostMarkdown,
} from "./blog-markdown";
import { rutaExista, rutaRedirectata } from "./rute-test-utils";

const DIR = "src/content/blog";
const RAW = `---
title: "Titlu: cu două puncte"
description: Un rezumat scurt
date: 2026-11-08
category: BAC
tags: [fizica, "bac 2027"]
related:
  - /subiecte-bac/materie/fizica | Subiecte BAC fizică
---

## Primul titlu

Text.
`;

describe("parseFrontmatter / postDinFisier", () => {
  it("citește scalari, liste inline și liste pe rânduri", () => {
    const { data, body } = parseFrontmatter(RAW);
    expect(data.title).toBe("Titlu: cu două puncte");
    expect(data.tags).toEqual(["fizica", "bac 2027"]);
    expect(data.related).toEqual(["/subiecte-bac/materie/fizica | Subiecte BAC fizică"]);
    expect(body.startsWith("## Primul titlu")).toBe(true);
  });

  it("ia slug-ul și data din numele fișierului", () => {
    const p = postDinFisier("/src/content/blog/2026-11-08-test-articol.md", RAW);
    expect(p.slug).toBe("test-articol");
    expect(p.date).toBe("2026-11-08");
    expect(p.category).toBe("BAC");
    expect(p.related).toEqual([
      { to: "/subiecte-bac/materie/fizica", label: "Subiecte BAC fizică" },
    ]);
  });

  it("respinge fișierele invalide cu un mesaj clar", () => {
    expect(() => postDinFisier("articol.md", RAW)).toThrow(/yyyy-mm-dd-slug/);
    expect(() => postDinFisier("2026-11-09-x.md", RAW)).toThrow(/nu se potrivește/);
    expect(() => postDinFisier("2026-11-08-x.md", "fără frontmatter")).toThrow(/frontmatter/);
    expect(() => postDinFisier("2026-11-08-x.md", RAW.replace(/description:.*\n/, ""))).toThrow(
      /description/,
    );
    expect(() =>
      postDinFisier(
        "2026-11-08-x.md",
        RAW.replace("/subiecte-bac/materie/fizica |", "fara-slash |"),
      ),
    ).toThrow(/related/);
  });

  it("nu publică articolele cu dată din viitor și sare peste README și fișierele invalide", () => {
    const erori: string[] = [];
    const lista = postariPublicate(
      {
        "/src/content/blog/2026-11-08-azi.md": RAW,
        "/src/content/blog/2026-11-09-maine.md": RAW.replace("2026-11-08", "2026-11-09"),
        "/src/content/blog/README.md": "# doc",
        "/src/content/blog/2026-11-07-stricat.md": "nimic",
      },
      "2026-11-08",
      (e) => erori.push(e.message),
    );
    expect(lista.map((p) => p.slug)).toEqual(["azi"]);
    expect(erori).toHaveLength(1);
  });
});

describe("combinare cu articolele din DB și sitemap", () => {
  const md = postDinFisier("2026-11-08-nou.md", RAW);
  const db = [
    {
      slug: "nou",
      title: "vechi din DB",
      excerpt: null,
      category: null,
      published_at: "2026-01-01",
      tags: null,
    },
    {
      slug: "alt",
      title: "Alt articol",
      excerpt: "x",
      category: null,
      published_at: "2026-10-01T10:00:00Z",
      tags: null,
    },
  ];

  it("lista conține ambele surse, fără dubluri, cea mai nouă prima; fișierul câștigă la același slug", () => {
    const l = combinaArticole(db, [md]);
    expect(l.map((p) => p.slug)).toEqual(["nou", "alt"]);
    expect(l[0]!.title).toBe("Titlu: cu două puncte");
  });

  it("sitemap-ul include articolele Markdown cu lastmod real și nu dublează slug-urile", () => {
    const e = blogSitemapEntries(
      [
        { slug: "nou", updated_at: null },
        { slug: "alt", updated_at: "2026-10-02T08:00:00Z" },
      ],
      [md],
    );
    expect(e).toEqual([
      { path: "/blog/nou", lastmod: "2026-11-08" },
      { path: "/blog/alt", lastmod: "2026-10-02" },
    ]);
  });

  it("ruta sitemap.xml adaugă articolele din repo independent de baza de date", () => {
    const sm = readFileSync("src/routes/sitemap[.]xml.ts", "utf8");
    expect(sm).toContain("blogSitemapEntries(dbPosts, postariMarkdown())");
    // în afara try-ului pentru DB: un DB căzut nu scoate articolele din repo din sitemap
    expect(sm.indexOf("blogSitemapEntries(dbPosts")).toBeGreaterThan(
      sm.indexOf('console.error("sitemap dynamic fetch failed"'),
    );
  });
});

describe("articolele din src/content/blog", () => {
  const fisiere = readdirSync(DIR).filter((f) => f.endsWith(".md") && f !== "README.md");
  const postari: PostMarkdown[] = fisiere.map((f) =>
    postDinFisier(f, readFileSync(join(DIR, f), "utf8")),
  );

  it("există și sunt toate valide", () => {
    expect(postari.length).toBeGreaterThanOrEqual(3);
    expect(new Set(postari.map((p) => p.slug)).size).toBe(postari.length);
  });

  it("au 900–1400 de cuvinte, descriere de lungime bună și fără clișee", () => {
    const cliseu =
      /în era digitală|în concluzie|nu în ultimul rând|în ziua de azi|călători[ae] (ta|spre)|lumea modernă|joacă un rol crucial/i;
    for (const p of postari) {
      const cuvinte = p.content.replace(/!\[[^\]]*\]\([^)]*\)/g, " ").split(/\s+/).filter(Boolean).length;
      expect({ slug: p.slug, ok: cuvinte >= 900 && cuvinte <= 1400 }).toEqual({
        slug: p.slug,
        ok: true,
      });
      expect(p.description.length).toBeGreaterThanOrEqual(120);
      expect(p.description.length).toBeLessThanOrEqual(170);
      expect(p.content).not.toMatch(cliseu);
    }
  });

  it("linkurile interne (din text și din related) duc la rute existente, nu la pagini redirecționate", () => {
    const gresite: string[] = [];
    for (const p of postari) {
      const linkuri = [...p.content.matchAll(/(?<!!)\[[^\]]*\]\((\/[^)\s]*)\)/g)]
        .map((m) => m[1]!)
        .concat(p.related.map((r) => r.to));
      for (const l of linkuri)
        if (!rutaExista(l) || rutaRedirectata(l)) gresite.push(`${p.slug}: ${l}`);
    }
    expect(gresite).toEqual([]);
  });

  it("nu citează prețuri în lei (prețurile reale sunt pe /preturi-meditatii/{materie})", () => {
    for (const p of postari) expect(p.content).not.toMatch(/\d+\s*(?:–|-)?\s*\d*\s*(?:de )?lei/);
  });

  it("au copertă și cel puțin trei imagini sau animații în text, cu fișierele în public/", () => {
    const probleme: string[] = [];
    const fisier = (src: string) =>
      join("public", src.replace(/^https:\/\/meditatiidirect\.ro/, "").split("?")[0]!);
    for (const p of postari) {
      if (!p.image) probleme.push(`${p.slug}: lipsește image (coperta)`);
      else if (!existsSync(fisier(p.image))) probleme.push(`${p.slug}: nu există ${p.image}`);
      const media = [...p.content.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g)];
      if (media.length < 3) probleme.push(`${p.slug}: are ${media.length} imagini în text (minimum 3)`);
      let animate = 0;
      for (const [, alt, src] of media) {
        if ((alt ?? "").trim().length < 15) probleme.push(`${p.slug}: alt prea scurt la ${src}`);
        if (!/^(\/|https:\/\/meditatiidirect\.ro\/)blog-media\//.test(src!))
          probleme.push(`${p.slug}: ${src} trebuie pus în public/blog-media/`);
        const f = fisier(src!);
        if (!existsSync(f)) {
          probleme.push(`${p.slug}: nu există ${f}`);
          continue;
        }
        if (statSync(f).size > 1_500_000) probleme.push(`${p.slug}: ${f} are peste 1,5 MB`);
        if (/\.(mp4|webm|gif)$/i.test(f) || (/\.svg$/i.test(f) && /@keyframes|<animate/.test(readFileSync(f, "utf8"))))
          animate++;
      }
      if (!animate) probleme.push(`${p.slug}: niciun video/GIF/SVG animat în text`);
      for (const linie of p.content.split("\n"))
        if (/!\[/.test(linie) && !/^!\[[^\]]*\]\([^)\s]+(?:\s+"[^"]*")?\)\s*$/.test(linie.trim()))
          probleme.push(`${p.slug}: imaginea trebuie să stea singură pe rând: ${linie.slice(0, 60)}`);
    }
    expect(probleme).toEqual([]);
  });
});
