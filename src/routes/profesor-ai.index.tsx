import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Mic, MonitorPlay, PencilLine, Repeat2 } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";
import { BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { ConfiguratorProfesorAi } from "@/components/profesor-ai/configurator";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import hannahDemo from "@/assets/hannah-matematica-demo.mp4.asset.json";
import hannahDemoWebm from "@/assets/hannah-matematica-demo.webm.asset.json";

const PATH = "/profesor-ai";
const URL = `${SITE}${PATH}`;
const TITLE = "Profesor AI gratuit 15 minute: lecție live, în română | MeditatiiDirect.ro";
const DESCRIPTION =
  "Primele 15 minute cu Profesorul AI sunt gratuite pentru fiecare elev: lecție live, cu voce în limba română, la orice materie. Explicații, exemple și exerciții corectate pe loc.";

const FAQS = [
  {
    q: "Ce este Profesorul AI?",
    a: "O sesiune live cu un profesor virtual care vorbește în limba română. Îi poți vorbi la microfon sau îi poți scrie; îți explică, îți dă exemple și exerciții, te corectează și verifică dacă ai înțeles, adaptat nivelului tău.",
  },
  {
    q: "Cât costă o lecție?",
    a: "Prima lecție de 15 minute este gratuită, fără card. Lecțiile de 30, 45, 60 și 90 de minute vor putea fi cumpărate cu contul Premium, pe care îl pregătim; nu există abonament ascuns.",
  },
  {
    q: "Cum primesc cele 15 minute gratuite?",
    a: "Îți faci cont, confirmi adresa de email și îți verifici numărul de mobil cu un cod primit prin SMS. Lecția gratuită se acordă o singură dată pentru fiecare elev și fiecare număr de telefon.",
  },
  {
    q: "Pentru cine este?",
    a: "Pentru elevi din școala primară până la liceu și BAC, pentru studenți și pentru adulți care vor să învețe. Explicațiile se adaptează nivelului ales.",
  },
  {
    q: "Înlocuiește un meditator real?",
    a: "Nu. Profesorul AI e util pentru explicații și exersare oricând, dar poate greși și nu îți urmărește progresul pe termen lung. Pentru recuperare sau pregătire de examen, un meditator real îți face un plan.",
  },
  {
    q: "Ce se întâmplă cu ce spun la microfon?",
    a: "Vocea ta e transformată în text de browser și trimisă profesorului doar ca să-ți răspundă. Nu publicăm conversațiile și nu îți cerem date personale în sesiune.",
  },
];

export const Route = createFileRoute("/profesor-ai/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE}/promo-profesor-ai.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE}/promo-profesor-ai.jpg` },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbLd([{ name: "Profesor AI", path: PATH }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Profesor AI — lecții live în limba română",
          serviceType: "Meditații online cu profesor AI",
          description: DESCRIPTION,
          url: URL,
          offers: {
            "@type": "Offer",
            name: "Prima lecție de 15 minute",
            price: 0,
            priceCurrency: "RON",
            url: `${URL}#incepe`,
          },
          areaServed: { "@type": "Country", name: "România" },
          provider: { "@id": `${SITE}/#org` },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <article className="container-page py-8 lg:py-12">
      <BlocajeBreadcrumb items={[{ name: "Profesor AI" }]} />
      <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1fr]">
        <header>
          <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            <BadgeCheck className="h-4 w-4" /> Primele 15 minute gratuit · live · în limba română
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Profesorul AI: primele 15 minute gratuit, live, oricând
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Alegi materia, nivelul, durata și ce vrei să faci. Profesorul îți vorbește, te ascultă,
            îți explică pe înțeles, îți dă exerciții și te corectează, cu răbdare, până când îți e
            clar.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <video
              className="aspect-video w-full bg-foreground object-cover"
              poster="/promo-profesor-ai.jpg"
              width={1280}
              height={720}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Exemplu video: Hannah explică o ecuație în română unui elev"
            >
              <source src={hannahDemoWebm.url} type="video/webm" />
              <source src={hannahDemo.url} type="video/mp4" />
            </video>
          </div>
        </header>
        <div id="incepe">
          <ConfiguratorProfesorAi />
        </div>
      </div>

      <section className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: MonitorPlay,
            t: "Ca o lecție reală",
            d: "Profesorul îți vorbește cu voce și expresii, iar ce e important scrie pe tablă.",
          },
          {
            icon: Mic,
            t: "Vorbești sau scrii",
            d: "Apeși microfonul și întrebi, sau scrii. Îl poți întrerupe oricând.",
          },
          {
            icon: PencilLine,
            t: "Exerciții corectate",
            d: "Îți dă exerciții pe nivelul tău, îți corectează răspunsul și îți explică greșeala.",
          },
          {
            icon: Repeat2,
            t: "Până înțelegi",
            d: "Dacă nu e clar, îți explică altfel, mai simplu, cu alt exemplu.",
          },
        ].map((x) => (
          <div key={x.t} className="card-soft p-5">
            <x.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 font-bold">{x.t}</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14 card-soft bg-gradient-to-br from-primary-soft to-card p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Preferi un profesor în carne și oase?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Postezi gratuit o cerere și primești propuneri de la meditatori reali.
            </p>
          </div>
          <Link to="/meditatii" className="btn-primary h-11 px-5">
            Cere un meditator
          </Link>
        </div>
      </section>
    </article>
  );
}
