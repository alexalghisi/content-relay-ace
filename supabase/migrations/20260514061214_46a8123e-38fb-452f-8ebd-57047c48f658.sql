-- 1. Drop unused sensitive columns
ALTER TABLE public.reviews DROP COLUMN IF EXISTS reviewer_email;
ALTER TABLE public.feedback DROP COLUMN IF EXISTS email;
ALTER TABLE public.legacy_teachers DROP COLUMN IF EXISTS email;

-- 2. Restrict profiles SELECT to authenticated users (phone protection)
DROP POLICY IF EXISTS "Profiles viewable by everyone" ON public.profiles;
CREATE POLICY "Profiles viewable by authenticated"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (true);
