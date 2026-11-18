// Meditații pentru copii (clasele 0–IV). „Meditații copii” e în creștere în Google Trends (nov. 2026),
// iar în Search Console apar căutări ca „meditatii engleza copii bucuresti” fără o pagină dedicată.
// Singura cifră afișată e numărul real de profiluri cu nivelul „Primar” (src/lib/profesori-primar.ts).
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { CUM_FUNCTIONEAZA } from "@/data/continut-pagini";
import { getComboStats, MIN_LISTINGS_FOR_INDEX } from "@/lib/market-stats.functions";
import { MATERII_PRIMAR, profesoriPrimar } from "@/lib/profesori-primar";

const pagina = seoPage({
  path: "/meditatii-copii",
  title: "Meditații pentru copii — clasele 0–IV, online sau acasă",
  description:
    "Meditații pentru copii de clasele 0–IV la matematică, română, engleză sau germană. Ceri gratuit oferte de la profesori care predau la primar, fără comision.",
  h1: "Meditații pentru copii, clasele 0–IV",
  intro:
    "Pentru citit și scris, matematică, limbi străine sau pregătirea evaluărilor de la clasele a II-a și a IV-a. Descrii ce are nevoie copilul, iar profesorii care lucrează cu elevi de primar îți trimit propuneri cu tarif și program.",
  bullets: [
    "Citit, scris și matematică (clasele 0–IV)",
    "Engleză și germană pentru copii",
    "Pregătire pentru evaluările de la clasele a II-a și a IV-a",
    "Online sau la domiciliu",
    "Tariful îl vezi în propunere, înainte să accepți",
  ],
  sections: [
    { title: "Profesori care predau la primar", body: <ProfesoriPrimar /> },
    {
      title: "Ce lucrează un copil la meditații în ciclul primar",
      body: (
        <>
          <p>
            La clasele 0–II accentul e pe citit fluent, scris corect și calcul mintal; la clasele
            III–IV apar problemele cu text, fracțiile simple și compunerile. Golurile mici din
            primii ani (de exemplu tabla înmulțirii sau citirea pe silabe) se adună rapid, așa că
            merită lucrate devreme, cu exerciții scurte și dese.
          </p>
          <p className="mt-2">
            La limbi străine, copiii învață cel mai bine prin joc, cântece și conversație. Dacă
            învață germana sau engleza la școală în regim intensiv, spune asta în cerere, ca
            profesorul să lucreze pe aceeași programă.
          </p>
        </>
      ),
    },
    {
      title: "Evaluările de la clasele a II-a și a IV-a",
      body: (
        <p>
          La finalul clasei a II-a și a clasei a IV-a, elevii susțin evaluări naționale la
          scris-citit și matematică (la clasa a IV-a, și la limba modernă). Rezultatele nu intră în
          nicio medie, dar arată din timp ce trebuie recuperat. Profesorul poate lucra pe modele de
          teste de anii anteriori și pe greșelile tipice ale copilului.
        </p>
      ),
    },
    {
      title: "Cum alegi profesorul potrivit pentru un copil mic",
      body: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Caută experiență concretă cu elevi de primar, nu doar cu liceeni sau cu BAC-ul.</li>
          <li>
            Pentru copiii mici, ședințele scurte și regulate funcționează de obicei mai bine decât
            una lungă pe săptămână.
          </li>
          <li>
            Întreabă cum îți spune profesorul ce s-a lucrat și ce are copilul de exersat până data
            viitoare.
          </li>
          <li>
            La lecțiile online, stabilește de la început cum trimite copilul exercițiile rezolvate.
          </li>
        </ul>
      ),
    },
    CUM_FUNCTIONEAZA,
  ],
  faqs: [
    {
      q: "De la ce vârstă are sens o meditație?",
      a: "Nu există o vârstă fixă. Pentru copiii de clasa 0–II, meditația are sens când apare o dificultate clară (cititul, scrisul, calculul) sau pentru o limbă străină învățată prin joc. Spune în cerere vârsta și ce ai observat, iar profesorii îți propun un ritm potrivit.",
    },
    {
      q: "Cât durează o ședință pentru un copil de primar?",
      a: "Durata o stabilești cu profesorul. Pentru copiii mici se aleg des ședințe mai scurte decât la liceu, pentru că atenția scade repede; poți menționa în cerere durata pe care o preferi.",
    },
    {
      q: "Meditațiile online funcționează pentru copiii mici?",
      a: "Pot funcționa, mai ales la limbi străine și cu un părinte în apropiere la început. Pentru scris de mână și primele clase, mulți părinți preferă lecțiile la domiciliu; poți bifa ambele variante în cerere.",
    },
    {
      q: "Cât costă meditațiile pentru copii?",
      a: "Tariful îl stabilește fiecare profesor și îl vezi în propunerea lui înainte să accepți. Pe MeditatiiDirect nu plătești comision; tarifele reale din anunțuri sunt adunate pe pagina Prețuri meditații.",
    },
  ],
  related: [
    { to: "/meditatii-gimnaziu", label: "Meditații gimnaziu" },
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-engleza", label: "Meditații engleză" },
    { to: "/meditatii-germana", label: "Meditații germană" },
    { to: "/preturi-meditatii", label: "Prețuri meditații" },
  ],
});

/** Numărul real de profesori cu nivelul „Primar” în profil; sub prag nu afișăm nicio cifră. */
function ProfesoriPrimar() {
  const { primar } = useLoaderData({ from: "/meditatii-copii" });
  if (primar == null || primar < MIN_LISTINGS_FOR_INDEX)
    return (
      <p>Postează cererea și îți răspund profesorii care lucrează cu elevi din ciclul primar.</p>
    );
  return (
    <p>
      <strong>{primar}</strong> profesori cu profil publicat pe MeditatiiDirect au trecut nivelul
      „Primar” printre nivelurile la care predau, la {MATERII_PRIMAR.length} materii: matematică,
      română, engleză, germană și franceză.
    </p>
  );
}

export const Route = createFileRoute("/meditatii-copii")({
  ...pagina,
  // Agregate reale pe materiile de primar (fără nume sau contacte); o eroare nu blochează pagina.
  loader: async () => {
    try {
      const stats = await getComboStats({
        data: {
          subjectSlugs: MATERII_PRIMAR,
          subjectName: "pentru copii",
          cityName: "România",
          cityMatch: [],
        },
      });
      return { primar: profesoriPrimar(stats.teachersByLevel) };
    } catch (err) {
      console.error("meditatii-copii stats failed", err);
      return { primar: null };
    }
  },
});
