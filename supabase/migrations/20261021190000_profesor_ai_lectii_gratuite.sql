create table public.profesor_ai_lectii_gratuite (
  user_id uuid primary key,
  telefon_hash text not null unique,
  verificat_la timestamptz not null default now(),
  folosita_la timestamptz
);

alter table public.profesor_ai_lectii_gratuite enable row level security;
revoke all on public.profesor_ai_lectii_gratuite from anon, authenticated;
grant all on public.profesor_ai_lectii_gratuite to service_role;
