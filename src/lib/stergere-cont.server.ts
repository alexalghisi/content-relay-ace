// Ștergerea completă a datelor unui cont (GDPR): folosită de „Șterge-mi contul” și de pagina de admin.
// Înainte, profilul public de profesor (teacher_profiles + oferte + disponibilitate) și fotografiile
// rămâneau online după ștergerea contului, pentru că aceste tabele nu au cheie străină spre auth.users.
import type { SupabaseClient } from "@supabase/supabase-js";

/** Tabelele cu user_id simplu (fără FK spre auth.users), golite explicit. Ordinea contează: profilul la final. */
export const TABELE_CONT = [
  "teacher_offers",
  "teacher_availability",
  "teacher_profiles",
  "profile_photos",
  "profesor_ai_reviews",
  "profesor_ai_review_eligibility",
  "profesor_ai_utilizatori",
  "profiles",
  "user_roles",
] as const;

/** Șterge toate fișierele din folderul contului (avatars/{uid}/…), pagină cu pagină. */
export async function stergeFisiereCont(admin: SupabaseClient, uid: string): Promise<void> {
  for (;;) {
    const { data, error } = await admin.storage.from("avatars").list(uid, { limit: 100 });
    if (error) throw new Error("Nu am putut verifica fotografiile contului.");
    if (!data?.length) return;
    const { error: rm } = await admin.storage.from("avatars").remove(data.map((o) => `${uid}/${o.name}`));
    if (rm) throw new Error("Nu am putut șterge fotografiile contului.");
  }
}

/**
 * Șterge definitiv contul `uid` cu tot ce ține de el: conversații și mesaje, fotografii, profilul public
 * de profesor (cu oferte și disponibilitate), datele Profesorului AI, profilul și contul de autentificare.
 * Un cont deja șters din auth nu e o eroare: curăță ce a rămas în urma lui.
 */
export async function stergeContComplet(admin: SupabaseClient, uid: string): Promise<void> {
  const { data: convs } = await admin
    .from("conversations")
    .select("id")
    .or(`student_id.eq.${uid},teacher_id.eq.${uid}`);
  const convIds = (convs ?? []).map((c: { id: string }) => c.id);
  if (convIds.length > 0) {
    await admin.from("messages").delete().in("conversation_id", convIds);
    await admin.from("conversations").delete().in("id", convIds);
  }

  await stergeFisiereCont(admin, uid);

  for (const tabel of TABELE_CONT) {
    const { error } = await admin.from(tabel).delete().eq("user_id", uid);
    if (error) throw new Error("Nu am putut șterge datele contului.");
  }

  const { error } = await admin.auth.admin.deleteUser(uid);
  if (error && !/not.?found/i.test(error.message)) {
    throw new Error("Nu am putut șterge contul. Scrie-ne la alexalghisi@gmail.com.");
  }
}
