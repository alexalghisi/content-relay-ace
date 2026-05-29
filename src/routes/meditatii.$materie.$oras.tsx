// Combo dinamic materie × oraș: /meditatii/$materie/$oras
// Acoperă într-un singur fișier zeci de keyword-uri locale (ex: "meditatii engleza cluj").
import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { getSubjectSeo } from "@/data/subjects-seo";
import { getCityBySlug } from "@/data/cities";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/meditatii/$materie/$oras")({
  loader: ({ params }) => {
    const subject = getSubjectSeo(params.materie);
    const city = getCityBySlug(params.oras);
    if (!subject || !city) throw notFound();
    return { subject, city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, city } = loaderData;
    const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;
    const title = `Meditații ${subject.name} ${city.name} — Profesori verificați | MeditatiiDirect.ro`;
    const desc = `Meditații ${subject.nameLower} în ${city.name} cu profesori verificați. Tarife ${subject.pretMin}–${subject.pretMax} lei/oră. Online sau la domiciliu, fără comision.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `meditatii ${subject.slug} ${city.slug}, meditatii ${subject.nameLower} ${city.name}, profesor ${subject.nameLower} ${city.name}, pret meditatii ${subject.nameLower}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          name: `Meditații ${subject.name} ${city.name}`,
          description: desc, url, areaServed: { "@type": "City", name: city.name },
          provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
          offers: { "@type": "AggregateOffer", priceCurrency: "RON",
            lowPrice: subject.pretMin, highPrice: subject.pretMax, offerCount: 50 },
        }) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd([
          { q: `Cât costă meditațiile la ${subject.nameLower} în ${city.name}?`,
            a: `Tarifele variază între ${subject.pretMin} și ${subject.pretMax} lei/oră, în funcție de experiența profesorului și nivelul cerut. Media în ${city.name} este ${subject.pretMediu} lei/oră.` },
          { q: `Pot face meditații ${subject.nameLower} online în ${city.name}?`,
            a: `Da, majoritatea profesorilor oferă atât meditații online (Zoom, Meet) cât și față în față la domiciliu în ${city.name}.` },
          { q: `Cum aleg un profesor de ${subject.nameLower} bun în ${city.name}?`,
            a: `Verifică experiența, rezultatele elevilor, recenziile și fă o oră de probă. Pe MeditatiiDirect.ro toți profesorii sunt verificați manual.` },
        ])) },
      ],
    };
  },
  component: ComboPage,
});

function ComboPage() {
  const { subject, city } = Route.useLoaderData();
  const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;
  return (
    <SeoLanding
      pageUrl={url}
      breadcrumbParent={{ name: "Meditații", url: `${SITE}/meditatii` }}
      h1={`Meditații ${subject.name} în ${city.name}`}
      intro={`Profesori verificați de ${subject.nameLower} în ${city.name} (${city.county}, ${city.population} locuitori). Online sau la domiciliu, tarife transparente ${subject.pretMin}–${subject.pretMax} lei/oră, fără comision și fără cont obligatoriu.`}
      bullets={[
        `${subject.name} pentru toate nivelurile: clasele V–XII, BAC, admitere`,
        `Profesori titulari și absolvenți cu rezultate dovedite în ${city.name}`,
        `Online (Zoom/Meet) sau la domiciliu în ${city.name}`,
        `Preț mediu ${subject.pretMediu} lei/oră — comparabil cu piața locală`,
      ]}
      ctaPrimary={{ to: "/meditatii", label: `Vezi profesori ${subject.nameLower}` }}
      ctaSecondary={{ to: "/caut-profesor", label: "Postează cerere" }}
      faqs={[
        { q: `Cât costă o oră de meditație la ${subject.nameLower} în ${city.name}?`,
          a: `Tarifele încep de la ${subject.pretMin} lei/oră pentru studenți/debutanți și ajung la ${subject.pretMax} lei/oră pentru profesori titulari cu experiență la BAC/olimpiadă. Media în ${city.name} este ${subject.pretMediu} lei/oră.` },
        { q: `Faceți și online?`,
          a: `Da. Majoritatea profesorilor de ${subject.nameLower} din ${city.name} oferă atât ore online (Zoom, Google Meet) cât și ore la domiciliu.` },
        { q: `Există meditații ${subject.nameLower} pentru BAC în ${city.name}?`,
          a: `Da, avem profesori specializați pe pregătire BAC ${subject.nameLower} în ${city.name}, cu rezultate verificabile.` },
        { q: `Cum plătesc?`,
          a: `Plata se face direct profesorului, în numerar sau transfer bancar. MeditatiiDirect.ro nu percepe comision.` },
      ]}
      related={[
        { to: "/meditatii-in/$oras", label: `Toate meditațiile în ${city.name}` },
        { to: "/meditatii", label: "Toate anunțurile" },
        { to: "/preturi-meditatii", label: "Prețuri meditații" },
      ]}
    />
  );
}
