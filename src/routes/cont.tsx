import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/cont")({
  head: () => ({ meta: [{ title: "Contul meu — MeditatiiDirect.ro" }] }),
  component: AccountPage,
});

interface Profile { display_name: string | null; phone: string | null; city: string | null; bio: string | null; }

function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/login";
      return;
    }
    if (user) {
      supabase.from("profiles").select("display_name,phone,city,bio").eq("user_id", user.id).maybeSingle().then(({ data }) => setProfile(data as Profile | null));
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div className="container-page py-16 text-muted-foreground">Se încarcă...</div>;
  }

  return (
    <section className="container-page py-16 max-w-2xl">
      <h1 className="text-3xl font-bold">Contul meu</h1>
      <p className="mt-2 text-muted-foreground">{user.email}</p>
      <div className="mt-8 card-soft p-6">
        <h2 className="text-lg font-semibold">Profil</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between"><dt className="text-muted-foreground">Nume</dt><dd>{profile?.display_name ?? "—"}</dd></div>
          <div className="flex justify-between"><dt className="text-muted-foreground">Telefon</dt><dd>{profile?.phone ?? "—"}</dd></div>
          <div className="flex justify-between"><dt className="text-muted-foreground">Oraș</dt><dd>{profile?.city ?? "—"}</dd></div>
        </dl>
        <p className="mt-6 text-sm text-muted-foreground">
          Editarea profilului și onboardingul de profesor vor fi disponibile în iterația următoare.
        </p>
      </div>
      <div className="mt-6 flex gap-2">
        <Link to="/" className="btn-outline">Acasă</Link>
        <button onClick={() => signOut()} className="btn-outline">Ieșire</button>
      </div>
    </section>
  );
}
