CREATE TABLE public.daily_seo_reports (
 report_date date PRIMARY KEY,
 status text NOT NULL DEFAULT 'running',
 reports jsonb NOT NULL DEFAULT '{}'::jsonb,
 error_message text,
 started_at timestamptz NOT NULL DEFAULT now(),
 completed_at timestamptz
);
GRANT SELECT ON public.daily_seo_reports TO authenticated;
GRANT ALL ON public.daily_seo_reports TO service_role;
ALTER TABLE public.daily_seo_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Administrators read SEO reports" ON public.daily_seo_reports FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
COMMENT ON TABLE public.daily_seo_reports IS 'Daily Romania Semrush snapshots; estimates, not verified Google rankings. Writes only by authorized server jobs.';