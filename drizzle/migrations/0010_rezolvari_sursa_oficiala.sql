ALTER TABLE public.bac_rezolvari ADD COLUMN IF NOT EXISTS sursa text;
COMMENT ON COLUMN public.bac_rezolvari.sursa IS 'subiect_oficial = rezolvare generată pe baza PDF-ului oficial (subiect + barem) găzduit în bac-pdfs; NULL = conținut generic, neindexat';
CREATE INDEX IF NOT EXISTS bac_rezolvari_sursa_idx ON public.bac_rezolvari (sursa);