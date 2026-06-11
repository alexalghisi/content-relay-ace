UPDATE public.bac_crawl_progress
SET status = 'blocked',
    last_error = 'wiped 2026-06-11: URL-only classifier produced wrong PDFs (barem vs subiect, mismatched years)',
    updated_at = now()
WHERE an BETWEEN 2001 AND 2014;