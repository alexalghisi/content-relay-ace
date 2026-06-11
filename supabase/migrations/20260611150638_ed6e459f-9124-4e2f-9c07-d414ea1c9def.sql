
-- 1) Restrict phone column access on legacy_teachers (hide from anon)
REVOKE SELECT (phone) ON public.legacy_teachers FROM anon;

-- 2) Restrict phone column access on profiles (only service_role / owner via server fn)
REVOKE SELECT (phone) ON public.profiles FROM anon, authenticated;

-- 3) Enforce review rating range
ALTER TABLE public.reviews
  ADD CONSTRAINT reviews_rating_range
  CHECK (rating IS NULL OR (rating >= 1 AND rating <= 5));
