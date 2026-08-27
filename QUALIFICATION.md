# Candidate qualification

Qualification date: 2026-08-27 (America/Toronto)

## Automated gates

All of the following passed on Bun `1.3.12`:

```text
bun install --frozen-lockfile
bun run check
bun run test                  5 pass / 0 fail / 13 assertions
bun run build                 12-file static export
git diff --check
```

The boundary/license check found exactly one WOFF2 file and matched it to IBM
Plex Mono SHA-256
`c36f509c0a8f9f85f29cb44bc8701d8a9e0b14c499e77a884f789ead7093a7ac`.
It rejected private workspace imports, database/auth markers, Next/React/
Tailwind runtime dependencies, ITF font names, and release-identity drift.

Two consecutive clean static builds were byte-identical. The SHA-256 of the
sorted 12-file build digest list was
`362458f35773496889b7b64e3ef3b7af2e0741e8b7dafca7b85cbbb94f6a9fb0`.

## Browser qualification

The built `dist/` output was served locally and checked in the in-app Browser.

- Desktop and 320, 375, 414, and 768 CSS-pixel widths rendered without
  horizontal or vertical scroll.
- At every tested width the two destination labels remained one line and all
  three masthead targets were 44px tall.
- A 384px CSS viewport qualified the effective layout pressure of 200% zoom on
  a 768px baseline.
- The keyboard focus indicator computed as a solid 2px outline with 4px
  offset.
- Reduced motion collapsed animation and transitions to 0.01ms.
- Forced colors removed the painting and produced system Canvas/LinkText
  colors.
- Print removed the painting and masthead, released the viewport height, and
  made the `Vela` heading visible.
- An unknown deep link returned the static Vela 404 surface with one H1 and one
  route home.
- Browser console: 0 warnings, 0 errors.

## Hallmark review

Pre-emit self-critique: Philosophy 5, Hierarchy 5, Execution 5, Specificity 5,
Restraint 5, Variety 4. The 58-gate slop review passed after adding explicit
disabled-link styling and the final mobile/token/contrast stamp.

## Not performed

No GitHub repository was created. No code was pushed. No Vercel project or
deployment was created. No domain was attached. No DNS was changed. Private
`vela-web` was not modified. Those remain the supervisor-owned steps in
`CUTOVER.md`.
