
-- 1) Realtime: remove the "any non-conversation topic" bypass
DROP POLICY IF EXISTS "Authenticated users join own conversation topics" ON realtime.messages;
CREATE POLICY "Authenticated users join own conversation topics"
ON realtime.messages
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.conversations c
    WHERE realtime.topic() = ('conversation:' || c.id::text)
      AND (auth.uid() = c.student_id OR auth.uid() = c.teacher_id)
  )
);

-- 2) Revoke EXECUTE on internal SECURITY DEFINER functions from anon/authenticated/public
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.touch_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_conversation_on_message() FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role;
GRANT EXECUTE ON FUNCTION public.touch_updated_at() TO service_role;
GRANT EXECUTE ON FUNCTION public.update_conversation_on_message() TO service_role;

-- 3) Storage: restrict object listing on public buckets to admins only.
--    Public file fetch via CDN URL still works because the buckets remain public.
DROP POLICY IF EXISTS "Public read bac-pdfs" ON storage.objects;
DROP POLICY IF EXISTS "Public read admitere-pdfs" ON storage.objects;
DROP POLICY IF EXISTS "Avatars publicly readable" ON storage.objects;

CREATE POLICY "Admin list bac-pdfs"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'bac-pdfs' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admin list admitere-pdfs"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'admitere-pdfs' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admin list avatars"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'avatars' AND has_role(auth.uid(), 'admin'::app_role));
