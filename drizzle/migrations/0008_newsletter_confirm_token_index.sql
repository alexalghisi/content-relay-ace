CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_confirm_token_idx
ON public.newsletter_subscribers (confirm_token);