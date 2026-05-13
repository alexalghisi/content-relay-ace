
-- legacy_teachers: imported from old profiles (no auth users)
CREATE TABLE public.legacy_teachers (
  id uuid PRIMARY KEY,
  full_name text NOT NULL,
  email text,
  phone text,
  bio text,
  avatar_url text,
  education text,
  experience_years integer DEFAULT 0,
  location text,
  is_teacher boolean DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.legacy_teachers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Legacy teachers readable by all" ON public.legacy_teachers FOR SELECT USING (true);

-- ads: meditatii listings
CREATE TABLE public.ads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  location text,
  session_duration integer,
  is_online boolean DEFAULT false,
  views_count integer DEFAULT 0,
  phone_reveals_count integer DEFAULT 0,
  status text NOT NULL DEFAULT 'active',
  subcategories text,
  is_promoted boolean DEFAULT false,
  promoted_until timestamptz,
  price_per_hour integer,
  subject_slug text,
  subject_name text,
  seo_slug text,
  teacher_id uuid REFERENCES public.legacy_teachers(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.ads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active ads readable by all" ON public.ads FOR SELECT USING (status = 'active');
CREATE INDEX idx_ads_subject ON public.ads(subject_slug) WHERE status='active';
CREATE INDEX idx_ads_promoted ON public.ads(is_promoted) WHERE status='active';
CREATE INDEX idx_ads_teacher ON public.ads(teacher_id);
CREATE INDEX idx_ads_seo ON public.ads(seo_slug) WHERE seo_slug IS NOT NULL;

-- blog_posts
CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text,
  content text,
  featured_image text,
  category text,
  tags text[],
  education_level text,
  difficulty text,
  clasa text,
  exam_type text,
  exam_session text,
  exam_year integer,
  profil text,
  duration_minutes integer,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  views_count integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published posts readable by all" ON public.blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Admins manage posts" ON public.blog_posts FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE INDEX idx_blog_slug ON public.blog_posts(slug);

-- reviews
CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid REFERENCES public.legacy_teachers(id) ON DELETE CASCADE,
  ad_id uuid REFERENCES public.ads(id) ON DELETE CASCADE,
  reviewer_name text,
  reviewer_email text,
  comment text,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Reviews readable by all" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Authenticated users post reviews" ON public.reviews FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- feedback
CREATE TABLE public.feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  message text NOT NULL,
  rating integer,
  is_approved boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Approved feedback readable" ON public.feedback FOR SELECT USING (is_approved = true);
CREATE POLICY "Anyone can submit feedback" ON public.feedback FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins manage feedback" ON public.feedback FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- contact_messages
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_name text NOT NULL,
  sender_email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send contact" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins read contact" ON public.contact_messages FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- updated_at triggers
CREATE TRIGGER trg_legacy_teachers_updated BEFORE UPDATE ON public.legacy_teachers
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_ads_updated BEFORE UPDATE ON public.ads
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_blog_updated BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_feedback_updated BEFORE UPDATE ON public.feedback
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_contact_updated BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
