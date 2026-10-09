import { createFileRoute, Link } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/evaluare-nationala-cluj")(seoPage({
  path: "/evaluare-nationala-cluj",
  title: "Evaluarea Națională 2026 Cluj — calendar, medie, licee și meditații | MeditatiiDirect.ro",
  description: "Evaluarea Națională 2026 în Cluj: calendarul oficial, cum se calculează media de admitere la liceu, liceele căutate din Cluj-Napoca și meditații pentru clasa a VIII-a.",
  image: "https://meditatiidirect.ro/og/meditatii/cluj.jpg",
  h1: "Evaluarea Națională 2026 în Cluj",
  intro: "Tot ce îi trebuie unui elev de clasa a VIII-a din Cluj: datele probelor, formula oficială a mediei, liceele țintă și pregătire cu profesori din Cluj sau online.",
  bullets: ["Română: 22 iunie 2026", "Matematică: 24 iunie 2026", "Limba maternă: 26 iunie 2026", "Rezultate: 30 iunie (inițiale), 8 iulie (finale)", "Fiecare probă scrisă: 120 de minute"],
  ctaPrimary: { to: "/meditatii", label: "Cere meditații EN în Cluj", search: { oras: "cluj-napoca", materie: "matematica" } },
  ctaSecondary: { to: "/calculator-media-evaluare-nationala", label: "Calculează media" },
  sections: [
    {
      title: "Cum se calculează media de admitere",
      body: (
        <p>
          Pentru admiterea în liceu 2026–2027, media este media aritmetică a notelor obținute la probele Evaluării Naționale, calculată cu două zecimale, fără rotunjire. Media claselor V–VIII se folosește doar la departajare. Detalii în{" "}
          <Link to="/evaluare-nationala" className="text-primary underline">ghidul complet EN</Link>; sursa oficială este edu.ro.
        </p>
      ),
    },
    {
      title: "Liceele din Cluj-Napoca",
      body: (
        <p>
          Elevii din Cluj țintesc adesea colegiile naționale „Emil Racoviță”, „George Coșbuc”, „Gheorghe Șincai”, Liceul de Informatică „Tiberiu Popoviciu” sau Liceul Teoretic „Avram Iancu”. Ultimele medii de admitere și locurile se publică de ISJ Cluj — verifică-le acolo înainte de completarea fișei.
        </p>
      ),
    },
    {
      title: "Pregătire cu profesori din Cluj",
      body: (
        <p>
          Postezi cererea pentru română sau matematică, iar profesorii îți trimit propuneri. Vezi și{" "}
          <Link to="/meditatii-cluj" className="text-primary underline">meditații în Cluj-Napoca</Link> și{" "}
          <Link to="/meditatii-clasa-8" className="text-primary underline">meditații clasa a 8-a</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "Când are loc Evaluarea Națională 2026?", a: "Română pe 22 iunie, matematică pe 24 iunie și limba maternă pe 26 iunie 2026. Rezultatele inițiale apar pe 30 iunie, iar cele finale pe 8 iulie." },
    { q: "Se rotunjește media de la Evaluarea Națională?", a: "Nu. Media de admitere se calculează cu două zecimale, fără rotunjire." },
    { q: "Unde găsesc mediile de admitere la liceele din Cluj?", a: "Pe site-ul Inspectoratului Școlar Județean Cluj și în broșura oficială de admitere publicată în fiecare an." },
  ],
  related: [
    { to: "/evaluare-nationala", label: "Evaluarea Națională 2026" },
    { to: "/calculator-media-evaluare-nationala", label: "Calculator medie EN" },
    { to: "/meditatii-cluj", label: "Meditații Cluj-Napoca" },
    { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
  ],
}));
