# Qualification

The source boundary is four public files: HTML, CSS, the painting, and the Vela
mark. The build has no runtime JavaScript, dependency on private source,
bundled font, link, route, section, or application surface.

`bun run verify` checks the exact boundary and rebuilds `dist/`. Chrome visual
inspection confirms a one-viewport hero with the modern Vela lockup and no
scroll at the current desktop viewport. Mobile-width verification remains a
release gate before canonical cutover.
