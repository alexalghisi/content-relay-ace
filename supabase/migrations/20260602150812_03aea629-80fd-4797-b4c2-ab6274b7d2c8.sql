-- 1) Lock down writes on bac_crawl_progress to service_role only.
-- The table already had a SELECT policy for admins; without explicit write policies,
-- anon/authenticated roles cannot write (RLS default-deny), but we revoke grants
-- explicitly to make the contract obvious to future readers.
revoke insert, update, delete on public.bac_crawl_progress from anon, authenticated;

-- 2) Reschedule any pg_cron job that hits the BAC crawl tick endpoint so it
-- uses the service-role key as a Bearer token. Skip silently if pg_cron isn't
-- installed or no such job exists.
do $$
declare
  v_jobid bigint;
  v_schedule text;
  v_service_key text;
  v_url text;
begin
  -- Skip if pg_cron isn't available
  if not exists (select 1 from pg_extension where extname = 'pg_cron') then
    raise notice 'pg_cron not installed; skipping cron rewrite';
    return;
  end if;

  -- Try to find an existing job calling /api/public/hooks/bac-crawl-tick
  execute $q$ select jobid, schedule, command from cron.job where command ilike '%bac-crawl-tick%' limit 1 $q$
    into v_jobid, v_schedule, v_url;

  if v_jobid is null then
    raise notice 'No existing bac-crawl-tick cron job found; nothing to update';
    return;
  end if;

  -- Pull the service role key from vault if present; otherwise leave the job alone.
  begin
    select decrypted_secret into v_service_key
      from vault.decrypted_secrets
     where name = 'service_role_key'
     limit 1;
  exception when others then
    v_service_key := null;
  end;

  if v_service_key is null then
    raise notice 'No vault.service_role_key available; cron job left as-is. Update the cron command manually so it sends Authorization: Bearer <SUPABASE_SERVICE_ROLE_KEY>';
    return;
  end if;

  -- Best-effort: rebuild a net.http_post call with the correct Authorization header.
  perform cron.unschedule(v_jobid);
  perform cron.schedule(
    'bac-crawl-tick',
    coalesce(v_schedule, '* * * * *'),
    format($cmd$
      select net.http_post(
        url := %L,
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', %L
        ),
        body := '{}'::jsonb
      ) as request_id;
    $cmd$, 'https://project--df47450a-a5d2-435d-86cc-507a4b01c196.lovable.app/api/public/hooks/bac-crawl-tick',
       'Bearer ' || v_service_key)
  );
end $$;