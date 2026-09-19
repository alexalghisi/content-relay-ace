-- Restore public-safe column SELECT for anon on profiles so anonymous/SSR reads
-- return empty results (RLS still allows no anon rows) instead of "permission denied".
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at)
  ON public.profiles TO anon;