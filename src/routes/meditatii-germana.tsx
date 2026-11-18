import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { SECTIUNI } from "@/data/continut-pagini";

export const Route = createFileRoute("/meditatii-germana")(
  seoPage({
    path: "/meditatii-germana",
    title: "Meditatii germana online sau acasă | A1–C2, Goethe, BAC",
    description:
      "Meditatii germana pentru niveluri A1–C2, examene Goethe și telc, BAC sau conversație, online sau acasă. Ceri gratuit oferte de la profesori, fără comision.",
    h1: "Meditații germană cu profesori verificați",
    intro:
      "Pregătire pentru toate nivelurile europene (A1–C2), examene Goethe, telc, BAC limba germană și conversație. Alegi profesorul după profil și propunere.",
    bullets: [
      "Niveluri A1–C2 (CEFR)",
      "Goethe-Zertifikat, telc",
      "BAC limba germană maternă/modernă",
      "Conversație și pronunție",
    ],
    sections: SECTIUNI["meditatii-germana"],
    faqs: [
      {
        q: "Cât costă meditațiile la germană?",
        a: "Tariful îl stabilește fiecare profesor și îl vezi în propunerea lui înainte să accepți. Pe platformă nu plătești comision; prețurile reale din anunțuri sunt adunate pe pagina Prețuri meditații.",
      },
      {
        q: "Pot face meditații la germană online?",
        a: "Da. Lecțiile online prin Zoom sau Google Meet funcționează bine la limbi străine, mai ales pentru conversație și pregătirea de examen. Bifează online în cerere și poți alege profesori din orice oraș.",
      },
      {
        q: "În cât timp trec de la un nivel la altul?",
        a: "Depinde de nivelul de pornire, de câte ore lucrezi pe săptămână și de cât exersezi între lecții. Cere profesorului un test de plasare la început și un plan cu obiective pe luni, apoi verificați progresul pe teste de nivel.",
      },
      {
        q: "Ce certificat de germană să aleg: Goethe, telc sau ÖSD?",
        a: "Toate trei sunt recunoscute internațional și se dau pe niveluri A1–C2. Alege după ce îți cere instituția (universitatea, angajatorul sau ambasada) și după datele de examen disponibile în orașul tău.",
      },
      {
        q: "Profesorii predau și pentru copii?",
        a: "Da, mulți profesori lucrează cu elevi din ciclul primar și gimnaziu. Menționează vârsta copilului și dacă învață germana la școală (inclusiv în clase cu predare intensivă sau în limba germană), ca să primești propuneri potrivite.",
      },
    ],
    related: [
      { to: "/meditatii-engleza", label: "Meditații engleză" },
      { to: "/meditatii-franceza", label: "Meditații franceză" },
      { to: "/meditatii-copii", label: "Meditații pentru copii" },
      { to: "/preturi-meditatii", label: "Prețuri meditații" },
    ],
  }),
);
