import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Înscriere gratuită — MeditatiiDirect.ro" }] }),
  component: SignupPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nume prea scurt").max(100),
  email: z.string().trim().email("Email invalid").max(255),
  password: z.string().min(6, "Parola minim 6 caractere").max(72),
});

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { display_name: parsed.data.name },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Cont creat! Verifică email-ul pentru confirmare.");
    navigate({ to: "/" });
  };

  return (
    <section className="container-page py-16 max-w-md">
      <h1 className="text-3xl font-bold">Înscriere gratuită</h1>
      <p className="mt-2 text-muted-foreground">Creează contul tău și începe să cauți profesori.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium">Nume</label>
          <input value={name} onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
        </div>
        <div>
          <label className="text-sm font-medium">Parolă</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
          <p className="mt-1 text-xs text-muted-foreground">Minim 6 caractere.</p>
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full h-12 disabled:opacity-60">
          {loading ? "Se creează..." : "Creează cont gratuit"}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        Ai deja cont? <Link to="/login" className="text-primary font-medium hover:underline">Autentifică-te</Link>
      </p>
    </section>
  );
}
