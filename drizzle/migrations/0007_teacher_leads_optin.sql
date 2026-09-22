CREATE TABLE public.teacher_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  subjects TEXT NOT NULL,
  experience TEXT,
  source TEXT NOT NULL DEFAULT 'landing',
  consent BOOLEAN NOT NULL DEFAULT false,
  contacted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX teacher_leads_email_key ON public.teacher_leads (lower(email));

GRANT INSERT ON public.teacher_leads TO anon, authenticated;
GRANT ALL ON public.teacher_leads TO service_role;

ALTER TABLE public.teacher_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "validated_teacher_lead_optin"
ON public.teacher_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  consent IS TRUE
  AND contacted_at IS NULL
  AND length(full_name) BETWEEN 2 AND 120
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(email) <= 200
  AND length(subjects) BETWEEN 2 AND 300
  AND (city IS NULL OR length(city) <= 120)
  AND (phone IS NULL OR length(phone) <= 40)
  AND (experience IS NULL OR length(experience) <= 2000)
  AND source IN ('landing', 'invitatie', 'reclama')
);