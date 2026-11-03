import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { SECTIUNI } from "@/data/continut-pagini";

export const Route = createFileRoute("/profesor-particular")(seoPage({
  path: "/profesor-particular",
  title: "Profesor particular — profesori particulari verificați în România | MeditatiiDirect.ro",
  description: "Caută profesor particular pentru orice materie și nivel. Profesori verificați manual, online sau la domiciliu. Contact direct, fără comision.",
  h1: "Profesor particular pentru orice materie",
  intro: "Profesori particulari verificați în toată România. Caută după materie, oraș sau tarif și contactează direct profesorul.",
  bullets: ["Toate materiile școlare, de la gimnaziu la admitere", "Verificare manuală a profesorilor", "Online sau la domiciliu", "Fără comision — plătești direct profesorului"],
  sections: SECTIUNI["profesor-particular"],
  faqs: [
    { q: "Cum găsesc un profesor particular bun?", a: "Pornește de la obiectiv (recuperare, teză, examen, admitere) și cere o primă discuție în care profesorul vede nivelul elevului. Pe MeditatiiDirect postezi gratuit o cerere și compari propunerile mai multor profesori verificați înainte să alegi." },
    { q: "Profesor particular online sau acasă?", a: "Online ai de unde alege din toată țara și nu pierzi timp pe drum; acasă ajută elevii care se concentrează greu în fața ecranului. Alegi formatul în cerere." },
    { q: "Cât costă un profesor particular?", a: "Fiecare profesor își stabilește tariful și îl vezi în propunere înainte să accepți. Tarifele reale din anunțurile de pe site sunt pe pagina Prețuri meditații, pe materii și orașe." },
    { q: "Plătesc platformei pentru profesor?", a: "Nu. Postarea cererii e gratuită, iar plata o faci direct profesorului, fără comision către MeditatiiDirect." },
  ],
  related: [
    { to: "/profesori", label: "Profesori particulari verificați" },
    { to: "/meditatii-online", label: "Meditații online" },
    { to: "/meditatii-la-domiciliu", label: "Meditații la domiciliu" },
    { to: "/preturi-meditatii", label: "Prețuri meditații" },
  ],
}));
