import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MessageCircle, Send, Star, Shield, Wallet } from "lucide-react";

const URL = "https://meditatiidirect.ro/cum-functioneaza";
const TITLE = "Cum funcționează MeditatiiDirect.ro — cerere, propuneri, chat direct și evaluare în stele";
const DESC = "Un mod nou de a găsi meditații: postezi o cerere, profesorii verificați îți trimit propuneri cu dată, oră și tarif, discutați direct în chat, iar la final evaluezi colaborarea cu stele. Gratuit, fără comision.";

const faqs = [
  { q: "Cum funcționează, pe scurt?", a: "Nu mai cauți prin zeci de profile. Descrii o singură dată ce ai nevoie (materie, nivel, oraș sau online, buget), iar profesorii verificați interesați îți trimit propuneri cu dată, oră, tarif și un mesaj. Tu alegi și continui discuția direct cu profesorul." },
  { q: "Ce este interacțiunea directă elev–profesor?", a: "Fără intermediari și fără call center. După ce primești o propunere, vorbești direct cu profesorul: în chatul platformei (dacă ai cont) sau pe emailul și telefonul din propunere. Stabiliți împreună programul, locul și tariful." },
  { q: "Ce înseamnă evaluarea în stele?", a: "După ce ai discutat cu un profesor, poți acorda de la 1 la 5 stele direct în pagina privată a cererii tale, plus un comentariu scurt. Evaluezi procesul real prin care ai trecut — promptitudinea, claritatea propunerii și cum a decurs discuția. Se pot evalua doar propunerile primite la cererea ta, deci nu există evaluări inventate." },
  { q: "Cât costă folosirea platformei?", a: "Pentru elevi și părinți este 100% gratuită — nu percepem comision din suma plătită profesorului. Pentru profesori, contul și trimiterea propunerilor sunt gratuite." },
  { q: "Am nevoie de cont ca elev?", a: "Nu. Poți trimite cererea fără cont. Primești un link privat unde vezi toate propunerile și de unde acorzi stelele. Cu un cont gratuit ai în plus chatul intern și istoricul discuțiilor." },
  { q: "Meditațiile sunt online sau față în față?", a: "Ambele. Alegi în cerere dacă vrei online (Zoom, Google Meet, Teams) sau în orașul tău, iar profesorii îți trimit propuneri potrivite." },
  { q: "Cum plătesc profesorul?", a: "Plata se face direct între tine și profesor — cash sau transfer bancar. MeditatiiDirect.ro nu procesează plățile pentru lecții și nu ia comision." },
  { q: "Ce fac dacă am o problemă cu un profesor?", a: "Scrie-ne pe abuz@meditatiidirect.ro. Verificăm fiecare sesizare în maxim 12 ore și, dacă e cazul, suspendăm contul." },
  { q: "Cum devin profesor pe platformă?", a: "Creezi un cont, completezi profilul (studii, materii, tarif, oraș, mod de predare), adaugi disponibilitatea și publici profilul. Apoi vezi cererile elevilor și trimiți propuneri." },
];

