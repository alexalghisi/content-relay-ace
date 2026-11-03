import { useEffect, useRef, useState } from "react";
import { Camera, RotateCcw, Trash2, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { AVATAR_ACCEPT, prepareAvatarFile, avatarStoragePath } from "@/lib/avatar-image";
import { uploadProfilePhoto } from "@/lib/profile-photo-upload";

type Photo = { id: string; storage_path: string };
export function ProfilePhotoGallery({ userId, primary, onPrimary }: { userId: string; primary: string | null; onPrimary: (url: string | null) => void }) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState<File[]>([]);
  const controller = useRef<AbortController | null>(null);
  const paths = useRef(new WeakMap<File, string>());
  const url = (path: string) => supabase.storage.from("avatars").getPublicUrl(path).data.publicUrl;
  useEffect(() => {
    let active = true;
    void supabase.from("profile_photos").select("id,storage_path").eq("user_id", userId).order("created_at").then(({ data, error: e }) => {
      if (!active) return;
      if (e) setError("Nu am putut încărca fotografiile. Reîncearcă după reîncărcarea paginii.");
      else setPhotos(data ?? []);
    });
    return () => { active = false; controller.current?.abort(); };
  }, [userId]);
  const choose = async (value: string | null) => {
    const { error: e } = await supabase.from("profiles").upsert({ user_id: userId, avatar_url: value }, { onConflict: "user_id" });
    if (e) throw new Error("Nu am putut salva fotografia principală. Reîncearcă.");
    onPrimary(value);
  };
  const upload = async (files: File[]) => {
    if (busy) return;
    setBusy(true); setError(""); setRetry([]);
    const ac = new AbortController(); controller.current = ac;
    let remaining = files;
    try {
      for (let i = 0; i < files.length; i++) {
        remaining = files.slice(i);
        const file = files[i];
        if (!file) continue;
        setProgress(0);
        const blob = await prepareAvatarFile(file);
        let path = paths.current.get(file);
        if (!path) { path = avatarStoragePath(userId, "avatar", blob.type, Date.now()) .replace(/(\.\w+)$/, `-${crypto.randomUUID()}$1`); paths.current.set(file, path); }
        await uploadProfilePhoto(blob, path, setProgress, ac.signal);
        if (ac.signal.aborted) throw new DOMException("Anulat", "AbortError");
        const { data, error: e } = await supabase.from("profile_photos").insert({ user_id: userId, storage_path: path }).select("id,storage_path").single();
        if (e || !data) {
          const cleanup = await supabase.storage.from("avatars").remove([path]);
          if (cleanup.error) throw new Error("Transferul a reușit, dar salvarea și curățarea au eșuat. Reîncarcă pagina înainte de reîncercare.");
          paths.current.delete(file);
          throw new Error("Fotografia nu a putut fi salvată. Poți reîncerca.");
        }
        setPhotos((p) => [...p, data]);
        remaining = files.slice(i + 1);
        if (!primary && i === 0) await choose(url(path));
      }
    } catch (e) {
      setRetry(remaining);
      setError(e instanceof Error ? e.message : "Încărcarea a eșuat.");
    } finally { setBusy(false); controller.current = null; }
  };
  const remove = async (photo: Photo) => {
    setError("");
    try {
      if (primary === url(photo.storage_path)) await choose(null);
      const { error: e } = await supabase.storage.from("avatars").remove([photo.storage_path]);
      if (e) throw new Error("Nu am putut șterge fotografia. Reîncearcă.");
      const { error: db } = await supabase.from("profile_photos").delete().eq("id", photo.id).eq("user_id", userId);
      if (db) throw new Error("Nu am putut actualiza lista. Reîncearcă ștergerea.");
      setPhotos((p) => p.filter((v) => v.id !== photo.id));
    } catch (e) { setError(e instanceof Error ? e.message : "Ștergerea a eșuat."); }
  };
  return <section className="mt-6 border-b border-border pb-6">
    <h2 className="text-lg font-semibold">Fotografii de profil</h2>
    <div className="mt-4 flex flex-wrap gap-4">
      {primary && !photos.some((p) => url(p.storage_path) === primary) && <img src={primary} alt="Fotografia principală" className="h-24 w-24 rounded-lg object-cover" />}
      {photos.map((photo) => <div key={photo.id} className="relative">
        <img src={url(photo.storage_path)} alt="Fotografie de profil" className="h-24 w-24 rounded-lg object-cover" />
        <div className="mt-1 flex justify-center gap-1">
          <Button size="icon" variant="outline" title="Alege fotografia principală" aria-label="Alege fotografia principală" disabled={busy || primary === url(photo.storage_path)} onClick={() => void choose(url(photo.storage_path)).catch((e) => setError(e.message))}><Check className="h-4 w-4" /></Button>
          <Button size="icon" variant="outline" title="Șterge fotografia" aria-label="Șterge fotografia" disabled={busy} onClick={() => void remove(photo)}><Trash2 className="h-4 w-4" /></Button>
        </div>
      </div>)}
    </div>
    <label className="btn-primary mt-4 inline-flex h-10 cursor-pointer gap-2"><Camera className="h-4 w-4" /> Adaugă fotografii
      <input data-testid="avatar-input" type="file" multiple accept={AVATAR_ACCEPT} className="hidden" disabled={busy} onChange={(e) => { const files = Array.from(e.target.files ?? []); e.target.value = ""; void upload(files); }} />
    </label>
    {busy && <div className="mt-3 flex items-center gap-3"><progress aria-label="Progres încărcare" max={100} value={progress} className="w-48" /><span>{progress}%</span><Button size="icon" variant="outline" title="Anulează transferul" aria-label="Anulează transferul" onClick={() => controller.current?.abort()}><X className="h-4 w-4" /></Button></div>}
    {error && <p role="alert" className="mt-3 text-sm text-destructive">{error}</p>}
    {!busy && retry.length > 0 && <Button variant="outline" className="mt-3" onClick={() => void upload(retry)}><RotateCcw className="mr-2 h-4 w-4" /> Reîncearcă</Button>}
  </section>;
}