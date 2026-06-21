# Deploy to Vercel

This project is configured to deploy to Vercel using the Nitro `vercel` preset.

## One-time setup
1. Push the code to GitHub/GitLab/Bitbucket.
2. Go to https://vercel.com/new and import the repo.
3. In the Vercel import screen:
   - **Framework Preset:** Other
   - **Build Command:** `vite build` (already set in `vercel.json`)
   - **Output Directory:** `.vercel/output` (already set in `vercel.json`)
   - **Install Command:** `npm install` (or `bun install` / `pnpm install`)
4. Click **Deploy**.

## How it works
- `vite.config.ts` sets `nitro: { preset: "vercel" }`.
- When Vercel runs `vite build`, Nitro emits a Vercel Build Output (v3) into `.vercel/output`, which Vercel picks up automatically.
- Inside the Lovable sandbox, the preset is forced to Cloudflare, so Lovable preview keeps working unchanged.

## Environment variables
Add any `VITE_*` or server env vars in **Vercel → Project → Settings → Environment Variables**, then redeploy.

## CLI alternative
```bash
npm i -g vercel
vercel        # first deploy (creates project)
vercel --prod # production deploy
```
