# Extraction manifest

The standalone public source was extracted from private `vela-web` commit
`b7de325c0c59bb0d83f0f00c8f181dcf2218def2` without mutating that checkout or
its two stashes.

Only two byte-identical assets remain:

| Asset | SHA-256 |
| --- | --- |
| `src/assets/home-night-passage.webp` | `ff3d33da757c0dc296380051d215a4d9d87c820f0b4d6d4ac904a7f8b4bfc1ac` |
| `src/assets/vela-symbol.svg` | `1517cf17797bc8eb92e27d54152cbbd01190fd457458a14b253573274e0e6ffb` |

Everything else from the old site was excluded or removed: page sections,
copy, essays, navigation, application links, route aliases, the old styling
system, fonts, JavaScript, product components, data access, and private source.
