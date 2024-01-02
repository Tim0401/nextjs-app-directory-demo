FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /workdir

COPY package*.json ./
RUN npm install

FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat protobuf-dev protoc
WORKDIR /workdir
COPY --from=deps /workdir/node_modules ./node_modules
COPY . .

# RUN npm run grpc:generate
# RUN npm run build

FROM node:18-alpine AS production
WORKDIR /workdir
RUN apk add --no-cache protobuf-dev protoc

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /workdir/next.config.js ./
COPY --from=builder /workdir/utils/telemetry/Instrumentation.js ./
COPY --from=builder /workdir/public ./public
COPY --from=builder /workdir/package.json ./package.json
COPY --from=deps /workdir/node_modules ./node_modules

COPY --from=builder --chown=nextjs:nodejs /workdir/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /workdir/.next/static ./.next/static

USER nextjs

ENV PORT 8080
EXPOSE ${PORT}

ENTRYPOINT npm start
