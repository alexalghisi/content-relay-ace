import { expect, test, type Route } from "@playwright/test";
import { mockSupabase } from "./helpers";

// Datele unei pagini materie × oraș vin dintr-un singur server function (getComboPageData).
// La navigarea din browser îl interceptăm și răspundem cu date de test, ca să verificăm
// randarea fără bază de date. Datele de test nu există în aplicație, doar aici.
const zi = "2026-11-02";
const stats = (extra: Record<string, unknown> = {}) => ({
  listings: 2,
  localListings: 0,
  onlineListings: 2,
  teachers: 0,
  price: null,
  priceOnline: null,
  priceInPerson: null,
  teachersByLevel: [],
  recentRequests: [],
  requestsTotal: 0,
  cityRequests: 0,
  firstProposalHours: null,
  answeredRequests: 0,
  rating: null,
  updatedAt: zi,
  ...extra,
});
const anunt = (id: string, title: string, location: string) => ({
  id,
  title,
  seo_slug: `e2e-${id}`,
  price_per_hour: 90,
  location,
  is_online: true,
  is_promoted: false,
  teacher_name: `Profesor E2E ${id}`,
  avatar_url: null,
});
const COMBO = {
  local: [],
  online: [
    anunt("1", "Matematică online pentru Evaluarea Națională (e2e)", "Iași"),
    anunt("2", "Pregătire BAC M1 online (e2e)", "Brașov"),
  ],
  stats: stats(),
  national: stats({
    price: { min: 50, median: 90, max: 150, n: 12 },
    recentRequests: [
      {
        subject: "Matematică",
        level: "Clasa a VIII-a",
        place: "Cluj-Napoca",
        budget: null,
        date: zi,
      },
      { subject: "Matematică", level: "Clasa a XII-a", place: "online", budget: 80, date: zi },
      { subject: "Matematică", level: null, place: "București", budget: null, date: zi },
    ],
    requestsTotal: 3,
  }),
  trust: { teachers: 0, requests: 0, completed: 0, ratings: 0, avgRating: null },
};

