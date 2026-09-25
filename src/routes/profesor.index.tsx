import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  BadgeCheck, CalendarDays, Check, ChevronDown, Eye, EyeOff, GraduationCap, Loader2, Pencil, Plus, Save, Trash2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { CITIES } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";

export const Route = createFileRoute("/profesor/")({
  head: () => ({
    meta: [
      { title: "Panoul profesorului — MeditatiiDirect.ro" },
      { name: "description", content: "Completează profilul, disponibilitatea și ofertele tale de meditații în panoul privat MeditatiiDirect.ro." },
      { property: "og:title", content: "Panoul profesorului — MeditatiiDirect.ro" },
      { property: "og:description", content: "Completează profilul, disponibilitatea și ofertele tale de meditații." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: TeacherDashboard,
});

const DAYS = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];
const LEVELS = ["Primar", "Gimnaziu", "Evaluare Națională", "Liceu", "Bacalaureat", "Admitere facultate", "Studenți", "Adulți"];
const RATES = ["100", "150", "200"];
const EXTRA_COUNTY_SEATS = [
  { name: "Alexandria", county: "Teleorman" },
  { name: "Miercurea-Ciuc", county: "Harghita" },
  { name: "Târgu Jiu", county: "Gorj" },
  { name: "Otopeni", county: "Ilfov" },
];
const LOCATIONS = [...CITIES.map(({ name, county }) => ({ name, county })), ...EXTRA_COUNTY_SEATS]
  .sort((a, b) => a.county.localeCompare(b.county, "ro"));
const EMPTY_OFFER = {
  title: "", subject: "", level: "", description: "", price_per_hour: "", is_online: true, is_in_person: false,
};

interface TeacherProfile {
  slug: string;
  display_name: string;
  avatar_url: string | null;
  headline: string;
  about: string;
  subjects: string;
  levels: string;
  city: string;
  experience_years: string;
  rate_min: string;
  rate_max: string;
  online_available: boolean;
  in_person_available: boolean;
  contact_email: string;
  contact_phone: string;
  is_published: boolean;
}

interface Slot { id: string; weekday: number; start_time: string; end_time: string }
interface Offer {
  id: string; title: string; subject: string; level: string | null; description: string | null;
  price_per_hour: number | null; is_online: boolean; is_in_person: boolean; status: string;
}

const emptyProfile: TeacherProfile = {
  slug: "", display_name: "", avatar_url: null, headline: "", about: "", subjects: "", levels: "",
  city: "", experience_years: "", rate_min: "", rate_max: "", online_available: true,
  in_person_available: false, contact_email: "", contact_phone: "", is_published: false,
};

function slugify(v: string) {
  return v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
}

function TeacherDashboard() {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState<TeacherProfile>(emptyProfile);
  const [hasProfile, setHasProfile] = useState(false);
  const [busy, setBusy] = useState(true);
  const [saving, setSaving] = useState(false);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [newSlot, setNewSlot] = useState({ weekday: 0, start_time: "16:00", end_time: "20:00" });
  const [offers, setOffers] = useState<Offer[]>([]);
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [editingOfferId, setEditingOfferId] = useState<string | null>(null);
  const [offerDraft, setOfferDraft] = useState(EMPTY_OFFER);

  const load = useCallback(async (uid: string, email: string) => {
    setBusy(true);
    const [{ data: tp }, { data: av }, { data: of }, { data: base }] = await Promise.all([
      supabase.from("teacher_profiles").select("*").eq("user_id", uid).maybeSingle(),
      supabase.from("teacher_availability").select("id,weekday,start_time,end_time").eq("user_id", uid).order("weekday"),
      supabase.from("teacher_offers").select("*").eq("user_id", uid).order("created_at", { ascending: false }),
      supabase.from("profiles").select("display_name,avatar_url,city").eq("user_id", uid).maybeSingle(),
    ]);
    if (tp) {
      setHasProfile(true);
      setProfile({
        slug: tp.slug,
        display_name: tp.display_name,
        avatar_url: tp.avatar_url,
        headline: tp.headline ?? "",
        about: tp.about ?? "",
        subjects: (tp.subjects ?? []).join(", "),
        levels: (tp.levels ?? []).join(", "),
        city: tp.city ?? "",
        experience_years: tp.experience_years?.toString() ?? "",
        rate_min: tp.rate_min?.toString() ?? "",
        rate_max: tp.rate_max?.toString() ?? "",
        online_available: tp.online_available,
        in_person_available: tp.in_person_available,
        contact_email: tp.contact_email ?? "",
        contact_phone: tp.contact_phone ?? "",
        is_published: tp.is_published,
      });
    } else {
      setProfile((p) => ({
        ...p,
        display_name: base?.display_name ?? "",
        avatar_url: base?.avatar_url ?? null,
        city: base?.city ?? "",
        contact_email: email,
      }));
    }
    setSlots((av as Slot[] | null) ?? []);
    setOffers((of as Offer[] | null) ?? []);
    setBusy(false);
  }, []);

  useEffect(() => {
    if (user) void load(user.id, user.email ?? "");
  }, [user, load]);

  if (loading) return <section className="container-page py-16 text-muted-foreground">Se încarcă…</section>;

  if (!user) {
    return (
      <section className="container-page py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <GraduationCap className="mx-auto h-8 w-8 text-primary" />
          <h1 className="mt-4 text-2xl font-bold">Panoul profesorului</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Autentifică-te sau creează-ți cont de profesor ca să-ți completezi profilul, disponibilitatea și ofertele.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Link to="/login" className="btn-primary h-11 px-5">Autentificare</Link>
            <Link to="/signup" className="btn-outline h-11 px-5">Creează cont</Link>
          </div>
        </div>
      </section>
    );
  }

  const saveProfile = async (publish?: boolean) => {
    if (profile.display_name.trim().length < 2) { toast.error("Completează numele."); return; }
    if (!profile.subjects.trim()) { toast.error("Adaugă cel puțin o materie."); return; }
    const slug = profile.slug || `${slugify(profile.display_name)}-${user.id.slice(0, 6)}`;
    setSaving(true);
    const payload = {
      user_id: user.id,
      slug,
      display_name: profile.display_name.trim(),
      avatar_url: profile.avatar_url,
      headline: profile.headline.trim() || null,
      about: profile.about.trim() || null,
      subjects: profile.subjects.split(",").map((s) => s.trim()).filter(Boolean),
      levels: profile.levels.split(",").map((s) => s.trim()).filter(Boolean),
      city: profile.city.trim() || null,
      experience_years: profile.experience_years ? Number(profile.experience_years) : null,
      rate_min: profile.rate_min ? Number(profile.rate_min) : null,
      rate_max: profile.rate_max ? Number(profile.rate_max) : null,
      online_available: profile.online_available,
      in_person_available: profile.in_person_available,
      contact_email: profile.contact_email.trim() || null,
      contact_phone: profile.contact_phone.trim() || null,
      is_published: publish ?? profile.is_published,
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from("teacher_profiles").upsert(payload, { onConflict: "user_id" });
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    setHasProfile(true);
    setProfile((p) => ({ ...p, slug, is_published: payload.is_published }));
    toast.success(publish === true ? "Profil publicat!" : publish === false ? "Profil retras de pe site." : "Profil salvat.");
  };

  const addSlot = async () => {
    if (newSlot.end_time <= newSlot.start_time) { toast.error("Ora de final trebuie după ora de start."); return; }
    const { data, error } = await supabase.from("teacher_availability")
      .insert({ user_id: user.id, ...newSlot })
      .select("id,weekday,start_time,end_time").single();
    if (error) { toast.error(error.message); return; }
    setSlots((s) => [...s, data as Slot].sort((a, b) => a.weekday - b.weekday || a.start_time.localeCompare(b.start_time)));
  };

  const removeSlot = async (id: string) => {
    const { error } = await supabase.from("teacher_availability").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    setSlots((s) => s.filter((x) => x.id !== id));
  };

  const saveOffer = async () => {
    if (!offerDraft.title.trim() || !offerDraft.subject.trim()) { toast.error("Titlul și materia sunt obligatorii."); return; }
    const payload = {
      user_id: user.id,
      title: offerDraft.title.trim(),
      subject: offerDraft.subject.trim(),
      level: offerDraft.level.trim() || null,
      description: offerDraft.description.trim() || null,
      price_per_hour: offerDraft.price_per_hour ? Number(offerDraft.price_per_hour) : null,
      is_online: offerDraft.is_online,
      is_in_person: offerDraft.is_in_person,
      updated_at: new Date().toISOString(),
    };
    const query = editingOfferId
      ? supabase.from("teacher_offers").update(payload).eq("id", editingOfferId)
      : supabase.from("teacher_offers").insert(payload);
    const { data, error } = await query.select("*").single();
    if (error) { toast.error(error.message); return; }
    setOffers((current) => editingOfferId
      ? current.map((offer) => offer.id === editingOfferId ? data as Offer : offer)
      : [data as Offer, ...current]);
    setOfferDraft(EMPTY_OFFER);
    setEditingOfferId(null);
    setShowOfferForm(false);
    toast.success(editingOfferId ? "Oferta a fost modificată." : "Ofertă publicată.");
  };

  const editOffer = (offer: Offer) => {
    setOfferDraft({
      title: offer.title,
      subject: offer.subject,
      level: offer.level ?? "",
      description: offer.description ?? "",
      price_per_hour: offer.price_per_hour?.toString() ?? "",
      is_online: offer.is_online,
      is_in_person: offer.is_in_person,
    });
    setEditingOfferId(offer.id);
    setShowOfferForm(true);
  };

  const cancelOfferForm = () => {
    setOfferDraft(EMPTY_OFFER);
    setEditingOfferId(null);
    setShowOfferForm(false);
  };

  const toggleOffer = async (offer: Offer) => {
    const status = offer.status === "published" ? "paused" : "published";
    const { error } = await supabase.from("teacher_offers").update({ status, updated_at: new Date().toISOString() }).eq("id", offer.id);
    if (error) { toast.error(error.message); return; }
    setOffers((o) => o.map((x) => (x.id === offer.id ? { ...x, status } : x)));
  };

  const deleteOffer = async (id: string) => {
    const { error } = await supabase.from("teacher_offers").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    setOffers((o) => o.filter((x) => x.id !== id));
  };

  return (
    <section className="container-page max-w-4xl py-8 sm:py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Panoul profesorului</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Completează-ți profilul, disponibilitatea și ofertele. Elevii îți văd datele doar după ce publici profilul.
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/cereri" className="btn-outline inline-flex h-10 items-center text-sm">Cereri elevi</Link>
          <Link to="/cont" className="btn-outline inline-flex h-10 items-center text-sm">Contul meu</Link>
        </div>
      </div>

      {hasProfile && (
        <div className="card-soft mt-6 flex flex-wrap items-center justify-between gap-3 p-5">
          <div className="flex items-center gap-2 text-sm">
            {profile.is_published ? (
              <><BadgeCheck className="h-5 w-5 text-success" /> <span>Profil public la{" "}
                <Link to="/profesor/$slug" params={{ slug: profile.slug }} className="font-semibold text-primary hover:underline">
                  /profesor/{profile.slug}
                </Link></span></>
            ) : (
              <><EyeOff className="h-5 w-5 text-muted-foreground" /> <span className="text-muted-foreground">Profilul nu este publicat — nimeni nu îl vede.</span></>
            )}
          </div>
          <button onClick={() => void saveProfile(!profile.is_published)} className={profile.is_published ? "btn-outline h-10 text-sm" : "btn-primary h-10 text-sm"}>
            {profile.is_published ? "Retrage profilul" : "Publică profilul"}
          </button>
        </div>
      )}

      {busy ? (
        <p className="mt-8 inline-flex items-center gap-2 text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Se încarcă datele…</p>
      ) : (
        <>
          {/* Profil */}
          <form
            onSubmit={(e) => { e.preventDefault(); void saveProfile(); }}
            className="card-soft mt-6 space-y-4 p-5 sm:p-6"
          >
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold"><GraduationCap className="h-4 w-4 text-primary" /> Profilul meu de profesor</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nume afișat *">
                <input className="field-input" value={profile.display_name} onChange={(e) => setProfile({ ...profile, display_name: e.target.value })} />
              </Field>
              <Field label="Oraș">
                <select className="field-input" value={profile.city} onChange={(e) => setProfile({ ...profile, city: e.target.value })}>
                  <option value="">Alege orașul sau județul</option>
                  {profile.city && !LOCATIONS.some((item) => item.name === profile.city) && <option value={profile.city}>{profile.city}</option>}
                  {LOCATIONS.map((item) => <option key={`${item.county}-${item.name}`} value={item.name}>{item.name} — jud. {item.county}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Titlu profesional">
              <input className="field-input" placeholder="Profesor de matematică, 8 ani experiență" value={profile.headline} onChange={(e) => setProfile({ ...profile, headline: e.target.value })} />
            </Field>
            <Field label="Despre mine și metoda de predare">
              <textarea rows={5} maxLength={1500} className="field-input min-h-[120px] py-3" value={profile.about} onChange={(e) => setProfile({ ...profile, about: e.target.value })} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Materii predate *">
                <MultiSelectDropdown
                  label="Alege una sau mai multe materii"
                  options={SUBJECTS_SEO.map((subject) => subject.name)}
                  value={profile.subjects.split(",").map((item) => item.trim()).filter(Boolean)}
                  onChange={(subjects) => setProfile({ ...profile, subjects: subjects.join(", ") })}
                />
              </Field>
              <Field label="Niveluri predate">
                <MultiSelectDropdown
                  label="Alege unul sau mai multe niveluri"
                  options={LEVELS}
                  value={profile.levels.split(",").map((item) => item.trim()).filter(Boolean)}
                  onChange={(levels) => setProfile({ ...profile, levels: levels.join(", ") })}
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Ani experiență">
                <input type="number" min={0} max={60} className="field-input" value={profile.experience_years} onChange={(e) => setProfile({ ...profile, experience_years: e.target.value })} />
              </Field>
              <Field label="Tarif de la (lei/oră)">
                <select className="field-input" value={profile.rate_min} onChange={(e) => setProfile({ ...profile, rate_min: e.target.value })}>
                  <option value="">Alege tariful</option>
                  {profile.rate_min && !RATES.includes(profile.rate_min) && <option value={profile.rate_min}>{profile.rate_min} RON</option>}
                  {RATES.map((rate) => <option key={rate} value={rate}>{rate} RON</option>)}
                </select>
              </Field>
              <Field label="Tarif până la (lei/oră)">
                <select className="field-input" value={profile.rate_max} onChange={(e) => setProfile({ ...profile, rate_max: e.target.value })}>
                  <option value="">Alege tariful</option>
                  {profile.rate_max && !RATES.includes(profile.rate_max) && <option value={profile.rate_max}>{profile.rate_max} RON</option>}
                  {RATES.map((rate) => <option key={rate} value={rate}>{rate} RON</option>)}
                </select>
              </Field>
            </div>
            <div className="flex flex-wrap gap-5 text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={profile.online_available} onChange={(e) => setProfile({ ...profile, online_available: e.target.checked })} /> Predau online
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={profile.in_person_available} onChange={(e) => setProfile({ ...profile, in_person_available: e.target.checked })} /> Predau față în față
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email de contact">
                <input type="email" className="field-input" value={profile.contact_email} onChange={(e) => setProfile({ ...profile, contact_email: e.target.value })} />
              </Field>
              <Field label="Telefon (vizibil doar utilizatorilor autentificați)">
                <input className="field-input" value={profile.contact_phone} onChange={(e) => setProfile({ ...profile, contact_phone: e.target.value })} />
              </Field>
            </div>
            <button type="submit" disabled={saving} className="btn-primary inline-flex h-11 items-center gap-2 disabled:opacity-60">
              <Save className="h-4 w-4" /> {saving ? "Se salvează…" : "Salvează profilul"}
            </button>
          </form>

          {/* Disponibilitate */}
          <div className="card-soft mt-6 p-5 sm:p-6">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold"><CalendarDays className="h-4 w-4 text-primary" /> Calendar de disponibilitate</h2>
            <p className="mt-1 text-sm text-muted-foreground">Adaugă intervalele în care poți preda. Apar pe profilul tău public.</p>

            <div className="mt-4 flex flex-wrap items-end gap-3">
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Ziua</span>
                <select className="field-input" value={newSlot.weekday} onChange={(e) => setNewSlot({ ...newSlot, weekday: Number(e.target.value) })}>
                  {DAYS.map((d, i) => <option key={d} value={i}>{d}</option>)}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">De la</span>
                <input type="time" className="field-input" value={newSlot.start_time} onChange={(e) => setNewSlot({ ...newSlot, start_time: e.target.value })} />
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Până la</span>
                <input type="time" className="field-input" value={newSlot.end_time} onChange={(e) => setNewSlot({ ...newSlot, end_time: e.target.value })} />
              </label>
              <button onClick={() => void addSlot()} className="btn-primary inline-flex h-11 items-center gap-2"><Plus className="h-4 w-4" /> Adaugă interval</button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {DAYS.map((day, i) => {
                const daySlots = slots.filter((s) => s.weekday === i);
                return (
                  <div key={day} className="rounded-xl border border-border p-3">
                    <p className="text-sm font-semibold">{day}</p>
                    {daySlots.length === 0 ? (
                      <p className="mt-1 text-xs text-muted-foreground">Indisponibil</p>
                    ) : (
                      <ul className="mt-2 space-y-1">
                        {daySlots.map((s) => (
                          <li key={s.id} className="flex items-center justify-between gap-2 text-sm">
                            <span>{s.start_time.slice(0, 5)}–{s.end_time.slice(0, 5)}</span>
                            <button aria-label="Șterge intervalul" onClick={() => void removeSlot(s.id)} className="text-muted-foreground hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Oferte */}
          <div className="card-soft mt-6 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="inline-flex items-center gap-2 text-lg font-semibold"><Eye className="h-4 w-4 text-primary" /> Ofertele mele</h2>
              <button onClick={() => showOfferForm ? cancelOfferForm() : setShowOfferForm(true)} className="btn-outline inline-flex h-10 items-center gap-2 text-sm">
                <Plus className="h-4 w-4" /> Ofertă nouă
              </button>
            </div>

            {showOfferForm && (
              <div className="mt-4 space-y-4 rounded-xl border border-border p-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Titlu *"><input className="field-input" placeholder="Pregătire Bacalaureat matematică M1" value={offerDraft.title} onChange={(e) => setOfferDraft({ ...offerDraft, title: e.target.value })} /></Field>
                  <Field label="Materie *"><select className="field-input" value={offerDraft.subject} onChange={(e) => setOfferDraft({ ...offerDraft, subject: e.target.value })}><option value="">Alege materia</option>{offerDraft.subject && !SUBJECTS_SEO.some((s) => s.name === offerDraft.subject) && <option value={offerDraft.subject}>{offerDraft.subject}</option>}{SUBJECTS_SEO.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}</select></Field>
                  <Field label="Nivel"><select className="field-input" value={offerDraft.level} onChange={(e) => setOfferDraft({ ...offerDraft, level: e.target.value })}><option value="">Alege nivelul</option>{offerDraft.level && !LEVELS.includes(offerDraft.level) && <option value={offerDraft.level}>{offerDraft.level}</option>}{LEVELS.map((level) => <option key={level} value={level}>{level}</option>)}</select></Field>
                  <Field label="Preț (RON/oră)"><select className="field-input" value={offerDraft.price_per_hour} onChange={(e) => setOfferDraft({ ...offerDraft, price_per_hour: e.target.value })}><option value="">Alege prețul</option>{offerDraft.price_per_hour && !RATES.includes(offerDraft.price_per_hour) && <option value={offerDraft.price_per_hour}>{offerDraft.price_per_hour} RON</option>}{RATES.map((rate) => <option key={rate} value={rate}>{rate} RON</option>)}</select></Field>
                </div>
                <Field label="Descriere"><textarea rows={3} maxLength={800} className="field-input min-h-[90px] py-3" value={offerDraft.description} onChange={(e) => setOfferDraft({ ...offerDraft, description: e.target.value })} /></Field>
                <div className="flex flex-wrap gap-5 text-sm">
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={offerDraft.is_online} onChange={(e) => setOfferDraft({ ...offerDraft, is_online: e.target.checked })} /> Online</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={offerDraft.is_in_person} onChange={(e) => setOfferDraft({ ...offerDraft, is_in_person: e.target.checked })} /> Față în față</label>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => void saveOffer()} className="btn-primary inline-flex h-11 items-center gap-2"><Save className="h-4 w-4" /> {editingOfferId ? "Salvează modificările" : "Publică oferta"}</button>
                  {editingOfferId && <button onClick={cancelOfferForm} className="btn-outline h-11">Renunță</button>}
                </div>
              </div>
            )}

            {offers.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">Nu ai nicio ofertă încă. Adaugă prima ofertă ca elevii să vadă exact ce predai.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {offers.map((o) => (
                  <li key={o.id} className="rounded-xl border border-border p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{o.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {o.subject}{o.level ? ` · ${o.level}` : ""}{o.price_per_hour ? ` · ${o.price_per_hour} lei/oră` : ""}
                          {o.is_online ? " · Online" : ""}{o.is_in_person ? " · Față în față" : ""}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${o.status === "published" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                          {o.status === "published" ? "Activă" : "În pauză"}
                        </span>
                        <button aria-label={`Modifică oferta ${o.title}`} title="Modifică oferta" onClick={() => editOffer(o)} className="btn-outline h-9 gap-1.5 px-3 text-xs"><Pencil className="h-3.5 w-3.5" /> Modifică</button>
                        <button onClick={() => void toggleOffer(o)} className="btn-outline h-9 text-xs">{o.status === "published" ? "Pune pauză" : "Activează"}</button>
                        <button aria-label="Șterge oferta" onClick={() => void deleteOffer(o.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                    {o.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{o.description}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </section>
  );
}

function MultiSelectDropdown({ label, options, value, onChange }: { label: string; options: string[]; value: string[]; onChange: (value: string[]) => void }) {
  const toggle = (option: string) => onChange(value.includes(option) ? value.filter((item) => item !== option) : [...value, option]);
  return (
    <details className="group relative">
      <summary className="field-input flex cursor-pointer list-none items-center justify-between gap-3">
        <span className={value.length ? "text-foreground" : "text-muted-foreground"}>{value.length ? value.join(", ") : label}</span>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute z-30 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-border bg-card p-2 shadow-lg">
        {options.map((option) => (
          <button type="button" key={option} onClick={() => toggle(option)} className="flex min-h-10 w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-muted">
            <span>{option}</span>{value.includes(option) && <Check className="h-4 w-4 text-primary" />}
          </button>
        ))}
      </div>
    </details>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="block text-sm">
      <span className="mb-1 block text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}
