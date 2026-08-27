# vela.space cutover runbook

This is an execution runbook, not evidence that a cutover occurred. Repository
creation, deployment, domain attachment, DNS, and private-repository archival
remain supervisor-owned actions requiring action-time authorization.

## 1. Establish public source custody

1. Confirm this checkout is clean and the qualified candidate commit is the
   exact commit intended for publication.
2. Create the empty public repository `vela-science/www` without an generated
   README, license, or `.gitignore`.
3. Add that repository as the candidate checkout's `origin` and push the exact
   qualified `main` commit.
4. Enable the `verify` workflow and require it on protected `main`.
5. Record local commit, remote `main`, successful workflow SHA, and tree SHA.

Do not copy history from the private monorepo: `EXTRACTION_MANIFEST.md` carries
the source binding without publishing unrelated private Git objects.

## 2. Create a noncanonical Vercel preview

1. Create a new Vercel project owned by the correct Vela team and linked only
   to `vela-science/www`.
2. Use the repository root, Bun install command, `bun run build`, and `dist`
   output exactly as declared in `vercel.json`.
3. Deploy the qualified public commit to a noncanonical Vercel URL.
4. Confirm provider `gitSource` SHA equals public `main`; do not accept a local
   CLI upload with unknown source custody as the final deployment.
5. Run `bun run verify` from a clean clone and compare every file in `dist/`
   with a second build by SHA-256.

## 3. Qualify the preview

Verify `/`, `/404.html`, `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`,
`/release.json`, and the redirect set. Inspect desktop, 768px, 414px, 375px,
320px, 200% zoom, forced colors, reduced motion, print, keyboard focus, and an
unknown deep link. Confirm:

- the opening is exactly one viewport with no scroll;
- both top-level links remain one line and at least 44px tall;
- the Problems link resolves to `problems.science/problems`;
- the release link resolves to signed tag `v0.977.6` and peeled commit
  `9ac8e7730bfb63a3b8eb1d2e1d91081c3e703c59`;
- no private configuration or dependency appears in output;
- response headers match `vercel.json`.

## 4. Canonical domain cutover

1. Preserve the current `vela-web-www` production deployment as rollback.
2. Attach `vela.space` and `www.vela.space` to the new `www` Vercel project.
3. Apply only the DNS records Vercel reports for those exact domains.
4. Wait for certificate readiness and verify canonical/redirect behavior from
   an uncached client.
5. Record domain configuration, deployment ID, deployment URL, Git source SHA,
   public repository SHA/tree, response headers, and qualification timestamp.

## 5. Retirement gate

Only after the canonical domain serves the exact qualified public commit and
the rollback window has passed:

1. remove the `vela.space` domains from the old private project;
2. verify no production or rollback deployment depends on private `apps/www`;
3. hand the evidence to the supervisor for the separate `vela-web` archival
   decision.

Rollback before retirement is domain reassignment to the preserved
`vela-web-www` deployment. Do not archive or delete the old project before that
path has been tested.
