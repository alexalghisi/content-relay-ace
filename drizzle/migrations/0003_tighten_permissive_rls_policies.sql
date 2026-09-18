-- cities: only fully populated catalogue rows, scoped to app roles
DROP POLICY IF EXISTS "Cities readable by all" ON public.cities;
CREATE POLICY "Cities public catalogue read" ON public.cities
  FOR SELECT TO anon, authenticated
  USING (slug IS NOT NULL AND name IS NOT NULL);

-- subjects: same
DROP POLICY IF EXISTS "Subjects readable by all" ON public.subjects;
CREATE POLICY "Subjects public catalogue read" ON public.subjects
  FOR SELECT TO anon, authenticated
  USING (slug IS NOT NULL AND name IS NOT NULL);

-- teacher_subjects: only rows belonging to published teachers
DROP POLICY IF EXISTS "Teacher subjects readable by all" ON public.teacher_subjects;
CREATE POLICY "Teacher subjects of published teachers" ON public.teacher_subjects
  FOR SELECT TO anon, authenticated
  USING (EXISTS (
    SELECT 1 FROM public.teachers t
    WHERE t.id = teacher_subjects.teacher_id AND t.is_published
  ));

-- reviews: only reviews attached to an existing teacher record
DROP POLICY IF EXISTS "Reviews readable by all" ON public.reviews;
CREATE POLICY "Reviews of existing teachers readable" ON public.reviews
  FOR SELECT TO anon, authenticated
  USING (
    teacher_id IS NOT NULL
    AND rating BETWEEN 1 AND 5
    AND EXISTS (
      SELECT 1 FROM public.legacy_teachers lt
      WHERE lt.id = reviews.teacher_id AND lt.is_teacher
    )
  );

-- legacy_teachers: single predicate-based policy (phone column already revoked)
DROP POLICY IF EXISTS "Legacy teachers anon read non-sensitive" ON public.legacy_teachers;
DROP POLICY IF EXISTS "Legacy teachers authenticated read" ON public.legacy_teachers;
CREATE POLICY "Legacy teachers public listing read" ON public.legacy_teachers
  FOR SELECT TO anon, authenticated
  USING (is_teacher IS TRUE);

-- student_requests: only open requests, only for users who have a teacher identity
DROP POLICY IF EXISTS "authenticated_can_read_requests" ON public.student_requests;
CREATE POLICY "teachers_can_read_open_requests" ON public.student_requests
  FOR SELECT TO authenticated
  USING (
    status = 'open'
    AND (
      EXISTS (SELECT 1 FROM public.teacher_profiles tp WHERE tp.user_id = auth.uid())
      OR EXISTS (SELECT 1 FROM public.teachers t WHERE t.user_id = auth.uid())
      OR EXISTS (SELECT 1 FROM public.legacy_teachers lt WHERE lt.auth_user_id = auth.uid())
    )
  );

-- student_requests: validated anonymous submissions instead of accept-everything
DROP POLICY IF EXISTS "anyone_can_post_request" ON public.student_requests;
CREATE POLICY "validated_request_submission" ON public.student_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    coalesce(status, 'open') = 'open'
    AND length(btrim(subject)) BETWEEN 2 AND 120
    AND length(btrim(contact_name)) BETWEEN 2 AND 120
    AND contact_email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    AND length(coalesce(details, '')) <= 4000
    AND length(coalesce(city, '')) <= 120
    AND length(coalesce(level, '')) <= 120
    AND length(coalesce(contact_phone, '')) <= 40
    AND (budget_per_hour IS NULL OR budget_per_hour BETWEEN 0 AND 10000)
  );