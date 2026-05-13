import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Autentificare — MeditatiiDirect.ro" }] }),
  component: LoginPage,
});

const schema = z.object({
  email: z.string().trim().email("Email invalid").max(255),
  password: z.string().min(6, "Parola minim 6 caractere").max(72),
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword(parsed.data);
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Bine ai revenit!");
    navigate({ to: "/" });
  };

  return (
    <section className="container-page py-16 max-w-md">
      <h1 className="text-3xl font-bold">Bine ai revenit</h1>
      <p className="mt-2 text-muted-foreground">Intră în contul tău MeditatiiDirect.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
        </div>
        <div>
          <label className="text-sm font-medium">Parolă</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full h-12 disabled:opacity-60">
          {loading ? "Se conectează..." : "Autentificare"}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        Nu ai cont? <Link to="/signup" className="text-primary font-medium hover:underline">Creează cont gratuit</Link>
      </p>
    </section>
  );
}
