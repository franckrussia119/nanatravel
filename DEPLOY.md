# Deploying NanaTravelServices

## What was fixed

This project was exported from a hosted dev sandbox and had a few things
tied to that platform, which would break or behave oddly anywhere else:

- **`next.config.js`** read `NEXT_DIST_DIR` / `NEXT_OUTPUT_MODE` env vars set
  by that platform and pointed `allowedDevOrigins` at its preview domain.
  Replaced with a plain config that sets `output: 'standalone'` (needed for
  the small Docker image below).
- **`app/layout.tsx`** loaded `https://apps.abacus.ai/chatllm/appllm-lib.js`,
  a chat widget tied to that platform's account. Removed.
- **`instrumentation-client.js`** silently POSTed client errors to
  `/__abacus/client-error`, an endpoint that only exists on that platform.
  Removed.
- **`.yarnrc.yml`** pointed `globalFolder` at `/opt/hostedapp/...`, a path
  that only exists on that platform's containers. Removed — `npm` is used
  instead (see below), with a `package-lock.json` now committed.
- Peer-dependency conflict: `cmdk@1.0.0` declares a peer dep on React 18,
  but the project uses React 19. `npm install` fails on this by default, so
  a `.npmrc` with `legacy-peer-deps=true` is included so `npm ci`/`npm install`
  work the same way locally and in Docker.
- Added `Dockerfile`, `.dockerignore`, `.gitignore`, `.env.example`.

I verified with `tsc --noEmit` that the whole project type-checks cleanly.
`next build` itself couldn't be run to completion in my sandbox because its
network is locked down and blocks `fonts.googleapis.com` (used by
`next/font/google` at build time) — that block is specific to my sandbox,
not your build environment. A normal Coolify build server has outbound
internet and will fetch the fonts fine. If you ever deploy behind a
firewall that blocks Google Fonts, switch `app/layout.tsx` to
`next/font/local` with the font files checked into the repo.

## Push to GitHub

```bash
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Coolify

1. **New Resource → Application → Public/Private Git Repository**, point it
   at your GitHub repo.
2. **Build Pack: Dockerfile** (Coolify will detect the `Dockerfile` at the
   repo root automatically).
3. **Port: 3000** (matches `EXPOSE 3000` / `PORT=3000` in the Dockerfile).
4. **Environment Variables** — copy the keys from `.env.example`:
   - `RESEND_API_KEY`, `CONTACT_NOTIFY_EMAIL`, `CONTACT_FROM_EMAIL` — only
     needed if you want the contact form (`app/api/contact/route.ts`) to
     actually send emails via Resend. Without them it just logs enquiries
     server-side.
   - `DATABASE_URL` — not required. `prisma/schema.prisma` has no models
     yet and nothing in the app imports `lib/db.ts`, so no database needs
     to be provisioned for this app to run today.
5. Deploy. Coolify will build the image from the Dockerfile and run
   `node server.js` on port 3000.

No database, no separate build server, and no extra services are required
for the site to work as it stands.
