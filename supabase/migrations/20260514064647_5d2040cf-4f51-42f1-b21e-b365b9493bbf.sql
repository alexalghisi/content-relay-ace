-- Remove temporary security-definer RPCs; these actions are handled by authenticated app backend functions instead.
DROP FUNCTION IF EXISTS public.mark_conversation_read(uuid);
DROP FUNCTION IF EXISTS public.get_my_profile_private();

-- Tighten permissive public contact submissions.
DROP POLICY IF EXISTS "Anyone can send contact" ON public.contact_messages;
CREATE POLICY "Anyone can send contact"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(sender_name)) BETWEEN 2 AND 120
  AND char_length(trim(sender_email)) BETWEEN 3 AND 254
  AND sender_email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  AND char_length(trim(message)) BETWEEN 10 AND 5000
  AND (phone IS NULL OR char_length(trim(phone)) <= 30)
  AND (subject IS NULL OR char_length(trim(subject)) <= 160)
  AND coalesce(is_read, false) = false
);

-- Tighten permissive public feedback submissions.
DROP POLICY IF EXISTS "Anyone can submit feedback" ON public.feedback;
CREATE POLICY "Anyone can submit feedback"
ON public.feedback
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(name)) BETWEEN 2 AND 120
  AND char_length(trim(message)) BETWEEN 5 AND 2000
  AND (rating IS NULL OR rating BETWEEN 1 AND 5)
  AND coalesce(is_approved, false) = false
);