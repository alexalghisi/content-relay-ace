import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";

type SupabaseClient = (typeof import("@/integrations/supabase/client"))["supabase"];
let clientPromise: Promise<SupabaseClient> | null = null;

/**
 * Clientul Supabase (~45 KB comprimat, cu auth/realtime/storage) se încarcă separat, după prima
 * afișare: paginile publice nu îl mai au în pachetul principal, iar sesiunea se restabilește imediat
 * după. Componentele de pagină care îl importă direct îl primesc din același modul.
 */
export function getSupabase(): Promise<SupabaseClient> {
  clientPromise ??= import("@/integrations/supabase/client").then((m) => m.supabase);
  return clientPromise;
}

interface AuthCtx {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const Ctx = createContext<AuthCtx>({ user: null, session: null, loading: true, signOut: async () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let activ = true;
    let dezabonare: (() => void) | undefined;
    getSupabase()
      .then((supabase) => {
        if (!activ) return;
        const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
          setSession(s);
          setLoading(false);
        });
        dezabonare = () => sub.subscription.unsubscribe();
        return supabase.auth.getSession().then(({ data }) => {
          if (!activ) return;
          setSession(data.session);
          setLoading(false);
        });
      })
      .catch(() => activ && setLoading(false));
    return () => {
      activ = false;
      dezabonare?.();
    };
  }, []);

  return (
    <Ctx.Provider
      value={{
        user: session?.user ?? null,
        session,
        loading,
        signOut: async () => {
          await (await getSupabase()).auth.signOut();
        },
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);
