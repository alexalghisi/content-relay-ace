import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { CheckCheck, Inbox, Mail, MailOpen, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";

interface ContactMessage {
  id: string;
  sender_name: string;
  sender_email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

export const Route = createFileRoute("/admin/mesaje")({
  head: () => ({
    meta: [
      { title: "Mesaje primite — Administrare | Meditații Direct" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminInboxPage,
});

function AdminInboxPage() {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("contact_messages")
      .select("id,sender_name,sender_email,phone,subject,message,is_read,created_at")
      .order("created_at", { ascending: false })
      .limit(200);
    setMessages((data as ContactMessage[] | null) ?? []);
  }, []);

  useEffect(() => {
    if (!user) return;
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" }).then(({ data }) => {
      setIsAdmin(Boolean(data));
      if (data) load();
    });
  }, [user, load]);

  const markRead = async (m: ContactMessage, read: boolean) => {
    await supabase.from("contact_messages").update({ is_read: read }).eq("id", m.id);
    setMessages((prev) => (prev ?? []).map((x) => (x.id === m.id ? { ...x, is_read: read } : x)));
  };

  const remove = async (m: ContactMessage) => {
    if (!confirm("Ștergi definitiv acest mesaj?")) return;
    const { error } = await supabase.from("contact_messages").delete().eq("id", m.id);
    if (error) {
      toast.error("Nu s-a putut șterge mesajul.");
      return;
    }
    setMessages((prev) => (prev ?? []).filter((x) => x.id !== m.id));
    toast.success("Mesaj șters.");
  };

  const open = (m: ContactMessage) => {
    setOpenId((id) => (id === m.id ? null : m.id));
    if (!m.is_read) markRead(m, true);
  };

  if (loading || (user && isAdmin === null)) {
    return <section className="container-page py-16 text-center text-muted-foreground">Se încarcă…</section>;
  }

  if (!user) {
    return (
      <section className="container-page py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <Inbox className="mx-auto h-8 w-8 text-primary" />
          <h1 className="mt-4 text-2xl font-bold">Mesajele sunt vizibile doar administratorului</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Autentifică-te cu contul de administrator pentru a vedea mesajele primite prin formularul de contact.
          </p>
          <Link to="/login" className="btn-primary mt-6 h-11 px-5">Autentificare</Link>
        </div>
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <section className="container-page py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-bold">Acces restricționat</h1>
          <p className="mt-2 text-sm text-muted-foreground">Acest cont nu are drepturi de administrator.</p>
        </div>
      </section>
    );
  }

  const unread = (messages ?? []).filter((m) => !m.is_read).length;

  return (
    <section className="container-page py-10">
      <h1 className="text-3xl font-bold">Mesaje primite</h1>
      <p className="mt-2 text-muted-foreground">
        Mesajele trimise prin formularul de contact al site-ului. {unread > 0 ? `${unread} necitite.` : "Toate citite."}
      </p>

      {messages === null ? (
        <p className="mt-8 text-muted-foreground">Se încarcă mesajele…</p>
      ) : messages.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border p-10 text-center">
          <h2 className="font-bold">Niciun mesaj încă</h2>
          <p className="mt-1 text-sm text-muted-foreground">Mesajele trimise din pagina de contact apar aici imediat.</p>
        </div>
      ) : (
        <div className="mt-7 grid gap-3">
          {messages.map((m) => (
            <article key={m.id} className={`rounded-xl border bg-card ${m.is_read ? "border-border" : "border-primary"}`}>
              <button
                type="button"
                onClick={() => open(m)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left"
              >
                <div className="flex min-w-0 items-center gap-3">
                  {m.is_read ? (
                    <MailOpen className="h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                  )}
                  <div className="min-w-0">
                    <p className={`truncate text-sm ${m.is_read ? "" : "font-bold"}`}>
                      {m.sender_name} — {m.subject || "Fără subiect"}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{m.sender_email}</p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {new Date(m.created_at).toLocaleDateString("ro-RO", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                </span>
              </button>

              {openId === m.id && (
                <div className="border-t border-border p-4">
                  <p className="whitespace-pre-wrap text-sm leading-6">{m.message}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {m.sender_email}
                    {m.phone && <> · {m.phone}</>}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${m.sender_email}?subject=${encodeURIComponent(`Re: ${m.subject || "Mesajul tău"} — MeditatiiDirect`)}`}
                      className="btn-primary h-10 px-4 text-sm"
                    >
                      Răspunde pe e-mail
                    </a>
                    <button type="button" onClick={() => markRead(m, !m.is_read)} className="btn-outline h-10 px-4 text-sm">
                      <CheckCheck className="mr-2 h-4 w-4" /> {m.is_read ? "Marchează necitit" : "Marchează citit"}
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(m)}
                      className="btn-outline h-10 px-4 text-sm text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Șterge
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
