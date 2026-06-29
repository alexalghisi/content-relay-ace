import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/subiecte-bac-2026";
const TITLE = "Subiecte BAC 2026 — PDF oficial + barem | MeditatiiDirect";
const DESC = "Subiecte Bacalaureat 2026 oficiale, PDF gratuit + barem de corectare la toate materiile: română, matematică, istorie, biologie, chimie, fizică, informatică, geografie.";

const FAQS = [
  { q: "Unde găsesc subiectele oficiale BAC 2026?", a: "Pe MeditatiiDirect publicăm subiectele oficiale BAC 2026 imediat după ce sunt date publicității de Ministerul Educației (subiecte.edu.ro). PDF gratuit, găzduit pe serverele noastre, fără cont, fără reclame intruzive." },
  { q: "La ce ore se publică subiectele BAC 2026?", a: "Subiectele se publică pe edu.ro după ora 15:00, după încheierea probei. Le indexăm în maxim 30 de minute și apar pe variantele specifice de pe MeditatiiDirect." },
  { q: "Există și barem oficial pentru BAC 2026?", a: "Da. Baremul oficial de evaluare și notare se publică tot de către CNEE/MEd, de regulă în aceeași zi sau a doua zi. Îl găsești pe aceeași pagină cu subiectul." },
  { q: "Pot rezolva subiecte BAC de la anii anteriori?", a: "Da, recomandat. Arhiva noastră are subiecte oficiale și bareme din 2010-2025 pentru toate cele 15 materii. Rezolvă-le cronometrat, ca la examen, și verifică-te cu baremul." },
];

export const Route = createFileRoute("/subiecte-bac-2026")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { name: "keywords", content: "subiecte bac 2026, bacalaureat 2026 subiecte, subiecte matematica bac 2026, subiecte romana bac 2026, barem bac 2026, variante bac 2026, edu.ro subiecte 2026, subiecte istorie bac 2026, subiecte biologie bac 2026" },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Subiecte BAC 2026 — PDF oficial + barem"
      intro="Subiectele oficiale Bacalaureat 2026 publicate de Ministerul Educației, PDF gratuit, găzduite la noi. La toate cele 15 materii: română, matematică (M1/M2/M3), istorie, biologie, chimie, fizică, informatică, geografie, logică, psihologie, sociologie, economie, filosofie, limbi străine."
      bullets={[
        "Subiect oficial CNEE + barem de corectare",
        "PDF descărcabil — fără cont, fără reclame intruzive",
        "Indexat în maxim 30 minute după publicarea pe edu.ro",
        "Arhivă completă 2010-2026 pentru pregătire",
      ]}
      ctaPrimary={{ to: "/variante-bacalaureat", label: "Vezi toate variantele BAC" }}
      ctaSecondary={{ to: "/meditatii-bac", label: "Profesor pentru BAC" }}
      sections={[
        { title: "Cum folosești subiectele BAC 2026", body: <p>Cele mai bune rezultate vin din <strong>simulare în condiții reale</strong>: cronometrează-te 3 ore, rezolvă fără ajutoare, apoi verifică-te cu baremul oficial. Identifică ce capitole îți scad nota și lucrează țintit cu un profesor.</p> },
        { title: "Toate materiile de Bacalaureat 2026", body: <p>Probele scrise sunt: <strong>Limba română</strong> (obligatoriu), <strong>Matematică sau Istorie</strong> (în funcție de profil), proba <strong>la alegere a profilului</strong> (biologie, chimie, fizică, informatică, geografie, logică, psihologie, economie, sociologie, filosofie). Plus probele de competențe (lingvistice, digitale, română).</p> },
      ]}
      faqs={FAQS}
      related={[
        { to: "/variante-bacalaureat", label: "Arhivă BAC 2010-2026" },
        { to: "/rezultate-bac-2026", label: "Rezultate BAC 2026" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-romana", label: "Meditații română" },
        { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
      ]}
    />
  ),
});
