import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, ExternalLink, Handshake, GraduationCap, Building2 } from "lucide-react";

const URL_ = "https://meditatiidirect.ro/parteneri";
const TITLE = "Parteneri & Schimb de linkuri — MeditatiiDirect.ro";
const DESC = "Lista partenerilor MeditatiiDirect.ro: școli, asociații, ONG-uri educaționale, bloguri și directoare din România. Propune un parteneriat sau un schimb de linkuri.";

interface Partner {
  name: string;
  url: string;
  description: string;
  category: "scoala" | "ong" | "blog" | "director" | "asociatie";
}

// Parteneri reali + potențiali — listă deschisă, editabilă.
// Aceștia sunt site-uri educaționale non-concurente cu care recomandăm schimb de linkuri.
const PARTNERS: Partner[] = [
  { name: "Edupedu.ro", url: "https://www.edupedu.ro", description: "Cel mai mare site de știri educație din România.", category: "blog" },
  { name: "Eduform.ro", url: "https://www.eduform.ro", description: "Resurse pentru profesori și părinți.", category: "blog" },
  { name: "Asociația Părinților", url: "https://parinti-romania.ro", description: "Comunitate națională de părinți pentru educație.", category: "asociatie" },
  { name: "Salvați Copiii România", url: "https://www.salvaticopiii.ro", description: "ONG cu programe educaționale pentru copii.", category: "ong" },
  { name: "Teach for Romania", url: "https://www.teachforromania.org", description: "Profesori voluntari pentru educație de calitate.", category: "ong" },
  { name: "Edu.ro (Ministerul Educației)", url: "https://www.edu.ro", description: "Site oficial Ministerul Educației Naționale.", category: "director" },
  { name: "Bacalaureat.edu.ro", url: "https://bacalaureat.edu.ro", description: "Portal oficial subiecte și rezultate BAC.", category: "director" },
  { name: "Subiecte.edu.ro", url: "https://subiecte.edu.ro", description: "Arhivă oficială subiecte examene naționale.", category: "director" },
];

const CATEGORY_LABEL: Record<Partner["category"], string> = {
  scoala: "Școli & licee",
  ong: "ONG-uri educaționale",
  blog: "Bloguri & publicații",
  director: "Directoare oficiale",
  asociatie: "Asociații",
};

const CATEGORY_ICON: Record<Partner["category"], typeof GraduationCap> = {
  scoala: GraduationCap,
  ong: Handshake,
  blog: ExternalLink,
  director: Building2,
  asociatie: Handshake,
};

export const Route = createFileRoute("/parteneri")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "parteneri educatie, schimb linkuri educatie, directoare educationale romania, ong educatie, parteneriat scoala, link exchange educatie" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL_ },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL_ }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: TITLE,
        url: URL_,
        description: DESC,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
            { "@type": "ListItem", position: 2, name: "Parteneri", item: URL_ },
          ],
        },
      }),
    }],
  }),
  component: ParteneriPage,
});

function ParteneriPage() {
  const byCat = PARTNERS.reduce<Record<string, Partner[]>>((acc, p) => {
    (acc[p.category] ??= []).push(p);
    return acc;
  }, {});

  return (
    <article className="container-page py-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Parteneri & schimb de linkuri</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          MeditatiiDirect.ro lucrează cu școli, asociații, ONG-uri și publicații educaționale din România.
          Dacă administrezi un site din zona educație, ne poți contacta pentru parteneriat sau schimb de linkuri reciproc — în beneficiul elevilor, profesorilor și părinților.
        </p>
      </header>

      <section className="mt-10 grid gap-8">
        {(Object.keys(byCat) as Partner["category"][]).map((cat) => {
          const Icon = CATEGORY_ICON[cat];
          return (
            <div key={cat}>
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <Icon className="h-5 w-5 text-primary" /> {CATEGORY_LABEL[cat]}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {byCat[cat].map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener external"
                    className="card-soft p-4 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition"
                  >
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs text-primary">
                      {new URL(p.url).hostname.replace(/^www\./, "")} <ExternalLink className="h-3 w-3" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-12 card-soft p-6">
        <h2 className="text-2xl font-bold">Vrei un parteneriat?</h2>
        <p className="mt-2 text-muted-foreground">
          Suntem deschiși la schimb de linkuri, articole comune sau programe pentru elevii unei școli/asociații.
          Ce primești de la noi:
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>• Link follow din pagina <Link to="/parteneri" className="text-primary underline">/parteneri</Link> (indexată în Google).</li>
          <li>• Mențiune în newsletter-ul lunar către părinți și profesori.</li>
          <li>• Cont gratuit „Profesor verificat" pentru cadrele didactice ale organizației.</li>
          <li>• Articol comun pe <Link to="/blog" className="text-primary underline">blogul MeditatiiDirect</Link> (după caz).</li>
        </ul>
        <a
          href="mailto:contact@meditatiidirect.ro?subject=Propunere%20parteneriat%20%2F%20schimb%20linkuri"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <Mail className="h-4 w-4" /> Propune un parteneriat
        </a>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Resurse interne</h2>
        <p className="mt-2 text-muted-foreground">Cele mai utile pagini pentru elevi, părinți și profesori:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { to: "/meditatii", label: "Anunțuri meditații" },
            { to: "/profesori", label: "Profesori verificați" },
            { to: "/meditatii-online", label: "Meditații online" },
            { to: "/meditatii-bac", label: "Pregătire BAC 2026" },
            { to: "/meditatii-evaluare-nationala", label: "Evaluare Națională" },
            { to: "/preturi-meditatii", label: "Prețuri meditații" },
            { to: "/blog", label: "Blog & ghiduri" },
            { to: "/pentru-profesori", label: "Pentru profesori" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
