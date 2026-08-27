import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, test } from "bun:test";

const root = resolve(import.meta.dirname, "..");
const source = (path: string) => resolve(root, "src", path);

describe("vela.space", () => {
  test("is only the landing hero", async () => {
    const html = await readFile(source("index.html"), "utf8");
    expect(html.match(/<main\b/gu)?.length).toBe(1);
    expect(html).toContain('class="hero"');
    expect(html).toContain('class="hero-art"');
    expect(html).toContain("<h1>Vela</h1>");
    expect(html).not.toMatch(/<nav\b|<section\b|<footer\b|href="\/constellations"/u);
  });

  test("has no application surface", async () => {
    const html = await readFile(source("index.html"), "utf8");
    expect(html).not.toMatch(/problems\.science|github\.com|sign-in|dashboard|release|essay/iu);
    expect(html).not.toContain("<script");
  });

  test("ships only the hero source files", async () => {
    expect((await readdir(resolve(root, "src"))).sort()).toEqual([
      "assets",
      "index.html",
      "styles.css",
    ]);
  });
});
