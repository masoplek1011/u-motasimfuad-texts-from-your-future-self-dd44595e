import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Future you: you finally quit doomscrolling at 2am, got the promotion, bought the house \u2014 and you still stalk your ex's profile every night, just from a nicer couch.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");
