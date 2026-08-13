import { createFileRoute } from "@tanstack/react-router";

const URL = "https://meditatiidirect.ro/termeni";
const TITLE = "Termeni și condiții — MeditatiiDirect.ro";
const DESC = "Termenii și condițiile de utilizare a platformei MeditatiiDirect.ro pentru elevi, părinți și profesori particulari.";

export const Route = createFileRoute("/termeni")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="container-page py-12 max-w-3xl prose">
      <h1 className="text-3xl font-bold sm:text-4xl">Termeni și condiții</h1>
      <p className="mt-2 text-sm text-muted-foreground">Ultima actualizare: august 2026</p>

      <p className="mt-6 text-foreground/90 leading-relaxed">
        Prin accesarea și utilizarea platformei MeditatiiDirect.ro, accepți în totalitate acești Termeni și condiții. Dacă nu ești de acord cu ei, te rugăm să nu utilizezi platforma.
      </p>

      <h2 className="mt-8 text-2xl font-bold">1. Descrierea serviciului</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        MeditatiiDirect.ro este o platformă online de intermediere care conectează elevii, studenții și părinții cu profesori particulari independenți. Nu suntem angajatorul profesorilor, nu emitem facturi în numele lor și nu garantăm rezultatele meditațiilor.
      </p>
      <p className="mt-4 text-foreground/90 leading-relaxed">
        Platforma este administrată de <strong>AMATA IMPORT EXPORT SRL</strong>, înregistrată în România cu CUI <strong>232353</strong>. Email de contact oficial: <a href="mailto:alexalghisi@gmail.com" className="text-primary underline">alexalghisi@gmail.com</a>.
      </p>

      <h2 className="mt-8 text-2xl font-bold">2. Cont de utilizator</h2>
      <ul className="mt-2 list-disc pl-6 text-foreground/90 space-y-1">
        <li>Pentru a publica un anunț sau a contacta un profesor, trebuie să creezi un cont valid.</li>
        <li>Ești responsabil pentru păstrarea confidențialității parolei și pentru toate activitățile efectuate din contul tău.</li>
        <li>Ne rezervăm dreptul de a suspenda conturile care încalcă acești termeni.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">3. Obligațiile profesorilor</h2>
      <ul className="mt-2 list-disc pl-6 text-foreground/90 space-y-1">
        <li>Datele publicate în profil (studii, experiență, tarif) trebuie să fie reale și verificabile.</li>
        <li>Profesorul își asumă responsabilitatea calității actului educațional prestat.</li>
        <li>Este interzisă solicitarea de plăți în avans neproporționate sau prin canale suspecte.</li>
        <li>Profesorul este responsabil de raportarea veniturilor conform legislației fiscale române.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">4. Obligațiile elevilor și părinților</h2>
      <ul className="mt-2 list-disc pl-6 text-foreground/90 space-y-1">
        <li>Comportament civilizat în mesaje și pe parcursul lecțiilor.</li>
        <li>Achitarea contravalorii serviciilor conform înțelegerii directe cu profesorul.</li>
        <li>Notificarea profesorului cu minim 24 de ore în avans în caz de anulare.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">5. Conținut interzis</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Este strict interzisă publicarea de anunțuri false, cu conținut discriminatoriu, pornografic, care încalcă drepturi de autor, promovează servicii nelegate de meditații (ex. servicii escort, tranzacții financiare suspecte), sau care încearcă să eludeze platforma.
      </p>

      <h2 className="mt-8 text-2xl font-bold">6. Comisioane și plăți</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Publicarea anunțurilor și contactarea profesorilor sunt gratuite. Plățile pentru ședințele de meditații se fac direct între elev și profesor, în afara platformei. MeditatiiDirect.ro oferă opțional abonamente de vizibilitate pentru profesori (Boost / Premium), plătite prin procesatori terți.
      </p>

      <h2 className="mt-8 text-2xl font-bold">7. Proprietate intelectuală</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Numele „MeditatiiDirect", logo-ul, textele editoriale, articolele de blog și structura platformei sunt protejate de drepturi de autor. Reutilizarea comercială fără acord scris este interzisă. Subiectele oficiale de bacalaureat sunt proprietatea Ministerului Educației și sunt redistribuite conform politicii publice.
      </p>

      <h2 className="mt-8 text-2xl font-bold">8. Limitarea răspunderii</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        MeditatiiDirect.ro acționează ca intermediar. Nu răspundem pentru neînțelegerile sau litigiile dintre elevi și profesori, pentru calitatea meditațiilor sau pentru rezultatele obținute la examene. Recomandăm încheierea unui contract civil scris între părți pentru sume mari.
      </p>

      <h2 className="mt-8 text-2xl font-bold">9. Publicitate</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Platforma este susținută prin publicitate contextuală (Google AdSense). Anunțurile publicitare nu sunt selecționate manual de noi și nu implică o recomandare a produsului/serviciului promovat.
      </p>

      <h2 className="mt-8 text-2xl font-bold">10. Modificarea termenilor</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Ne rezervăm dreptul de a modifica acești termeni. Utilizarea continuă a platformei după publicarea modificărilor constituie acceptarea lor.
      </p>

      <h2 className="mt-8 text-2xl font-bold">11. Legea aplicabilă</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Acești termeni sunt guvernați de legea română. Orice litigiu va fi soluționat de instanțele competente din București, cu excepția cazului în care legea protecției consumatorului impune altă jurisdicție.
      </p>
    </article>
  );
}
