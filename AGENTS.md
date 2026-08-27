# Vela www agent instructions

## Boundary

This repository is the standalone public source owner for `vela.space`.

- It is a static, read-only institutional front door.
- It owns one published page (`/`) plus the static `404.html` fallback.
- It links to `problems.science` for research work and to the exact signed Vela
  0.977.6 release for normative source and documentation.
- It must not add accounts, request state, a database, projection parsing,
  product dashboards, or a second Problems implementation.
- It must not depend on private `vela-web`, `@vela/*` workspace packages,
  Tailwind Plus, shadcn.io Pro, or Fontshare/ITF font files.

## Rights

- Keep `LICENSING.md`, `TRADEMARKS.md`, and `licenses/OFL-IBM-PLEX.txt` accurate.
- The Vela name and sail are rights-reserved project marks, not Apache/MIT or
  CC BY assets.
- The watercolor and social crop are project-owned editorial assets under the
  content license.
- IBM Plex Mono is the only bundled font and remains under SIL OFL 1.1.
- Never add a font or third-party visual without its complete redistribution
  terms and provenance.

## Verification

Use Bun only:

```bash
bun install --frozen-lockfile
bun run verify
```

Before release, also inspect the production build at desktop, 768px, 414px,
375px, and 320px; at 200% zoom; with reduced motion; in forced colors; and in
print preview. Confirm the opening remains one viewport tall with no horizontal
or vertical scroll.

Deployment, GitHub repository creation, domain attachment, and DNS changes
require explicit action-time authorization.
