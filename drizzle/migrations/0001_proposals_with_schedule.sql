ALTER TABLE public.teacher_proposals
  ADD COLUMN IF NOT EXISTS proposed_date date,
  ADD COLUMN IF NOT EXISTS proposed_time time,
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'sent';

ALTER TABLE public.student_requests
  ADD COLUMN IF NOT EXISTS access_token text;

CREATE INDEX IF NOT EXISTS student_requests_access_token_idx ON public.student_requests (access_token);
