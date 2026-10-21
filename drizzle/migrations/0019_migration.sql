CREATE TABLE public.profesor_ai_utilizatori (
  user_id uuid PRIMARY KEY,
  phone text,
  address text,
  phone_verified_at timestamptz,
  code_hash text,
  code_expires_at timestamptz,
  code_attempts integer NOT NULL DEFAULT 0,
  code_sent_at timestamptz,
  free_lesson_used_at timestamptz,
  lessons_started integer NOT NULL DEFAULT 0,
  last_lesson_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX profesor_ai_phone_verificat ON public.profesor_ai_utilizatori(phone) WHERE phone_verified_at IS NOT NULL;
GRANT SELECT ON public.profesor_ai_utilizatori TO authenticated;
GRANT ALL ON public.profesor_ai_utilizatori TO service_role;
ALTER TABLE public.profesor_ai_utilizatori ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own row" ON public.profesor_ai_utilizatori FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.profesor_ai_statistici()
RETURNS TABLE(utilizatori bigint, confirmati bigint, verificati bigint, au_folosit bigint, lectii bigint)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public, auth AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'forbidden'; END IF;
  RETURN QUERY SELECT
    (SELECT count(*) FROM auth.users),
    (SELECT count(*) FROM auth.users WHERE email_confirmed_at IS NOT NULL),
    (SELECT count(*) FROM public.profesor_ai_utilizatori WHERE phone_verified_at IS NOT NULL),
    (SELECT count(*) FROM public.profesor_ai_utilizatori WHERE lessons_started > 0),
    (SELECT coalesce(sum(lessons_started),0)::bigint FROM public.profesor_ai_utilizatori);
END $$;
REVOKE ALL ON FUNCTION public.profesor_ai_statistici() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.profesor_ai_statistici() TO authenticated;