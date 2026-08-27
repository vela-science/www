# Exact extraction manifest

## Source binding

The extraction source was the read-only private `vela-web` checkout at clean
detached HEAD `b7de325c0c59bb0d83f0f00c8f181dcf2218def2`, tree
`9f8796b30d03b2fc07ab053ebdfa10d5ad764952`. It contained 39 tracked
`apps/www` files and two stashes, both observed and untouched.

No Git object, branch, stash, working-tree file, deployment, provider project,
domain, or DNS record in that source custody was mutated.

## Byte-identical retained assets

| Candidate path | Private source path | SHA-256 | Disposition |
| --- | --- | --- | --- |
| `src/assets/home-night-passage.webp` | `apps/www/src/assets/paintings/home-night-passage.webp` | `ff3d33da757c0dc296380051d215a4d9d87c820f0b4d6d4ac904a7f8b4bfc1ac` | project-owned editorial plate; CC BY 4.0 |
| `src/assets/og-image.png` | `apps/www/assets/og-image.png` | `f1691367a8cde4bdacb64f808be277620bd589261af637aeb341bb75ff18a7fe` | project-owned social crop; CC BY 4.0 |
| `src/assets/vela-symbol.svg` | `packages/brand/marks/exports/svg/vela-symbol-full-reversed.svg` | `1517cf17797bc8eb92e27d54152cbbd01190fd457458a14b253573274e0e6ffb` | project-owned mark; trademark rights reserved |
| `src/assets/fonts/ibm-plex-mono-400-latin.woff2` | `packages/brand/fonts/web/ibm-plex-mono-400-latin.woff2` | `c36f509c0a8f9f85f29cb44bc8701d8a9e0b14c499e77a884f789ead7093a7ac` | unmodified IBM Plex Mono; SIL OFL 1.1 |

`licenses/OFL-IBM-PLEX.txt` contains the complete upstream notice and license,
qualified against official `IBM/plex` commit
`bf260093582f04622aacc1e9f9ca604d7ccd0c42`. Its line endings, wrapping, and
trailing whitespace are normalized; its whitespace-normalized text hash is
byte-equivalent to upstream at
`9c758d702b6213f87034cc3af121dbc681472a77ef88267d88f9310c0cd7a0dd`.

## Reimplemented surface

The source boundary, route copy, metadata, asset custody, and redirect intent
were extracted from the files listed in `EXTRACTION_MANIFEST.json`. The public
implementation itself was rewritten as dependency-free static HTML and CSS.
This removed the private monorepo's Next.js, Tailwind, React, `@vela/*`, icon,
projection, and UI-package dependencies.

The standalone candidate publishes exactly one canonical sitemap URL, one
static 404 fallback, one Problems link, and one exact signed-release link. It
has no runtime JavaScript file.

## Exclusions

- All six private Zodiak, Gambetta, and Switzer Fontshare/ITF WOFF2 files.
- Tailwind Plus Radiant-derived sections and any commercial/private registry
  source.
- All `@vela/ui`, `@vela/brand`, and `@vela/projection-data` imports.
- All Problems components, WebMCP, hosted Work, database, auth, projection,
  dashboard, and scientific-state code.
- The unused contact painting, removed essay assets, and private Git history.

These are removals from the extraction set, not mutations of private
`vela-web`.

## Release binding

The candidate pins Vela `0.977.6`, Protocol `1`, signed tag object
`4a562d4529f6a329d938fc427bc73c4cbff90767`, peeled release commit
`9ac8e7730bfb63a3b8eb1d2e1d91081c3e703c59`, tree
`1332713f627ac73c235e4f9a7afe206499717154`, and protocol root
`sha256:bf1ef68165bccbc4d2e8a854f78c70448cc7de771bac23329f7a8ca115303f56`.

The tag and peeled commit were refreshed read-only with `git ls-remote` on
2026-08-27. No release or tag was created or changed.
