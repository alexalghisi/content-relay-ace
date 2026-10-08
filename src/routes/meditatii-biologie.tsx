import { createFileRoute, Link } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-biologie")(seoPage({
  path: "/meditatii-biologie",
  title: "Meditații Biologie — BAC și admitere medicină | MeditatiiDirect.ro",
  description: "Meditații biologie pentru BAC și admitere la medicină. Postezi cererea gratuită, compari propunerile cu tarif și discuți cu profesorii în chat.",
  h1: "Meditații biologie pentru BAC și admitere medicină",
  intro: "Cauți ajutor la anatomie, genetică sau biologie vegetală și animală? Postezi gratuit o cerere pentru BAC ori admitere la medicină. Profesorii interesați trimit propuneri cu tarif și program, apoi discuți direct în chat.",
  bullets: ["BAC: anatomie sau biologie vegetală și animală", "Admitere UMF București, Cluj, Iași, Timișoara", "Biologie pentru gimnaziu și liceu", "Online sau la domiciliu"],
  ctaPrimary: { to: "/meditatii", search: { materie: "biologie" }, label: "Cere meditații la biologie" },
  ctaFooter: { title: "Pregătește biologia cu un plan clar", body: "Menționează examenul, programa și capitolele dificile în cererea gratuită.", to: "/meditatii", search: { materie: "biologie" }, label: "Trimite cererea gratuită" },
  sections: [
    { title: "Programa BAC: alege varianta potrivită", body: <><p>La biologie, verifică programa pentru anatomie și fiziologie umană, genetică și ecologie umană sau pentru biologie vegetală și animală. Precizează varianta în cerere și lucrează pe subiecte corespunzătoare.</p><p>Consultă <Link to="/bac" className="text-primary underline">arhiva BAC</Link> și <Link to="/rezolvari" className="text-primary underline">rezolvările explicate</Link>.</p></> },
    { title: "Admitere medicină: bibliografia contează", body: <p>Fiecare facultate stabilește bibliografia și regulile examenului. Include universitatea și ediția materialelor în cerere. Cere profesorului explicații pentru fiecare răspuns din grile, nu doar cheia corectă, și verifică periodic capitolele în care repeți greșeli.</p> },
  ],
  faqs: [
    { q: "Câte ore de meditații biologie pentru admitere UMF?", a: "Numărul de ore depinde de nivelul inițial, programa facultății și timpul de studiu individual. Cere o evaluare inițială și un plan cu recapitulări și teste; nu există un număr de ședințe care garantează admiterea." },
  ],
  related: [
    { to: "/meditatii-chimie", label: "Meditații chimie" },
    { to: "/grile-medicina", label: "Grile medicină" },
    { to: "/meditatii-bac", label: "Meditații BAC" },
  ],
}));
