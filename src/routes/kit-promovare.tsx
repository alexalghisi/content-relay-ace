import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, Megaphone } from "lucide-react";

const TITLE = "Kit de promovare — texte gata de postat | MeditatiiDirect.ro";
const DESC = "Texte gata scrise pentru recrutarea profesorilor: grupuri Facebook, LinkedIn, WhatsApp, forumuri studențești și afiș pentru cancelarie.";

const LINK = "https://meditatiidirect.ro/vreau-sa-dau-meditatii";

const posts = [
  {
    label: "Grup Facebook „Profesori din România”",
    text: `Caut profesori care vor elevi noi, fără bătaie de cap cu anunțurile.

Pe MeditatiiDirect.ro funcționează invers față de site-urile clasice: elevul postează cererea (materie, nivel, oraș sau online, buget, detalii), iar profesorul trimite propunerea lui — dată, oră, tarif, mesaj. Elevul alege și discutați direct în chat.

• Cont gratuit, fără abonament
• Zero comision — tariful îl stabilești tu și îl încasezi integral
• Profilul e vizibil doar dacă îl publici tu
• Elevii pot da 1–5 stele propunerilor, deci reputația se construiește din feedback real

Înscriere: ${LINK}`,
  },
  {
    label: "Grup Facebook de studenți (Medicină / Politehnică / Filologie)",
    text: `Dacă vrei un venit în plus din meditații, dar nu ai timp să cauți elevi: pe MeditatiiDirect.ro elevii postează cererile, tu răspunzi cu o propunere (dată, oră, tarif). Cont gratuit, fără comision, predai online sau față în față, program stabilit de tine.

Cele mai cerute acum: matematică, română, engleză, informatică, biologie, chimie, fizică — pentru Evaluare Națională, Bac și admitere.

${LINK}`,
  },
  {
    label: "LinkedIn",
    text: `Am construit MeditatiiDirect.ro pe o idee simplă: nu elevul caută printr-o listă de sute de profesori, ci profesorii răspund cererii concrete a elevului.

Elevul descrie o singură dată ce are nevoie. Profesorii verificați trimit propuneri cu dată, oră și tarif. Elevul alege, discută în chat și evaluează propunerile cu 1–5 stele.

Pentru profesori: cont gratuit, zero comision, control total asupra programului și tarifului.

Dacă predai sau cunoști oameni care predau: ${LINK}`,
  },
  {
    label: "WhatsApp (mesaj scurt)",
    text: `Salut! Dacă dai meditații: pe MeditatiiDirect.ro elevii postează ce au nevoie și tu trimiți propunerea ta (dată, oră, tarif). Gratuit, fără comision. ${LINK}`,
  },
  {
    label: "Afiș pentru cancelarie / avizier",
    text: `PROFESORI: ELEVII VĂ CAUTĂ DEJA

Pe MeditatiiDirect.ro elevii postează cererile de meditații, iar dumneavoastră trimiteți propunerea: dată, oră, tarif.

✔ Înscriere gratuită
✔ Fără comision — încasați integral
✔ Online sau față în față
✔ Program stabilit de dumneavoastră

Înscriere: meditatiidirect.ro/vreau-sa-dau-meditatii`,
  },
  {
    label: "Forum / Reddit r/Romania, r/studenti",
    text: `Pentru cine dă meditații: am lansat MeditatiiDirect.ro, unde elevul postează cererea și profesorii trimit propuneri (dată, oră, tarif, mesaj). Fără comision și fără abonament pentru profesori; elevii pot evalua propunerile cu stele, ca notele să fie reale, nu inventate.

Feedback-ul e binevenit. Pagina de înscriere pentru profesori: ${LINK}`,
  },
];

export const Route = createFileRoute("/kit-promovare")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: KitPage,
});

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="card-soft p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-semibold">{label}</h2>
        <button
          type="button"
          className="btn-outline h-9 shrink-0 px-3 text-xs"
          onClick={() => {
            void navigator.clipboard?.writeText(text).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            });
          }}
        >
          {copied ? <Check className="mr-1 h-3.5 w-3.5" /> : <Copy className="mr-1 h-3.5 w-3.5" />}
          {copied ? "Copiat" : "Copiază"}
        </button>
      </div>
      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function KitPage() {
  return (
    <article className="container-page py-10 lg:py-14">
      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <Megaphone className="h-4 w-4" /> Pagină internă, neindexată
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Kit de promovare pentru recrutarea profesorilor</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Texte gata scrise, de postat de tine, cu contul tău. Copiază, personalizează cu numele tău și publică.
          Respectă regulile fiecărui grup și nu trimite mesaje nesolicitate către liste de contacte.
        </p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {posts.map((p) => <CopyBlock key={p.label} {...p} />)}
      </section>

      <section className="card-soft mt-12 p-6">
        <h2 className="font-bold">Ritm recomandat</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
          <li>2–3 grupuri de Facebook pe zi, cu texte diferite (nu același mesaj peste tot).</li>
          <li>O postare pe LinkedIn pe săptămână, plus mesaje personale către foști colegi.</li>
          <li>Afișul tipărit în 2–3 școli sau facultăți din orașul tău.</li>
          <li>Fiecare profesor înscris primește linkul <Link to="/invita-un-coleg" className="font-semibold text-primary hover:underline">Invită un coleg</Link>.</li>
        </ul>
      </section>
    </article>
  );
}
