import { describe, it, expect } from "vitest";
import { MIN_LISTINGS_FOR_INDEX } from "./market-stats.functions";

describe("programmatic page quality gate", () => {
  it("indexes a materie × oraș page only from 3 real listings", () => {
    expect(MIN_LISTINGS_FOR_INDEX).toBe(3);
  });
});
