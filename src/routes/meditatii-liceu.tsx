import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-liceu")(seoPage({
  path: "/meditatii-liceu",
  title: "Meditații Liceu (Clasele IX–XII) — BAC & Admitere | MeditatiiDirect.ro",
  description: "★ Meditații liceu pentru clasele IX–XII: pregătire BAC 2026, admitere Medicină, UPB, ASE, Drept. Profesori titulari și asistenți universitari. De la 50 lei/oră.",
  h1: "Meditații liceu — clasele IX–XII",
  intro: "Pregătire profesională pentru liceeni: recuperare materie, teze, BAC 2026, admitere facultate. Profesori titulari cu experiență dovedită la examenele naționale.",
  bullets: [
    "Matematică liceu M1 / M2 — analiză, algebră, geometrie",
    "Limba română — eseu argumentativ, literatură",
    "Fizică, chimie, biologie — pregătire BAC + Medicină",
    "Informatică C++ / Python — BAC + admitere UPB",
    "Engleză — BAC, Cambridge, IELTS",
    "Istorie, geografie — BAC bilingv și profil uman",
  ],
  faqs: [
    { q: "Când să încep meditațiile pentru BAC?", a: "Ideal din clasa a XI-a, cu 2 ore/săptămână per materie. Pentru recuperare sau scor maxim, recomandăm din clasa a IX-a." },
    { q: "Există meditații combinate BAC + admitere?", a: "Da, mulți profesori oferă pachete care acoperă simultan programa de BAC și cerințele specifice pentru admiterea la Medicină, UPB, ASE sau Drept." },
  ],
  related: [
    { to: "/meditatii-scoala", label: "Meditații școală" },
    { to: "/meditatii-bac", label: "Meditații BAC 2026" },
    { to: "/meditatii-clasa-12", label: "Meditații clasa a 12-a" },
    { to: "/meditatii-admitere-medicina", label: "Admitere Medicină" },
    { to: "/meditatii-admitere-politehnica", label: "Admitere Politehnică" },
  ],
}));
