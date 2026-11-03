-- Triggerul din 0021 pe auth.users putea face orice înregistrare să eșueze („Database error saving new user”),
-- iar serverul o afișa drept „cont existent”. Unicitatea emailului și a telefonului se verifică acum în
-- creeazaCont prin API-ul admin (src/lib/conturi-unice.ts); aici rămân doar indexul unic pe telefon verificat.
DROP TRIGGER IF EXISTS blocheaza_email_duplicat ON auth.users;
DROP FUNCTION IF EXISTS public.blocheaza_email_duplicat();
DROP FUNCTION IF EXISTS public.exista_email_canonic(text);
DROP FUNCTION IF EXISTS public.email_canonic(text);
