import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GraduationCap, MapPin, Video, Wallet } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

interface StudentRequest {
  id: string;
  created_at: string;
  subject: string;
  level: string | null;
  city: string | null;
  is_online: boolean;
  budget_per_hour: number | null;
  details: string | null;
  contact_name: string;
  contact_email: string;
  contact_phone: string | null;
}

export const Route = createFileRoute("/cereri")({
  head: () => ({
    meta: [
      { title: "Cereri de meditații de la elevi | Meditații Direct" },
      { name: "description", content: "Cererile recente de meditații postate de elevi și părinți. Vizibil doar profesorilor autentificați." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: RequestsPage,
});

function RequestsPage() {
  const { user, loading } = useAuth();
  const [requests, setRequests] = useState<StudentRequest[] | null>(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("student_requests")
      .select("id,created_at,subject,level,city,is_online,budget_per_hour,details,contact_name,contact_email,contact_phone")
      .eq("status", "open")
      .order("created_at", { ascending: false })
      .limit(100)
      .then(({ data }) => setRequests((data as StudentRequest[] | null) ?? []));
  }, [user]);

  if (loading) {
    return <section className="container-page py-16 text-center text-muted-foreground">Se încarcă…</section>;
  }

  if (!user) {
    return (
      <section className="container-page py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <GraduationCap className="mx-auto h-8 w-8 text-primary" />
          <h1 className="mt-4 text-2xl font-bold">Cererile elevilor sunt vizibile doar profesorilor</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Autentifică-te cu contul de profesor pentru a vedea cererile recente și a contacta elevii direct.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Link to="/login" className="btn-primary h-11 px-5">Autentificare</Link>
            <Link to="/pentru-profesori" className="btn-outline h-11 px-5">Devino profesor</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-10">
      <h1 className="text-3xl font-bold">Cereri de la elevi</h1>
      <p className="mt-2 text-muted-foreground">Elevi și părinți care caută profesor chiar acum. Contactează-i direct — fără comision.</p>

      {requests === null ? (
        <p className="mt-8 text-muted-foreground">Se încarcă cererile…</p>
      ) : requests.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border p-10 text-center">
          <h2 className="font-bold">Momentan nu există cereri deschise</h2>
          <p className="mt-1 text-sm text-muted-foreground">Cererile noi apar aici imediat ce elevii le publică. Revino mai târziu.</p>
        </div>
      ) : (
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {requests.map((r) => (
            <article key={r.id} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-bold">{r.subject}</h2>
                  <p className="text-sm text-muted-foreground">
                    {r.level ?? "Nivel nespecificat"} · {new Date(r.created_at).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
                <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">Deschisă</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                {r.is_online ? (
                  <span className="inline-flex items-center gap-1 text-primary"><Video className="h-3.5 w-3.5" /> Online</span>
                ) : r.city ? (
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {r.city}</span>
                ) : null}
                {r.budget_per_hour && <span className="inline-flex items-center gap-1"><Wallet className="h-3.5 w-3.5" /> Buget ~{r.budget_per_hour} lei/oră</span>}
              </div>
              {r.details && <p className="mt-3 text-sm leading-6 text-muted-foreground">{r.details}</p>}
              <div className="mt-4 border-t border-border pt-4 text-sm">
                <p className="font-semibold">{r.contact_name}</p>
                <p className="mt-1 text-muted-foreground">
                  <a href={`mailto:${r.contact_email}?subject=${encodeURIComponent(`Propunere meditații ${r.subject} — MeditatiiDirect`)}`} className="text-primary hover:underline">{r.contact_email}</a>
                  {r.contact_phone && <> · <a href={`tel:${r.contact_phone}`} className="text-primary hover:underline">{r.contact_phone}</a></>}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
