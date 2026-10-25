import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ListOrdered, ScanSearch } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";
import { BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { ScanerLacune } from "@/components/blocaje/scaner";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import { learningOrder, MAX_INTREBARI } from "@/lib/scaner-lacune";
import { BLOCAJE_MATERII, claseLabel, getBlocaj, getBlocajMaterie } from "@/data/blocaje";

const faqsFor = (nameLower: string) => [
  {
    q: `Cum aflu ce lacune am la ${nameLower}?`,
    a: `Alegi capitolul la care te-ai blocat, iar scanerul îți pune o întrebare scurtă din el. Dacă răspunzi greșit sau alegi „Nu știu încă”, verifică pe rând noțiunile pe care se sprijină capitolul, până găsește punctul de unde pornește problema. Sunt cel mult ${MAX_INTREBARI} întrebări.`,
  },
  {
    q: "În ce ordine ar trebui să recuperez materia?",
    a: "Întâi rădăcina, adică noțiunea de bază care lipsește, apoi noțiunile care se construiesc pe ea, până ajungi înapoi la capitolul unde te-ai blocat. Scanerul îți dă traseul exact în această ordine, cu link spre explicația și exemplul rezolvat al fiecărei noțiuni.",
  },
  {
    q: "Se salvează răspunsurile mele?",
    a: "Nu. Scanarea rulează doar în browserul tău și nu cere cont, nume sau email. Diagnosticul ajunge la profesori numai dacă alegi să ceri un meditator, și atunci conține doar numele noțiunilor.",
  },
  {
    q: "Este testul o evaluare oficială?",
    a: "Nu. Este un instrument de orientare, cu câte o întrebare pe noțiune. Îți arată de unde merită să începi, dar nu înlocuiește o evaluare făcută de profesor sau o simulare de examen.",
  },
];

export const Route = createFileRoute("/scaner-lacune/$materie")({
  validateSearch: (s: Record<string, unknown>): { tinta?: string } => ({
    tinta: typeof s.tinta === "string" ? s.tinta : undefined,
  }),
  loader: ({ params }) => {
    const m = getBlocajMaterie(params.materie);
    if (!m) throw notFound();
    // Head is built here so the blocaje dataset stays in this route's lazy chunk.
    return { materie: m.slug, head: scanerHead(m.slug) };
  },
  head: ({ loaderData }) =>
    loaderData?.head ?? {
      meta: [
        { title: "Pagina nu a fost găsită | MeditatiiDirect.ro" },
        { name: "robots", content: "noindex" },
      ],
    },
  notFoundComponent: () => (
    <div className="container-page py-16 text-center">
      <h1 className="text-2xl font-bold">Nu avem încă scaner pentru această materie</h1>
      <Link to="/scaner-lacune" className="btn-primary mt-6">
        Vezi materiile disponibile
      </Link>
    </div>
  ),
  component: Page,
});

function Page() {
  const { materie } = Route.useLoaderData();
  const { tinta } = Route.useSearch();
  const m = getBlocajMaterie(materie)!;
  const order = learningOrder(m.slug);
  const faqs = faqsFor(m.nameLower);

  return (
    <article className="container-page py-10 lg:py-14">
      <BlocajeBreadcrumb
        items={[{ name: "Scanerul de lacune", to: "/scaner-lacune" }, { name: m.name }]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <header>
          <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            <ScanSearch className="h-4 w-4" /> Test adaptiv · gratuit · fără cont
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Test de lacune la {m.nameLower}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Când nu îți iese un capitol, de cele mai multe ori problema nu e capitolul, ci o noțiune
            mai veche pe care se sprijină. Scanerul pornește de unde te-ai blocat și coboară pe
            lanțul de noțiuni, câte o întrebare, până găsește{" "}
            <strong className="text-foreground">rădăcina</strong>.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li>1. Alegi capitolul care nu îți iese.</li>
            <li>2. Răspunzi la cel mult {MAX_INTREBARI} întrebări scurte.</li>
            <li>3. Primești rădăcina blocajului și traseul de recuperare, în ordine.</li>
          </ul>
        </header>

        <ScanerLacune key={tinta ?? m.slug} materie={m.slug} tintaInitiala={tinta} />
      </div>

      <section className="mt-16" aria-labelledby="ordine">
        <h2 id="ordine" className="flex items-center gap-2 text-2xl font-bold">
          <ListOrdered className="h-6 w-6 text-primary" /> În ce ordine se învață {m.nameLower}
        </h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Noțiunile de mai jos sunt așezate astfel încât fiecare vine după cele pe care se sprijină.
          Dacă recuperezi materia singur, urmează această ordine; fiecare pas are explicație,
          exemplu rezolvat și verificare în Harta Blocajelor.
        </p>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {order.map((n, i) => {
            const base = n.lipsa.map(getBlocaj).filter(Boolean);
            return (
              <li key={n.slug} className="card-soft flex gap-3 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <Link
                    to="/harta-blocajelor/$materie/$blocaj"
                    params={{ materie: n.materie, blocaj: n.slug }}
                    className="font-semibold hover:text-primary"
                  >
                    {n.titlu}
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    {claseLabel(n.clase)}
                    {base.length
                      ? ` · se sprijină pe: ${base.map((b) => b!.titlu).join("; ")}`
                      : " · punct de pornire"}
                  </p>
                  <Link
                    to="/scaner-lacune/$materie"
                    params={{ materie: m.slug }}
                    search={{ tinta: n.slug }}
                    className="mt-1 inline-block text-xs font-medium text-primary hover:underline"
                  >
                    Scanează de aici
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-16 max-w-3xl" aria-labelledby="faq">
        <h2 id="faq" className="text-2xl font-bold">
          Întrebări frecvente
        </h2>
        <div className="mt-5 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-soft p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold">Scanerul la alte materii</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {BLOCAJE_MATERII.filter((x) => x.slug !== m.slug).map((x) => (
            <Link
              key={x.slug}
              to="/scaner-lacune/$materie"
              params={{ materie: x.slug }}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              Test de lacune la {x.nameLower}
            </Link>
          ))}
          <Link
            to={m.landing}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
          >
            Meditații {m.nameLower}
          </Link>
        </div>
      </section>
    </article>
  );
}

function scanerHead(slug: string) {
  const m = getBlocajMaterie(slug);
  if (!m) return undefined;
  const path = `/scaner-lacune/${m.slug}`;
  const url = `${SITE}${path}`;
  const n = learningOrder(m.slug).length;
  const title = `Test de lacune la ${m.nameLower}: află de unde pornește blocajul | MeditatiiDirect.ro`;
  const description = `Test gratuit, adaptiv: alegi capitolul la ${m.nameLower} care nu îți iese și afli în câteva întrebări ce noțiune îți lipsește de fapt. Primești traseul de recuperare în ordine, din ${n} noțiuni legate între ele.`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Scanerul de lacune", path: "/scaner-lacune" },
            { name: m.name, path },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqsFor(m.nameLower))) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Ordinea în care se învață noțiunile la ${m.nameLower}`,
          url,
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: n,
          itemListElement: learningOrder(m.slug).map((x, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: x.titlu,
            url: `${SITE}/harta-blocajelor/${x.materie}/${x.slug}`,
          })),
        }),
      },
    ],
  };
}
