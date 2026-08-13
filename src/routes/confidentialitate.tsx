import { createFileRoute } from "@tanstack/react-router";

const URL = "https://meditatiidirect.ro/confidentialitate";
const TITLE = "Politica de confidențialitate — MeditatiiDirect.ro";
const DESC = "Cum colectăm, folosim și protejăm datele personale ale utilizatorilor MeditatiiDirect.ro. Conform GDPR și legislației române.";

export const Route = createFileRoute("/confidentialitate")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="container-page py-12 max-w-3xl prose">
      <h1 className="text-3xl font-bold sm:text-4xl">Politica de confidențialitate</h1>
      <p className="mt-2 text-sm text-muted-foreground">Ultima actualizare: august 2026</p>

      <p className="mt-6 text-foreground/90 leading-relaxed">
        MeditatiiDirect.ro respectă viața privată a utilizatorilor săi și se angajează să protejeze datele cu caracter personal în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și cu Legea nr. 190/2018.
      </p>

      <h2 className="mt-8 text-2xl font-bold">1. Operatorul de date</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Operatorul datelor cu caracter personal colectate prin platforma MeditatiiDirect.ro este <strong>AMATA IMPORT EXPORT SRL</strong>, înregistrată în România cu CUI <strong>232353</strong>, cu sediul în București, România. Pentru orice cerere privind datele tale, ne poți contacta la <a href="mailto:alexalghisi@gmail.com" className="text-primary underline">alexalghisi@gmail.com</a>.
      </p>

      <h2 className="mt-8 text-2xl font-bold">2. Ce date colectăm</h2>
      <ul className="mt-2 list-disc pl-6 text-foreground/90 space-y-1">
        <li>Date furnizate la înregistrare: nume, prenume, adresă de email, parolă (stocată criptat), telefon (opțional).</li>
        <li>Date de profil pentru profesori: materii predate, tarif orar, oraș, CV, fotografie, descriere.</li>
        <li>Conținutul mesajelor schimbate între elev și profesor prin sistemul intern de chat.</li>
        <li>Date tehnice: adresă IP, tip de browser, sistem de operare, pagini vizitate, timp petrecut, prin cookies și tehnologii similare.</li>
        <li>Date de plată pentru abonamentele opționale, procesate de furnizori terți (Stripe/Paddle) — noi nu stocăm datele cardului.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">3. Cum folosim datele</h2>
      <ul className="mt-2 list-disc pl-6 text-foreground/90 space-y-1">
        <li>Pentru a furniza serviciul: crearea contului, publicarea profilului, mesagerie 1-la-1.</li>
        <li>Pentru verificarea manuală a profesorilor și prevenirea fraudei.</li>
        <li>Pentru trimiterea de notificări tranzacționale (mesaje noi, confirmări, actualizări cont).</li>
        <li>Pentru statistici agregate și îmbunătățirea platformei.</li>
        <li>Pentru afișarea de reclame contextuale prin partenerii noștri (Google AdSense) — vezi secțiunea 6.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">4. Temeiul legal</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Prelucrarea se face pe baza consimțământului tău (art. 6(1)(a) GDPR), a executării contractului (art. 6(1)(b)) și a interesului legitim al operatorului de a menține platforma sigură și utilă (art. 6(1)(f)).
      </p>

      <h2 className="mt-8 text-2xl font-bold">5. Cui dezvăluim datele</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Nu vindem și nu închiriem datele tale personale niciunui terț. Datele pot fi partajate strict cu:
      </p>
      <ul className="mt-2 list-disc pl-6 text-foreground/90 space-y-1">
        <li>Furnizori de infrastructură cloud (Supabase, Cloudflare) — pentru găzduire.</li>
        <li>Furnizori de procesare plăți (Stripe, Paddle) — dacă cumperi un abonament.</li>
        <li>Autorități publice, la solicitare legală justificată.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold">6. Cookie-uri și publicitate</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Folosim cookie-uri esențiale pentru funcționarea contului și cookie-uri de analiză pentru înțelegerea traficului. Partenerii publicitari (Google AdSense) pot seta propriile cookie-uri pentru afișarea de reclame relevante. Poți dezactiva personalizarea reclamelor din setările contului Google (adssettings.google.com) sau blocând cookie-urile din browser.
      </p>

      <h2 className="mt-8 text-2xl font-bold">7. Drepturile tale</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Conform GDPR, ai dreptul de acces, rectificare, ștergere („dreptul de a fi uitat"), restricționare, portabilitate, opoziție și de a nu fi supus unei decizii automate. Îți poți exercita drepturile scriind la <a href="mailto:gdpr@meditatiidirect.ro" className="text-primary underline">gdpr@meditatiidirect.ro</a>. De asemenea, te poți adresa Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
      </p>

      <h2 className="mt-8 text-2xl font-bold">8. Retenția datelor</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Datele contului sunt păstrate atât timp cât contul este activ. La ștergerea contului, datele personale sunt eliminate în maxim 30 de zile, cu excepția celor pe care legislația fiscală ne obligă să le păstrăm (facturi — 10 ani).
      </p>

      <h2 className="mt-8 text-2xl font-bold">9. Minori</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Platforma nu permite înregistrarea persoanelor sub 16 ani fără acordul explicit al părintelui sau tutorelui legal. Anunțurile pentru elevi minori sunt gestionate de părinți.
      </p>

      <h2 className="mt-8 text-2xl font-bold">10. Modificări</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">
        Această politică poate fi actualizată periodic. Modificările semnificative vor fi anunțate prin email sau printr-un banner vizibil în platformă.
      </p>
    </article>
  );
}
