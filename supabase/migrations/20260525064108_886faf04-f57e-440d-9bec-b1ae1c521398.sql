
CREATE TABLE public.admission_papers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  university_slug text NOT NULL,
  university_name text NOT NULL,
  subject_slug text NOT NULL,
  subject_name text NOT NULL,
  year int NOT NULL,
  session text,
  document_type text NOT NULL CHECK (document_type IN ('subiect','barem','rezolvare')),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  storage_path text NOT NULL,
  description text,
  is_published boolean NOT NULL DEFAULT true,
  views_count int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX uq_admission_papers_combo
  ON public.admission_papers (university_slug, subject_slug, year, COALESCE(session,''), document_type);

CREATE INDEX idx_admission_papers_uni ON public.admission_papers (university_slug);
CREATE INDEX idx_admission_papers_uni_sub ON public.admission_papers (university_slug, subject_slug);
CREATE INDEX idx_admission_papers_uni_sub_year ON public.admission_papers (university_slug, subject_slug, year);
CREATE INDEX idx_admission_papers_published ON public.admission_papers (is_published) WHERE is_published = true;

ALTER TABLE public.admission_papers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published papers readable by all"
  ON public.admission_papers FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins manage papers"
  ON public.admission_papers FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER touch_admission_papers
  BEFORE UPDATE ON public.admission_papers
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
