import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { FileText, Search, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdBanner, AdInArticle } from "@/components/ads/ad-slots";
import { BacPaperCard, groupBacPapers, type BacPaper } from "@/components/bac-paper-card";
import { BacAniNav } from "@/components/bac-tabel-an";
import { faqJsonLd } from "@/components/seo-landing";
import { getSubiecteBacFilters, listSubiecteBac } from "@/lib/subiecte-bac.functions";
import { BAC_MATRIX_COLUMNS, getBacMatrix } from "@/lib/bac-lucrare.functions";
import { BAC_SESSIONS } from "@/lib/bac-archive";
import { SITE_URL } from "@/lib/bac-originals";

const SESIUNI = Object.entries(BAC_SESSIONS).map(([value, label]) => ({ value, label }));

const URL = `${SITE_URL}/subiecte-bac`;
const TITLE =
  "Subiecte BAC 2026, 2025 și toți anii — PDF oficial, barem și rezolvări pas cu pas | MeditatiiDirect.ro";
const DESC =
  "Subiecte de BAC 2010–2026 cu barem oficial PDF: română, matematică (și tehnologic), informatică, istorie, biologie, fizică. Variante BAC și rezolvări pas cu pas.";

const FAQS = [
  {
    q: "Unde găsesc subiectele de BAC 2026?",
    a: "Pe această pagină: alege anul 2026 din tabel sau deschide pagina „Subiecte BAC 2026”. Ai subiectele oficiale de la simulare, sesiunea iunie–iulie și sesiunea august–septembrie, pentru română, matematică (mate-info, științe ale naturii, tehnologic, pedagogic), informatică și celelalte probe publicate de Ministerul Educației.",
  },
  {
    q: "Unde este baremul BAC?",
    a: "Fiecare pagină de subiect are, lângă subiectul oficial, baremul de evaluare publicat de Ministerul Educației (CNPEE), în PDF, cu buton de deschidere și de descărcare. De exemplu, baremul BAC 2026 la matematică sau la română este pe pagina variantei respective.",
  },
  {
    q: "Sunt rezolvările oficiale?",
    a: "Nu. Oficiale sunt subiectul și baremul, publicate de Ministerul Educației. Rezolvarea pas cu pas este explicația scrisă de echipa MeditatiiDirect.ro: arată raționamentul și punctajul din barem pentru fiecare cerință. Dacă ajungi pe alt drum corect, baremul acceptă orice soluție corectă.",
  },
  {
    q: "Cum mă pregătesc cel mai eficient pentru BAC cu aceste subiecte?",
    a: "Lucrează variantele de BAC de la cel mai recent an spre cele vechi, cronometrat 3 ore, apoi corectează-te pe baremul oficial și citește rezolvarea pas cu pas la ce ai greșit. Pentru punctele slabe poți cere meditații BAC de la profesori verificați (/meditatii-bac) sau poți relua subiectul cu Profesorul AI (/profesor-ai).",
  },
  {
    q: "De unde provin subiectele BAC din arhivă?",
    a: "Sunt documentele oficiale publicate de Ministerul Educației (CNEE / CNPEE). Pentru 2024–2026, PDF-urile de Matematică și Informatică sunt identice, byte cu byte, cu cele din arhivele oficiale subiecte2024–2026.edu.ro. Pentru restul anilor, arhivele oficiale nu mai sunt online, așa că fiecare PDF a fost verificat după antetul oficial al probei (anul, proba, profilul).",
  },
  {
    q: "Subiectele și baremele BAC sunt gratuite?",
    a: "Da, 100% gratuite. Nu ai nevoie de cont, abonament sau plată: PDF-urile se deschid în browser sau se descarcă direct.",
  },
];

export const Route = createFileRoute("/subiecte-bac")({
  // Ruta e și layout-ul paginilor-copil (an, materie, lucrare): canonical-ul și JSON-LD-ul hub-ului
  // se emit doar pe hub, altfel fiecare pagină-copil ar avea două canonical-uri și un FAQPage invizibil.
  head: ({ matches }) => {
    const eHub = matches[matches.length - 1]?.routeId === "/subiecte-bac";
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESC },
        {
          name: "keywords",
          content:
            "subiecte bac, bac 2026 subiecte, subiecte de bac, subiecte bac 2025, subiecte bac matematica, subiecte mate bac, subiecte bac tehnologic, subiecte bac romana, barem bac 2026, variante bac, rezolvare subiecte bac pas cu pas",
        },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { httpEquiv: "Content-Language", content: "ro-RO" },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:url", content: URL },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ro_RO" },
        { property: "og:site_name", content: "MeditatiiDirect.ro" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESC },
      ],
      links: eHub ? [{ rel: "canonical", href: URL }] : [],
      scripts: !eHub
        ? []
        : [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "Subiecte BAC", item: URL },
                ],
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: TITLE,
                description: DESC,
                url: URL,
                inLanguage: "ro-RO",
                isPartOf: { "@type": "WebSite", name: "MeditatiiDirect.ro", url: SITE_URL },
                about: [
                  "Bacalaureat România",
                  "Subiecte BAC",
                  "Bareme BAC",
                  "Simulare Bacalaureat",
                  "Variante Bacalaureat",
                ],
              }),
            },
            { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
          ],
    };
  },
  loader: async () => ({
    filters: await getSubiecteBacFilters(),
    matrix: await getBacMatrix(),
  }),
  component: ArchiveLayout,
});

