import { createStart, createMiddleware } from "@tanstack/react-start";

// Varianta leneșă a lui integrations/supabase/auth-attacher (vezi src/lib/auth-attacher-lazy.ts).
import { attachSupabaseAuthLazy } from "./lib/auth-attacher-lazy";
import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
  functionMiddleware: [attachSupabaseAuthLazy],
}));
