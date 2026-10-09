import { useEffect, useState } from "react";
import { Star, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

interface Row {
  id: string;
  message: string;
  price_per_hour: number | null;
  created_at: string;
  status: string;
  rating: number | null;
  rating_comment: string | null;
  student_requests: { subject: string; level: string | null; city: string | null; is_online: boolean; status: string } | null;
}

const STATUS: Record<string, { label: string; cls: string }> = {
  accepted: { label: "Acceptată", cls: "bg-accent text-success" },
  declined: { label: "Elevul a ales alt profesor", cls: "bg-muted text-muted-foreground" },
};

/** Propunerile trimise de profesorul autentificat, cu statusul și nota (stele) primită de la elev. */
export function MyProposals({ refreshKey = 0, compact = false }: { refreshKey?: number; compact?: boolean }) {
  const { user } = useAuth();
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("teacher_proposals")
      .select("id,message,price_per_hour,created_at,status,rating,rating_comment,student_requests(subject,level,city,is_online,status)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(compact ? 5 : 50)
      .then(({ data }) => setRows((data as unknown as Row[] | null) ?? []));
  }, [user, refreshKey, compact]);

  if (!user || rows === null) return null;
  const rated = rows.filter((r) => r.rating);
  const avg = rated.length ? (rated.reduce((s, r) => s + (r.rating ?? 0), 0) / rated.length).toFixed(1) : null;

  return (
    <div className="card-soft mt-6 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="inline-flex items-center gap-2 text-lg font-semibold"><Send className="h-4 w-4 text-primary" /> Propunerile mele</h2>
        <p className="text-sm text-muted-foreground">
          {rows.length} trimise · {rows.filter((r) => r.status === "accepted").length} acceptate
          {avg && <> · nota medie <strong className="text-foreground">{avg}★</strong> ({rated.length})</>}
        </p>
      </div>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">Nu ai trimis încă nicio propunere. Alege o cerere de mai jos și trimite prima ta propunere.</p>
      ) : (
        <ul className="mt-4 divide-y divide-border">
          {rows.map((r) => {
            const st = STATUS[r.status] ?? (r.student_requests?.status === "closed"
              ? { label: "Cerere închisă", cls: "bg-muted text-muted-foreground" }
              : { label: "În așteptare", cls: "bg-primary-soft text-primary" });
            return (
              <li key={r.id} className="py-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">
                    {r.student_requests?.subject ?? "Cerere ștearsă"}
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      {r.student_requests?.level ?? ""} · {new Date(r.created_at).toLocaleDateString("ro-RO")}
                      {r.price_per_hour ? ` · ${r.price_per_hour} lei/oră` : ""}
                    </span>
                  </p>
                  <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold ${st.cls}`}>{st.label}</span>
                </div>
                {!compact && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{r.message}</p>}
                {r.rating ? (
                  <p className="mt-1 inline-flex items-center gap-1 text-sm">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < (r.rating ?? 0) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                    ))}
                    {r.rating_comment && <span className="ml-2 text-muted-foreground">„{r.rating_comment}”</span>}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
