
-- Fix 1: legacy_teachers phone exposure to anonymous users
DROP POLICY IF EXISTS "Legacy teachers readable by all" ON public.legacy_teachers;

CREATE POLICY "Legacy teachers public read"
  ON public.legacy_teachers FOR SELECT
  TO anon, authenticated
  USING (true);

REVOKE SELECT ON public.legacy_teachers FROM anon;
GRANT SELECT (id, full_name, bio, avatar_url, education, experience_years, location, is_teacher, created_at, updated_at, auth_user_id)
  ON public.legacy_teachers TO anon;
GRANT SELECT ON public.legacy_teachers TO authenticated;

-- Fix 2: profiles.phone leak to conversation partners
-- Restrict phone column reads to service_role only (owner reads use admin client server-side)
REVOKE SELECT ON public.profiles FROM authenticated;
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at)
  ON public.profiles TO authenticated;
GRANT INSERT, UPDATE ON public.profiles TO authenticated;

REVOKE SELECT ON public.profiles FROM anon;
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at)
  ON public.profiles TO anon;

-- Fix 3: has_role NULL guard against accidental misuse with NULL caller
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT _user_id IS NOT NULL AND EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;
