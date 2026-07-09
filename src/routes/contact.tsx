import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const URL = "https://meditatiidirect.ro/contact";
const TITLE = "Contact — MeditatiiDirect.ro | Suport, colaborări, feedback";
const DESC = "Contactează echipa MeditatiiDirect.ro: suport pentru elevi și profesori, propuneri de colaborare, sesizări, presă. Răspundem în 24 de ore.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <article className="container-page py-12 max-w-3xl">
      <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Suntem aici pentru elevi, părinți și profesori. Alege canalul potrivit mai jos și îți răspundem în cel mult 24 de ore lucrătoare.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="card-soft p-5">
          <Mail className="h-5 w-5 text-primary" />
          <h2 className="mt-3 font-semibold">Email general</h2>
          <p className="mt-1 text-sm text-muted-foreground">Pentru orice întrebare sau sugestie.</p>
          <a href="mailto:contact@meditatiidirect.ro" className="mt-2 inline-block text-primary underline">contact@meditatiidirect.ro</a>
        </div>
        <div className="card-soft p-5">
          <MessageCircle className="h-5 w-5 text-primary" />
          <h2 className="mt-3 font-semibold">Suport elevi & profesori</h2>
          <p className="mt-1 text-sm text-muted-foreground">Probleme de cont, verificare profil, plăți abonament.</p>
          <a href="mailto:suport@meditatiidirect.ro" className="mt-2 inline-block text-primary underline">suport@meditatiidirect.ro</a>
        </div>
        <div className="card-soft p-5">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="mt-3 font-semibold">Adresă</h2>
          <p className="mt-1 text-sm text-muted-foreground">MeditatiiDirect.ro<br />București, România</p>
        </div>
        <div className="card-soft p-5">
          <Clock className="h-5 w-5 text-primary" />
          <h2 className="mt-3 font-semibold">Program suport</h2>
          <p className="mt-1 text-sm text-muted-foreground">Luni – Vineri: 09:00 – 19:00<br />Sâmbătă: 10:00 – 14:00</p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold">Colaborări și presă</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Pentru propuneri de parteneriat cu școli, edituri, ONG-uri educaționale sau agenții de publicitate, ne poți scrie la <a href="mailto:parteneri@meditatiidirect.ro" className="text-primary underline">parteneri@meditatiidirect.ro</a>. Presa poate solicita comentarii sau date statistice despre piața meditațiilor la <a href="mailto:presa@meditatiidirect.ro" className="text-primary underline">presa@meditatiidirect.ro</a>.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Raportare abuz</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Dacă întâlnești un anunț fals, un profesor care solicită plăți suspecte sau conținut necorespunzător, te rugăm să ne semnalezi imediat pe <a href="mailto:abuz@meditatiidirect.ro" className="text-primary underline">abuz@meditatiidirect.ro</a>. Fiecare sesizare este verificată în maxim 12 ore și, dacă este justificată, contul este suspendat.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Întrebări frecvente</h2>
      <p className="mt-3 text-foreground/90 leading-relaxed">
        Înainte de a ne scrie, aruncă o privire pe pagina <Link to="/cum-functioneaza" className="text-primary underline">Cum funcționează</Link> — probabil găsești deja răspunsul acolo.
      </p>
    </article>
  );
}
