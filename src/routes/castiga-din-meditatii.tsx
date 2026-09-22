import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CalendarClock, Coins, MessageSquare, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/castiga-din-meditatii";
const TITLE = "Câștigă din meditații — primești cererile elevilor | MeditatiiDirect.ro";
const DESC =
  "Elevii postează ce au nevoie, tu trimiți propunerea ta cu dată, oră și tarif. Cont gratuit, fără comision, tu stabilești prețul. Lasă-ți datele și îți trimitem cererile potrivite.";

const faqs = [
  {
    q: "Cât costă să predau prin MeditatiiDirect.ro?",
    a: "Nimic. Contul este gratuit, nu reținem comision din tarif și nu există abonament.",
  },
  {
    q: "Cum primesc elevi?",
    a: "Elevii postează cereri (materie, nivel, oraș sau online, buget). Tu răspunzi cu o propunere care conține data, ora, tariful și un mesaj. Elevul alege și discutați direct în chat.",
  },
  {
    q: "Cine stabilește prețul?",
    a: "Tu. Îl treci în fiecare propunere și îl poți schimba de la un elev la altul.",
  },
  {
    q: "Ce fac cu datele pe care le las aici?",
    a: "Le folosim doar ca să-ți trimitem cererile potrivite materiilor tale și pașii de înscriere. Te poți retrage oricând, printr-un email la contact@meditatiidirect.ro.",
  },
];

export const Route = createFileRoute("/castiga-din-meditatii")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: TeacherLeadPage,
});

function LeadForm() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", city: "", subjects: "", experience: "" });
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const { error } = await supabase.from("teacher_leads").insert({
      full_name: form.full_name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim() || null,
      city: form.city.trim() || null,
      subjects: form.subjects.trim(),
      experience: form.experience.trim() || null,
      source: "landing",
      consent: true,
    });
    if (error) {
      if (error.code === "23505") {
        setState("done");
        setMsg("Ești deja pe listă — îți trimitem cererile potrivite materiilor tale.");
        return;
      }
      setState("error");
      setMsg("Nu am putut salva datele. Verifică emailul și încearcă din nou.");
      return;
    }
    setState("done");
    setMsg("Gata! Îți scriem pe email cu cererile potrivite și cu pașii de înscriere.");
  }

  if (state === "done") {
    return (
      <div className="card-soft bg-primary-soft/40 p-6">
        <p className="font-medium">{msg}</p>
        <Link to="/signup" className="btn-primary mt-4 h-11 px-5">Creează contul acum</Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-soft p-6">
      <h2 className="text-xl font-bold">Lasă-ți datele și îți trimitem cererile potrivite</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Durează un minut. Îți scriem doar despre cereri de meditații la materiile tale.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input required className="field-input" placeholder="Nume și prenume" value={form.full_name} onChange={set("full_name")} aria-label="Nume și prenume" />
        <input required type="email" className="field-input" placeholder="Email" value={form.email} onChange={set("email")} aria-label="Email" />
        <input className="field-input" placeholder="Telefon (opțional)" value={form.phone} onChange={set("phone")} aria-label="Telefon" />
        <input className="field-input" placeholder="Oraș sau „online”" value={form.city} onChange={set("city")} aria-label="Oraș" />
        <input required className="field-input sm:col-span-2" placeholder="Materii predate (ex. Matematică, Fizică — liceu și BAC)" value={form.subjects} onChange={set("subjects")} aria-label="Materii predate" />
        <textarea className="field-input sm:col-span-2 h-24 py-2" placeholder="Experiență pe scurt (opțional)" value={form.experience} onChange={set("experience")} aria-label="Experiență" />
      </div>
      <label className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
        <span>
          Sunt de acord să primesc pe email cereri de meditații și informații despre cont. Mă pot retrage oricând.{" "}
          <Link to="/confidentialitate" className="underline hover:text-primary">Politica de confidențialitate</Link>
        </span>
      </label>
      {state === "error" ? <p className="mt-3 text-sm text-destructive">{msg}</p> : null}
      <button type="submit" className="btn-primary mt-5 h-11 px-5" disabled={state === "sending"}>
        {state === "sending" ? "Se trimite…" : "Vreau cererile elevilor"}
      </button>
    </form>
  );
}

const benefits = [
  { icon: Coins, title: "Zero comision", body: "Tu stabilești tariful și încasezi integral. Fără abonament, fără taxe ascunse." },
  { icon: Users, title: "Elevii vin cu cererea", body: "Nu concurezi într-o listă lungă de profile — răspunzi doar cererilor care ți se potrivesc." },
  { icon: CalendarClock, title: "Program făcut de tine", body: "Îți treci disponibilitatea și propui data și ora care îți convin." },
  { icon: MessageSquare, title: "Chat direct cu elevul", body: "Discutați înainte de prima oră, fără intermediari." },
  { icon: BadgeCheck, title: "Evaluare în stele", body: "Elevii dau 1–5 stele propunerilor primite, deci reputația ta e reală." },
];

function TeacherLeadPage() {
  return (
    <article className="container-page py-10 lg:py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Câștigă din meditații: elevii cer, tu propui
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Pe MeditatiiDirect.ro elevii postează exact ce au nevoie — materie, nivel, oraș sau online, buget. Tu trimiți
          o propunere cu data, ora și tariful tău. Cont gratuit, fără comision.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/signup" className="btn-primary h-11 px-5">Creează cont de profesor</Link>
          <Link to="/cereri" className="btn-outline h-11 px-5">Vezi cererile elevilor</Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="card-soft p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <b.icon className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-4 font-bold">{b.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 max-w-3xl">
        <LeadForm />
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}<span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card-soft mt-14 bg-gradient-to-br from-primary-soft to-card p-8">
        <h2 className="text-xl font-bold">Ai deja cont?</h2>
        <p className="mt-1 text-sm text-muted-foreground">Intră în panoul tău și trimite prima propunere.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/profesor" className="btn-primary h-11 px-5">Panoul meu</Link>
          <Link to="/vreau-sa-dau-meditatii" className="btn-outline h-11 px-5">Cum funcționează pentru profesori</Link>
        </div>
      </section>
    </article>
  );
}
