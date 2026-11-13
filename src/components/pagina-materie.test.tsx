import { describe, expect, it } from "bun:test";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { PaginaMaterieBlock } from "./pagina-materie";

/** Randează în routerul real (în memorie), ca linkurile să fie exact cele din pagină. */
async function randeaza(el: ReactElement): Promise<string> {
  const router = createRouter({
    routeTree: createRootRoute({ component: () => el }),
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  await router.load();
  return renderToStaticMarkup(<RouterProvider router={router} />);
}

const card = (id: string, location: string, is_online = false) => ({
  id,
  title: `Meditații matematică ${location}`,
  seo_slug: `anunt-${id}`,
  price_per_hour: 100,
  location,
  is_online,
  is_promoted: false,
  teacher_name: "Ana Pop",
  avatar_url: null,
});

describe("PaginaMaterieBlock", () => {
  it("listează profesorii cu anunț activ, ItemList JSON-LD și orașele indexabile", async () => {
    const html = await randeaza(
      <PaginaMaterieBlock
        slug="matematica"
        nume="matematică"
        d={{
          anunturi: [card("1", "Cluj-Napoca"), card("2", "Iași", true)],
          totalAnunturi: 2,
          profesori: 2,
          orase: [
            { slug: "cluj-napoca", name: "Cluj-Napoca" },
            { slug: "timisoara", name: "Timișoara" },
          ],
        }}
      />,
    );
    expect(html).toContain("Profesori de matematică cu anunț activ");
    expect(html).toContain("2 profesori au 2 anunțuri active");
    expect(html).toContain('href="/anunt/anunt-1"');
    expect(html).toContain('"@type":"ItemList"');
    expect(html).toContain("https://meditatiidirect.ro/anunt/anunt-2");
    expect(html).toContain('href="/meditatii/matematica/timisoara"');
    expect(html).toContain("Meditații matematică Timișoara");
  });

  it("fără date nu afișează secțiuni goale", async () => {
    const html = await randeaza(
      <PaginaMaterieBlock slug="chimie" nume="chimie" d={{ anunturi: [], totalAnunturi: 0, profesori: 0, orase: [] }} />,
    );
    expect(html).not.toContain("<section");
    expect(html).not.toContain("ItemList");
  });
});
