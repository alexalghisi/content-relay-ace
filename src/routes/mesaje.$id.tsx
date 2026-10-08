import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/auth";
import { markConversationRead } from "@/lib/security.functions";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Send, Video } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/mesaje/$id")({
  head: () => ({ meta: [
    { title: "Conversație — MeditatiiDirect.ro" },
    { name: "robots", content: "noindex, nofollow" },
    ]}),
  component: ChatThreadPage,
});

interface Msg { id: string; sender_id: string; body: string; created_at: string; }
interface Conv { id: string; student_id: string; teacher_id: string; ad_id: string | null; ads?: { title: string; seo_slug: string | null } | null; }

function ChatThreadPage() {
  const { id } = Route.useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const markRead = useServerFn(markConversationRead);
  const [conv, setConv] = useState<Conv | null>(null);
  const [otherName, setOtherName] = useState<string>("Utilizator");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && !user) { navigate({ to: "/login" }); return; }
    if (!user) return;
    (async () => {
      const { data: c } = await supabase
        .from("conversations").select("id,student_id,teacher_id,ad_id,ads(title,seo_slug)")
        .eq("id", id).maybeSingle();
      if (!c) { toast.error("Conversație inexistentă"); navigate({ to: "/mesaje" }); return; }
      setConv(c as unknown as Conv);
      const otherId = c.student_id === user.id ? c.teacher_id : c.student_id;
      const { data: p } = await supabase.from("profiles").select("display_name").eq("user_id", otherId).maybeSingle();
      setOtherName(p?.display_name ?? "Utilizator");

      const { data: ms } = await supabase.from("messages").select("id,sender_id,body,created_at").eq("conversation_id", id).order("created_at");
      setMsgs((ms ?? []) as Msg[]);

      await markRead({ data: { conversationId: id } }).catch(() => undefined);
    })();

    const ch = supabase.channel("chat-" + id)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${id}` },
        (payload) => {
          setMsgs((prev) => [...prev, payload.new as Msg]);
          if (user) {
            const n = payload.new as Msg;
            if (n.sender_id !== user.id) {
              markRead({ data: { conversationId: id } }).catch(() => undefined);
            }
          }
        })
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [id, user, loading, navigate, markRead]);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [msgs]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = text.trim();
    if (!body || !user || !conv) return;
    if (body.length > 4000) { toast.error("Mesaj prea lung"); return; }
    setSending(true);
    const { error } = await supabase.from("messages").insert({ conversation_id: conv.id, sender_id: user.id, body });
    setSending(false);
    if (error) toast.error(error.message); else setText("");
  };

  if (loading || !conv) return <div className="container-page py-16 text-muted-foreground">Se încarcă...</div>;

  return (
    <section className="container-page py-4 sm:py-6 max-w-3xl">
      <div className="flex items-center gap-3 pb-3 border-b border-border">
        <Link to="/mesaje" className="rounded-full p-2 hover:bg-muted"><ArrowLeft className="h-5 w-5" /></Link>
        <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary font-semibold">{otherName.charAt(0).toUpperCase()}</div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold truncate">{otherName}</p>
          {conv.ads?.title && conv.ads.seo_slug && (
            <Link to="/anunt/$slug" params={{ slug: conv.ads.seo_slug }} className="text-xs text-muted-foreground hover:text-primary truncate block">↳ {conv.ads.title}</Link>
          )}
        </div>
        <a
          href={`https://meet.jit.si/MeditatiiDirect-${conv.id}`}
          target="_blank" rel="noopener noreferrer"
          className="btn-primary h-10 px-3 text-sm"
        >
          <Video className="h-4 w-4" /> Apel video
        </a>
      </div>
      <p className="mt-2 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
        🔒 Pentru siguranța ta, telefoanele și emailurile se ascund automat în chat. Faceți prima ședință prin apelul video de pe platformă.
      </p>


      <div ref={scrollRef} className="h-[60vh] overflow-y-auto py-4 space-y-2">
        {msgs.length === 0 && <p className="text-center text-sm text-muted-foreground py-12">Spune salut! Începeți conversația.</p>}
        {msgs.map((m) => {
          const mine = m.sender_id === user!.id;
          return (
            <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow-sm ${mine ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted text-foreground rounded-bl-md"}`}>
                <p className="whitespace-pre-wrap break-words">{m.body}</p>
                <p className={`mt-1 text-[10px] ${mine ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {new Date(m.created_at).toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={send} className="sticky bottom-0 bg-background border-t border-border pt-3 flex items-end gap-2">
        <textarea
          value={text} onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(e as unknown as React.FormEvent); } }}
          rows={1} placeholder="Scrie un mesaj..." maxLength={4000}
          className="flex-1 resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring max-h-32"
        />
        <button type="submit" disabled={sending || !text.trim()} className="btn-primary h-11 w-11 p-0 shrink-0 disabled:opacity-50">
          <Send className="h-5 w-5" />
        </button>
      </form>
    </section>
  );
}
