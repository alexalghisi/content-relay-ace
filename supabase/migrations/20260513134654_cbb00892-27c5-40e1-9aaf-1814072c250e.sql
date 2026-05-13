
ALTER TABLE public.legacy_teachers ADD COLUMN IF NOT EXISTS auth_user_id uuid;
CREATE INDEX IF NOT EXISTS idx_legacy_teachers_auth_user ON public.legacy_teachers(auth_user_id);

CREATE TABLE IF NOT EXISTS public.conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ad_id uuid REFERENCES public.ads(id) ON DELETE SET NULL,
  student_id uuid NOT NULL,
  teacher_id uuid NOT NULL,
  legacy_teacher_id uuid,
  last_message text,
  last_message_at timestamptz NOT NULL DEFAULT now(),
  student_unread int NOT NULL DEFAULT 0,
  teacher_unread int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(ad_id, student_id, teacher_id)
);
CREATE INDEX IF NOT EXISTS idx_conv_student ON public.conversations(student_id, last_message_at DESC);
CREATE INDEX IF NOT EXISTS idx_conv_teacher ON public.conversations(teacher_id, last_message_at DESC);

ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Participants read conversations" ON public.conversations
  FOR SELECT USING (auth.uid() = student_id OR auth.uid() = teacher_id);
CREATE POLICY "Student creates conversation" ON public.conversations
  FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "Participants update conversation" ON public.conversations
  FOR UPDATE USING (auth.uid() = student_id OR auth.uid() = teacher_id);

CREATE TABLE IF NOT EXISTS public.messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_id uuid NOT NULL,
  body text NOT NULL CHECK (char_length(body) BETWEEN 1 AND 4000),
  read_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_messages_conv ON public.messages(conversation_id, created_at);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Participants read messages" ON public.messages
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM public.conversations c
    WHERE c.id = messages.conversation_id
      AND (auth.uid() = c.student_id OR auth.uid() = c.teacher_id)
  ));
CREATE POLICY "Participants send messages" ON public.messages
  FOR INSERT WITH CHECK (
    auth.uid() = sender_id AND EXISTS (
      SELECT 1 FROM public.conversations c
      WHERE c.id = messages.conversation_id
        AND (auth.uid() = c.student_id OR auth.uid() = c.teacher_id)
    )
  );

CREATE OR REPLACE FUNCTION public.update_conversation_on_message()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  UPDATE public.conversations
  SET last_message = LEFT(NEW.body, 200),
      last_message_at = NEW.created_at,
      student_unread = CASE WHEN NEW.sender_id = student_id THEN student_unread ELSE student_unread + 1 END,
      teacher_unread = CASE WHEN NEW.sender_id = teacher_id THEN teacher_unread ELSE teacher_unread + 1 END
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS trg_messages_update_conv ON public.messages;
CREATE TRIGGER trg_messages_update_conv
AFTER INSERT ON public.messages
FOR EACH ROW EXECUTE FUNCTION public.update_conversation_on_message();

ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.conversations;

-- Allow profile updates already in place. Add a helpful upsert profile trigger for new users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)))
  ON CONFLICT DO NOTHING;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
