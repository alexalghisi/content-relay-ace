CREATE OR REPLACE FUNCTION public.bac_pdf_names(_prefix text DEFAULT '')
RETURNS SETOF text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, storage
AS $$
  SELECT o.name FROM storage.objects o
  WHERE o.bucket_id = 'bac-pdfs'
    AND o.name LIKE replace(replace(coalesce(_prefix, ''), '%', ''), '_', '\_') || '%'
    AND o.name NOT LIKE '\_carantina/%'
    AND o.name LIKE '%.pdf'
$$;
REVOKE ALL ON FUNCTION public.bac_pdf_names(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.bac_pdf_names(text) TO anon, authenticated, service_role;