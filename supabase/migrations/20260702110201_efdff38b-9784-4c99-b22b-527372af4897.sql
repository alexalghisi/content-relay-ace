-- Reset stuck entries and re-queue everything except fully-populated ones.
UPDATE public.bac_crawl_progress
SET status = 'pending', last_error = NULL, updated_at = now()
WHERE status IN ('in_progress', 'failed')
   OR (status = 'done' AND uploaded < 2);