const numeServerFn = (url: string) => {
  const id = new URL(url).pathname.split("/_serverFn/")[1] ?? "";
  try {
    return Buffer.from(id.split("?")[0]!.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString(
      "utf8",
    );
  } catch {
    return "";
  }
};

async function interceptCombo(route: Route) {
  if (numeServerFn(route.request().url()).includes("getComboPageData")) {
    return route.fulfill({
      status: 200,
      contentType: "application/json",
      // Aceeași formă ca răspunsul real al unui server function: { result }.
      body: JSON.stringify({ result: COMBO }),
    });
  }
  return route.abort();
}

test("materie × oraș: profesori online, cereri recente anonimizate și linkuri contextuale", async ({
  page,
}) => {
  await mockSupabase(page);
  await page.route("**/_serverFn/**", interceptCombo);

  // HTML-ul inițial (SSR) al paginii: canonical, linkuri contextuale, fără blocul sitewide și fără texte „goale”.
  const ssr = await page.request.get("/meditatii/matematica/timisoara");
  expect(ssr.status()).toBe(200);
  const html = await ssr.text();
  expect(html).toContain(
    '<link rel="canonical" href="https://meditatiidirect.ro/meditatii/matematica/timisoara"',
  );
  expect(html).toContain("<title>Meditatii matematica Timisoara");
  expect(html).toContain('data-testid="linkuri-contextuale"');
  expect(html).not.toContain("Căutări populare");
  expect(html).not.toContain("Poți fi primul");

  // Navigare din browser, de pe hub-ul materiei, printr-un link contextual.
  await page.goto("/meditatii-matematica");
  await page.waitForLoadState("networkidle");
  const linkuriHub = page.getByTestId("linkuri-contextuale");
  await expect(linkuriHub).toBeVisible();
  expect(await linkuriHub.getByRole("link").count()).toBeGreaterThanOrEqual(6);
  await expect(page.getByText("Căutări populare")).toHaveCount(0);
  await linkuriHub.locator('a[href="/meditatii/matematica/timisoara"]').click();
  await expect(page).toHaveURL(/\/meditatii\/matematica\/timisoara$/);

  const online = page.getByTestId("profesori-online");
  await expect(
    online.getByRole("heading", {
      name: "Profesori care predau online — disponibili și pentru elevii din Timișoara",
    }),
  ).toBeVisible();
  await expect(
    online.getByText("Matematică online pentru Evaluarea Națională (e2e)"),
  ).toBeVisible();
  await expect(online.locator('a[href="/anunt/e2e-1"]')).toBeVisible();

  const cereri = page.getByTestId("cereri-recente");
  await expect(
    cereri.getByRole("heading", { name: /Cereri recente la matematică din toată țara/ }),
  ).toBeVisible();
  await expect(cereri.getByRole("listitem")).toHaveCount(3);
  await expect(cereri.getByText(/Clasa a VIII-a · Cluj-Napoca/)).toBeVisible();

  // Tariful național e marcat ca național (orașul nu are tarife proprii).
  await expect(page.getByTestId("date-reale").getByText("național").first()).toBeVisible();

  const linkuri = page.getByTestId("linkuri-contextuale");
  await expect(linkuri.locator('a[href="/meditatii-in/timisoara"]')).toBeVisible();
  await expect(linkuri.locator('a[href="/subiecte-bac/materie/matematica"]')).toBeVisible();
  await expect(linkuri.locator('a[href="/profesor-ai"]')).toBeVisible();
  await expect(page.getByText(/Poți fi primul|Încă nu avem/)).toHaveCount(0);
});

test("articol de blog din Markdown: conținut, Article JSON-LD, linkuri alese și listare", async ({
  page,
}) => {
  await mockSupabase(page);
  await page.route("**/_serverFn/**", (r) => r.abort());
  const url = "/blog/subiecte-bac-fizica-cum-le-folosesti-cu-barem";
  const res = await page.goto(url);
  expect(res?.status()).toBe(200);
  const html = await res!.text();
  expect(html).toContain(`<link rel="canonical" href="https://meditatiidirect.ro${url}"`);
  expect(html).toContain('"@type":"Article"');
  expect(html).toContain('"datePublished":"2026-11-08"');
  expect(html).toContain('"@type":"FAQPage"');
  await expect(
    page.getByRole("heading", { level: 1, name: /Subiecte BAC fizică: cum lucrezi variantele/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Baremul se citește pe pași, nu pe rezultat" }),
  ).toBeVisible();
  await expect(page.locator("table").first()).toBeVisible();
  await expect(
    page
      .locator("section", { has: page.getByRole("heading", { name: "Continuă cu" }) })
      .getByRole("link", { name: "Subiecte BAC fizică, toate profilurile" }),
  ).toHaveAttribute("href", "/subiecte-bac/materie/fizica");

  // Lista blogului include articolele din repo chiar dacă baza de date nu răspunde.
  const lista = await page.request.get("/blog");
  expect(lista.status()).toBe(200);
  expect(await lista.text()).toContain(`href="${url}"`);

  const sm = await page.request.get("/sitemap.xml");
  expect(await sm.text()).toContain(`<loc>https://meditatiidirect.ro${url}</loc>`);
});

test("paginile vechi /meditatii-{oras} fac 301 către /meditatii-in/{oras}, cu conținutul local mutat", async ({
  page,
}) => {
  for (const [vechi, nou] of [
    ["/meditatii-cluj", "/meditatii-in/cluj-napoca"],
    ["/meditatii-bucuresti", "/meditatii-in/bucuresti"],
    ["/meditatii-timisoara", "/meditatii-in/timisoara"],
    ["/meditatii-bacau", "/meditatii-in/bacau"],
  ] as const) {
    const r = await page.request.get(vechi, { maxRedirects: 0 });
    expect(r.status(), vechi).toBe(301);
    expect(new URL(r.headers()["location"]!, "http://localhost").pathname).toBe(nou);
  }
  // /meditatii-bac e pagina BAC, nu orașul Bacău.
  expect((await page.request.get("/meditatii-bac", { maxRedirects: 0 })).status()).toBe(200);

  await mockSupabase(page);
  await page.route("**/_serverFn/**", (r) => r.abort());
  await page.goto("/meditatii-cluj");
  await expect(page).toHaveURL(/\/meditatii-in\/cluj-napoca$/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://meditatiidirect.ro/meditatii-in/cluj-napoca",
  );
  const local = page.getByTestId("continut-local");
  await expect(local).toBeVisible();
  await expect(local.getByText("Liceul de Informatică „Tiberiu Popoviciu”")).toBeVisible();

  const sm = await (await page.request.get("/sitemap.xml")).text();
  for (const p of ["/meditatii-cluj", "/meditatii-bucuresti", "/meditatii-bacau"])
    expect(sm).not.toContain(`<loc>https://meditatiidirect.ro${p}</loc>`);
});

test("/preturi-meditatii: fără prețuri scrise de mână, doar tarife reale din statistici", async ({
  page,
}) => {
  // HTML-ul SSR nu mai conține tabelul vechi cu valori inventate.
  const ssr = await page.request.get("/preturi-meditatii");
  expect(ssr.status()).toBe(200);
  const html = await ssr.text();
  for (const vechi of [
    "30–200 lei",
    "Media națională",
    "Tarif estimat",
    "Tarif mediu matematică",
    "Pentru orașele mari adaugă",
  ])
    expect(html).not.toContain(vechi);
  expect(html).not.toMatch(/Încă nu avem|Poți fi primul/);

  await mockSupabase(page);
  await page.route("**/_serverFn/**", (route) => {
    if (numeServerFn(route.request().url()).includes("getSubjectPriceTable")) {
      return route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          result: {
            subjects: [
              { slug: "matematica", price: { min: 50, median: 85, max: 140, n: 7 } },
              { slug: "romana", price: { min: 60, median: 60, max: 60, n: 1 } },
            ],
            overall: { min: 50, median: 80, max: 140, n: 9 },
            updatedAt: zi,
          },
        }),
      });
    }
    return route.abort();
  });

  // Fără date (SSR fără bază de date): niciun număr în tabel, doar textul neutru.
  await page.goto("/preturi-meditatii/matematica");
  await page.waitForLoadState("networkidle");
  const ssrTabel = await page.request.get("/preturi-meditatii");
  expect(await ssrTabel.text()).toContain("Tariful îl propune profesorul în ofertă");

  // Navigare din browser: tabelul vine din getSubjectPriceTable.
  await page
    .getByRole("navigation", { name: "breadcrumb" })
    .getByRole("link", { name: "Prețuri meditații" })
    .click();
  await expect(page).toHaveURL(/\/preturi-meditatii$/);
  const tabel = page.getByTestId("tabel-preturi");
  const mate = tabel.getByRole("row", { name: /Preț meditații matematică/ });
  await expect(mate).toContainText("85 lei/oră");
  await expect(mate).toContainText("50–140 lei/oră");
  // Sub pragul de tarife reale: niciun număr.
  const romana = tabel.getByRole("row", { name: /Preț meditații română/ });
  await expect(romana).toContainText("Tariful îl propune profesorul în ofertă");
  await expect(romana).not.toContainText(/\d\s*lei/);
  await expect(page.getByTestId("pret-intro")).toContainText("mediana de 80 lei/oră");
});

test("ghid local nou (Iași): indexabil, cu județul corect și bară de cerere pe telefon", async ({
  page,
}, info) => {
  const r = await page.request.get("/meditatii/matematica/iasi");
  expect(r.status()).toBe(200);
  const html = await r.text();
  expect(html).toContain("Meditații matematică Iași: Evaluare Națională, BAC și admitere");
  expect(html).not.toContain("noindex");
  expect(html).not.toContain("toate sectoarele din Iași");

  await page.goto("/meditatii/matematica/iasi");
  await page.waitForLoadState("networkidle");
  const bara = page.getByTestId("cta-mobil");
  if (info.project.name !== "iphone") {
    await expect(bara).toBeHidden();
    return;
  }
  // Butonul din antet e sub ecran pe telefon, deci bara fixă trebuie să fie activă.
  await expect(bara).toHaveAttribute("aria-hidden", "false");
  await bara.getByRole("link").click();
  await expect(page).toHaveURL(/\/meditatii\?.*materie=matematica.*oras=iasi/);
});
