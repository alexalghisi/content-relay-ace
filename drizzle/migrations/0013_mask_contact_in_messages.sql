CREATE OR REPLACE FUNCTION public.mask_contact_in_message()
RETURNS trigger LANGUAGE plpgsql SET search_path TO 'public' AS $$
BEGIN
  NEW.body := regexp_replace(NEW.body, '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', '[contact ascuns]', 'g');
  NEW.body := regexp_replace(NEW.body, '(\+?4?0[\s.\-]?)?7[0-9]{2}[\s.\-]?[0-9]{3}[\s.\-]?[0-9]{3}', '[telefon ascuns]', 'g');
  NEW.body := regexp_replace(NEW.body, '(wa\.me|t\.me|whatsapp\.com|instagram\.com|facebook\.com)/\S*', '[link ascuns]', 'gi');
  RETURN NEW;
END $$;
DROP TRIGGER IF EXISTS trg_messages_mask_contact ON public.messages;
CREATE TRIGGER trg_messages_mask_contact BEFORE INSERT ON public.messages
FOR EACH ROW EXECUTE FUNCTION public.mask_contact_in_message();