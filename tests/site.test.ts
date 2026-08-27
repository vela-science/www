import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, test } from "bun:test";

const root = resolve(import.meta.dirname, "..");
const source = (path: string) => resolve(root, "src", path);

describe("vela.space static owner", () => {
  test("publishes one canonical URL", async () => {
    const sitemap = await readFile(source("sitemap.xml"), "utf8");
    expect(sitemap.match(/<loc>/gu)?.length).toBe(1);
    expect(sitemap).toContain("<loc>https://vela.space/</loc>");
  });

  test("keeps the opening accessible and exact", async () => {
    const html = await readFile(source("index.html"), "utf8");
    expect(html).toContain("<h1 class=\"sr-only home-title\">Vela</h1>");
    expect(html).toContain("href=\"#main\">Skip to content</a>");
    expect(html).toContain("https://problems.science/problems");
    expect(html).toContain("https://github.com/vela-science/vela/releases/tag/v0.977.6");
  });

  test("pins the accepted Vela 0.977.6 identity", async () => {
    const release = JSON.parse(await readFile(source("release.json"), "utf8"));
    expect(release).toMatchObject({
      vela_version: "0.977.6",
      protocol: 1,
      tag: "v0.977.6",
      release_commit: "9ac8e7730bfb63a3b8eb1d2e1d91081c3e703c59",
      release_tree: "1332713f627ac73c235e4f9a7afe206499717154",
      protocol_root: "sha256:bf1ef68165bccbc4d2e8a854f78c70448cc7de771bac23329f7a8ca115303f56",
    });
  });

  test("bundles the exact OFL IBM Plex Mono file", async () => {
    const font = await readFile(source("assets/fonts/ibm-plex-mono-400-latin.woff2"));
    expect(createHash("sha256").update(font).digest("hex")).toBe(
      "c36f509c0a8f9f85f29cb44bc8701d8a9e0b14c499e77a884f789ead7093a7ac",
    );
    expect(await readFile(resolve(root, "licenses/OFL-IBM-PLEX.txt"), "utf8")).toContain(
      "Copyright © 2017 IBM Corp. with Reserved Font Name \"Plex\"",
    );
  });

  test("keeps the opening to exactly one small destination rail", async () => {
    const html = await readFile(source("index.html"), "utf8");
    expect(html.match(/class="nav-link"/gu)?.length).toBe(2);
    expect(html).not.toContain("sign-in");
    expect(html).not.toContain("dashboard");
    expect(html).not.toContain("api/work");
  });
});
