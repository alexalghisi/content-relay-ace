-- Teacher professional profile
CREATE TABLE public.teacher_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  display_name text NOT NULL,
  avatar_url text,
  headline text,
  about text,
  subjects text[] NOT NULL DEFAULT '{}',
  levels text[] NOT NULL DEFAULT '{}',
  city text,
  experience_years integer,
  rate_min integer,
  rate_max integer,
  online_available boolean NOT NULL DEFAULT true,
  in_person_available boolean NOT NULL DEFAULT false,
  contact_email text,
  contact_phone text,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.teacher_profiles TO authenticated;
GRANT SELECT ON public.teacher_profiles TO anon;
GRANT ALL ON public.teacher_profiles TO service_role;
ALTER TABLE public.teacher_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published teacher profiles"
  ON public.teacher_profiles FOR SELECT TO anon, authenticated
  USING (is_published = true);
CREATE POLICY "Owners can read own teacher profile"
  ON public.teacher_profiles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "Owners can insert own teacher profile"
  ON public.teacher_profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can update own teacher profile"
  ON public.teacher_profiles FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can delete own teacher profile"
  ON public.teacher_profiles FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Phone should never be readable by anon; only owner and authenticated teachers
REVOKE SELECT (contact_phone) ON public.teacher_profiles FROM anon;

-- Weekly availability
CREATE TABLE public.teacher_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  weekday smallint NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  start_time time NOT NULL,
  end_time time NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (end_time > start_time)
);
CREATE INDEX teacher_availability_user_idx ON public.teacher_availability (user_id, weekday);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.teacher_availability TO authenticated;
GRANT SELECT ON public.teacher_availability TO anon;
GRANT ALL ON public.teacher_availability TO service_role;
ALTER TABLE public.teacher_availability ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read availability of published teachers"
  ON public.teacher_availability FOR SELECT TO anon, authenticated
  USING (EXISTS (SELECT 1 FROM public.teacher_profiles tp WHERE tp.user_id = teacher_availability.user_id AND tp.is_published));
CREATE POLICY "Owners can read own availability"
  ON public.teacher_availability FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "Owners can insert own availability"
  ON public.teacher_availability FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can update own availability"
  ON public.teacher_availability FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can delete own availability"
  ON public.teacher_availability FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Published offers
CREATE TABLE public.teacher_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL,
  subject text NOT NULL,
  level text,
  description text,
  price_per_hour integer,
  is_online boolean NOT NULL DEFAULT true,
  is_in_person boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'published',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX teacher_offers_user_idx ON public.teacher_offers (user_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.teacher_offers TO authenticated;
GRANT SELECT ON public.teacher_offers TO anon;
GRANT ALL ON public.teacher_offers TO service_role;
ALTER TABLE public.teacher_offers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published offers"
  ON public.teacher_offers FOR SELECT TO anon, authenticated
  USING (status = 'published' AND EXISTS (SELECT 1 FROM public.teacher_profiles tp WHERE tp.user_id = teacher_offers.user_id AND tp.is_published));
CREATE POLICY "Owners can read own offers"
  ON public.teacher_offers FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "Owners can insert own offers"
  ON public.teacher_offers FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can update own offers"
  ON public.teacher_offers FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can delete own offers"
  ON public.teacher_offers FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Proposals sent by teachers to student requests
CREATE TABLE public.teacher_proposals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  request_id uuid NOT NULL REFERENCES public.student_requests(id) ON DELETE CASCADE,
  message text NOT NULL,
  price_per_hour integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, request_id)
);
CREATE INDEX teacher_proposals_request_idx ON public.teacher_proposals (request_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.teacher_proposals TO authenticated;
GRANT ALL ON public.teacher_proposals TO service_role;
ALTER TABLE public.teacher_proposals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can read own proposals"
  ON public.teacher_proposals FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
CREATE POLICY "Owners can insert own proposals"
  ON public.teacher_proposals FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can update own proposals"
  ON public.teacher_proposals FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Owners can delete own proposals"
  ON public.teacher_proposals FOR DELETE TO authenticated
  USING (auth.uid() = user_id);
