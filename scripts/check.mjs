import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { extname, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const runtimeRoots = ["src"];
const expectedFontHash = "c36f509c0a8f9f85f29cb44bc8701d8a9e0b14c499e77a884f789ead7093a7ac";
const expectedRelease = {
  version: "0.977.6",
  commit: "9ac8e7730bfb63a3b8eb1d2e1d91081c3e703c59",
  tree: "1332713f627ac73c235e4f9a7afe206499717154",
  root: "sha256:bf1ef68165bccbc4d2e8a854f78c70448cc7de771bac23329f7a8ca115303f56",
};

async function files(path) {
  const entries = await readdir(path);
  const result = [];
  for (const entry of entries) {
    const child = resolve(path, entry);
    if ((await stat(child)).isDirectory()) result.push(...await files(child));
    else result.push(child);
  }
  return result;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const runtimeFiles = (await Promise.all(runtimeRoots.map((path) => files(resolve(root, path))))).flat();
const textFiles = runtimeFiles.filter((path) => [".css", ".html", ".js", ".json", ".mjs", ".ts", ".txt", ".xml"].includes(extname(path)));
const joined = (await Promise.all(textFiles.map((path) => readFile(path, "utf8")))).join("\n");
const configuration = ["package.json", "vercel.json"]
  .map((path) => Bun.file(resolve(root, path)))
  .map(async (file) => file.text());
const inspected = `${joined}\n${(await Promise.all(configuration)).join("\n")}`;

for (const forbidden of [
  "@vela/",
  "@tailwindcss",
  "tailwindcss",
  "@neondatabase",
  "WORKOS_",
  "VELA_PROJECTION_DATABASE_URL",
  "next/",
  "react",
]) {
  assert(!inspected.includes(forbidden), `forbidden runtime dependency or secret surface: ${forbidden}`);
}

for (const forbiddenFont of ["switzer", "gambetta", "zodiak"]) {
  assert(!inspected.toLowerCase().includes(forbiddenFont), `ITF/Fontshare font entered runtime: ${forbiddenFont}`);
}

const fontFiles = runtimeFiles.filter((path) => extname(path) === ".woff2");
assert(fontFiles.length === 1, `expected exactly one bundled font, found ${fontFiles.length}`);
const fontHash = createHash("sha256").update(await readFile(fontFiles[0])).digest("hex");
assert(fontHash === expectedFontHash, `IBM Plex Mono hash drift: ${fontHash}`);

const release = JSON.parse(await readFile(resolve(root, "src/release.json"), "utf8"));
assert(release.vela_version === expectedRelease.version, "Vela release version drift");
assert(release.release_commit === expectedRelease.commit, "Vela release commit drift");
assert(release.release_tree === expectedRelease.tree, "Vela release tree drift");
assert(release.protocol_root === expectedRelease.root, "Vela protocol root drift");

const html = await readFile(resolve(root, "src/index.html"), "utf8");
assert(html.includes("https://problems.science/problems"), "Problems owner link missing");
assert(html.includes("https://github.com/vela-science/vela/releases/tag/v0.977.6"), "exact signed release link missing");
assert(!html.includes("<script src="), "runtime JavaScript entered static opening");

console.log(`rights/boundary check: ${runtimeFiles.length} files; font sha256 ${fontHash}`);
for (const path of fontFiles) console.log(`open font: ${relative(root, path)}`);
