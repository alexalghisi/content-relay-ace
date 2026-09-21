CREATE TABLE public.bac_variante (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  materie TEXT NOT NULL,
  an INTEGER NOT NULL,
  sesiune TEXT NOT NULL,
  specializare TEXT,
  subiect_path TEXT,
  barem_path TEXT,
  slug TEXT NOT NULL UNIQUE,
  are_rezolvare BOOLEAN NOT NULL DEFAULT false,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (materie, an, sesiune)
);

GRANT SELECT ON public.bac_variante TO anon;
GRANT SELECT ON public.bac_variante TO authenticated;
GRANT ALL ON public.bac_variante TO service_role;

ALTER TABLE public.bac_variante ENABLE ROW LEVEL SECURITY;

CREATE POLICY "published variante are public"
ON public.bac_variante FOR SELECT
TO anon, authenticated
USING (is_published IS TRUE);

CREATE TABLE public.bac_rezolvari (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  varianta_id UUID REFERENCES public.bac_variante(id) ON DELETE CASCADE,
  materie TEXT NOT NULL,
  an INTEGER NOT NULL,
  sesiune TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  titlu TEXT,
  continut TEXT NOT NULL,
  dificultate TEXT NOT NULL DEFAULT 'mediu',
  timp_estimat_minute INTEGER NOT NULL DEFAULT 60,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (materie, an, sesiune)
);

GRANT SELECT ON public.bac_rezolvari TO anon;
GRANT SELECT ON public.bac_rezolvari TO authenticated;
GRANT ALL ON public.bac_rezolvari TO service_role;

ALTER TABLE public.bac_rezolvari ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rezolvari readable"
ON public.bac_rezolvari FOR SELECT
TO anon, authenticated
USING (status IN ('draft', 'revizuit'));

CREATE INDEX bac_rezolvari_materie_an_idx ON public.bac_rezolvari (materie, an);
CREATE INDEX bac_variante_materie_an_idx ON public.bac_variante (materie, an);