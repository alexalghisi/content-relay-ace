
-- Defense-in-depth: prevent phone column exposure via explicit column-level grants
-- while keeping existing RLS policies for row-level access control.

-- ============ legacy_teachers ============
-- Anonymous visitors: NEVER expose phone. Grant only public-safe columns.
REVOKE ALL ON TABLE public.legacy_teachers FROM anon;
GRANT SELECT (id, full_name, bio, avatar_url, education, experience_years, location, is_teacher, created_at, updated_at, auth_user_id)
  ON public.legacy_teachers TO anon;

-- Authenticated users: full read (phone included) is intentional for contact reveal.
REVOKE ALL ON TABLE public.legacy_teachers FROM authenticated;
GRANT SELECT ON public.legacy_teachers TO authenticated;

GRANT ALL ON public.legacy_teachers TO service_role;

COMMENT ON POLICY "Legacy teachers anon read non-sensitive" ON public.legacy_teachers IS
  'Row-level access for anon; phone column is blocked by explicit column-level GRANT (see migration).';

-- ============ profiles ============
-- Split partner read: partners get every column EXCEPT phone (enforced via column grants).
-- Owner (auth.uid() = user_id) already has full read via "Profiles self full read" policy;
-- but authenticated column grant excludes phone, so owners must read phone through the
-- security-definer server function public.getMyPrivateProfile (already used by /cont).
REVOKE ALL ON TABLE public.profiles FROM anon;
REVOKE ALL ON TABLE public.profiles FROM authenticated;

-- Anon: public display info only (used for teacher/ad public pages if joined).
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at)
  ON public.profiles TO anon;

-- Authenticated (both self and conversation partners): everything except phone.
-- Phone is read only server-side via getMyPrivateProfile() using service role.
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at)
  ON public.profiles TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.profiles TO authenticated;

GRANT ALL ON public.profiles TO service_role;

COMMENT ON POLICY "Profiles partner limited read" ON public.profiles IS
  'Conversation partners get row access; phone column is blocked by explicit column-level GRANT.';
COMMENT ON POLICY "Profiles self full read" ON public.profiles IS
  'Self-row access; phone column requires server-side read via getMyPrivateProfile (service role).';
