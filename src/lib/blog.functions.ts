import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

function publicBlogClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) throw new Error("Articolele nu pot fi încărcate momentan.");
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    global: { fetch: (input, init) => {
      const headers = new Headers(init?.headers);
      if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
      headers.set("apikey", key);
      return fetch(input, { ...init, headers });
    } },
  });
}

export const listPublicBlogPosts = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await publicBlogClient().from("blog_posts")
    .select("slug,title,excerpt,category,published_at,tags")
    .eq("is_published", true).order("published_at", { ascending: false }).limit(100);
  if (error) throw new Error("Articolele nu pot fi încărcate momentan.");
  return { posts: data ?? [] };
});

export const getPublicBlogPost = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => z.object({ slug: z.string().min(1).max(250) }).parse(input))
  .handler(async ({ data: input }) => {
    const { data, error } = await publicBlogClient().from("blog_posts")
      .select("slug,title,excerpt,content,category,published_at,tags,featured_image,updated_at")
      .eq("slug", input.slug).eq("is_published", true).maybeSingle();
    if (error) throw new Error("Articolul nu poate fi încărcat momentan.");
    return { post: data };
  });