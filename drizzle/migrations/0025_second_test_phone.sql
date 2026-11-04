DROP INDEX IF EXISTS public.profesor_ai_phone_verificat;
CREATE UNIQUE INDEX profesor_ai_phone_verificat ON public.profesor_ai_utilizatori(phone)
WHERE phone_verified_at IS NOT NULL AND phone NOT IN ('40770763175', '+40770763175', '0770763175', '40744340622', '+40744340622', '0744340622');
COMMENT ON INDEX public.profesor_ai_phone_verificat IS 'Unique verified phones except the owner SMS test numbers; each account still requires its own valid SMS code.';
