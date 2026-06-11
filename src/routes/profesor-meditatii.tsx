import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/profesor-meditatii")(seoPage({
  path: "/profesor-meditatii",
  title: "Profesor Meditații — 1000+ Profesori Verificați | MeditatiiDirect.ro",
  description: "★ Caută profesor de meditații verificat pentru orice materie: matematică, română, engleză, fizică, BAC, admitere. Recenzii reale, contact direct, fără comision.",
  h1: "Profesor de meditații pentru orice materie",
  intro: "Găsește profesorul de meditații potrivit pentru copilul tău: profesori titulari, asistenți universitari, doctoranzi și studenți de top. Toți verificați manual, cu recenzii reale.",
  bullets: [
    "Profesori titulari în gimnaziu și liceu",
    "Asistenți universitari pentru admitere",
    "Verificare manuală a fiecărui profesor",
    "Filtrare după materie, oraș, tarif, recenzii",
    "Chat direct cu profesorul, fără intermediari",
  ],
  faqs: [
    { q: "Cum aleg cel mai bun profesor de meditații?", a: "Verifică recenziile, anii de experiență, rezultatele elevilor (medii BAC, admiteri reușite) și cere o lecție de probă. Profilul fiecărui profesor de pe MeditatiiDirect.ro afișează toate aceste informații." },
    { q: "Pot avea profesor diferit pentru fiecare materie?", a: "Da, recomandăm chiar acest lucru — un profesor specializat pe materie obține rezultate mai bune decât unul generalist." },
  ],
  related: [
    { to: "/profesori", label: "Toți profesorii" },
    { to: "/profesor-particular", label: "Profesor particular" },
    { to: "/caut-profesor", label: "Caut profesor" },
    { to: "/profesori-meditatii", label: "Profesori meditații" },
  ],
}));
