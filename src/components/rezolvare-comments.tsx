import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Props { materie: string; an: number; sesiune: string }

interface Comentariu { id: string; autor: string; mesaj: string; created_at: string }

/** Întrebări de la elevi sub fiecare rezolvare. Apar public doar după moderare. */
export function RezolvareComments({ materie, an, sesiune }: Props) {
  const [items, setItems] = useState<Comentariu[]>([]);
  const [autor, setAutor] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    let active = true;
    supabase
      .from("rezolvare_comentarii")
      .select("id, autor, mesaj, created_at")
      .eq("rezolvare_materie", materie)
      .eq("rezolvare_an", an)
      .eq("rezolvare_sesiune", sesiune)
      .order("created_at", { ascending: true })
      .limit(100)
      .then(({ data }) => {
        if (active && data) setItems(data as Comentariu[]);
      });
    return () => { active = false; };
  }, [materie, an, sesiune]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const { error } = await supabase.from("rezolvare_comentarii").insert({
      rezolvare_materie: materie,
      rezolvare_an: an,
      rezolvare_sesiune: sesiune,
      autor: autor.trim(),
      mesaj: mesaj.trim(),
      is_approved: false,
    });
    if (error) { setState("error"); return; }
    setState("sent");
    setMesaj("");
  }

  return (
    <section className="mt-12">
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        <MessageCircle className="h-5 w-5 text-primary" aria-hidden /> Întrebări de la elevi
      </h2>

      {items.length > 0 ? (
        <ul className="mt-4 space-y-3">
          {items.map((c) => (
            <li key={c.id} className="card-soft p-4">
              <p className="text-sm font-medium">{c.autor}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.mesaj}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">Nicio întrebare încă. Pune tu prima — răspundem în pagină.</p>
      )}

      {state === "sent" ? (
        <p className="mt-4 rounded-xl border border-primary/30 bg-primary-soft/50 p-4 text-sm">
          Mulțumim! Întrebarea ta apare aici după verificare.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="card-soft mt-5 p-5">
          <div className="grid gap-3 sm:grid-cols-[220px_1fr]">
            <label className="text-sm">
              <span className="mb-1 block font-medium">Numele tău</span>
              <input required minLength={2} maxLength={60} className="field-input" value={autor} onChange={(e) => setAutor(e.target.value)} />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-medium">Întrebarea ta</span>
              <textarea required minLength={5} maxLength={2000} rows={3}
                className="field-input h-auto py-2" value={mesaj} onChange={(e) => setMesaj(e.target.value)} />
            </label>
          </div>
          <button type="submit" disabled={state === "sending"}
            className="mt-3 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60">
            {state === "sending" ? "Se trimite…" : "Trimite întrebarea"}
          </button>
          {state === "error" && <p className="mt-2 text-sm text-destructive">Nu am putut trimite întrebarea. Încearcă din nou.</p>}
        </form>
      )}
    </section>
  );
}
