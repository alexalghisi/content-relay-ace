CREATE OR REPLACE FUNCTION public.slugify_ro(input text)
RETURNS text LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT trim(both '-' from regexp_replace(
    lower(translate(coalesce(input,''),
      'ăâîșşțţĂÂÎȘŞȚŢ',
      'aaisstttaaisst')),
    '[^a-z0-9]+', '-', 'g'))
$$;

GRANT EXECUTE ON FUNCTION public.slugify_ro(text) TO authenticated, anon, service_role;

WITH base AS (
  SELECT a.id,
         coalesce(nullif(public.slugify_ro(a.subject_slug),''), public.slugify_ro(a.subject_name), 'meditatii') AS s_part,
         CASE
           WHEN a.is_online AND a.location IS NULL THEN 'online'
           WHEN a.location IS NOT NULL THEN public.slugify_ro(a.location)
           ELSE 'romania'
         END AS l_part,
         coalesce(nullif(public.slugify_ro(t.full_name),''), 'profesor') AS t_part,
         substr(a.id::text, 1, 6) AS uid
  FROM public.ads a
  LEFT JOIN public.legacy_teachers t ON t.id = a.teacher_id
  WHERE a.seo_slug IS NULL OR a.seo_slug = ''
)
UPDATE public.ads a
SET seo_slug = left(b.s_part || '-' || b.l_part || '-' || b.t_part || '-' || b.uid, 120)
FROM base b
WHERE a.id = b.id;