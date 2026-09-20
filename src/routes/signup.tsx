import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Înscriere gratuită — MeditatiiDirect.ro" },
      { name: "description", content: "Creează un cont gratuit pe MeditatiiDirect.ro cu email sau Google și contactează profesori verificați în câteva secunde." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: SignupPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nume prea scurt").max(100),
  email: z.string().trim().email("Email invalid").max(255),
  password: z.string().min(6, "Parola minim 6 caractere").max(72),
});

function authErrorRo(message: string) {
  const m = message.toLowerCase();
  if (m.includes("email not confirmed")) return "Contul nu este confirmat încă. Deschide emailul primit de la noi și apasă linkul de confirmare.";
  if (m.includes("invalid login credentials")) return "Email sau parolă greșite.";
  if (m.includes("user already registered") || m.includes("already been registered")) return "Există deja un cont cu acest email. Autentifică-te.";
  if (m.includes("password")) return "Parola nu este acceptată. Folosește minim 6 caractere.";
  if (m.includes("rate limit") || m.includes("too many")) return "Prea multe încercări. Mai încearcă peste câteva minute.";
  if (m.includes("token") || m.includes("expired")) return "Linkul de confirmare a expirat sau a fost deja folosit. Trimite-ți unul nou.";
  return "A apărut o eroare. Mai încearcă o dată.";
}

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, password });
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: { emailRedirectTo: `${window.location.origin}/`, data: { display_name: parsed.data.name } },
    });
    setLoading(false);
    if (error) { toast.error(authErrorRo(error.message)); return; }
    if (data.session) {
      toast.success("Cont creat!");
      navigate({ to: "/" });
      return;
    }
    setPending(true);
  };

  const onResend = async () => {
    setLoading(true);
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/` },
    });
    setLoading(false);
    if (error) { toast.error(authErrorRo(error.message)); return; }
    toast.success("Ți-am trimis un email nou de confirmare.");
  };

  const onGoogle = async () => {
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) { toast.error("Eroare la conectare Google."); setLoading(false); return; }
    if (result.redirected) return;
    navigate({ to: "/" });
  };

  if (pending) {
    return (
      <section className="container-page py-12 sm:py-16 max-w-md">
        <h1 className="text-3xl font-bold">Verifică-ți emailul</h1>
        <p className="mt-3 text-muted-foreground">
          Ți-am trimis un email de confirmare la <strong className="text-foreground">{email}</strong>. Apasă linkul din
          email ca să-ți activezi contul. Dacă nu îl găsești, verifică și folderul Spam sau Promoții.
        </p>
        <button onClick={onResend} disabled={loading} className="mt-6 w-full h-12 rounded-full border border-border bg-background hover:bg-muted text-sm font-medium disabled:opacity-60">
          {loading ? "Se trimite..." : "Trimite din nou emailul"}
        </button>
        <p className="mt-6 text-sm text-muted-foreground">
          Ai confirmat deja? <Link to="/login" className="text-primary font-medium hover:underline">Autentifică-te</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="container-page py-12 sm:py-16 max-w-md">
      <h1 className="text-3xl font-bold">Înscriere gratuită</h1>
      <p className="mt-2 text-muted-foreground">Creează contul tău și începe să cauți profesori.</p>

      <button onClick={onGoogle} disabled={loading} className="mt-8 w-full h-12 rounded-full border border-border bg-background hover:bg-muted inline-flex items-center justify-center gap-2 text-sm font-medium disabled:opacity-60">
        <GoogleIcon /> Înscriere cu Google
      </button>
      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
        <div className="flex-1 h-px bg-border" /> sau cu email <div className="flex-1 h-px bg-border" />
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Nume</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
        </div>
        <div>
          <label className="text-sm font-medium">Parolă</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
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

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 0 1-2.2 3.32v2.77h3.56c2.08-1.92 3.28-4.74 3.28-8.1z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.66-2.83z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.1 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"/>
    </svg>
  );
}
