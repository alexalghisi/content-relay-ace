create table if not exists public.bac_crawl_progress (
  materie text not null,
  an int not null,
  status text not null default 'pending',
  attempts int not null default 0,
  uploaded int not null default 0,
  last_error text,
  last_attempt_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (materie, an)
);

grant select on public.bac_crawl_progress to authenticated;
grant all on public.bac_crawl_progress to service_role;

alter table public.bac_crawl_progress enable row level security;

drop policy if exists "admin read crawl progress" on public.bac_crawl_progress;
create policy "admin read crawl progress" on public.bac_crawl_progress
  for select to authenticated using (public.has_role(auth.uid(), 'admin'));

insert into public.bac_crawl_progress (materie, an)
select m, y from
  unnest(array[
    'romana','matematica','istorie','biologie','chimie','fizica',
    'geografie','informatica','engleza','franceza','germana',
    'logica','psihologie','sociologie','economie','filosofie'
  ]) m,
  generate_series(2010, 2026) y
on conflict (materie, an) do nothing;