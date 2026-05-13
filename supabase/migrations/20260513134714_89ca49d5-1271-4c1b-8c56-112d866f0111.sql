
DROP POLICY IF EXISTS "Participants update conversation" ON public.conversations;
CREATE POLICY "Participants update conversation" ON public.conversations
  FOR UPDATE USING (auth.uid() = student_id OR auth.uid() = teacher_id)
  WITH CHECK (auth.uid() = student_id OR auth.uid() = teacher_id);

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_conversation_on_message() FROM PUBLIC, anon, authenticated;
