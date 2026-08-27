# Vela www

The tiny public front door for [vela.space](https://vela.space).

This repository owns one static opening: the Vela sail, a project-owned
watercolor, one route into [Problems](https://problems.science/problems), and
one exact link to the signed [Vela 0.977.6 release](https://github.com/vela-science/vela/releases/tag/v0.977.6).

It deliberately contains no database, authentication, projection reader,
product dashboard, hosted Work, or duplicated Problems component.

## Local qualification

Requires Bun 1.3.12 or newer.

```bash
bun install --frozen-lockfile
bun run verify
bun run serve
```

The production output is written to `dist/` and served locally at
`http://127.0.0.1:4321`.

## Exact release pin

- Vela: `0.977.6`
- Protocol: `1`
- signed tag: `v0.977.6`
- release commit: `9ac8e7730bfb63a3b8eb1d2e1d91081c3e703c59`
- release tree: `1332713f627ac73c235e4f9a7afe206499717154`
- protocol root: `sha256:bf1ef68165bccbc4d2e8a854f78c70448cc7de771bac23329f7a8ca115303f56`

See `EXTRACTION_MANIFEST.md`, `LICENSING.md`, and `CUTOVER.md` before public
repository creation or deployment.
