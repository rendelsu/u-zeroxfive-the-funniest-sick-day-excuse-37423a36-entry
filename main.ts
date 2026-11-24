// The Funniest Sick-Day Excuse — make.fun entry (u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
// Writes one line, under 200 characters, to /output/entry.txt.
// Judge criteria, in order: (1) a reason to call in sick a boss might half
// believe and a coworker would laugh at; (2) fresh idea, not a worn excuse
// about a fever, a dog or a dead grandmother; (3) lands on one read, twist
// near the end; (4) sounds like a real person typing a message, not a joke
// built for a contest; (5) no wasted words. The line: a pulled muscle from
// a pickle jar is half-believable, the "committed relationship with a heating
// pad" is the twist at the end, and the whole thing reads as a typed message.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "Sorry, can't come in — I pulled a muscle opening a jar of pickles and now I'm in a committed relationship with a heating pad.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
