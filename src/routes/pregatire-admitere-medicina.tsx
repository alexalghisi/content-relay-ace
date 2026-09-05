import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/pregatire-admitere-medicina")(
  seoPage({
    path: "/pregatire-admitere-medicina",
    title: "Pregătire admitere Medicină 2026 — profesori UMF",
    description:
      "Pregătire admitere Medicină 2026: biologie și chimie pe bibliografia UMF, grile oficiale, simulări săptămânale. Profesori verificați, 80–200 lei/oră, fără comision.",
    h1: "Pregătire admitere Medicină 2026 (UMF)",
    intro:
      "Pregătire intensivă pentru admiterea la Medicină: biologie și chimie organică/anorganică strict pe bibliografia UMF, mii de grile rezolvate și simulări cronometrate în condiții de examen.",
    bullets: [
      "Bibliografie oficială UMF București, Cluj, Iași, Timișoara, Târgu Mureș",
      "Grile rezolvate din sesiunile anterioare, disponibile gratuit",
      "Simulări cronometrate cu punctaj și analiza greșelilor",
      "Profesori cu rezultate confirmate la admitere",
      "Meditații online sau la domiciliu",
      "Tarife 80–200 lei/oră, contact direct, fără comision",
    ],
    faqs: [
      { q: "Când începe pregătirea pentru admiterea la Medicină?", a: "Cei mai mulți candidați admiși încep în clasa a XI-a sau cel târziu în septembrie al clasei a XII-a. O pregătire sub 6 luni este posibilă doar pentru elevii care stăpânesc deja foarte bine biologia și chimia de liceu." },
      { q: "Ce materii se dau la admiterea la Medicină?", a: "Cel mai frecvent biologie (clasele XI–XII, anatomie și fiziologie umană) și chimie organică sau anorganică, în funcție de universitate. Unele facultăți acceptă și fizică. Verifică metodologia UMF-ului vizat pentru sesiunea 2026." },
      { q: "Cât costă pregătirea pentru admiterea la Medicină?", a: "Între 80 și 200 lei/oră pentru meditații individuale. Un an de pregătire la două materii, cu câte o ședință săptămânală la fiecare, înseamnă în medie 1.500–2.500 lei pe lună." },
      { q: "Câte grile trebuie rezolvate?", a: "Candidații admiși rezolvă în medie 8.000–15.000 de grile pe parcursul pregătirii, cu reluarea sistematică a celor greșite. Ritmul recomandat este de 100–200 de grile pe săptămână în ultimele luni." },
      { q: "Meditațiile online funcționează pentru admitere?", a: "Da. Grilele, simulările și corectarea se fac la fel de bine online, iar accesul la profesori specializați pe bibliografia UMF nu mai depinde de orașul în care locuiești." },
      { q: "Ce fac dacă nu intru din prima?", a: "Mulți candidați reușesc în al doilea an, cu o pregătire structurată pornită imediat după rezultate. Analiza punctajului obținut arată exact ce capitole trebuie reluate." },
    ],
    related: [
      { to: "/meditatii-admitere-medicina", label: "Meditații admitere Medicină" },
      { to: "/grile-medicina", label: "Grile Medicină" },
      { to: "/grile-admitere-medicina-2026", label: "Grile admitere 2026" },
      { to: "/meditatii-biologie", label: "Meditații biologie" },
      { to: "/meditatii-chimie", label: "Meditații chimie" },
    ],
    ctaPrimary: { to: "/meditatii", label: "Găsește profesor de biologie/chimie" },
  }),
);
