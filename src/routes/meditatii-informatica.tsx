import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-informatica";
const TITLE = "Meditații Informatică 2026 — C++, Python Online | BAC, Admitere UPB";
const DESC = "★ Meditații informatică online sau acasă: C/C++, Python, Java, algoritmi, BAC, admitere Politehnică (UPB, UTCN, Info Iași). Profesori cu olimpiadă. De la 50 lei/oră.";

const faqs = [
  { q: "Ce limbaje sunt acoperite la meditațiile de informatică?", a: "C/C++ (limba oficială pentru BAC și olimpiade), Python, Java, JavaScript, plus algoritmi, structuri de date și baze de date." },
  { q: "Sunt utile meditațiile pentru olimpiada de informatică?", a: "Da. Avem profesori care au antrenat lotul olimpic, cu experiență în pregătirea pentru ONI și concursurile internaționale." },
  { q: "Pot învăța programare de la zero cu meditații?", a: "Absolut. Mulți elevi încep complet de la zero și ajung în 3–6 luni să rezolve probleme de nivel BAC sau admitere la Politehnică." },
];

export const Route = createFileRoute("/meditatii-informatica")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Meditații informatică"
      intro="Profesori verificați de informatică pentru gimnaziu, liceu, BAC și admitere la Politehnică. C/C++, Python, algoritmi, structuri de date, programare orientată obiect."
      bullets={[
        "C/C++ — limbajul oficial pentru BAC și ONI",
        "Python pentru începători și data science",
        "Pregătire admitere UPB, UTCN, Info Iași",
        "Antrenament pentru olimpiadă și concursuri",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesori informatică" }}
      pdfs={[
        { href: "/resurse/bac/informatica/2026", title: "Simulare BAC 2026 — Informatică (C/C++)", meta: "Algoritmi, exerciții, model rezolvat" },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii-matematica", label: "Matematică" },
        { to: "/meditatii-bac", label: "BAC 2026" },
        { to: "/grile-upb", label: "Grile UPB" },
      ]}
    />
  ),
});
