
-- 1) Protect legacy_teachers.phone from anonymous harvesting (column-level).
REVOKE SELECT ON public.legacy_teachers FROM anon;
GRANT SELECT (id, full_name, bio, avatar_url, education, experience_years, location, is_teacher, created_at, updated_at, auth_user_id)
  ON public.legacy_teachers TO anon;
-- authenticated keeps full SELECT (including phone) — needed for ad contact reveal
GRANT SELECT ON public.legacy_teachers TO authenticated;

-- 2) Reviews: require ownership + a prior conversation with the teacher.
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS reviewer_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;
CREATE INDEX IF NOT EXISTS reviews_reviewer_user_idx ON public.reviews (reviewer_user_id);
CREATE UNIQUE INDEX IF NOT EXISTS reviews_unique_reviewer_teacher
  ON public.reviews (reviewer_user_id, teacher_id) WHERE reviewer_user_id IS NOT NULL;

DROP POLICY IF EXISTS "Authenticated users post reviews" ON public.reviews;
CREATE POLICY "Reviewer posts after conversation" ON public.reviews
  FOR INSERT TO authenticated
  WITH CHECK (
    reviewer_user_id = auth.uid()
    AND teacher_id IS NOT NULL
    AND EXISTS (
      SELECT 1 FROM public.conversations c
      WHERE c.student_id = auth.uid()
        AND c.legacy_teacher_id = reviews.teacher_id
    )
  );

-- Allow reviewers to delete their own review
DROP POLICY IF EXISTS "Reviewer deletes own review" ON public.reviews;
CREATE POLICY "Reviewer deletes own review" ON public.reviews
  FOR DELETE TO authenticated USING (reviewer_user_id = auth.uid());
