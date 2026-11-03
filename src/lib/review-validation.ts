import { z } from "zod";
export const reviewSchema = z.object({ rating: z.number().int().min(1).max(5), comment: z.string().trim().max(500).default("") }).strict();
export function reviewEligible(hasSuccessfulResponse: boolean) { return hasSuccessfulResponse; }
export function proposalRatingSaved(error: unknown, rows: readonly unknown[] | null) { return !error && rows?.length === 1; }