import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/centru-meditatii";
const TITLE = "Centru meditatii București, Cluj și online — profesori verificați | MeditatiiDirect.ro";
const DESC = "Cauți un centru de meditatii in Bucuresti, Cluj sau online? Postezi gratuit cererea și primești oferte de la profesori verificați: matematica, romana, engleza, BAC. Fără comision.";

const faqs = [
  { q: "Care este diferența față de un centru de meditații clasic?", a: "La un centru de meditații alegi din profesorii acelui centru. Aici descrii o singură dată ce ai nevoie și primești propuneri de la mai mulți profesori verificați, cu tarif și program, apoi alegi direct, fără comision." },
  { q: "Găsesc meditații în București pe sectoare?", a: "Da. Menționezi în cerere sectorul sau zona și dacă vrei lecții la profesor, la domiciliu sau online, iar profesorii din apropiere îți trimit propuneri." },
  { q: "Ce materii sunt disponibile?", a: "Matematică, română, engleză, germană, franceză, fizică, chimie, biologie, informatică, istorie și geografie, de la gimnaziu la BAC și admitere." },
];

export const Route = createFileRoute("/centru-meditatii")({
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
      h1="Centru de meditații: profesori verificați în București, Cluj și online"
      intro="În loc să suni pe rând la fiecare centru de meditatii, descrii o dată materia, nivelul și zona. Profesorii verificați îți trimit oferte cu preț și program, iar tu alegi."
      bullets={[
        "Centru meditatii Bucuresti: toate sectoarele, la profesor, acasă sau online",
        "Meditatii matematica, romana, engleza, chimie, fizica, informatica",
        "Pregătire Evaluare Națională, BAC și admitere",
        "Gratuit pentru elevi, plata direct profesorului",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Cere oferte de la profesori" }}
      faqs={faqs}
      related={[
        { to: "/meditatii-in/bucuresti", label: "Meditații București" },
        { to: "/meditatii-in/cluj-napoca", label: "Meditații Cluj" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/preturi-meditatii", label: "Prețuri meditații" },
      ]}
    />
  ),
});
