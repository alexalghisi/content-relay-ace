import { BadgeCheck, Star, ShieldCheck, Users, Wallet, Clock } from "lucide-react";
import type { ComboStats, TrustStats } from "@/lib/market-stats.functions";

const fmtDate = (d: string) => new Date(d).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

export function comboFaqs(s: ComboStats, subject: string, city: string) {
  const faqs: { q: string; a: string }[] = [];
  faqs.push({
    q: `Cât costă meditațiile la ${subject} în ${city}?`,
    a: s.price
      ? `Pe MeditatiiDirect, cele ${s.price.n} tarife reale pentru ${subject} (anunțuri, oferte și propuneri trimise elevilor) sunt între ${s.price.min} și ${s.price.max} lei/oră, cu o valoare mediană de ${s.price.median} lei/oră. Date actualizate la ${fmtDate(s.updatedAt)}.`
      : `Încă nu avem suficiente tarife reale pentru ${subject} în ${city}. Postează o cerere cu bugetul tău și profesorii îți răspund cu propriul tarif.`,
  });
  faqs.push({
    q: `Pot face meditații la ${subject} online sau doar față în față în ${city}?`,
    a: s.listings
      ? `Din cele ${s.listings} anunțuri active care acoperă ${city}, ${s.onlineListings} oferă ședințe online și ${s.localListings} sunt publicate de profesori din ${city}. În cerere poți alege online, față în față sau ambele.`
      : `În cerere alegi online, față în față sau ambele; profesorii care acoperă ${city} îți trimit propuneri potrivite.`,
  });
  if (s.priceOnline || s.priceInPerson) {
    const part = (label: string, x: ComboStats["price"]) => x ? `${label}: mediană ${x.median} lei/oră (${x.min}–${x.max}, ${x.n} ${x.n === 1 ? "anunț" : "anunțuri"})` : `${label}: încă fără date suficiente`;
    faqs.push({
      q: `Sunt meditațiile online la ${subject} mai ieftine decât cele față în față în ${city}?`,
      a: `Din anunțurile active pe MeditatiiDirect — ${part("online", s.priceOnline)}; ${part(`față în față în ${city}`, s.priceInPerson)}. Actualizat la ${fmtDate(s.updatedAt)}.`,
    });
  }
  faqs.push({
    q: `Câte ședințe pe săptămână sunt recomandate la ${subject}?`,
    a: `Frecvența o stabilești direct cu profesorul în propunere. Pe platformă, fiecare propunere vine cu o dată și o oră concretă, iar ritmul îl ajustați după primele ședințe.`,
  });
  faqs.push({
    q: `Câți elevi caută meditații la ${subject} în ${city}?`,
    a: s.requestsTotal
      ? `Până la ${fmtDate(s.updatedAt)}, elevii au postat ${s.requestsTotal} ${s.requestsTotal === 1 ? "cerere" : "cereri"} la ${subject} pentru ${city} sau online.`
      : `Încă nu există cereri publicate la ${subject} pentru ${city}. Poți fi primul: cererea e gratuită.`,
  });
  return faqs;
}

