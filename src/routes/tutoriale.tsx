import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tutoriale")({
  head: () => ({
    meta: [
      { title: "Tutoriale — MeditatiiDirect.ro" },
      { name: "description", content: "Ghiduri practice: compară două propuneri de meditații, verifică punctajul unei lucrări BAC și calculează media cu instrumentele MeditatiiDirect." },
      { property: "og:title", content: "Tutoriale — MeditatiiDirect.ro" },
      { property: "og:description", content: "Exemple practice pentru alegerea meditațiilor și autoevaluarea unei lucrări BAC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://meditatiidirect.ro/tutoriale" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/tutoriale" }],
  }),
  component: () => <article className="container-page max-w-3xl py-10">
    <h1 className="text-3xl font-bold">Tutoriale</h1>
    <section className="mt-8">
      <h2 className="text-xl font-semibold">Cum compari două propuneri de meditații</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-6 text-muted-foreground">
        <li>Verifică materia, nivelul și obiectivul: recuperare, examen sau aprofundare. O ofertă relevantă trebuie să răspundă cererii tale.</li>
        <li>Compară aceeași durată. Exemplu de calcul, nu tarife de pe platformă: 90 lei pentru 90 de minute înseamnă 60 lei pe oră; 80 lei pentru 60 de minute înseamnă 80 lei pe oră.</li>
        <li>Clarifică în chat programul, locul lecției, materialele și condițiile de anulare înainte de a accepta.</li>
        <li>După discuție, evaluează propunerea în pagina privată a cererii: promptitudine, claritate și potrivirea cu nevoia ta.</li>
      </ol>
      <Link to="/meditatii" className="mt-4 inline-flex text-primary underline">Postează cererea de meditații</Link>
    </section>
    <section className="mt-10">
      <h2 className="text-xl font-semibold">Cum te corectezi cu baremul BAC</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-6 text-muted-foreground">
        <li>Alege un subiect și baremul corespunzător aceleiași materii, aceluiași an și aceleiași sesiuni din arhivă.</li>
        <li>Rezolvă pe foaie înainte de a deschide baremul. În simulare poți folosi cronometrul de trei ore.</li>
        <li>Acordă punctele pe fiecare cerință exact cum sunt descrise în barem; un răspuns final corect nu înlocuiește automat pașii ceruți.</li>
        <li>Adună punctele obținute și punctele din oficiu prevăzute în document, fără să le numeri de două ori. Pentru un barem de 100 de puncte, nota este punctajul total împărțit la 10.</li>
        <li>Notează cerințele unde ai pierdut puncte și refă-le separat înainte de a trece la o altă variantă.</li>
      </ol>
      <Link to="/bac" className="mt-4 inline-flex text-primary underline">Alege un subiect BAC cu barem</Link>
    </section>
    <section className="mt-10">
      <h2 className="text-xl font-semibold">Cum verifici media pentru Evaluarea Națională</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">Media notelor de examen se calculează aritmetic, cu două zecimale, fără rotunjire. Exemplu cu două probe: (8,75 + 9,10) ÷ 2 = 8,925, deci media este 8,92. Media claselor V–VIII nu intră în această formulă.</p>
      <p className="mt-3 text-muted-foreground">Verifică metodologia aplicabilă situației tale, inclusiv proba de limbă maternă și regulile de departajare, în <a href="https://www.edu.ro/evaluare_nationala_ENVIII" className="text-primary underline">informațiile Ministerului Educației</a>.</p>
      <Link to="/calculator-media-evaluare-nationala" className="mt-4 inline-flex text-primary underline">Calculează media Evaluării Naționale</Link>
    </section>
  </article>,
});
