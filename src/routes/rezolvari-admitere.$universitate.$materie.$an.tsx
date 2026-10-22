// Rezolvarea verificată a unui subiect de admitere: /rezolvari-admitere/{universitate}/{materie}/{an}
// Conținut din src/data/rezolvari-admitere (verificat prin rulare), randat pe server și indexabil.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Gauge } from "lucide-react";
import { RezolvareVerificataView } from "@/components/rezolvare-verificata";
import { rezolvareAdmitere } from "@/data/rezolvari-admitere";
import { paperPublicUrl } from "@/lib/admission-papers";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/rezolvari-admitere/$universitate/$materie/$an")({
  loader: ({ params }) => {
    const an = Number(params.an);
    const r = Number.isInteger(an)
      ? rezolvareAdmitere(params.universitate, params.materie, an)
      : null;
    if (!r) throw notFound();
    return { r };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Rezolvare indisponibilă" }, { name: "robots", content: "noindex" }],
      };
    const { r } = loaderData;
    const url = `${SITE}/rezolvari-admitere/${r.universitate}/${r.materie}/${r.an}`;
    const arhiva = `${SITE}/subiecte-admitere/${r.universitate}/${r.materie}/${r.an}`;
    const title = `${r.titlu} | MeditatiiDirect.ro`;
    return {
      meta: [
        { title },
        { name: "description", content: r.descriere },
        { property: "og:title", content: title },
        { property: "og:description", content: r.descriere },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: r.descriere },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "LearningResource"],
            headline: r.titlu,
            description: r.descriere,
            url,
            inLanguage: "ro-RO",
            dateModified: r.actualizat,
            learningResourceType: "Rezolvare explicată",
            educationalLevel: "Admitere la facultate",
            isAccessibleForFree: true,
            author: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
            publisher: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Subiecte admitere",
                item: `${SITE}/subiecte-admitere`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${r.universitateNume} ${r.an}`,
                item: arhiva,
              },
              { "@type": "ListItem", position: 4, name: "Rezolvare", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <main className="container-page py-16">
      <h1 className="text-2xl font-bold">Rezolvare inexistentă</h1>
      <Link to="/subiecte-admitere" className="mt-4 inline-flex text-primary hover:underline">
        Subiecte de admitere
      </Link>
    </main>
  ),
});

function Page() {
  const { r } = Route.useLoaderData();
  const params = { universitate: r.universitate, materie: r.materie, an: String(r.an) };
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-primary">
              Acasă
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link to="/subiecte-admitere" className="hover:text-primary">
              Subiecte admitere
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link
              to="/subiecte-admitere/$universitate/$materie/$an"
              params={params}
              className="hover:text-primary"
            >
              {r.universitateNume} {r.an}
            </Link>
          </li>
          <li>›</li>
          <li className="text-foreground">Rezolvare</li>
        </ol>
      </nav>
      <Link
        to="/subiecte-admitere/$universitate/$materie/$an"
        params={params}
        className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Subiectul original (PDF)
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{r.titlu}</h1>
        <p className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Gauge className="h-4 w-4 text-primary" /> Dificultate: {r.dificultate}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" /> Timp de lucru: {r.timpMinute} min
          </span>
          <span className="rounded-full border border-primary/40 px-2 py-0.5 text-xs text-primary">
            Verificată · actualizată {r.actualizat}
          </span>
        </p>
        <p className="mt-4 text-muted-foreground">{r.descriere}</p>
      </header>
      <RezolvareVerificataView rezolvare={r} pdfSubiect={paperPublicUrl(r.documente.subiect)} />
      <p className="mt-6 text-sm text-muted-foreground">
        Rezolvare originală MeditatiiDirect.ro, nu barem oficial. Sursa subiectului:{" "}
        <a
          href={r.documente.sursaUrl}
          target="_blank"
          rel="noopener nofollow"
          className="text-primary underline break-all"
        >
          {r.documente.sursaUrl}
        </a>
        . Ai găsit o greșeală?{" "}
        <Link to="/contact" className="text-primary hover:underline">
          Semnalează-ne
        </Link>
        .
      </p>
      <section className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">Te pregătești pentru admitere?</h2>
        <p className="mt-2 text-muted-foreground">
          Descrii o dată ce ai nevoie, iar profesorii îți trimit propuneri cu dată, oră și tarif.
        </p>
        <Link
          to="/meditatii"
          className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Cere ofertă de pregătire
        </Link>
      </section>
    </main>
  );
}
