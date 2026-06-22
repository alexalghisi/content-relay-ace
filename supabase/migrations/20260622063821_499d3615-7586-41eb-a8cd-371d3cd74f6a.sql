
-- Restrict phone column on profiles: only owner can read it (via server function with service role).
REVOKE SELECT ON public.profiles FROM authenticated, anon;
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at) ON public.profiles TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

-- Restrict phone column on legacy_teachers: hide from anonymous visitors.
REVOKE SELECT ON public.legacy_teachers FROM anon, authenticated;
GRANT SELECT (id, full_name, bio, avatar_url, education, experience_years, location, is_teacher, created_at, updated_at, auth_user_id) ON public.legacy_teachers TO anon;
GRANT SELECT ON public.legacy_teachers TO authenticated;
GRANT ALL ON public.legacy_teachers TO service_role;