/** /subiecte-bac is both the hub and the parent of the child pages (an, materie, paper…). */
function ArchiveLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return pathname.replace(/\/$/, "") === "/subiecte-bac" ? <Page /> : <Outlet />;
}

type Filters = {
  years: number[];
  sessions: string[];
  materii: { slug: string; name: string }[];
  profile: string[];
};

const LINK_BOX =
  "block rounded-md border bg-card px-3 py-2 text-sm transition hover:border-primary/40 hover:text-primary";

function Page() {
  const initial = Route.useLoaderData();
  const [an, setAn] = useState<string>("");
  const [materie, setMaterie] = useState<string>("");
  const [sesiune, setSesiune] = useState<string>("");
  const [profil, setProfil] = useState<string>("");
  const [q, setQ] = useState("");

  const filtersData: Filters = initial.filters;

  const filtering = [an, materie, sesiune, profil, q].some(Boolean);
  const { data: rows = [] } = useQuery<BacPaper[]>({
    enabled: filtering,
    queryKey: ["subiecte-bac-rows", an, materie, sesiune, profil, q],
    queryFn: () =>
      listSubiecteBac({
        data: {
          an: an ? Number(an) : null,
          materie: materie || null,
          sesiune: sesiune || null,
          profil: profil || null,
          q: q || null,
        },
      }) as Promise<BacPaper[]>,
  });

  const grupate = useMemo(() => groupBacPapers(rows), [rows]);

  const resetFilters = () => {
    setAn("");
    setMaterie("");
    setSesiune("");
    setProfil("");
    setQ("");
  };
  const activeCount = [an, materie, sesiune, profil, q].filter(Boolean).length;

  return (
    <div className="container-page py-8 md:py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:underline">
          Acasă
        </Link>
        <span className="mx-1">/</span>
        <span>Subiecte BAC</span>
      </nav>
      <div className="max-w-3xl">
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Subiecte BAC 2026, 2025 și toți anii (2010–2026) — PDF oficial, barem și rezolvări pas cu
          pas
        </h1>
        <p className="mt-3 text-muted-foreground">
          Arhiva de <strong>subiecte de BAC</strong> a MeditatiiDirect.ro: subiectele oficiale cu{" "}
          <strong>barem</strong> și <strong>rezolvare pas cu pas</strong>, pe ani și sesiuni.{" "}
          <strong>Limba și literatura română</strong> (real, uman), <strong>Matematică</strong> (M1
          mate-info, M2 științe ale naturii, tehnologic, pedagogic),{" "}
          <strong>Informatică C/C++</strong> și, pentru anii recenți, istorie, geografie, biologie,
          chimie, fizică și probele socio-umane. Pentru fiecare variantă BAC ai <em>Subiect</em>,{" "}
          <em>Barem</em> și, tot mai des, <em>Rezolvare</em>. Te pregătești pentru simulare? Vezi{" "}
          <Link to="/simulare-bacalaureat" className="text-primary underline">
            simularea de Bacalaureat
          </Link>{" "}
          și{" "}
          <Link to="/calendar-bac-2027" className="text-primary underline">
            calendarul BAC 2027
          </Link>
          .
        </p>
        <nav aria-label="Subiecte BAC pe ani" className="mt-5">
          <h2 className="mb-2 text-lg font-semibold">Subiecte BAC pe ani</h2>
          <BacAniNav />
        </nav>
      </div>

      <Card className="mt-6 p-4 md:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Caută după titlu sau cuvânt cheie…"
                aria-label="Caută subiecte BAC"
                className="pl-9"
              />
            </div>
          </div>
          <FilterSelect
            label="An"
            value={an}
            onChange={setAn}
            options={filtersData.years.map((y) => ({ value: String(y), label: String(y) }))}
          />
          <FilterSelect
            label="Materie"
            value={materie}
            onChange={setMaterie}
            options={filtersData.materii.map((m) => ({ value: m.slug, label: m.name }))}
          />
          <FilterSelect label="Sesiune" value={sesiune} onChange={setSesiune} options={SESIUNI} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {filtersData.profile.length > 0 && (
            <div className="min-w-[180px]">
              <FilterSelect
                label="Profil"
                value={profil}
                onChange={setProfil}
                options={filtersData.profile.map((p) => ({ value: p, label: p }))}
              />
            </div>
          )}
          {activeCount > 0 && (
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              <X className="mr-1 h-3 w-3" /> Resetează filtrele
            </Button>
          )}
        </div>
      </Card>

      <AdBanner className="my-6" />

      {!filtering && <BacMatrix matrix={initial.matrix} />}

      <div className="mt-8">
        {!filtering ? null : rows.length === 0 ? (
          <Card className="p-10 text-center">
            <FileText className="mx-auto h-10 w-10 text-muted-foreground" />
            <h2 className="mt-3 text-lg font-semibold">Niciun rezultat</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Nu există subiecte pentru combinația de filtre aleasă. Resetează filtrele sau alege
              alt an.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {grupate.map((group) => (
              <BacPaperCard key={group[0].id} items={group} />
            ))}
          </div>
        )}
      </div>

      {filtersData.materii.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Subiecte BAC pe materii</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Toate variantele BAC și baremele pentru fiecare materie de Bacalaureat.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {(
              [
                ["matematica", "Subiecte BAC Matematică 2010–2026 · toate profilurile"],
                ["biologie", "Subiecte BAC Biologie · ambele programe"],
                ["chimie", "Subiecte BAC Chimie · organică și anorganică"],
                ["fizica", "Subiecte BAC Fizică · toate filierele"],
              ] as const
            ).map(([slug, label]) => (
              <li key={slug}>
                <Link
                  to="/subiecte-bac/materie/$materie"
                  params={{ materie: slug }}
                  className={LINK_BOX}
                >
                  {label}
                </Link>
              </li>
            ))}
            {filtersData.materii.map((m) => (
              <li key={m.slug}>
                <Link
                  to="/subiecte-bac/materie/$materie"
                  params={{ materie: m.slug }}
                  className={LINK_BOX}
                >
                  Subiecte BAC {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AdInArticle className="my-8" />

      {filtersData.years.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Subiecte BAC pe ani</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Pentru fiecare an găsești toate sesiunile publicate, grupate pe materii.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {filtersData.years.map((y) => (
              <li key={y}>
                <Link
                  to="/subiecte-bac/an/$an"
                  params={{ an: String(y) }}
                  className="rounded-md border bg-card px-3 py-1.5 text-sm transition hover:border-primary/40 hover:text-primary"
                >
                  Subiecte BAC {y}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Mai multe resurse BAC pe MeditatiiDirect.ro</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {(
            [
              ["/subiecte-bac-2026", "Subiecte BAC 2026 — ghid"],
              ["/bac", "Arhiva BAC pe materii (subiecte 2001–2026)"],
              ["/rezolvari", "Rezolvări verificate BAC"],
              ["/variante-bacalaureat", "Variante BAC"],
              ["/simulare-bacalaureat", "Simulare BAC"],
              ["/simulari-bacalaureat-2026", "Simulări BAC 2026"],
              ["/calculator-medie-bac", "Calculator medie BAC"],
              ["/meditatii-bac", "Meditații BAC"],
              ["/meditatii-matematica-bac", "Meditații matematică BAC"],
              ["/meditatii-romana-bac", "Meditații română BAC"],
              ["/profesor-ai", "Profesorul AI"],
            ] as const
          ).map(([to, label]) => (
            <li key={to}>
              <Link to={to} className={LINK_BOX}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 max-w-3xl space-y-3 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">
          Cum folosești arhiva de subiecte BAC
        </h2>
        <p>
          Alege materia și profilul, apoi lucrează subiectele de la cel mai recent an spre cele
          vechi. Rezolvă fiecare <strong>subiect BAC</strong> în 3 ore, ca la examen, și abia apoi
          deschide <strong>baremul BAC</strong> ca să vezi cum se punctează fiecare pas. La final,
          citește <strong>rezolvarea subiectelor BAC pas cu pas</strong> pentru cerințele greșite.
        </p>
        <p>
          La <strong>Matematică</strong>, programa diferă între{" "}
          <Link
            to="/subiecte-bac/materie/$materie"
            params={{ materie: "matematica-mate-info" }}
            className="text-primary underline"
          >
            M_mate-info
          </Link>
          ,{" "}
          <Link
            to="/subiecte-bac/materie/$materie"
            params={{ materie: "matematica-st-nat" }}
            className="text-primary underline"
          >
            M_șt-nat
          </Link>
          ,{" "}
          <Link
            to="/subiecte-bac/materie/$materie"
            params={{ materie: "matematica-tehnologic" }}
            className="text-primary underline"
          >
            M_tehnologic
          </Link>{" "}
          și{" "}
          <Link
            to="/subiecte-bac/materie/$materie"
            params={{ materie: "matematica-pedagogic" }}
            className="text-primary underline"
          >
            M_pedagogic
          </Link>
          , așa că exersează pe programul tău. La{" "}
          <Link
            to="/subiecte-bac/materie/$materie"
            params={{ materie: "informatica" }}
            className="text-primary underline"
          >
            Informatică
          </Link>
          , subiectele sunt separate pentru mate-info și științe ale naturii.
        </p>
        <p>
          Sesiunile acoperite sunt simularea națională, iunie–iulie, august–septembrie, sesiunea
          specială, variantele de rezervă și modelele oficiale, acolo unde Ministerul Educației le-a
          publicat. Ai nevoie de ajutor pe un capitol anume?{" "}
          <Link to="/meditatii-bac" className="text-primary underline">
            Cere meditații BAC
          </Link>{" "}
          sau lucrează subiectul cu{" "}
          <Link to="/profesor-ai" className="text-primary underline">
            Profesorul AI
          </Link>
          .
        </p>

        <h2 className="pt-2 text-xl font-semibold text-foreground">Întrebări frecvente</h2>
        {FAQS.map((f) => (
          <details key={f.q} className="rounded-md border bg-card p-3">
            <summary className="cursor-pointer font-medium text-foreground">{f.q}</summary>
            <p className="mt-2">{f.a}</p>
          </details>
        ))}
      </section>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <Select value={value || "__all"} onValueChange={(v) => onChange(v === "__all" ? "" : v)}>
      <SelectTrigger aria-label={label}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="__all">Toate · {label}</SelectItem>
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

type Matrix = Awaited<ReturnType<typeof getBacMatrix>>;

const SES_SHORT: Record<string, string> = {
  "iunie-iulie": "Iunie",
  "august-septembrie": "August",
  simulare: "Simulare",
  "sesiune-speciala": "Specială",
  rezerva: "Rezervă",
  model: "Model",
};

/** Year × subject table: every cell lists the sessions with links to Subiect + Barem + Rezolvare. */
function BacMatrix({ matrix }: { matrix: Matrix }) {
  return (
    <section className="mt-8" aria-labelledby="tabel-subiecte-bac">
      <h2 id="tabel-subiecte-bac" className="text-xl font-semibold">
        Subiecte BAC pe ani și materii (2010–2026)
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Alege anul și materia, apoi sesiunea: fiecare link deschide pagina cu{" "}
        <strong>subiectul</strong>, <strong>baremul</strong> și{" "}
        <strong>rezolvarea explicată</strong>. Marcajul ✓ arată variantele deja rezolvate pas cu
        pas.
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead className="bg-muted/60">
            <tr>
              <th scope="col" className="sticky left-0 z-10 bg-muted px-3 py-2 text-left">
                An
              </th>
              {BAC_MATRIX_COLUMNS.map((c) => (
                <th key={c.materie} scope="col" className="px-2 py-2 text-left font-semibold">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row) => (
              <tr key={row.year} className="border-t align-top">
                <th scope="row" className="sticky left-0 z-10 bg-background px-3 py-2 text-left">
                  <Link
                    to="/subiecte-bac/an/$an"
                    params={{ an: String(row.year) }}
                    className="font-semibold hover:text-primary hover:underline"
                  >
                    BAC {row.year}
                  </Link>
                </th>
                {BAC_MATRIX_COLUMNS.map((c) => {
                  const cells = row.cells[c.materie] ?? [];
                  return (
                    <td key={c.materie} className="px-2 py-2">
                      {cells.length === 0 ? (
                        <span className="text-muted-foreground">—</span>
                      ) : (
                        <ul className="flex flex-wrap gap-1">
                          {cells.map((x) => (
                            <li key={x.path}>
                              <a
                                href={x.path}
                                title={`Subiect BAC ${row.year} ${c.label} ${SES_SHORT[x.session] ?? x.session}${x.variant ? ` varianta ${x.variant}` : ""}`}
                                className="inline-block rounded border bg-card px-1.5 py-0.5 text-xs hover:border-primary/50 hover:text-primary"
                              >
                                {SES_SHORT[x.session] ?? x.session}
                                {x.variant &&
                                cells.filter((o) => o.session === x.session).length > 1
                                  ? ` v${x.variant}`
                                  : ""}
                                {x.rezolvare ? " ✓" : ""}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
