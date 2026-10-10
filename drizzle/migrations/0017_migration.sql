CREATE TABLE public.inbound_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_address text NOT NULL,
  to_address text NOT NULL,
  subject text,
  body_text text,
  body_html text,
  is_read boolean NOT NULL DEFAULT false,
  received_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE, DELETE ON public.inbound_emails TO authenticated;
GRANT ALL ON public.inbound_emails TO service_role;
ALTER TABLE public.inbound_emails ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins read inbound" ON public.inbound_emails FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins update inbound" ON public.inbound_emails FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins delete inbound" ON public.inbound_emails FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX inbound_emails_received_idx ON public.inbound_emails (received_at DESC);