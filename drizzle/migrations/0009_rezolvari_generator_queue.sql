-- Coada de generare rezolvări BAC + starea jobului (lease, pauză, circuit breaker)

CREATE TABLE IF NOT EXISTS public.rezolvari_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  materie TEXT NOT NULL,
  an INTEGER NOT NULL,
  sesiune TEXT NOT NULL,
  prioritate INTEGER NOT NULL DEFAULT 2,
  status TEXT NOT NULL DEFAULT 'queued', -- queued | done | failed
  attempts INTEGER NOT NULL DEFAULT 0,
  error TEXT,
  processed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (materie, an, sesiune)
);

GRANT ALL ON public.rezolvari_queue TO service_role;
ALTER TABLE public.rezolvari_queue ENABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS public.job_state (
  job TEXT PRIMARY KEY,
  lease_until TIMESTAMPTZ,
  paused BOOLEAN NOT NULL DEFAULT false,
  pause_reason TEXT,
  consecutive_failures INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.job_state TO service_role;
ALTER TABLE public.job_state ENABLE ROW LEVEL SECURITY;

INSERT INTO public.job_state (job) VALUES ('rezolvari-generator') ON CONFLICT (job) DO NOTHING;

-- Populare coadă: 16 materii × 2010–2026 × 4 sesiuni; matematica prima, apoi româna, apoi restul.
WITH materii AS (
  SELECT slug, CASE slug WHEN 'matematica' THEN 0 WHEN 'romana' THEN 1 ELSE 2 END AS prio
  FROM (VALUES
    ('matematica'),('romana'),('istorie'),('biologie'),('chimie'),('fizica'),('geografie'),
    ('informatica'),('engleza'),('franceza'),('germana'),('logica'),('psihologie'),
    ('sociologie'),('economie'),('filosofie')
  ) AS t(slug)
), sesiuni AS (
  SELECT sesiune FROM (VALUES ('iunie'),('august'),('speciala'),('simulare')) AS s(sesiune)
)
INSERT INTO public.rezolvari_queue (materie, an, sesiune, prioritate)
SELECT m.slug, y.an, s.sesiune, m.prio
FROM materii m
CROSS JOIN generate_series(2010, 2026) AS y(an)
CROSS JOIN sesiuni s
ON CONFLICT (materie, an, sesiune) DO NOTHING;