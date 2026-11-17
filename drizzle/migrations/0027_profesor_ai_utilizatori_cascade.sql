-- Telefoanele verificate rămase de la conturi șterse blocau numărul („deja confirmat pe alt cont”).
DELETE FROM public.profesor_ai_utilizatori p
WHERE NOT EXISTS (SELECT 1 FROM auth.users u WHERE u.id = p.user_id);
ALTER TABLE public.profesor_ai_utilizatori
  ADD CONSTRAINT profesor_ai_utilizatori_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
