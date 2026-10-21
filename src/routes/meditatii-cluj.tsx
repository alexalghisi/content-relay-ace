import { createFileRoute, Link } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { ghiduriPentruOras } from "@/data/ghiduri-locale";
import { getSubjectSeo } from "@/data/subjects-seo";

const GHIDURI = ghiduriPentruOras("cluj-napoca");

const SCHOOLS = [
  "Colegiul Național „Emil Racoviță”",
  "Colegiul Național „George Coșbuc”",
  "Colegiul Național „Gheorghe Șincai”",
  "Liceul de Informatică „Tiberiu Popoviciu”",
  "Liceul Teoretic „Avram Iancu”",
  "Colegiul Național Pedagogic „Gheorghe Lazăr”",
  "Liceul Teoretic „Onisifor Ghibu”",
  "Liceul Teoretic „Nicolae Bălcescu”",
];

export const Route = createFileRoute("/meditatii-cluj")(seoPage({
  path: "/meditatii-cluj",
  title: "Meditații Cluj-Napoca: matematică, română, engleză, BAC, Evaluare Națională | la domiciliu sau online",
  description: "Meditații în Cluj-Napoca, la domiciliu sau online: postezi gratuit cererea, profesorii din Cluj îți trimit propuneri cu tarif și discuți direct în chat.",
  image: "https://meditatiidirect.ro/og/meditatii/cluj.jpg",
  h1: "Meditații în Cluj-Napoca",
  intro: "Elevi din Mănăștur, Gheorgheni, Mărăști, Zorilor, Florești sau centru: descrii ce ai nevoie, iar profesorii din Cluj îți trimit propuneri. Tu alegi, fără comision.",
  bullets: ["Clasa a VIII-a și Evaluarea Națională", "BAC și admitere UBB, UMF, UTCN", "La domiciliu în Cluj sau online", "Chat direct cu profesorul", "Evaluezi propunerile cu 1–5 stele"],
  ctaPrimary: { to: "/meditatii", label: "Postează cererea în Cluj", search: { oras: "cluj-napoca" } },
  ctaSecondary: { to: "/evaluare-nationala-cluj", label: "Evaluarea Națională în Cluj" },
  sections: [
    {
      title: "Cum găsești profesorul potrivit în Cluj",
      body: (
        <ol className="list-decimal space-y-2 pl-5">
          <li>Postezi cererea: materia, clasa, cartierul sau „online” și bugetul orientativ.</li>
          <li>Profesorii din Cluj care predau materia îți trimit propuneri cu tarif și disponibilitate.</li>
          <li>Discuți în chat, faci o primă ședință, apoi evaluezi propunerea.</li>
        </ol>
      ),
    },
    {
      title: "Licee din Cluj-Napoca pentru care se pregătesc elevii",
      body: (
        <>
          <p>Mulți elevi de clasa a VIII-a din Cluj se pregătesc pentru admiterea la licee precum:</p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">{SCHOOLS.map((s) => <li key={s}>• {s}</li>)}</ul>
          <p className="mt-3">Ultimele medii de admitere se verifică pe site-ul oficial al ISJ Cluj; repartizarea se face după media de la Evaluarea Națională. Vezi <Link to="/evaluare-nationala-cluj" className="text-primary underline">ghidul EN pentru Cluj</Link>.</p>
        </>
      ),
    },
    {
      title: "Ghiduri pe materii pentru Cluj-Napoca",
      body: (
        <>
          <p>Pentru fiecare materie avem o pagină cu profesorii din Cluj, tarifele reale de pe platformă și un ghid despre ce să ceri (examen, admitere, cartier, online):</p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">
            {GHIDURI.map((g) => (
              <li key={g.materie}>
                •{" "}
                <Link to="/meditatii/$materie/$oras" params={{ materie: g.materie, oras: "cluj-napoca" }} className="text-primary underline">
                  Meditații {getSubjectSeo(g.materie)?.nameLower ?? g.materie} în Cluj-Napoca
                </Link>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Materii căutate în Cluj",
      body: (
        <p>
          <Link to="/meditatii/$materie/$oras" params={{ materie: "matematica", oras: "cluj-napoca" }} className="text-primary underline">Matematică</Link>,{" "}
          <Link to="/meditatii/$materie/$oras" params={{ materie: "romana", oras: "cluj-napoca" }} className="text-primary underline">română</Link>,{" "}
          <Link to="/meditatii/$materie/$oras" params={{ materie: "engleza", oras: "cluj-napoca" }} className="text-primary underline">engleză</Link>,{" "}
          <Link to="/meditatii/$materie/$oras" params={{ materie: "informatica", oras: "cluj-napoca" }} className="text-primary underline">informatică</Link> și pregătire pentru <Link to="/meditatii-admitere-medicina" className="text-primary underline">admitere la medicină</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "Cât costă meditațiile în Cluj-Napoca?", a: "Tariful îl propune fiecare profesor. Scrie bugetul în cerere și compară propunerile primite; platforma nu ia comision." },
    { q: "Pot face meditații la domiciliu în Cluj?", a: "Da. Menționează cartierul în cerere; profesorii care se pot deplasa îți trimit propuneri. Poți alege și online." },
    { q: "Ce medie îmi trebuie pentru un liceu bun din Cluj?", a: "Media de admitere este media aritmetică a notelor de la Evaluarea Națională, cu două zecimale, fără rotunjire. Verifică ultimele medii pe site-ul ISJ Cluj și calculează-ți media cu calculatorul nostru." },
  ],
  related: [
    { to: "/evaluare-nationala-cluj", label: "Evaluarea Națională Cluj" },
    { to: "/calculator-media-evaluare-nationala", label: "Calculator medie EN" },
    { to: "/meditatii-in/cluj-napoca", label: "Anunțuri meditații Cluj" },
    { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
  ],
}));
