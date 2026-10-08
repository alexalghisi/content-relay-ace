import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

const KEY = "md-cereri-seen";

/** Number of open student requests posted since the teacher last opened /cereri. */
export function NewRequestsBadge() {
  const { user } = useAuth();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!user) return;
    if (path === "/cereri") {
      localStorage.setItem(KEY, new Date().toISOString());
      setCount(0);
      return;
    }
    const since = localStorage.getItem(KEY) ?? new Date(Date.now() - 7 * 864e5).toISOString();
    supabase
      .from("student_requests")
      .select("id", { count: "exact", head: true })
      .eq("status", "open")
      .gt("created_at", since)
      .then(({ count: c }) => setCount(c ?? 0));
  }, [user, path]);

  if (!user || count === 0) return null;
  return (
    <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold leading-none text-primary-foreground" aria-label={`${count} cereri noi`}>
      {count}
    </span>
  );
}
