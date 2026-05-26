import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { getMyPrivateProfile } from "@/lib/security.functions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { User, Phone, MapPin, Mail, Lock, MessageCircle, LogOut, Save, Camera, Trash2 } from "lucide-react";

export const Route = createFileRoute("/cont")({
  head: () => ({ meta: [
    { title: "Contul meu — MeditatiiDirect.ro" },
    { name: "robots", content: "noindex, nofollow" },
    ]}),
  component: AccountPage,
});

interface Profile { display_name: string | null; phone: string | null; city: string | null; bio: string | null; avatar_url: string | null; }

const profileSchema = z.object({
  display_name: z.string().trim().min(2, "Nume prea scurt").max(80),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  bio: z.string().trim().max(500).optional().or(z.literal("")),
});

function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const loadPrivateProfile = useServerFn(getMyPrivateProfile);
  const [profile, setProfile] = useState<Profile>({ display_name: "", phone: "", city: "", bio: "", avatar_url: null });
  const [saving, setSaving] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [savingEmail, setSavingEmail] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  const isGoogleUser = (user?.app_metadata?.providers ?? user?.app_metadata?.provider ? 
    [user?.app_metadata?.provider, ...(user?.app_metadata?.providers ?? [])].includes("google") : false);

  useEffect(() => {
    if (!loading && !user) { window.location.href = "/login"; return; }
    if (user) {
      loadPrivateProfile()
        .then((data) => {
          if (data) setProfile({
            display_name: data.display_name ?? "",
            phone: data.phone ?? "",
            city: data.city ?? "",
            bio: data.bio ?? "",
            avatar_url: data.avatar_url ?? null,
          });
        })
        .catch(() => {
          toast.error("Nu am putut încărca profilul.");
        });
      setNewEmail(user.email ?? "");
    }
  }, [user, loading, loadPrivateProfile]);

  if (loading || !user) return <div className="container-page py-16 text-muted-foreground">Se încarcă...</div>;

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = profileSchema.safeParse(profile);
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setSaving(true);
    const { error } = await supabase.from("profiles").upsert({
      user_id: user.id,
      display_name: parsed.data.display_name,
      phone: parsed.data.phone || null,
      city: parsed.data.city || null,
      bio: parsed.data.bio || null,
    }, { onConflict: "user_id" });
    setSaving(false);
    if (error) toast.error(error.message); else toast.success("Profil actualizat!");
  };

  const saveEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!z.string().email().safeParse(newEmail).success) { toast.error("Email invalid"); return; }
    if (newEmail === user.email) { toast.info("Email neschimbat"); return; }
    setSavingEmail(true);
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    setSavingEmail(false);
    if (error) toast.error(error.message);
    else toast.success("Verifică noul email pentru confirmare.");
  };

  const savePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) { toast.error("Parola minim 6 caractere"); return; }
    setSavingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setSavingPassword(false);
    if (error) toast.error(error.message);
    else { toast.success("Parolă schimbată!"); setNewPassword(""); }
  };

  const onAvatarFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type)) { toast.error("Format invalid. Folosește JPG, PNG, WEBP."); return; }
    if (file.size > 3 * 1024 * 1024) { toast.error("Fișierul depășește 3 MB."); return; }
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${user.id}/avatar-${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from("avatars").upload(path, file, { cacheControl: "3600", upsert: false, contentType: file.type });
    if (upErr) { toast.error(upErr.message); return; }
    const { data: pub } = supabase.storage.from("avatars").getPublicUrl(path);
    const url = pub.publicUrl;
    const { error: dbErr } = await supabase.from("profiles").upsert({ user_id: user.id, avatar_url: url }, { onConflict: "user_id" });
    if (dbErr) { toast.error(dbErr.message); return; }
    setProfile((p) => ({ ...p, avatar_url: url }));
    toast.success("Fotografie actualizată!");
  };

  const removeAvatar = async () => {
    const { error } = await supabase.from("profiles").update({ avatar_url: null }).eq("user_id", user.id);
    if (error) { toast.error(error.message); return; }
    setProfile((p) => ({ ...p, avatar_url: null }));
    toast.success("Fotografie eliminată.");
  };

  return (
    <section className="container-page py-8 sm:py-12 max-w-3xl">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Contul meu</h1>
          <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex gap-2">
          <Link to="/mesaje" className="btn-outline h-10 text-sm gap-2 inline-flex"><MessageCircle className="h-4 w-4" /> Mesaje</Link>
          <button onClick={() => signOut().then(() => (window.location.href = "/"))} className="btn-outline h-10 text-sm gap-2 inline-flex"><LogOut className="h-4 w-4" /> Ieșire</button>
        </div>
      </div>

      {/* Profile */}
      <form onSubmit={saveProfile} className="card-soft mt-6 p-5 sm:p-6 space-y-4">
        <h2 className="text-lg font-semibold inline-flex items-center gap-2"><User className="h-4 w-4 text-primary" /> Date personale</h2>
        <Field label="Nume complet" icon={<User className="h-4 w-4" />}>
          <input value={profile.display_name ?? ""} onChange={(e) => setProfile({ ...profile, display_name: e.target.value })} className="field-input" required />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Telefon" icon={<Phone className="h-4 w-4" />}>
            <input value={profile.phone ?? ""} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} placeholder="07xx xxx xxx" className="field-input" />
          </Field>
          <Field label="Oraș" icon={<MapPin className="h-4 w-4" />}>
            <input value={profile.city ?? ""} onChange={(e) => setProfile({ ...profile, city: e.target.value })} placeholder="București, Cluj..." className="field-input" />
          </Field>
        </div>
        <Field label="Despre tine">
          <textarea value={profile.bio ?? ""} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} rows={4} maxLength={500} placeholder="Câteva cuvinte despre tine — util mai ales dacă ești profesor." className="field-input min-h-[120px] py-3" />
        </Field>
        <button type="submit" disabled={saving} className="btn-primary h-11 inline-flex items-center gap-2 disabled:opacity-60">
          <Save className="h-4 w-4" /> {saving ? "Se salvează..." : "Salvează profilul"}
        </button>
      </form>

      {/* Email */}
      <form onSubmit={saveEmail} className="card-soft mt-6 p-5 sm:p-6 space-y-4">
        <h2 className="text-lg font-semibold inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> Adresă de email</h2>
        <Field label="Email">
          <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="field-input" required />
        </Field>
        <button type="submit" disabled={savingEmail} className="btn-outline h-11 disabled:opacity-60">
          {savingEmail ? "Se trimite..." : "Schimbă email"}
        </button>
      </form>

      {/* Password — only if not Google */}
      {!isGoogleUser && (
        <form onSubmit={savePassword} className="card-soft mt-6 p-5 sm:p-6 space-y-4">
          <h2 className="text-lg font-semibold inline-flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Parolă</h2>
          <Field label="Parolă nouă">
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Minim 6 caractere" className="field-input" />
          </Field>
          <button type="submit" disabled={savingPassword} className="btn-outline h-11 disabled:opacity-60">
            {savingPassword ? "Se schimbă..." : "Schimbă parola"}
          </button>
        </form>
      )}
      {isGoogleUser && (
        <p className="mt-6 text-sm text-muted-foreground">
          Te-ai conectat cu Google — parola se gestionează din contul tău Google.
        </p>
      )}
    </section>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium inline-flex items-center gap-1.5 text-foreground/90">{icon}{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
