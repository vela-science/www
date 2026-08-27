import { extname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..", "dist");
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

Bun.serve({
  hostname: "127.0.0.1",
  port: 4321,
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
    const file = Bun.file(resolve(root, path));
    if (!await file.exists()) return new Response(null, { status: 404 });
    return new Response(file, { headers: { "content-type": types[extname(path)] ?? "application/octet-stream" } });
  },
});

console.log("vela.space preview: http://127.0.0.1:4321");
