import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { AdsterraNativeBanner, AdsterraBanner728 } from "@/components/ads/adsterra";

const URL = "https://meditatiidirect.ro/meditatii-informatica";
const TITLE = "Meditații Informatică #1 în România — C++, Python, BAC, Admitere UPB 2026";
const DESC = "Meditații informatică online & acasă: C/C++, Python, Java, algoritmi, BAC informatică 2026, admitere Politehnică (UPB, UTCN, Info Iași, ASE CSIE). Profesori cu olimpiadă naţională. Subiecte BAC informatică 2001–2025 PDF gratuit.";

const faqs = [
  { q: "Ce limbaje sunt acoperite la meditațiile de informatică?", a: "C/C++ (limbajul oficial pentru BAC informatică și olimpiade), Python, Java, JavaScript, SQL, plus algoritmi, structuri de date, complexitate, baze de date și programare orientată obiect." },
  { q: "Sunt utile meditațiile pentru olimpiada de informatică (ONI)?", a: "Da. Profesorii noștri au antrenat loturi olimpice și au experiență la ONI, lotul lărgit, baraje și concursuri internaționale (CEOI, IOI)." },
  { q: "Pot învăța programare de la zero cu meditații?", a: "Absolut. Mulți elevi încep complet de la zero și ajung în 3–6 luni să rezolve probleme de nivel BAC informatică sau admitere la Politehnică." },
  { q: "Cât costă o ședință de meditații la informatică?", a: "Tarifele pornesc de la 50 lei/oră pentru gimnaziu și 70–120 lei/oră pentru BAC / admitere UPB. Negociezi direct cu profesorul, fără comision." },
  { q: "Unde găsesc subiectele BAC informatică din anii anteriori?", a: "Avem arhiva completă 2001–2025 cu subiecte oficiale și bareme PDF, găzduite chiar pe MeditatiiDirect.ro — descarci gratuit, fără cont." },
  { q: "Pot face meditații online la informatică?", a: "Da, majoritatea profesorilor de informatică predau online prin Zoom/Meet cu partajare de ecran, IDE colaborativ și platforme de cod (Replit, VSCode Live Share)." },
];

export const Route = createFileRoute("/meditatii-informatica")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "meditatii informatica, meditatii informatica online, profesor informatica, meditatii c++, meditatii python, meditatii programare, meditatii informatica bac, meditatii informatica admitere, meditatii algoritmi, meditatii informatica bucuresti, meditatii informatica cluj, meditatii informatica iasi, meditatii UPB, meditatii UTCN, subiecte bac informatica, bac informatica 2026" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <SeoLanding
        pageUrl={URL}
        h1="Meditații informatică — #1 în România pentru BAC, admitere UPB și olimpiadă"
        intro="Profesori verificați de informatică pentru gimnaziu, liceu, BAC informatică 2026 și admitere la Politehnică (UPB, UTCN, Info Iași, ASE CSIE). C/C++, Python, Java, algoritmi, structuri de date, baze de date, programare orientată obiect. Online sau acasă, în toată țara."
        bullets={[
          "C/C++ — limbajul oficial pentru BAC informatică și ONI",
          "Python pentru începători, data science și AI",
          "Pregătire admitere UPB, UTCN, Info Iași, ASE CSIE",
          "Antrenament olimpiadă: ONI, baraje, IOI",
          "Algoritmi, structuri de date, complexitate, grafuri",
          "Subiecte BAC informatică 2001–2025 PDF gratuit",
        ]}
        ctaPrimary={{ to: "/meditatii", label: "Vezi profesori informatică" }}
        pdfs={[
          { href: "/resurse/bac/informatica/2025", title: "BAC Informatică 2025 — subiect + barem oficial", meta: "C/C++, varianta extrasă, rezolvare comentată" },
          { href: "/resurse/bac/informatica/2024", title: "BAC Informatică 2024 — subiect + barem", meta: "Algoritmi, structuri de date" },
          { href: "/subiecte-bac", title: "Arhivă completă subiecte BAC 2001–2026", meta: "Toate materiile, toate sesiunile" },
        ]}
        faqs={faqs}
        related={[
          { to: "/meditatii-matematica", label: "Matematică" },
          { to: "/meditatii-bac", label: "BAC 2026" },
          { to: "/grile-upb", label: "Grile UPB" },
          { to: "/meditatii-admitere-politehnica", label: "Admitere Politehnică" },
          { to: "/subiecte-bac", label: "Subiecte BAC arhivă" },
        ]}
      />
      <div className="container-page">
        <AdsterraBanner728 />
        <AdsterraNativeBanner />
      </div>
    </>
  );
}