export function ComboDataBlock({ s, subject, city }: { s: ComboStats; subject: string; city: string }) {
  return (
    <section className="container-page py-8" aria-labelledby="date-reale">
      <h2 id="date-reale" className="text-2xl font-bold">Date reale: meditații {subject} în {city}</h2>
      <p className="mt-1 text-sm text-muted-foreground">Calculate din anunțurile, ofertele și cererile de pe MeditatiiDirect · actualizat la {fmtDate(s.updatedAt)}</p>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card-soft p-5">
          <dt className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="h-4 w-4 text-primary" /> Profesori activi</dt>
          <dd className="mt-1 text-2xl font-bold">{s.teachers + s.listings}</dd>
          <dd className="text-xs text-muted-foreground">{s.listings} anunțuri · {s.teachers} profiluri</dd>
        </div>
        <div className="card-soft p-5">
          <dt className="flex items-center gap-2 text-sm text-muted-foreground"><Wallet className="h-4 w-4 text-primary" /> Tarif real (lei/oră)</dt>
          <dd className="mt-1 text-2xl font-bold">{s.price ? s.price.median : "—"}</dd>
          <dd className="text-xs text-muted-foreground">{s.price ? `minim ${s.price.min} · maxim ${s.price.max} · ${s.price.n} tarife` : "încă fără tarife suficiente"}</dd>
        </div>
        <div className="card-soft p-5">
          <dt className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4 text-primary" /> Cereri de la elevi</dt>
          <dd className="mt-1 text-2xl font-bold">{s.requestsTotal}</dd>
          <dd className="text-xs text-muted-foreground">în {city} sau online</dd>
        </div>
        <div className="card-soft p-5">
          <dt className="flex items-center gap-2 text-sm text-muted-foreground"><Star className="h-4 w-4 text-primary" /> Evaluare medie</dt>
          <dd className="mt-1 text-2xl font-bold">{s.rating ? `${s.rating.avg.toFixed(1)} / 5` : "—"}</dd>
          <dd className="text-xs text-muted-foreground">{s.rating ? `${s.rating.count} evaluări de la elevi` : "încă nicio evaluare"}</dd>
        </div>
      </dl>
      {(s.priceOnline || s.priceInPerson || s.teachersByLevel.length > 0) && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {(s.priceOnline || s.priceInPerson) && (
            <div className="card-soft p-5">
              <h3 className="text-lg font-semibold">Tarif real după format</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Online: {s.priceOnline ? `mediană ${s.priceOnline.median} lei/oră (${s.priceOnline.min}–${s.priceOnline.max}, ${s.priceOnline.n} anunțuri)` : "încă fără date"}</li>
                <li>Față în față în {city}: {s.priceInPerson ? `mediană ${s.priceInPerson.median} lei/oră (${s.priceInPerson.min}–${s.priceInPerson.max}, ${s.priceInPerson.n} anunțuri)` : "încă fără date"}</li>
              </ul>
            </div>
          )}
          {s.teachersByLevel.length > 0 && (
            <div className="card-soft p-5">
              <h3 className="text-lg font-semibold">Profesori după nivel</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {s.teachersByLevel.slice(0, 6).map((l) => <li key={l.level}>{l.level}: {l.count} {l.count === 1 ? "profesor" : "profesori"}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
      {s.recentRequests.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Cereri recente (anonimizate)</h3>
          <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
            {s.recentRequests.map((r, i) => (
              <li key={i} className="flex flex-wrap justify-between gap-2 px-4 py-3 text-sm">
                <span>{subject}{r.level ? ` · ${r.level}` : ""} · {r.place}</span>
                <span className="text-muted-foreground">{r.budget ? `buget ${r.budget} lei/oră · ` : ""}{fmtDate(r.date)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export function TrustBlock({ t }: { t: TrustStats }) {
  return (
    <section className="container-page py-8" aria-labelledby="incredere">
      <h2 id="incredere" className="text-2xl font-bold">De ce să ai încredere în MeditatiiDirect</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="card-soft p-5">
          <h3 className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-4 w-4 text-primary" /> Cum verificăm profesorii</h3>
          <p className="mt-2 text-sm text-muted-foreground">Fiecare profil de profesor se publică abia după ce este verificat de echipa noastră. Datele de contact rămân ascunse în chat până la prima ședință, ca să comunici în siguranță prin platformă.</p>
        </div>
        <div className="card-soft p-5">
          <h3 className="flex items-center gap-2 font-semibold"><Star className="h-4 w-4 text-primary" /> Cum funcționează evaluările</h3>
          <p className="mt-2 text-sm text-muted-foreground">Doar elevul care a primit o propunere o poate evalua, cu 1–5 stele, din pagina privată a cererii lui. Nu publicăm recenzii fără o interacțiune reală.</p>
        </div>
        <div className="card-soft p-5">
          <h3 className="flex items-center gap-2 font-semibold"><BadgeCheck className="h-4 w-4 text-primary" /> În cifre</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>{t.teachers} profesori cu profil publicat</li>
            <li>{t.requests} cereri postate de elevi</li>
            {t.completed > 0 && <li>{t.completed} cereri finalizate cu un profesor ales</li>}
            {t.avgRating != null && <li>{t.avgRating.toFixed(1)} / 5 din {t.ratings} evaluări</li>}
          </ul>
        </div>
      </div>
    </section>
  );
}
