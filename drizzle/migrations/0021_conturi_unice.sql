-- Un singur cont per adresă de email (inclusiv variantele Gmail: puncte și +eticheta duc în aceeași căsuță)
-- și un singur cont per număr de telefon verificat (indexul unic profesor_ai_phone_verificat există din 0019).
-- Regula e oglindită în src/lib/inregistrare.ts (emailCanonic) — păstrează-le sincronizate.
CREATE OR REPLACE FUNCTION public.email_canonic(p_email text)
RETURNS text LANGUAGE plpgsql IMMUTABLE SET search_path = public AS $$
DECLARE
  e text := lower(trim(coalesce(p_email, '')));
  local text;
  domeniu text;
BEGIN
  IF position('@' IN e) = 0 THEN RETURN e; END IF;
  local := split_part(e, '@', 1);
  domeniu := split_part(e, '@', 2);
  IF domeniu IN ('gmail.com', 'googlemail.com') THEN
    local := replace(split_part(local, '+', 1), '.', '');
    domeniu := 'gmail.com';
  END IF;
  RETURN local || '@' || domeniu;
END $$;

-- Adevărat dacă alt cont folosește o variantă a acestui email (ex. a.b@gmail.com vs ab+x@gmail.com).
-- Adresa exactă e tratată separat de serverul de înregistrare (retrimite confirmarea contului existent).
CREATE OR REPLACE FUNCTION public.exista_email_canonic(p_email text)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, auth AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users u
    WHERE public.email_canonic(u.email) = public.email_canonic(p_email)
      AND lower(u.email) <> lower(trim(p_email))
  );
$$;
REVOKE ALL ON FUNCTION public.exista_email_canonic(text) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.exista_email_canonic(text) TO service_role;

-- Garanția din baza de date: niciun cont nou (email/parolă sau Google) cu o adresă deja folosită.
CREATE OR REPLACE FUNCTION public.blocheaza_email_duplicat()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, auth AS $$
DECLARE c text;
BEGIN
  IF NEW.email IS NULL OR NEW.email = '' THEN RETURN NEW; END IF;
  c := public.email_canonic(NEW.email);
  PERFORM pg_advisory_xact_lock(hashtext('email_canonic:' || c));
  IF EXISTS (SELECT 1 FROM auth.users u WHERE u.id <> NEW.id AND public.email_canonic(u.email) = c) THEN
    RAISE EXCEPTION 'email_duplicat' USING ERRCODE = 'unique_violation';
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS blocheaza_email_duplicat ON auth.users;
CREATE TRIGGER blocheaza_email_duplicat
BEFORE INSERT OR UPDATE OF email ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.blocheaza_email_duplicat();
