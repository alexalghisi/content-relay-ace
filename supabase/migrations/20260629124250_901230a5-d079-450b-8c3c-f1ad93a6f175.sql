
-- legacy_teachers: split policies by role so anon cannot read 'phone'
DROP POLICY IF EXISTS "Legacy teachers public read" ON public.legacy_teachers;

CREATE POLICY "Legacy teachers anon read non-sensitive"
  ON public.legacy_teachers FOR SELECT TO anon USING (true);

CREATE POLICY "Legacy teachers authenticated read"
  ON public.legacy_teachers FOR SELECT TO authenticated USING (true);

-- Enforce column exclusion via GRANTs (RLS is row-level; column scope is via privileges)
REVOKE ALL ON public.legacy_teachers FROM anon;
GRANT SELECT (id, full_name, bio, avatar_url, education, experience_years, location, is_teacher, created_at, updated_at, auth_user_id)
  ON public.legacy_teachers TO anon;
GRANT SELECT ON public.legacy_teachers TO authenticated;

-- profiles: split SELECT policy so conversation partners cannot read 'phone'
DROP POLICY IF EXISTS "Profiles viewable to self or conversation partners" ON public.profiles;

CREATE POLICY "Profiles self full read"
  ON public.profiles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Profiles partner limited read"
  ON public.profiles FOR SELECT TO authenticated
  USING (
    auth.uid() <> user_id AND EXISTS (
      SELECT 1 FROM public.conversations c
      WHERE (c.teacher_id = auth.uid() AND c.student_id = profiles.user_id)
         OR (c.student_id = auth.uid() AND c.teacher_id = profiles.user_id)
    )
  );

-- Restrict authenticated column SELECT so 'phone' is never returned through PostgREST.
-- Owner reads phone via getMyPrivateProfile server fn (service-role).
REVOKE ALL ON public.profiles FROM authenticated;
GRANT SELECT (id, user_id, display_name, avatar_url, city, bio, created_at, updated_at)
  ON public.profiles TO authenticated;
GRANT INSERT, UPDATE ON public.profiles TO authenticated;
