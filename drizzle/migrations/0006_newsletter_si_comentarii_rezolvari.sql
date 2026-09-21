CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  materii TEXT[] NOT NULL DEFAULT '{}',
  confirm_token TEXT NOT NULL DEFAULT replace(gen_random_uuid()::text, '-', ''),
  confirmed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can subscribe"
ON public.newsletter_subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (
  email ~* '^[^@\s]+@[^@\s]+\.[a-z]{2,}$'
  AND length(email) <= 200
  AND confirmed_at IS NULL
  AND array_length(materii, 1) IS DISTINCT FROM 0
);

CREATE TABLE public.rezolvare_comentarii (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rezolvare_materie TEXT NOT NULL,
  rezolvare_an INTEGER NOT NULL,
  rezolvare_sesiune TEXT NOT NULL,
  autor TEXT NOT NULL,
  mesaj TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.rezolvare_comentarii TO anon, authenticated;
GRANT ALL ON public.rezolvare_comentarii TO service_role;

ALTER TABLE public.rezolvare_comentarii ENABLE ROW LEVEL SECURITY;

CREATE POLICY "approved comments are public"
ON public.rezolvare_comentarii FOR SELECT
TO anon, authenticated
USING (is_approved IS TRUE);

CREATE POLICY "anyone can ask a question"
ON public.rezolvare_comentarii FOR INSERT
TO anon, authenticated
WITH CHECK (
  is_approved IS FALSE
  AND length(autor) BETWEEN 2 AND 60
  AND length(mesaj) BETWEEN 5 AND 2000
  AND length(rezolvare_materie) <= 40
  AND rezolvare_an BETWEEN 2000 AND 2035
  AND rezolvare_sesiune IN ('iunie', 'august', 'speciala', 'simulare')
);

CREATE INDEX rezolvare_comentarii_combo_idx
ON public.rezolvare_comentarii (rezolvare_materie, rezolvare_an, rezolvare_sesiune);