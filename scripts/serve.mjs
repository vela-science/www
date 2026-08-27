import { existsSync } from "node:fs";
import { extname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "../dist");
if (!existsSync(resolve(root, "index.html"))) {
  throw new Error("dist/index.html is missing; run `bun run build` first");
}

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

const server = Bun.serve({
  hostname: "127.0.0.1",
  port: Number(Bun.env.PORT ?? 4321),
  async fetch(request) {
    const url = new URL(request.url);
    const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const requested = resolve(root, cleanPath || "index.html");
    const file = Bun.file(requested);
    if (requested.startsWith(`${root}/`) && await file.exists()) {
      return new Response(file, { headers: { "content-type": contentTypes[extname(requested)] ?? "application/octet-stream" } });
    }
    return new Response(Bun.file(resolve(root, "404.html")), { status: 404, headers: { "content-type": contentTypes[".html"] } });
  },
});

console.log(`Vela www: http://${server.hostname}:${server.port}`);
