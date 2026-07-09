import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MessageCircle, GraduationCap, Star, Shield, Wallet } from "lucide-react";

const URL = "https://meditatiidirect.ro/cum-functioneaza";
const TITLE = "Cum funcționează MeditatiiDirect.ro — Ghid complet pentru elevi și profesori";
const DESC = "În 3 pași simpli: cauți profesorul potrivit, îi scrii direct și începeți meditațiile. Ghid complet cu întrebări frecvente și sfaturi de siguranță.";

const faqs = [
  { q: "Cât costă folosirea platformei?", a: "Pentru elevi și părinți, platforma este 100% gratuită. Nu percepem comision din suma plătită profesorului. Pentru profesori, publicarea profilului este gratuită; există opțional abonamente de vizibilitate (Boost / Premium)." },
  { q: "Cum aleg profesorul potrivit?", a: "Filtrează după materie, oraș, nivel (gimnaziu / liceu / admitere) și preț. Citește recenziile, verifică CV-ul și tariful. Cere o primă ședință de probă de 15–30 de minute pentru a vedea compatibilitatea." },
  { q: "Meditațiile sunt online sau față în față?", a: "Ambele. Fiecare profesor menționează în profil dacă predă la domiciliul elevului, în spațiul propriu sau online prin videoconferință (Zoom, Google Meet, Teams)." },
  { q: "Cum plătesc profesorul?", a: "Plata se face direct între tine și profesor, în afara platformei — cash, transfer bancar sau alte metode convenite. MeditatiiDirect.ro nu procesează plățile pentru lecții." },
  { q: "Ce fac dacă am o problemă cu un profesor?", a: "Poți raporta orice comportament necorespunzător pe abuz@meditatiidirect.ro. Verificăm fiecare sesizare în maxim 12 ore și, dacă e cazul, suspendăm contul." },
  { q: "Cum devin profesor pe platformă?", a: "Creezi un cont, completezi profilul (studii, materii, tarif, oraș, mod de predare) și trimiți spre verificare. În 24–48 de ore, profilul este validat manual și devine public." },
];

export const Route = createFileRoute("/cum-functioneaza")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <article className="container-page py-12 max-w-3xl">
      <h1 className="text-3xl font-bold sm:text-4xl">Cum funcționează MeditatiiDirect.ro</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Am construit platforma să fie simplă, transparentă și sigură. Iată exact ce se întâmplă când cauți un profesor și cum poți folosi la maxim toate resursele disponibile.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="card-soft p-5">
          <Search className="h-6 w-6 text-primary" />
          <h2 className="mt-3 font-semibold">1. Caută</h2>
          <p className="mt-1 text-sm text-muted-foreground">Filtrează după materie, oraș, nivel și preț. Vezi profiluri complete cu foto, CV și recenzii.</p>
        </div>
        <div className="card-soft p-5">
          <MessageCircle className="h-6 w-6 text-primary" />
          <h2 className="mt-3 font-semibold">2. Contactează</h2>
          <p className="mt-1 text-sm text-muted-foreground">Îi scrii direct profesorului prin chatul intern. Stabiliți programul, locul și tariful.</p>
        </div>
        <div className="card-soft p-5">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="mt-3 font-semibold">3. Învață</h2>
          <p className="mt-1 text-sm text-muted-foreground">La domiciliu, la profesor sau online. La final, lasă o recenzie ca să ajuți alți elevi.</p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold">De ce MeditatiiDirect?</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="p-4"><Star className="h-5 w-5 text-primary" /><h3 className="mt-2 font-semibold">Recenzii reale</h3><p className="mt-1 text-sm text-muted-foreground">Doar elevii care au avut meditații cu profesorul pot lăsa recenzii.</p></div>
        <div className="p-4"><Shield className="h-5 w-5 text-primary" /><h3 className="mt-2 font-semibold">Profiluri verificate</h3><p className="mt-1 text-sm text-muted-foreground">Fiecare cont de profesor este validat manual înainte de a apărea public.</p></div>
        <div className="p-4"><Wallet className="h-5 w-5 text-primary" /><h3 className="mt-2 font-semibold">Fără comision</h3><p className="mt-1 text-sm text-muted-foreground">Toți banii pentru meditații ajung la profesor, nu la platformă.</p></div>
      </div>

      <h2 className="mt-12 text-2xl font-bold">Resurse gratuite pentru elevi</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Pe lângă lista de profesori, oferim gratuit o arhivă completă de <Link to="/subiecte-bac" className="text-primary underline">subiecte oficiale BAC</Link> (2001–2026), <Link to="/simulari-bacalaureat-2026" className="text-primary underline">simulări</Link>, materiale pentru <Link to="/meditatii-evaluare-nationala" className="text-primary underline">Evaluarea Națională</Link> și un <Link to="/blog" className="text-primary underline">blog</Link> cu ghiduri și strategii de învățare.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Sfaturi de siguranță</h2>
      <ul className="mt-3 list-disc pl-6 text-foreground/90 space-y-2">
        <li>Nu trimite bani înainte de a stabili clar programul și condițiile.</li>
        <li>Pentru sume mari (pachete de 20+ ședințe), cere factură sau chitanță.</li>
        <li>Prima ședință e ideal să fie de probă — 30 de minute la tarif redus sau gratuit.</li>
        <li>Dacă meditația e la domiciliul elevului minor, un părinte trebuie să fie prezent.</li>
        <li>Raportează imediat orice comportament suspect pe abuz@meditatiidirect.ro.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold">Întrebări frecvente</h2>
      <dl className="mt-4 space-y-5">
        {faqs.map((f) => (
          <div key={f.q} className="card-soft p-5">
            <dt className="font-semibold">{f.q}</dt>
            <dd className="mt-2 text-sm text-foreground/90 leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 card-soft p-6 bg-primary-soft">
        <h2 className="text-lg font-bold">Gata să începi?</h2>
        <p className="mt-1 text-sm text-muted-foreground">Găsește profesorul potrivit în mai puțin de 5 minute.</p>
        <Link to="/meditatii" className="btn-primary mt-4 h-11 px-5 inline-flex">Caută profesor acum</Link>
      </div>
    </article>
  );
}
