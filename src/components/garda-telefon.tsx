import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { getSupabase, useAuth } from "@/lib/auth";
import { trebuieVerificatTelefon } from "@/lib/garda-telefon";

/** Trimite conturile fără telefon verificat prin SMS la ultimul pas al înregistrării. */
export function GardaTelefon() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [verificat, setVerificat] = useState<boolean | null>(null);

  useEffect(() => {
    setVerificat(null);
    if (!user?.email_confirmed_at) return;
    let activ = true;
    getSupabase()
      .then((sb) =>
        sb
          .from("profesor_ai_utilizatori")
          .select("phone_verified_at")
          .eq("user_id", user.id)
          .maybeSingle(),
      )
      .then(({ data, error }) => {
        if (activ && !error) setVerificat(!!data?.phone_verified_at);
      })
      .catch(() => {});
    return () => {
      activ = false;
    };
  }, [user?.id, user?.email_confirmed_at, pathname]);

  useEffect(() => {
    if (trebuieVerificatTelefon(pathname, user, verificat)) navigate({ to: "/confirmare-cont" });
  }, [pathname, user, verificat, navigate]);

  return null;
}
