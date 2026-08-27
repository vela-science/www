# Licensing and asset custody

This repository is intentionally smaller than its private extraction source.
Only material with a clear public-redistribution path is present.

## Software

Software source is offered under Apache-2.0 OR MIT. Complete license texts are
in `LICENSE-APACHE` and `LICENSE-MIT`.

## Editorial content

The original editorial painting and its social crop are offered under CC BY
4.0, copyright 2026 William Blair, as stated in `LICENSE-CONTENT.md`.

## Vela name and marks

The Vela name, wordmark, sail, and related identifiers are excluded from the
software and content licenses. All trademark rights are reserved. The included
sail is the project-owned canonical mark. See `TRADEMARKS.md`.

## IBM Plex Mono

`src/assets/fonts/ibm-plex-mono-400-latin.woff2` is IBM Plex Mono under the SIL
Open Font License 1.1. Its exact SHA-256 is:

```text
c36f509c0a8f9f85f29cb44bc8701d8a9e0b14c499e77a884f789ead7093a7ac
```

The complete upstream copyright notice and license are preserved in
`licenses/OFL-IBM-PLEX.txt`. The notice was qualified against IBM's official
`IBM/plex` repository at commit `bf260093582f04622aacc1e9f9ca604d7ccd0c42`.
The upstream license byte hash is
`7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da`;
the repository copy normalizes line endings, line wrapping, and trailing
whitespace only, with a whitespace-normalized text hash of
`9c758d702b6213f87034cc3af121dbc681472a77ef88267d88f9310c0cd7a0dd` on
both texts. The font byte is unmodified from the private source manifest.

## Explicit exclusions

No Fontshare/Indian Type Foundry file is included. In particular, the private
source's Zodiak, Gambetta, and Switzer WOFF2 files are excluded because the ITF
Free Font License permits licensed end-product self-hosting but does not permit
their redistribution through this public source repository.

No Tailwind Plus or shadcn.io Pro source or derivative component is included.
The masthead, destination rail, 404 treatment, build, and responsive CSS were
rewritten as small repository-owned static HTML and CSS. No `@vela/ui`
component or `apps/problems` component was copied.

No third-party stock photograph, icon set, JavaScript library, database client,
or authentication library is included.
