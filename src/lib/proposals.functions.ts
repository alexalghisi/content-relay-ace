import { createServerFn } from "@tanstack/react-start";

export interface PublicProposal {
  id: string;
  message: string;
  price_per_hour: number | null;
  proposed_date: string | null;
  proposed_time: string | null;
  created_at: string;
  teacher: {
    display_name: string | null;
    slug: string | null;
    headline: string | null;
    city: string | null;
    contact_email: string | null;
    contact_phone: string | null;
  } | null;
}

export interface RequestWithProposals {
  request: { id: string; subject: string; level: string | null; city: string | null; is_online: boolean; created_at: string } | null;
  proposals: PublicProposal[];
}

/** Elevul își vede cererea și propunerile primite printr-un link privat (id + token). */
export const getRequestWithProposals = createServerFn({ method: "GET" })
  .inputValidator((data: { id: string; token: string }) => {
    if (!data?.id || !data?.token) throw new Error("Link invalid");
    return { id: String(data.id), token: String(data.token) };
  })
  .handler(async ({ data }): Promise<RequestWithProposals> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: req } = await supabaseAdmin
      .from("student_requests")
      .select("id,subject,level,city,is_online,created_at,access_token")
      .eq("id", data.id)
      .maybeSingle();

    if (!req || !req.access_token || req.access_token !== data.token) {
      return { request: null, proposals: [] };
    }

    const { data: props } = await supabaseAdmin
      .from("teacher_proposals")
      .select("id,user_id,message,price_per_hour,proposed_date,proposed_time,created_at")
      .eq("request_id", data.id)
      .order("created_at", { ascending: false });

    const userIds = [...new Set((props ?? []).map((p) => p.user_id))];
    const { data: profiles } = userIds.length
      ? await supabaseAdmin
          .from("teacher_profiles")
          .select("user_id,display_name,slug,headline,city,contact_email,contact_phone")
          .in("user_id", userIds)
      : { data: [] as never[] };

    const byUser = new Map((profiles ?? []).map((p) => [p.user_id, p]));

    return {
      request: {
        id: req.id,
        subject: req.subject,
        level: req.level,
        city: req.city,
        is_online: req.is_online,
        created_at: req.created_at,
      },
      proposals: (props ?? []).map((p) => {
        const t = byUser.get(p.user_id);
        return {
          id: p.id,
          message: p.message,
          price_per_hour: p.price_per_hour,
          proposed_date: p.proposed_date,
          proposed_time: p.proposed_time,
          created_at: p.created_at,
          teacher: t
            ? {
                display_name: t.display_name,
                slug: t.slug,
                headline: t.headline,
                city: t.city,
                contact_email: t.contact_email,
                contact_phone: t.contact_phone,
              }
            : null,
        };
      }),
    };
  });
