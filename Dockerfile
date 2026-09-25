# syntax=docker/dockerfile:1

FROM node:22-alpine AS base

# ---- Dependencies -----------------------------------------------------
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* .npmrc ./
RUN npm ci

# ---- Build --------------------------------------------------------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Prisma client is generated even though no route currently imports it, so
# the build never breaks the moment a database feature gets added later.
RUN npx prisma generate

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Run ------------------------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# `output: 'standalone'` in next.config.js makes Next.js copy only the
# node_modules it actually needs into .next/standalone, so the final image
# doesn't carry the full dependency tree.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
