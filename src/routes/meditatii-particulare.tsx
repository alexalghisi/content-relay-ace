import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-particulare")(seoPage({
  path: "/meditatii-particulare",
  title: "Meditații Particulare — Profesori Verificați, Fără Comision | MeditatiiDirect.ro",
  description: "★ Meditații particulare cu profesori verificați din toată România. Toate materiile, toate nivelurile. Acasă sau online. Contact direct, fără comision.",
  h1: "Meditații particulare — toată România",
  intro: "Cea mai mare platformă de meditații particulare din România. profesori particulari verificați, 20+ materii, contact direct fără intermediari. Pentru școală, gimnaziu, liceu, BAC și admitere.",
  bullets: [
    "20+ materii — toate nivelurile școlare",
    "Profesori verificați cu recenzii reale",
    "Acasă, la profesor sau online",
    "Fără comision — plata direct profesorului",
    "Profil verificat, foto, CV, tarif",
  ],
  faqs: [
    { q: "Ce înseamnă meditații particulare?", a: "Sunt lecții individuale sau în grup mic, predate de un profesor în afara orelor de școală. Tu alegi profesorul, programul și locul (acasă, la profesor sau online)." },
    { q: "Cât costă o oră de meditații particulare?", a: "Fiecare profesor își stabilește tariful și îl vezi în propunerea lui înainte să accepți. Tarifele reale din anunțurile de pe site, pe materii și orașe, sunt pe pagina Prețuri meditații." },
  ],
  related: [
    { to: "/meditatii-private", label: "Meditații private 1-la-1" },
    { to: "/profesor-particular", label: "Profesor particular" },
    { to: "/meditatii-online", label: "Meditații online" },
    { to: "/meditatii-la-domiciliu", label: "Meditații la domiciliu" },
  ],
}));
