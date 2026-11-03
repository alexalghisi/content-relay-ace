import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
export function RatingForm({ initial = 0, initialComment = "", save }: { initial?: number; initialComment?: string; save: (rating: number, comment: string) => Promise<void> }) {
  const [rating, setRating] = useState(initial);
  const [comment, setComment] = useState(initialComment);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  return <form className="mt-3 space-y-3" onSubmit={async (e) => { e.preventDefault(); setBusy(true); setError(""); setSaved(false); try { await save(rating, comment); setSaved(true); } catch (e) { setError(e instanceof Error ? e.message : "Evaluarea nu s-a salvat."); } finally { setBusy(false); } }}>
    <div className="flex gap-1" role="group" aria-label="Evaluare de la 1 la 5 stele">{[1, 2, 3, 4, 5].map((n) => <Button key={n} type="button" size="icon" variant="ghost" aria-label={`${n} stele`} aria-pressed={rating === n} disabled={busy} onClick={() => { setRating(n); setSaved(false); }}><Star className={`h-5 w-5 ${n <= rating ? "fill-warning text-warning" : "text-muted-foreground"}`} /></Button>)}</div>
    <textarea aria-label="Recenzie opțională" value={comment} onChange={(e) => { setComment(e.target.value); setSaved(false); }} maxLength={500} rows={3} placeholder="Cum a decurs experiența? (opțional)" className="w-full rounded-lg border border-border bg-background p-3 text-sm" disabled={busy} />
    <Button type="submit" disabled={busy || !rating}>{busy ? "Se salvează…" : "Salvează evaluarea"}</Button>
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    {saved && <p role="status" className="text-sm text-success">Evaluarea a fost salvată. Mulțumim!</p>}
  </form>;
}