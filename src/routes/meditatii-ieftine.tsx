import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-ieftine")(seoPage({
  path: "/meditatii-ieftine",
  title: "Meditații ieftine — Tarife accesibile cu profesori verificați | MeditatiiDirect.ro",
  description: "Meditații la preț accesibil: compari propunerile mai multor profesori verificați, online sau la domiciliu. Fără comision intermediar.",
  h1: "Meditații ieftine cu profesori verificați",
  intro: "Filtrează anunțurile după tarif ca să găsești pregătire accesibilă. Studenți merituoși și profesori la început de carieră, verificați manual.",
  bullets: ["Compari tarifele din mai multe propuneri", "Și studenți sau profesori la început de drum", "Contact direct — fără comision", "Online sau la domiciliu"],
  faqs: [
    { q: "Sunt meditațiile ieftine de calitate?", a: "Da — pe MeditatiiDirect studenții de la facultăți de top (medicină, politehnică, ASE) oferă meditații la prețuri accesibile fiindcă sunt la început de carieră, nu pentru că pregătirea ar fi slabă." },
  ],
  related: [
    { to: "/preturi-meditatii", label: "Prețuri meditații" },
    { to: "/meditatii-online", label: "Meditații online" },
  ],
}));
