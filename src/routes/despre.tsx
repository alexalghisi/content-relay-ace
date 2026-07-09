import { createFileRoute, Link } from "@tanstack/react-router";

const URL = "https://meditatiidirect.ro/despre";
const TITLE = "Despre MeditatiiDirect.ro — Platforma #1 de meditații din România";
const DESC = "MeditatiiDirect.ro conectează direct elevii cu profesori particulari verificați din toată România. Fără comision, fără intermediari, contact 1-la-1.";

export const Route = createFileRoute("/despre")({
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
  component: DesprePage,
});

function DesprePage() {
  return (
    <article className="container-page py-12 max-w-3xl">
      <h1 className="text-3xl font-bold sm:text-4xl">Despre MeditatiiDirect.ro</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        MeditatiiDirect.ro este o platformă românească independentă care ajută elevii, studenții și părinții să găsească rapid profesori particulari verificați, la orice materie și pentru orice nivel — de la clasele primare până la pregătirea pentru admiterea la facultate.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Misiunea noastră</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Credem că fiecare copil merită acces la un profesor bun, indiferent de oraș, de scoala pe care o urmează sau de bugetul familiei. Ne dorim să transformăm meditațiile particulare într-o experiență transparentă, sigură și accesibilă, în care elevul și profesorul se aleg reciproc, fără intermediari și fără comision.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Cum am pornit</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        MeditatiiDirect s-a născut din experiența personală a fondatorului, care a căutat luni de zile un meditator bun pentru bacalaureatul la matematică. Site-urile existente cereau comisioane mari, ascundeau datele de contact ale profesorilor și îngreunau comunicarea. Am construit o platformă în care elevul vede profilul complet al profesorului — CV, materii predate, tarif, recenzii reale — și îi scrie direct.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Ce oferim</h2>
      <ul className="mt-3 space-y-2 list-disc pl-6 text-foreground/90">
        <li>Peste 20 de materii predate: matematică, română, informatică, engleză, fizică, chimie, biologie, istorie, geografie, franceză, germană și multe altele.</li>
        <li>Profesori verificați manual — fiecare cont este validat înainte de publicare.</li>
        <li>Meditații la domiciliu, la profesor sau 100% online, prin videoconferință.</li>
        <li>Arhivă completă de subiecte oficiale BAC 2001–2026, hostate pe serverele noastre.</li>
        <li>Ghiduri, articole și resurse gratuite pentru pregătirea examenelor naționale.</li>
        <li>Sistem de mesagerie 1-la-1 între elev și profesor, cu istoric păstrat în cont.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">De ce fără comision</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Toți banii plătiți pentru o oră de meditație ajung la profesor. Nu percepem comision pentru elev, nu blocăm datele de contact și nu forțăm plăți prin platformă. Modelul nostru se susține prin publicitate contextuală și prin abonamente opționale de vizibilitate pentru profesorii care doresc să apară în topul listelor.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Echipa editorială</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Conținutul educațional publicat pe blog și pe paginile de resurse este scris și verificat de o echipă de profesori titulari cu experiență în pregătirea pentru examenele naționale. Toate subiectele de bacalaureat urcate pe platformă sunt versiunile oficiale publicate de Ministerul Educației și verificate manual înainte de publicare.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Contact</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Pentru orice întrebare, sugestie, colaborare sau raportare, ne poți scrie oricând pe pagina de <Link to="/contact" className="text-primary underline">contact</Link>. Îți răspundem în maxim 24 de ore lucrătoare.
      </p>

      <div className="mt-12 card-soft p-6 bg-primary-soft">
        <h2 className="text-lg font-bold">Începe acum</h2>
        <p className="mt-1 text-sm text-muted-foreground">Alege un profesor verificat pentru materia care te interesează.</p>
        <Link to="/meditatii" className="btn-primary mt-4 h-11 px-5 inline-flex">Vezi anunțuri meditații</Link>
      </div>
    </article>
  );
}
