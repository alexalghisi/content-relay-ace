// /admin/stergere-cont — cereri GDPR de ștergere: contul, profilul public de profesor și fotografiile.
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2, UserX } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { adminCurataConturiSterse, adminStergeCont } from "@/lib/admin-conturi.functions";

export const Route = createFileRoute("/admin/stergere-cont")({
  head: () => ({
    meta: [
      { title: "Ștergere cont — Administrare | Meditații Direct" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminStergereCont,
});

function AdminStergereCont() {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [identificator, setIdentificator] = useState("");
  const [confirm, setConfirm] = useState("");
  const [lucru, setLucru] = useState(false);

  useEffect(() => {
    if (!user) return;
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" }).then(({ data }) => setIsAdmin(Boolean(data)));
  }, [user]);

  if (loading || (user && isAdmin === null)) {
    return <section className="container-page py-16 text-center text-muted-foreground">Se încarcă…</section>;
  }
  if (!user || !isAdmin) {
    return (
      <section className="container-page py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-bold">Acces restricționat</h1>
          <p className="mt-2 text-sm text-muted-foreground">Pagina e disponibilă doar administratorului.</p>
          {!user && <Link to="/login" className="btn-primary mt-6 h-11 px-5">Autentificare</Link>}
        </div>
      </section>
    );
  }

  const sterge = async () => {
    setLucru(true);
    try {
      const r = await adminStergeCont({ data: { identificator, confirm } });
      if (r.ok) {
        toast.success("Contul și profilul public au fost șterse definitiv.");
        setIdentificator("");
        setConfirm("");
      } else toast.error(r.error);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Ștergerea a eșuat.");
    } finally {
      setLucru(false);
    }
  };

  const curata = async () => {
    setLucru(true);
    try {
      const r = await adminCurataConturiSterse();
      if (r.ok) toast.success(`Profile rămase de la conturi șterse, eliminate: ${r.sterse}.`);
      else toast.error(r.error);
    } finally {
      setLucru(false);
    }
  };

  return (
    <section className="container-page max-w-2xl py-10">
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        <UserX className="h-6 w-6 text-primary" aria-hidden="true" /> Ștergere cont (GDPR)
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Șterge definitiv contul, profilul public de profesor (cu ofertele și disponibilitatea), fotografiile,
        conversațiile și datele Profesorului AI. Nu se poate anula.
      </p>
      <div className="mt-6 space-y-3 rounded-2xl border border-border bg-card p-5">
        <label className="block text-sm font-medium" htmlFor="identificator">
          E-mailul, linkul profilului (/profesor/…) sau ID-ul contului
        </label>
        <input
          id="identificator"
          value={identificator}
          onChange={(e) => setIdentificator(e.target.value)}
          className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
          placeholder="nume@exemplu.ro sau https://meditatiidirect.ro/profesor/…"
        />
        <label className="block text-sm font-medium" htmlFor="confirm">
          Scrie STERGE ca să confirmi
        </label>
        <input
          id="confirm"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm"
        />
        <button
          type="button"
          onClick={sterge}
          disabled={lucru || confirm !== "STERGE" || !identificator.trim()}
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-destructive px-4 text-sm font-medium text-destructive-foreground disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" aria-hidden="true" /> Șterge definitiv
        </button>
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-card p-5">
        <h2 className="font-semibold">Profile rămase de la conturi deja șterse</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Până la 14 noiembrie 2026, ștergerea contului lăsa profilul de profesor public. Butonul le elimină pe toate.
        </p>
        <button
          type="button"
          onClick={curata}
          disabled={lucru}
          className="mt-3 inline-flex h-10 items-center rounded-lg border border-border px-4 text-sm font-medium hover:border-primary/40 disabled:opacity-50"
        >
          Curăță profilele orfane
        </button>
      </div>
    </section>
  );
}
