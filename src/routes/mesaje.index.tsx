import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/mesaje/")({
  head: () => ({ meta: [
    { title: "Mesaje — MeditatiiDirect.ro" },
    { name: "robots", content: "noindex, nofollow" },
    ]}),
  component: MessagesListPage,
});

interface Conv {
  id: string; ad_id: string | null; student_id: string; teacher_id: string;
  last_message: string | null; last_message_at: string;
  student_unread: number; teacher_unread: number;
  ads?: { title: string; seo_slug: string | null } | null;
}

function MessagesListPage() {
  const { user, loading } = useAuth();
  const [convs, setConvs] = useState<Conv[]>([]);
  const [load, setLoad] = useState(true);
  const [profiles, setProfiles] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!loading && !user) { window.location.href = "/login"; return; }
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from("conversations")
        .select("id,ad_id,student_id,teacher_id,last_message,last_message_at,student_unread,teacher_unread,ads(title,seo_slug)")
        .or(`student_id.eq.${user.id},teacher_id.eq.${user.id}`)
        .order("last_message_at", { ascending: false });
      const list = (data ?? []) as unknown as Conv[];
      setConvs(list);
      const otherIds = Array.from(new Set(list.map(c => c.student_id === user.id ? c.teacher_id : c.student_id)));
      if (otherIds.length) {
        const { data: profs } = await supabase.from("profiles").select("user_id,display_name").in("user_id", otherIds);
        const map: Record<string, string> = {};
        (profs ?? []).forEach((p: { user_id: string; display_name: string | null }) => { map[p.user_id] = p.display_name ?? "Utilizator"; });
        setProfiles(map);
      }
      setLoad(false);
    };
    load();
    const ch = supabase.channel("conv-list-" + user.id)
      .on("postgres_changes", { event: "*", schema: "public", table: "conversations" }, () => load())
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [user, loading]);

  if (loading || load) return <div className="container-page py-16 text-muted-foreground">Se încarcă mesajele...</div>;

  return (
    <section className="container-page py-8 sm:py-12 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold">Mesaje</h1>
      <p className="mt-1 text-sm text-muted-foreground">Conversațiile tale cu profesori și elevi.</p>

      {convs.length === 0 ? (
        <div className="card-soft mt-8 p-10 text-center">
          <MessageCircle className="mx-auto h-10 w-10 text-muted-foreground" />
          <p className="mt-3 text-sm text-muted-foreground">Nu ai conversații încă.</p>
          <Link to="/meditatii" className="btn-primary mt-4 h-10">Caută profesori</Link>
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
          {convs.map((c) => {
            const otherId = c.student_id === user!.id ? c.teacher_id : c.student_id;
            const unread = c.student_id === user!.id ? c.student_unread : c.teacher_unread;
            const name = profiles[otherId] ?? "Utilizator";
            return (
              <li key={c.id}>
                <Link to="/mesaje/$id" params={{ id: c.id }} className="flex items-start gap-3 p-4 hover:bg-muted/40 transition">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary font-semibold shrink-0">
                    {name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium truncate">{name}</p>
                      <span className="text-xs text-muted-foreground shrink-0">{new Date(c.last_message_at).toLocaleDateString("ro-RO")}</span>
                    </div>
                    {c.ads?.title && <p className="text-xs text-muted-foreground truncate">↳ {c.ads.title}</p>}
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{c.last_message ?? "Conversație nouă"}</p>
                  </div>
                  {unread > 0 && (
                    <span className="ml-2 grid h-6 min-w-6 px-1.5 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">{unread}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
