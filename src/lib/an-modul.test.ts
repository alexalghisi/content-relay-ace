import { describe, expect, it } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Cloudflare Workers return epoch 0 for Date in module scope (titles showed "1970").
describe("anul nu se calculează la încărcarea modulului", () => {
  it("nicio rută nu are `const X = new Date().getFullYear()` la nivel de modul", () => {
    const dir = join(import.meta.dir, "..", "routes");
    const rele = readdirSync(dir)
      .filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
      .filter((f) =>
        /^(export )?const \w+ = new Date\(\)\.getFullYear\(\)/m.test(
          readFileSync(join(dir, f), "utf8"),
        ),
      );
    expect(rele).toEqual([]);
  });
});
