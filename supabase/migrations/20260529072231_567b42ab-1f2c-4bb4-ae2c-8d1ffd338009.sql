
-- 1. Restrict PDF bucket uploads to admins only
DROP POLICY IF EXISTS "Auth upload bac-pdfs" ON storage.objects;
DROP POLICY IF EXISTS "Auth upload admitere-pdfs" ON storage.objects;

CREATE POLICY "Admin upload bac-pdfs" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'bac-pdfs' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin update bac-pdfs" ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'bac-pdfs' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin delete bac-pdfs" ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'bac-pdfs' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin upload admitere-pdfs" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'admitere-pdfs' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin update admitere-pdfs" ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'admitere-pdfs' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin delete admitere-pdfs" ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'admitere-pdfs' AND public.has_role(auth.uid(), 'admin'));

-- 2. Restrict profiles SELECT — own profile OR conversation partner only
DROP POLICY IF EXISTS "Profiles viewable by authenticated" ON public.profiles;
CREATE POLICY "Profiles viewable to self or conversation partners"
ON public.profiles FOR SELECT TO authenticated
USING (
  auth.uid() = user_id
  OR EXISTS (
    SELECT 1 FROM public.conversations c
    WHERE (c.teacher_id = auth.uid() AND c.student_id = profiles.user_id)
       OR (c.student_id = auth.uid() AND c.teacher_id = profiles.user_id)
  )
);

-- 3. Add SET search_path to pgmq wrapper functions + restrict EXECUTE
CREATE OR REPLACE FUNCTION public.enqueue_email(queue_name text, payload jsonb)
RETURNS bigint LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pgmq
AS $$
BEGIN
  RETURN pgmq.send(queue_name, payload);
EXCEPTION WHEN undefined_table THEN
  PERFORM pgmq.create(queue_name);
  RETURN pgmq.send(queue_name, payload);
END;
$$;

CREATE OR REPLACE FUNCTION public.read_email_batch(queue_name text, batch_size integer, vt integer)
RETURNS TABLE(msg_id bigint, read_ct integer, message jsonb)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pgmq
AS $$
BEGIN
  RETURN QUERY SELECT r.msg_id, r.read_ct, r.message FROM pgmq.read(queue_name, vt, batch_size) r;
EXCEPTION WHEN undefined_table THEN
  PERFORM pgmq.create(queue_name);
  RETURN;
END;
$$;

CREATE OR REPLACE FUNCTION public.delete_email(queue_name text, message_id bigint)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pgmq
AS $$
BEGIN
  RETURN pgmq.delete(queue_name, message_id);
EXCEPTION WHEN undefined_table THEN
  RETURN FALSE;
END;
$$;

CREATE OR REPLACE FUNCTION public.move_to_dlq(source_queue text, dlq_name text, message_id bigint, payload jsonb)
RETURNS bigint LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pgmq
AS $$
DECLARE new_id BIGINT;
BEGIN
  SELECT pgmq.send(dlq_name, payload) INTO new_id;
  PERFORM pgmq.delete(source_queue, message_id);
  RETURN new_id;
EXCEPTION WHEN undefined_table THEN
  BEGIN
    PERFORM pgmq.create(dlq_name);
  EXCEPTION WHEN OTHERS THEN NULL;
  END;
  SELECT pgmq.send(dlq_name, payload) INTO new_id;
  BEGIN
    PERFORM pgmq.delete(source_queue, message_id);
  EXCEPTION WHEN undefined_table THEN NULL;
  END;
  RETURN new_id;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM anon, authenticated, public;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
