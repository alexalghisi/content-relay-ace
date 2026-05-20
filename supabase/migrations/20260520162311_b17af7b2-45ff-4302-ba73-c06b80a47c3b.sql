
-- Public buckets pentru PDF-urile noastre cu subiecte și bareme
insert into storage.buckets (id, name, public) values ('bac-pdfs', 'bac-pdfs', true)
  on conflict (id) do update set public = true;
insert into storage.buckets (id, name, public) values ('admitere-pdfs', 'admitere-pdfs', true)
  on conflict (id) do update set public = true;

-- Citire publică
drop policy if exists "Public read bac-pdfs" on storage.objects;
create policy "Public read bac-pdfs" on storage.objects for select using (bucket_id = 'bac-pdfs');

drop policy if exists "Public read admitere-pdfs" on storage.objects;
create policy "Public read admitere-pdfs" on storage.objects for select using (bucket_id = 'admitere-pdfs');

-- Upload doar pentru utilizatori autentificați
drop policy if exists "Auth upload bac-pdfs" on storage.objects;
create policy "Auth upload bac-pdfs" on storage.objects for insert to authenticated with check (bucket_id = 'bac-pdfs');

drop policy if exists "Auth upload admitere-pdfs" on storage.objects;
create policy "Auth upload admitere-pdfs" on storage.objects for insert to authenticated with check (bucket_id = 'admitere-pdfs');
