create table public.student_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  subject text not null,
  level text,
  city text,
  is_online boolean not null default false,
  budget_per_hour integer,
  details text,
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  status text not null default 'open'
);
grant insert on public.student_requests to anon, authenticated;
grant select on public.student_requests to authenticated;
grant all on public.student_requests to service_role;
alter table public.student_requests enable row level security;
create policy "anyone_can_post_request" on public.student_requests for insert to anon, authenticated with check (true);
create policy "authenticated_can_read_requests" on public.student_requests for select to authenticated using (true);