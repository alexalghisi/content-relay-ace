-- Defense in depth: phone columns must never be readable through PostgREST
-- by roles that RLS cannot column-filter.

REVOKE SELECT ON public.legacy_teachers FROM anon;
GRANT SELECT (id, full_name, bio, avatar_url, education, experience_years,
              location, is_teacher, created_at, updated_at, auth_user_id)
  ON public.legacy_teachers TO anon;

REVOKE SELECT ON public.profiles FROM anon, authenticated;
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at)
  ON public.profiles TO authenticated;

GRANT ALL ON public.profiles TO service_role;
GRANT ALL ON public.legacy_teachers TO service_role;