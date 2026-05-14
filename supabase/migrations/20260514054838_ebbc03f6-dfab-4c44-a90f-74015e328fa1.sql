
-- 1) legacy_teachers: hide email & phone from anonymous users (column-level)
REVOKE SELECT (email, phone) ON public.legacy_teachers FROM anon;
GRANT SELECT (id, full_name, bio, avatar_url, education, experience_years, location, is_teacher, auth_user_id, created_at, updated_at) ON public.legacy_teachers TO anon;

-- 2) profiles: hide phone from anonymous users; tighten select to authenticated for full row
REVOKE SELECT (phone) ON public.profiles FROM anon;
GRANT SELECT (id, user_id, display_name, avatar_url, bio, city, created_at, updated_at) ON public.profiles TO anon;

-- 3) reviews: hide reviewer_email from anonymous users
REVOKE SELECT (reviewer_email) ON public.reviews FROM anon;
GRANT SELECT (id, ad_id, teacher_id, rating, reviewer_name, comment, created_at) ON public.reviews TO anon;

-- 4) feedback: hide email from anonymous (and authenticated) public reads
REVOKE SELECT (email) ON public.feedback FROM anon, authenticated;
GRANT SELECT (id, name, message, rating, is_approved, created_at, updated_at) ON public.feedback TO anon, authenticated;

-- 5) user_roles: restrict SELECT to own user
DROP POLICY IF EXISTS "Roles viewable by everyone" ON public.user_roles;
CREATE POLICY "Users read own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- 6) Realtime authorization: scope subscriptions on realtime.messages so users only join their own conversation topics
ALTER TABLE IF EXISTS realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users join own conversation topics" ON realtime.messages;
CREATE POLICY "Authenticated users join own conversation topics"
  ON realtime.messages
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.conversations c
      WHERE realtime.topic() = 'conversation:' || c.id::text
        AND (auth.uid() = c.student_id OR auth.uid() = c.teacher_id)
    )
    OR realtime.topic() NOT LIKE 'conversation:%'
  );
