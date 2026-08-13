import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Politica de Cookies — MeditatiiDirect.ro" },
      {
        name: "description",
        content:
          "Ce cookie-uri folosim pe MeditatiiDirect.ro, în ce scop, cât durează și cum le poți dezactiva din browser sau din setările Google.",
      },
      { property: "og:title", content: "Politica de Cookies — MeditatiiDirect.ro" },
      {
        property: "og:description",
        content: "Informații complete despre cookie-urile esențiale, de analiză și de publicitate folosite pe platformă.",
      },
      { property: "og:url", content: "https://meditatiidirect.ro/politica-cookies" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/politica-cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="container-page py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Politica de Cookies</h1>
      <p className="mt-2 text-sm text-muted-foreground">Ultima actualizare: august 2026</p>

      <div className="prose-content mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Ce sunt cookie-urile</h2>
          <p>
            Cookie-urile sunt fișiere text de mici dimensiuni salvate de browser pe dispozitivul tău atunci când
            vizitezi un site. Ele permit site-ului să „își amintească" acțiunile tale (autentificare, filtre de
            căutare, preferințe) și ajută la măsurarea traficului. Cookie-urile nu rulează programe și nu pot
            transmite viruși.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Cookie-uri strict necesare</h2>
          <p>
            Sunt indispensabile pentru funcționarea platformei: menținerea sesiunii de autentificare, protecția
            formularelor și securitatea contului. Fără ele nu poți publica un anunț, nu poți trimite mesaje și nu îți
            poți administra profilul. Aceste cookie-uri nu pot fi dezactivate din site, dar le poți bloca din browser
            (cu riscul ca funcțiile de cont să nu mai meargă).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Cookie-uri de analiză</h2>
          <p>
            Le folosim pentru a înțelege câți vizitatori avem, ce pagini sunt utile și unde apar erori. Datele sunt
            agregate și nu sunt folosite pentru a te identifica personal. Ne ajută să îmbunătățim conținutul (de
            exemplu, ce materii și ce ani de BAC sunt cel mai des căutați).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Cookie-uri de publicitate</h2>
          <p>
            Platforma este gratuită pentru elevi și părinți și este susținută prin publicitate contextuală afișată
            prin <strong>Google AdSense</strong>. Google și partenerii săi pot seta cookie-uri pentru a afișa reclame
            relevante și pentru a limita frecvența afișării aceleiași reclame. Nu folosim formate invazive de tip
            pop-up, popunder sau interstițial.
          </p>
          <p>
            Poți controla personalizarea reclamelor Google din{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              adssettings.google.com
            </a>{" "}
            sau poți citi modul în care Google utilizează datele pe{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              policies.google.com/technologies/partner-sites
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Durata de viață</h2>
          <p>
            Cookie-urile de sesiune se șterg automat la închiderea browserului. Cookie-urile persistente (preferințe,
            analiză, publicitate) au durate între 24 de ore și 24 de luni, în funcție de scop și de furnizor.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Cum dezactivezi cookie-urile</h2>
          <p>
            Toate browserele moderne permit blocarea sau ștergerea cookie-urilor din secțiunea de setări
            („Confidențialitate și securitate"). Poți folosi și modul incognito/privat. Reține că blocarea completă
            poate afecta autentificarea și salvarea filtrelor de căutare.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Drepturile tale și contact</h2>
          <p>
            Prelucrarea datelor personale este descrisă pe larg în{" "}
            <Link to="/confidentialitate" className="text-primary hover:underline">Politica de Confidențialitate</Link>, iar
            regulile de utilizare a platformei în{" "}
            <Link to="/termeni" className="text-primary hover:underline">Termeni și Condiții</Link>. Platforma este administrată de{" "}
            <strong>AMATA IMPORT EXPORT SRL</strong> (CUI 232353). Pentru orice întrebare legată de cookie-uri sau de datele tale, scrie-ne la{" "}
            <a href="mailto:alexalghisi@gmail.com" className="text-primary hover:underline">alexalghisi@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
