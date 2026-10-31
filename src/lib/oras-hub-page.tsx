// Construiește configurația seoPage pentru o pagină /meditatii-<oras> din src/data/orase-hub.ts.
import { Link } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { ORASE_HUB } from "@/data/orase-hub";

const SITE = "https://meditatiidirect.ro";
const MATERII = [
  { slug: "matematica", label: "Matematică" },
  { slug: "romana", label: "Română" },
  { slug: "engleza", label: "Engleză" },
  { slug: "informatica", label: "Informatică" },
  { slug: "fizica", label: "Fizică" },
  { slug: "chimie", label: "Chimie" },
  { slug: "biologie", label: "Biologie" },
];

export function orasHubPage(path: string) {
  const h = ORASE_HUB.find((o) => o.path === path);
  if (!h) throw new Error(`Oraș necunoscut: ${path}`);
  const url = `${SITE}/meditatii-${h.path}`;
  return seoPage({
    path: `/meditatii-${h.path}`,
    title: `Meditatii ${h.plain} — online sau la domiciliu | Profesor AI 24/7`,
    description: `Meditatii in ${h.plain} pentru Evaluare Nationala, BAC si admitere: postezi gratuit cererea, profesorii iti trimit propuneri, iar Profesorul AI te ajuta la orice ora.`,
    h1: `Meditații în ${h.name}`,
    intro: `${h.context} Pe MeditatiiDirect descrii o singură dată ce ai nevoie, iar profesorii interesați îți trimit propuneri; tu alegi, fără comision.`,
    bullets: [
      "Evaluarea Națională și BAC",
      "La domiciliu în " + h.name + " sau online",
      "Chat direct cu profesorul",
      "Profesor AI disponibil zi și noapte",
    ],
    ctaPrimary: {
      to: "/meditatii",
      label: `Postează cererea în ${h.name}`,
      search: { oras: h.citySlug },
    },
    ctaSecondary: { to: "/profesor-ai", label: "Încearcă Profesorul AI" },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Meditații în ${h.name}`,
        serviceType: "Meditații / profesor particular",
        url,
        provider: { "@id": `${SITE}/#org` },
        areaServed: { "@type": "City", name: h.name },
        availableChannel: [
          { "@type": "ServiceChannel", serviceUrl: `${SITE}/meditatii` },
          { "@type": "ServiceChannel", serviceUrl: `${SITE}/profesor-ai` },
        ],
      },
    ],
    sections: [
      {
        title: `Cum găsești un profesor în ${h.name}`,
        body: (
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Postezi cererea: materia, clasa, zona (de ex. {h.zone.slice(0, 3).join(", ")}) sau
              „online”.
            </li>
            <li>
              Profesorii care predau materia îți trimit propuneri cu tarif și disponibilitate.
            </li>
            <li>Discuți în chat, faci o primă ședință și decizi.</li>
          </ol>
        ),
      },
      {
        title: "Primul Profesor AI 100% Virtual din România",
        body: (
          <>
            <p>
              Între ședințele cu profesorul, poți lucra cu{" "}
              <Link to="/profesor-ai" className="text-primary underline">
                Profesorul AI
              </Link>
              : un profesor individual cu AI, la orice oră din zi și din noapte, care explică pas cu
              pas în limba română.
            </p>
            <p>
              Este util pentru teme, recapitulare înainte de test sau întrebări apărute seara
              târziu, când nu ai cui să le pui.
            </p>
          </>
        ),
      },
      {
        title: `Repere educaționale în ${h.name}`,
        body: (
          <>
            <p>Elevii din {h.name} se pregătesc des pentru licee precum:</p>
            <ul className="mt-1 space-y-1">
              {h.licee.map((l) => (
                <li key={l}>• {l}</li>
              ))}
            </ul>
            <p className="mt-2">și pentru admiterea la: {h.universitati.join(", ")}.</p>
            <p>
              Mediile de admitere se verifică pe site-ul oficial al ISJ{" "}
              {h.name === "București" ? "/ ISMB" : ""} sau al universității.
            </p>
          </>
        ),
      },
      {
        title: `Materii căutate în ${h.name}`,
        body: (
          <ul className="grid grid-cols-2 gap-1">
            {MATERII.map((m) => (
              <li key={m.slug}>
                <Link
                  to="/meditatii/$materie/$oras"
                  params={{ materie: m.slug, oras: h.citySlug }}
                  className="text-primary underline"
                >
                  {m.label} {h.name}
                </Link>
              </li>
            ))}
          </ul>
        ),
      },
      {
        title: "Zone acoperite",
        body: (
          <p>
            Poți cere meditații la domiciliu în cartiere ca {h.zone.join(", ")}, dar și{" "}
            <Link to="/meditatii-online" className="text-primary underline">
              meditații online
            </Link>
            , oriunde în oraș. Anunțurile active din oraș le găsești pe{" "}
            <Link
              to="/meditatii-in/$oras"
              params={{ oras: h.citySlug }}
              className="text-primary underline"
            >
              pagina cu anunțuri din {h.name}
            </Link>
            .
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: `Cât costă meditațiile în ${h.name}?`,
        a: "Tariful îl propune fiecare profesor. Scrie bugetul în cerere și compară propunerile primite; platforma nu ia comision.",
      },
      {
        q: `Pot face meditații la domiciliu în ${h.name}?`,
        a: "Da. Menționează zona în cerere; profesorii care se pot deplasa îți trimit propuneri. Poți alege și online.",
      },
      {
        q: "Ce este Profesorul AI?",
        a: "Este un profesor virtual, bazat pe inteligență artificială, care explică materia în limba română, la orice oră. Îl poți folosi singur sau ca sprijin între meditațiile cu un profesor real.",
      },
      {
        q: "Postarea cererii costă ceva?",
        a: "Nu. Postarea cererii este gratuită, iar discuția cu profesorii are loc direct, în chat.",
      },
    ],
    related: [
      { to: "/meditatii", label: "Toate meditațiile" },
      { to: "/profesor-ai", label: "Profesor AI" },
      { to: "/meditatii-online", label: "Meditații online" },
      { to: "/meditatii-bac", label: "Meditații BAC" },
      { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
      { to: "/admitere", label: "Admitere facultate" },
    ],
  });
}
