-- La ștergerea contului, profilul public de profesor rămânea online (fără cheie străină spre auth.users).
-- Rândurile conturilor deja șterse se elimină din aplicație (/admin/stergere-cont, „Curăță profilele orfane”,
-- care șterge și fotografiile din storage); aici doar le eliminăm pe cele rămase și legăm tabelele de cont.
DELETE FROM public.teacher_offers t WHERE NOT EXISTS (SELECT 1 FROM auth.users u WHERE u.id = t.user_id);
DELETE FROM public.teacher_availability t WHERE NOT EXISTS (SELECT 1 FROM auth.users u WHERE u.id = t.user_id);
DELETE FROM public.teacher_profiles t WHERE NOT EXISTS (SELECT 1 FROM auth.users u WHERE u.id = t.user_id);
ALTER TABLE public.teacher_offers
  ADD CONSTRAINT teacher_offers_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.teacher_availability
  ADD CONSTRAINT teacher_availability_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.teacher_profiles
  ADD CONSTRAINT teacher_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
