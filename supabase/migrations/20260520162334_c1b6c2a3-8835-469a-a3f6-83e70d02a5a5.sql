
drop policy if exists "Public read bac-pdfs" on storage.objects;
create policy "Public read bac-pdfs" on storage.objects for select
  using (bucket_id = 'bac-pdfs' and lower(name) like '%.pdf');

drop policy if exists "Public read admitere-pdfs" on storage.objects;
create policy "Public read admitere-pdfs" on storage.objects for select
  using (bucket_id = 'admitere-pdfs' and lower(name) like '%.pdf');
