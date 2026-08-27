import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "src");
const html = await readFile(resolve(source, "index.html"), "utf8");
const css = await readFile(resolve(source, "styles.css"), "utf8");
const files = (await readdir(source)).sort();

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(files.join("\n") === ["assets", "index.html", "styles.css"].join("\n"), "unexpected public source surface");
assert(html.includes('class="hero"'), "landing hero missing");
assert(html.includes("<h1>Vela</h1>"), "Vela name missing");
assert(!/<nav\b|<section\b|<footer\b|<script\b/u.test(html), "non-hero interface entered the page");
assert(!/problems\.science|github\.com|constellations|release|essay/iu.test(html), "retired destination or copy entered the page");
assert(!/@import|@font-face|var\(--/u.test(css), "old CSS system returned");

console.log(`fresh-slate check: ${files.length} source entries, ${css.split("\n").length} CSS lines`);
