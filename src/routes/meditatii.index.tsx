import { notifyTeachersOfRequest } from "@/lib/notify-teachers.functions";
import { validateRequest, clip } from "@/lib/request-validation";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Megaphone, Send, ShieldCheck, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { CITIES } from "@/data/cities";
import { claseLabel, getBlocaj } from "@/data/blocaje";
import { textFromTraseuParam } from "@/lib/scaner-lacune";

type SearchParams = { materie?: string; oras?: string; q?: string; online?: string; blocaj?: string; traseu?: string };

export const Route = createFileRoute("/meditatii/")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    materie: typeof search.materie === "string" ? search.materie : undefined,
    oras: typeof search.oras === "string" ? search.oras : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
    online: search.online === undefined || search.online === null ? undefined : String(search.online),
    blocaj: typeof search.blocaj === "string" ? search.blocaj : undefined,
    traseu: typeof search.traseu === "string" ? search.traseu : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Meditații 2026 — Online sau Acasă, la Orice Materie | MeditatiiDirect" },
      { name: "description", content: "Meditații la matematică, română, engleză, informatică, biologie și orice materie. Descrii ce ai nevoie, profesorii îți trimit propuneri. Gratuit, fără comision." },
      { property: "og:title", content: "Meditații online sau acasă, la orice materie | MeditatiiDirect" },
      { property: "og:description", content: "Spune ce vrei să înveți și primești propuneri de la profesori, gratuit și fără comision." },
      { property: "og:url", content: "https://meditatiidirect.ro/meditatii" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/meditatii" }],
  }),
  component: RequestPage,
});

const LEVELS = ["Gimnaziu", "Evaluare Națională", "Liceu", "Bacalaureat", "Admitere facultate", "Altele"];

/** Elimină diacriticele și normalizează pentru comparații între slug-uri și nume afișate. */
const norm = (v: string) => v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

/** Acceptă atât slug ("cluj-napoca") cât și nume afișat ("Cluj-Napoca") venite din alte formulare. */
function cityFromParam(value?: string) {
  if (!value) return "";
  const n = norm(value);
  if (n === "online") return "";
  return CITIES.find((c) => c.slug === n || norm(c.name) === n || norm(c.slug) === n)?.slug ?? "";
}

const LEVEL_ALIASES: Record<string, string> = {
  "scoala generala": "Gimnaziu",
  "bac": "Bacalaureat",
  "evaluare nationala": "Evaluare Națională",
  "admitere": "Admitere facultate",
  "admitere facultate": "Admitere facultate",
};

function levelFromParam(value?: string) {
  if (!value) return "";
  const n = norm(value);
  const mapped = LEVEL_ALIASES[n] ?? value;
  return LEVELS.find((l) => norm(l) === norm(mapped)) ?? "";
}

