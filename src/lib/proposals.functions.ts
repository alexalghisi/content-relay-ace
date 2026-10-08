import { createServerFn } from "@tanstack/react-start";

export interface PublicProposal {
  id: string;
  message: string;
  price_per_hour: number | null;
  proposed_date: string | null;
  proposed_time: string | null;
  created_at: string;
  rating: number | null;
  rating_comment: string | null;
  status: string;
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
  request: { id: string; subject: string; level: string | null; city: string | null; is_online: boolean; created_at: string; status: string } | null;
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
      .select("id,subject,level,city,is_online,created_at,access_token,status")
      .eq("id", data.id)
      .maybeSingle();

    if (!req || !req.access_token || req.access_token !== data.token) {
      return { request: null, proposals: [] };
    }

    const { data: props } = await supabaseAdmin
      .from("teacher_proposals")
      .select("id,user_id,message,price_per_hour,proposed_date,proposed_time,created_at,rating,rating_comment,status")
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
        status: req.status,
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
          rating: p.rating,
          rating_comment: p.rating_comment,
          status: p.status,
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

/** Elevul evaluează cu stele propunerea/colaborarea, tot prin linkul privat (id + token). */
export const rateProposal = createServerFn({ method: "POST" })
  .inputValidator((data: { requestId: string; token: string; proposalId: string; rating: number; comment?: string }) => {
    const rating = Number(data?.rating);
    if (!data?.requestId || !data?.token || !data?.proposalId) throw new Error("Link invalid");
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new Error("Rating invalid");
    return {
      requestId: String(data.requestId),
      token: String(data.token),
      proposalId: String(data.proposalId),
      rating,
      comment: data.comment ? String(data.comment).slice(0, 500) : null,
    };
  })
  .handler(async ({ data }): Promise<{ ok: boolean }> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: req } = await supabaseAdmin
      .from("student_requests")
      .select("id,access_token")
      .eq("id", data.requestId)
      .maybeSingle();

    if (!req || !req.access_token || req.access_token !== data.token) return { ok: false };

    const { error } = await supabaseAdmin
      .from("teacher_proposals")
      .update({ rating: data.rating, rating_comment: data.comment, rated_at: new Date().toISOString() })
      .eq("id", data.proposalId)
      .eq("request_id", data.requestId);

    return { ok: !error };
  });

/** Elevul acceptă o propunere: cererea se închide și dispare din lista profesorilor. */
export const acceptProposal = createServerFn({ method: "POST" })
  .inputValidator((data: { requestId: string; token: string; proposalId: string }) => {
    if (!data?.requestId || !data?.token || !data?.proposalId) throw new Error("Link invalid");
    return { requestId: String(data.requestId), token: String(data.token), proposalId: String(data.proposalId) };
  })
  .handler(async ({ data }): Promise<{ ok: boolean }> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: req } = await supabaseAdmin
      .from("student_requests").select("id,access_token").eq("id", data.requestId).maybeSingle();
    if (!req || !req.access_token || req.access_token !== data.token) return { ok: false };
    const { error } = await supabaseAdmin
      .from("teacher_proposals").update({ status: "accepted" })
      .eq("id", data.proposalId).eq("request_id", data.requestId);
    if (error) return { ok: false };
    await supabaseAdmin.from("teacher_proposals").update({ status: "declined" })
      .eq("request_id", data.requestId).neq("id", data.proposalId);
    await supabaseAdmin.from("student_requests").update({ status: "closed" }).eq("id", data.requestId);
    return { ok: true };
  });

/** Elevul închide cererea (a găsit profesor în altă parte / nu mai are nevoie). */
export const closeMyRequest = createServerFn({ method: "POST" })
  .inputValidator((data: { requestId: string; token: string }) => {
    if (!data?.requestId || !data?.token) throw new Error("Link invalid");
    return { requestId: String(data.requestId), token: String(data.token) };
  })
  .handler(async ({ data }): Promise<{ ok: boolean }> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: req } = await supabaseAdmin
      .from("student_requests").select("id,access_token").eq("id", data.requestId).maybeSingle();
    if (!req || !req.access_token || req.access_token !== data.token) return { ok: false };
    const { error } = await supabaseAdmin.from("student_requests").update({ status: "closed" }).eq("id", data.requestId);
    return { ok: !error };
  });
