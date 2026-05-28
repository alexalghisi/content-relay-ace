import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/profesor-particular")(seoPage({
  path: "/profesor-particular",
  title: "Profesor particular — 1000+ profesori verificați în România | MeditatiiDirect.ro",
  description: "Caută profesor particular pentru orice materie și nivel. Profesori verificați manual, online sau la domiciliu. Contact direct, fără comision.",
  h1: "Profesor particular pentru orice materie",
  intro: "Peste 1000 de profesori particulari verificați în toată România. Caută după materie, oraș sau tarif și contactează direct profesorul.",
  bullets: ["20+ materii — toate nivelurile", "Verificare manuală a profesorilor", "Online sau la domiciliu", "Fără comision — plătești direct profesorului"],
  related: [
    { to: "/meditatori", label: "Toți meditatorii" },
    { to: "/caut-profesor", label: "Caut profesor" },
    { to: "/profesori-meditatii", label: "Profesori meditații" },
  ],
}));
