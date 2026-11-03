import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { getMyAiReview, saveMyAiReview } from "@/lib/profesor-ai-reviews.functions";
import { RatingForm } from "@/components/reviews/rating-form";
import { Button } from "@/components/ui/button";
export function AiReviews() {
  const { user } = useAuth();
  const [data, setData] = useState<Awaited<ReturnType<typeof getMyAiReview>> | null>(null);
  const [error, setError] = useState("");
  const load = () => { setError(""); void getMyAiReview().then(setData).catch(() => setError("Nu am putut încărca evaluarea.")); };
  useEffect(() => { setData(null); if (user) load(); }, [user?.id]);
  return <section className="mt-8 border-t border-border pt-6">
    <h2 className="text-xl font-bold">Evaluarea ta pentru Profesor AI</h2>
    {!user ? <Link to="/login" className="mt-3 inline-block text-primary underline">Autentifică-te pentru a lăsa o evaluare</Link> : error ? <><p role="alert" className="mt-3 text-destructive">{error}</p><Button variant="outline" onClick={load}>Reîncearcă</Button></> : !data ? <p className="mt-3 text-muted-foreground">Se încarcă…</p> : !data.eligible ? <p className="mt-3 text-sm text-muted-foreground">Evaluarea devine disponibilă după un răspuns confirmat al Profesorului AI. Sesiunile vocale directe nu pot fi confirmate încă automat.</p> : <RatingForm key={user.id} initial={data.review?.rating} initialComment={data.review?.comment} save={async (rating, comment) => { await saveMyAiReview({ data: { rating, comment } }); }} />}
  </section>;
}