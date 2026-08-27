# vela.space cutover

1. Require a green `verify` run for the exact public `main` commit.
2. Create a Vercel preview from `vela-science/www`, never from a local upload.
3. Confirm the preview is only the full-screen hero at desktop and mobile sizes.
4. Attach `vela.space` and `www.vela.space` only after action-time approval.
5. Preserve the previous deployment until the canonical response and certificate
   are verified, then remove the old domain binding.
