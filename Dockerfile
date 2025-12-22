FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install --no-audit --no-fund; fi

# Copy source and build
COPY . .
RUN npm run build

# Runtime image: serve static dist with a tiny Node server (no Caddy needed)
FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production

# Pin serve version for repeatable deploys
RUN npm i -g serve@14.2.4

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["sh", "-c", "serve -s dist -l ${PORT:-3000}"]


