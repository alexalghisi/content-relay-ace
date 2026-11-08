import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { CITIES, getCityBySlug } from "@/data/cities";
import { filtruContineOricare } from "@/lib/filtru-postgrest";

type Conditie = { coloana: string; operator: string; valoare: string };

/** Gramatica PostgREST pentru `or=(...)`: virgula, parantezele și ghilimelele sunt rezervate în afara valorilor citate. */
function parseazaOr(interior: string): Conditie[] {
  const conditii: Conditie[] = [];
  let i = 0;
  while (i < interior.length) {
    const antet = /^([a-z_]+)\.([a-z]+)\./.exec(interior.slice(i));
    if (!antet) throw new Error(`failed to parse logic tree la poziția ${i}`);
    i += antet[0].length;
    let valoare = "";
    if (interior[i] === '"') {
      i++;
      while (interior[i] !== '"') {
        if (i >= interior.length) throw new Error("ghilimele neînchise");
        if (interior[i] === "\\") i++;
        valoare += interior[i++];
      }
      i++;
    } else {
      while (i < interior.length && !',()"'.includes(interior[i])) valoare += interior[i++];
    }
    conditii.push({ coloana: antet[1], operator: antet[2], valoare });
    if (i === interior.length) break;
    if (interior[i] !== ",") throw new Error(`failed to parse logic tree la poziția ${i}`);
    i++;
    if (i === interior.length) throw new Error("condiție lipsă după virgulă");
  }
  return conditii;
}

const contine = (text: string, tipar: string) =>
  text.toLowerCase().includes(tipar.replace(/^%|%$/g, "").toLowerCase());

/** PostgREST minimal, în memorie, folosit prin clientul real supabase-js. */
function clientCuAnunturi(randuri: { id: string; location: string }[]) {
  const fetchSimulat = async (input: RequestInfo | URL) => {
    const or = new URL(String(input)).searchParams.get("or") ?? "()";
    try {
      const conditii = parseazaOr(or.slice(1, -1));
      const gasite = randuri.filter((r) => conditii.some((c) => contine(r.location, c.valoare)));
      return new Response(JSON.stringify(gasite), { status: 200 });
    } catch (e) {
      const corp = { code: "PGRST100", message: String(e), details: null, hint: null };
      return new Response(JSON.stringify(corp), { status: 400 });
    }
  };
  return createClient("https://exemplu.supabase.co", "cheie", {
    global: { fetch: fetchSimulat as typeof fetch },
    auth: { persistSession: false },
  });
}

describe("filtruContineOricare", () => {
  test("citează fiecare termen ca virgula să rămână parte din valoare", () => {
    expect(filtruContineOricare("location", ["roman,", "mun. roman"])).toBe(
      'location.ilike."%roman,%",location.ilike."%mun. roman%"',
    );
  });

  test("escapează ghilimelele și backslash-ul din termen", () => {
    const filtru = filtruContineOricare("location", ['a"b\\c']);
    expect(parseazaOr(filtru)).toEqual([
      { coloana: "location", operator: "ilike", valoare: '%a"b\\c%' },
    ]);
  });

  test("filtrul fiecărui oraș din listă e valid și păstrează fiecare termen", () => {
    for (const oras of CITIES) {
      const conditii = parseazaOr(filtruContineOricare("location", oras.matchLocation));
      expect(conditii.map((c) => c.valoare)).toEqual(oras.matchLocation.map((m) => `%${m}%`));
    }
  });
});

describe("anunțurile din orașul Roman (client supabase-js real)", () => {
  const randuri = [
    { id: "1", location: "Roman, Neamț" },
    { id: "2", location: "Mun. Roman" },
    { id: "3", location: "Cluj-Napoca, România" },
    { id: "4", location: "Online - limba română" },
  ];
  const interogheaza = (or: string) =>
    clientCuAnunturi(randuri).from("ads").select("id,location").or(or);
  const roman = getCityBySlug("roman")!;

  test("filtrul vechi, fără ghilimele, reproduce eroarea din producție", async () => {
    const vechi = roman.matchLocation.map((m) => `location.ilike.%${m}%`).join(",");
    const { data, error } = await interogheaza(vechi);
    expect(data).toBeNull();
    expect(error?.code).toBe("PGRST100");
  });

  test("găsește anunțurile din Roman, fără România sau limba română", async () => {
    const { data, error } = await interogheaza(
      filtruContineOricare("location", roman.matchLocation),
    );
    expect(error).toBeNull();
    expect(data?.map((r) => r.id)).toEqual(["1", "2"]);
  });
});

describe("paginile pe oraș folosesc filtrul sigur", () => {
  for (const fisier of ["src/lib/pagina-locala.functions.ts", "src/routes/profesori.$oras.tsx"]) {
    test(fisier, () => {
      const sursa = readFileSync(fisier, "utf8");
      expect(sursa).toContain('filtruContineOricare("location", city.matchLocation)');
      expect(sursa).not.toContain("location.ilike.%");
    });
  }
});
