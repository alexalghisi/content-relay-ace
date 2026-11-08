import { createServerFn } from "@tanstack/react-start";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

function publicBlogClient(): SupabaseClient<Database> {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) throw new Error("Articolele nu pot fi încărcate momentan.");
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    global: {
      fetch: ((input: RequestInfo | URL, init?: RequestInit) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`)
          headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      }) as typeof fetch,
    },
  });
}

export const listPublicBlogPosts = createServerFn({ method: "GET" }).handler(async () => {
  // Articolele din repo (src/content/blog) nu depind de baza de date.
  const { postariMarkdown } = await import("@/lib/blog-fisiere");
  const { combinaArticole } = await import("@/lib/blog-markdown");
  const md = postariMarkdown();
  let db: Awaited<ReturnType<typeof citesteDb>> = [];
  let partial = false;
  try {
    db = await citesteDb();
  } catch {
    // Nu ascundem eroarea: lista afișează articolele din repo și spune că restul lipsesc momentan.
    if (!md.length) throw new Error("Articolele nu pot fi încărcate momentan.");
    partial = true;
  }
  return { posts: combinaArticole(db, md), partial };
});

async function citesteDb() {
  const { data, error } = await publicBlogClient()
    .from("blog_posts")
    .select("slug,title,excerpt,category,published_at,tags")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(100);
  if (error) throw new Error("Articolele nu pot fi încărcate momentan.");
  return data ?? [];
}

export const getPublicBlogPost = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => z.object({ slug: z.string().min(1).max(250) }).parse(input))
  .handler(async ({ data: input }) => {
    // Un articol din repo are prioritate față de un rând din DB cu același slug.
    const { postareMarkdown } = await import("@/lib/blog-fisiere");
    const md = postareMarkdown(input.slug);
    if (md) {
      return {
        post: {
          slug: md.slug,
          title: md.title,
          excerpt: md.description,
          content: md.content,
          category: md.category,
          published_at: md.date,
          tags: md.tags,
          featured_image: null,
          updated_at: md.updated ?? md.date,
          related: md.related,
        },
      };
    }
    const { data, error } = await publicBlogClient()
      .from("blog_posts")
      .select("slug,title,excerpt,content,category,published_at,tags,featured_image,updated_at")
      .eq("slug", input.slug)
      .eq("is_published", true)
      .maybeSingle();
    if (error) throw new Error("Articolul nu poate fi încărcat momentan.");
    return { post: data ? { ...data, related: null } : null };
  });