function RequestPage() {
  const search = Route.useSearch();
  const [subject, setSubject] = useState(search.materie ?? "");
  const [level, setLevel] = useState(() => levelFromParam(search.q));
  const [city, setCity] = useState(() => cityFromParam(search.oras));
  const [isOnline, setIsOnline] = useState(() => search.online === "1" || norm(search.oras ?? "") === "online");
  const [budget, setBudget] = useState("");
  // Venit din Harta Blocajelor: precompletăm detaliile cu blocajul ales (fără date personale).
  const [details, setDetails] = useState(() => {
    // Venit din Scanerul de lacune: diagnosticul (doar noțiuni, fără date personale).
    if (search.traseu) {
      const t = textFromTraseuParam(search.traseu);
      if (t) return t;
    }
    const b = search.blocaj ? getBlocaj(search.blocaj) : undefined;
    return b ? `M-am blocat la: ${b.titlu} (${claseLabel(b.clase)}). ${b.blocaj}` : "";
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [link, setLink] = useState<{ id: string; token: string } | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    if (!subject || !name.trim() || !email.trim()) {
      setError("Completează cel puțin materia, numele și adresa de email.");
      return;
    }
    const subjectName = SUBJECTS_SEO.find((s) => s.slug === subject)?.name ?? subject;
    const budgetNum = budget ? Number(budget) : null;
    const invalid = validateRequest({ subject: subjectName, name, email, details, phone, budget: budgetNum });
    if (invalid) {
      setError(invalid);
      return;
    }
    setPending(true);
    const cityName = CITIES.find((c) => c.slug === city)?.name ?? city;
    const requestId = crypto.randomUUID();
    const token = crypto.randomUUID().replace(/-/g, "");
    const { error: insertError } = await supabase.from("student_requests").insert({
      id: requestId,
      access_token: token,
      subject: subjectName.trim(),
      level: clip(level, 120),
      city: isOnline ? null : clip(cityName, 120),
      is_online: isOnline,
      budget_per_hour: budgetNum,
      details: clip(details, 4000),
      contact_name: name.trim(),
      contact_email: email.trim(),
      contact_phone: clip(phone, 40),
    });
    setPending(false);
    if (insertError) {
      setError("Nu am putut trimite cererea. Încearcă din nou sau scrie-ne pe pagina de contact.");
      return;
    }
    notifyTeachersOfRequest({ data: { requestId } }).catch(() => {});
    setLink({ id: requestId, token });
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <section className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-success"><Check className="h-7 w-7" /></span>
          <h1 className="mt-5 text-3xl font-bold">Cererea ta a fost publicată</h1>
          <p className="mt-3 leading-7 text-muted-foreground">
            Profesorii verificați de <strong className="text-foreground">{SUBJECTS_SEO.find((s) => s.slug === subject)?.name ?? "materia aleasă"}</strong> o văd acum și îți pot trimite propuneri direct pe email{phone.trim() ? " sau telefon" : ""}. De obicei primești primele răspunsuri în câteva ore.
          </p>
          {link && (
            <p className="mt-5 rounded-xl border border-border bg-background p-4 text-sm leading-6 text-muted-foreground">
              Salvează acest link privat — aici vezi propunerile primite (dată, oră, tarif, mesaj):{" "}
              <Link
                to="/cererea-mea/$id"
                params={{ id: link.id }}
                search={{ t: link.token }}
                className="font-semibold text-primary hover:underline"
              >
                Vezi propunerile la cererea ta
              </Link>
            </p>
          )}
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <button onClick={() => setDone(false)} className="btn-outline h-11 px-5">Trimite altă cerere</button>
            <Link to="/" className="btn-primary h-11 px-5">Înapoi la pagina principală</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-10 sm:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary"><Megaphone className="h-4 w-4" /> Gratuit · fără cont obligatoriu</div>
        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Spune-ne ce profesor cauți</h1>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">
          Nu mai căuta prin zeci de profile. Descrii o singură dată ce ai nevoie, iar profesorii verificați vin la tine cu propuneri și tarife.
        </p>
      </div>

      <form onSubmit={submit} className="mx-auto mt-9 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="req-subject" className="text-sm font-bold">Materie *</label>
            <select id="req-subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm">
              <option value="">Alege materia</option>
              {SUBJECTS_SEO.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="req-level" className="text-sm font-bold">Nivel</label>
            <select id="req-level" value={level} onChange={(e) => setLevel(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm">
              <option value="">Alege nivelul</option>
              {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="req-city" className="text-sm font-bold">Oraș</label>
            <select id="req-city" value={city} onChange={(e) => setCity(e.target.value)} disabled={isOnline} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm disabled:opacity-50">
              <option value="">Alege orașul</option>
              {CITIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
            <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" checked={isOnline} onChange={(e) => setIsOnline(e.target.checked)} className="accent-primary" />
              Prefer meditații online
            </label>
          </div>
          <div>
            <label htmlFor="req-budget" className="text-sm font-bold">Buget (lei/oră)</label>
            <input id="req-budget" type="number" min="30" max="500" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="ex. 80" className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="req-details" className="text-sm font-bold">Detalii</label>
            <textarea id="req-details" value={details} onChange={(e) => setDetails(e.target.value)} rows={4} placeholder="Ex: elev clasa a XII-a, pregătire BAC matematică M1, disponibil după ora 17:00, două ședințe pe săptămână…" className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="req-name" className="text-sm font-bold">Numele tău *</label>
            <input id="req-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nume și prenume" className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm" />
          </div>
          <div>
            <label htmlFor="req-email" className="text-sm font-bold">Email *</label>
            <input id="req-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="adresa@email.ro" className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="req-phone" className="text-sm font-bold">Telefon <span className="font-normal text-muted-foreground">(opțional — vizibil doar profesorilor)</span></label>
            <input id="req-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="07xx xxx xxx" className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm" />
          </div>
        </div>

        {error && <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}

        <button type="submit" disabled={pending} className="btn-primary mt-6 h-12 w-full text-base disabled:opacity-60">
          <Send className="mr-2 h-4 w-4" /> {pending ? "Se trimite…" : "Publică cererea — gratuit"}
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Prin trimitere ești de acord cu <Link to="/termeni" className="underline">termenii</Link> și <Link to="/confidentialitate" className="underline">politica de confidențialitate</Link>. Cererea poate fi ștearsă oricând la cerere.
        </p>
      </form>

      <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
          <p className="text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Datele tale sunt protejate.</strong> Doar profesorii cu cont pe platformă văd cererea și datele de contact.</p>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Tu alegi.</strong> Compari propunerile primite și discuți direct cu profesorul potrivit, fără comision.</p>
        </div>
      </div>
    </section>
  );
}
