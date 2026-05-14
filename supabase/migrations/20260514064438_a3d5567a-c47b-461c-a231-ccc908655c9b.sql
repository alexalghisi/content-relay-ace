-- Fix conversation participant hijacking by removing broad client-side conversation edits
DROP POLICY IF EXISTS "Participants update conversation" ON public.conversations;

CREATE OR REPLACE FUNCTION public.mark_conversation_read(_conversation_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  _caller uuid;
  _student_id uuid;
  _teacher_id uuid;
BEGIN
  _caller := auth.uid();

  IF _caller IS NULL THEN
    RAISE EXCEPTION 'Not authenticated' USING ERRCODE = '28000';
  END IF;

  SELECT student_id, teacher_id
    INTO _student_id, _teacher_id
  FROM public.conversations
  WHERE id = _conversation_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Conversation not found' USING ERRCODE = 'P0002';
  END IF;

  IF _caller = _student_id THEN
    UPDATE public.conversations
    SET student_unread = 0
    WHERE id = _conversation_id;
  ELSIF _caller = _teacher_id THEN
    UPDATE public.conversations
    SET teacher_unread = 0
    WHERE id = _conversation_id;
  ELSE
    RAISE EXCEPTION 'Forbidden' USING ERRCODE = '42501';
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.mark_conversation_read(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.mark_conversation_read(uuid) TO authenticated;

-- Protect profile phone numbers from broad authenticated reads.
-- Public profile fields remain available for app features such as chat names.
REVOKE SELECT ON public.profiles FROM anon, authenticated;
GRANT SELECT (id, user_id, display_name, avatar_url, bio, city, created_at, updated_at)
ON public.profiles TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.get_my_profile_private()
RETURNS TABLE (
  display_name text,
  phone text,
  city text,
  bio text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT p.display_name, p.phone, p.city, p.bio
  FROM public.profiles p
  WHERE p.user_id = auth.uid()
  LIMIT 1
$$;

REVOKE ALL ON FUNCTION public.get_my_profile_private() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_my_profile_private() TO authenticated;