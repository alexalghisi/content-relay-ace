import { Link } from "@tanstack/react-router";
import { LockKeyhole } from "lucide-react";
import type { ReactNode } from "react";
import { useAuth } from "@/lib/auth";

/** Funcțiile AI cer cont (limită zilnică per cont). Conținutul SEO al paginii rămâne public. */
export function LoginGate({ children, ce }: { children: ReactNode; ce: string }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="card-soft h-64 animate-pulse" aria-busy="true" />;
  if (user) return <>{children}</>;
  return (
    <div className="card-soft p-6 sm:p-8 text-center">
      <LockKeyhole className="mx-auto h-8 w-8 text-primary" />
      <h2 className="mt-3 text-xl font-bold">Intră în cont ca să {ce}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        Contul e gratuit și durează un minut. Îl folosim doar ca să păstrăm limita zilnică de
        utilizare corectă pentru toți elevii.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <Link to="/signup" className="btn-primary h-11 px-6">
          Creează cont gratuit
        </Link>
        <Link to="/login" className="btn-outline h-11 px-6">
          Am deja cont
        </Link>
      </div>
    </div>
  );
}