export const Route = createFileRoute("/cum-functioneaza")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Cum primești propuneri de meditații pe MeditatiiDirect.ro",
          totalTime: "PT2M",
          estimatedCost: { "@type": "MonetaryAmount", currency: "RON", value: "0" },
          step: [
            { "@type": "HowToStep", position: 1, name: "Descrii cererea", text: "Spui materia, nivelul, orașul sau online și bugetul. Durează 2 minute și e gratuit.", url: `${URL}#pas-1` },
            { "@type": "HowToStep", position: 2, name: "Primești propuneri", text: "Profesorii verificați îți trimit propuneri cu dată, oră, tarif și mesaj, în pagina privată a cererii.", url: `${URL}#pas-2` },
            { "@type": "HowToStep", position: 3, name: "Discuți direct în chat", text: "Vorbești direct cu profesorul în chatul platformei sau pe contactul din propunere și stabiliți programul.", url: `${URL}#pas-3` },
            { "@type": "HowToStep", position: 4, name: "Evaluezi cu stele", text: "După discuție acorzi de la 1 la 5 stele colaborării, ca să ajuți ceilalți elevi.", url: `${URL}#pas-4` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
            { "@type": "ListItem", position: 2, name: "Cum funcționează", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HowItWorksPage,
});

const STEPS = [
  { id: "pas-1", icon: Search, title: "1. Descrii cererea", text: "Materie, nivel, oraș sau online și bugetul tău. 2 minute, gratuit, fără cont." },
  { id: "pas-2", icon: Send, title: "2. Primești propuneri", text: "Profesorii verificați îți trimit dată, oră, tarif și un mesaj, în pagina privată a cererii tale." },
  { id: "pas-3", icon: MessageCircle, title: "3. Discuți în chat direct", text: "Vorbești direct cu profesorul, fără intermediari, și stabiliți programul și locul." },
  { id: "pas-4", icon: Star, title: "4. Evaluezi cu stele", text: "Acorzi de la 1 la 5 stele colaborării și lași un comentariu scurt. Transparent pentru toți." },
];

function HowItWorksPage() {
  return (
    <article className="container-page py-12 max-w-3xl">
      <p className="text-sm font-semibold text-primary">Un mod nou de a găsi meditații</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Cum funcționează MeditatiiDirect.ro</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Am întors căutarea de meditații pe dos: nu tu alergi după profesori, ci profesorii vin la tine cu propuneri.
        Postezi o singură cerere, primești oferte cu dată, oră și tarif, discuți <strong>direct în chat</strong> cu profesorul
        și, la final, <strong>evaluezi colaborarea cu stele</strong>. Gratuit pentru elevi, fără comision.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {STEPS.map((s) => (
          <div key={s.id} id={s.id} className="card-soft p-5">
            <s.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 font-semibold">{s.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/meditatii" className="btn-primary h-11 px-5 inline-flex">Cere ofertă gratuit</Link>
        <Link to="/pentru-profesori" className="btn-outline h-11 px-5 inline-flex">Sunt profesor</Link>
      </div>

      <h2 className="mt-12 text-2xl font-bold">Interacțiune directă elev–profesor, prin chat</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Fiecare propunere vine de la o persoană reală, cu profil completat: nume, materii, experiență și tarif.
        Din pagina cererii tale poți răspunde imediat — în <Link to="/mesaje" className="text-primary underline">chatul platformei</Link>,
        dacă ai cont gratuit, sau pe emailul și telefonul din propunere. Fără call center, fără intermediari, fără comision la mijloc.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Evaluare în stele a procesului</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        După ce discuți cu un profesor, acorzi de la 1 la 5 stele direct în pagina privată a cererii. Evaluezi procesul prin care ai trecut:
        cât de repede a răspuns, cât de clară a fost propunerea și cum a decurs discuția. Pot evalua doar elevii care au primit propuneri la
        cererea lor, deci ratingul reflectă interacțiuni reale — nu recenzii inventate.
      </p>

      <h2 className="mt-12 text-2xl font-bold">De ce MeditatiiDirect?</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="p-4"><Star className="h-5 w-5 text-primary" /><h3 className="mt-2 font-semibold">Evaluări din interacțiuni reale</h3><p className="mt-1 text-sm text-muted-foreground">Doar elevii care au primit propuneri la cererea lor pot acorda stele.</p></div>
        <div className="p-4"><Shield className="h-5 w-5 text-primary" /><h3 className="mt-2 font-semibold">Profesori verificați</h3><p className="mt-1 text-sm text-muted-foreground">Profilul profesorului devine public doar după ce este completat și publicat.</p></div>
        <div className="p-4"><Wallet className="h-5 w-5 text-primary" /><h3 className="mt-2 font-semibold">Fără comision</h3><p className="mt-1 text-sm text-muted-foreground">Toți banii pentru meditații ajung la profesor, nu la platformă.</p></div>
      </div>

      <h2 className="mt-12 text-2xl font-bold">Resurse gratuite pentru elevi</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Pe lângă cereri și propuneri, oferim gratuit o arhivă completă de <Link to="/subiecte-bac" className="text-primary underline">subiecte oficiale BAC</Link> (2001–2026), <Link to="/simulari-bacalaureat-2026" className="text-primary underline">simulări</Link>, materiale pentru <Link to="/meditatii-evaluare-nationala" className="text-primary underline">Evaluarea Națională</Link> și un <Link to="/blog" className="text-primary underline">blog</Link> cu ghiduri și strategii de învățare.
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
        <p className="mt-1 text-sm text-muted-foreground">Descrii cererea în 2 minute și primești propuneri cu dată, oră și tarif.</p>
        <Link to="/meditatii" className="btn-primary mt-4 h-11 px-5 inline-flex">Cere ofertă gratuit</Link>
      </div>
    </article>
  );
}
