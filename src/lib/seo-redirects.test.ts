/// <reference types="bun" />
import { describe, it, expect } from "bun:test";
import { BLOG_REDIRECTS, consolidatedTarget } from "./seo-redirects";

describe("duplicate consolidation", () => {
  it("merges 37 duplicate articles", () => expect(Object.keys(BLOG_REDIRECTS).length).toBe(37));
  it("never redirects a canonical article", () => {
    for (const t of Object.values(BLOG_REDIRECTS)) expect(BLOG_REDIRECTS[t]).toBeUndefined();
  });
  it("sends /profesori/{oras} to /meditatii-in/{oras}", () =>
    expect(consolidatedTarget("/profesori/cluj-napoca")).toBe("/meditatii-in/cluj-napoca"));
  it("sends ore-online to meditatii-online", () => expect(consolidatedTarget("/ore-online")).toBe("/meditatii-online"));
});
