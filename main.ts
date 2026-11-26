import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Future you: you quit the 2am doomscroll, bought the house \u2014 and you still stalk your ex's profile every night, from a couch that cost more than your dignity.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");
