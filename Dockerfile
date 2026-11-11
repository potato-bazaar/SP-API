FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
COPY client/package.json client/package.json
COPY server/package.json server/package.json
RUN npm install --omit=dev --workspace server --include-workspace-root --no-audit --no-fund
COPY client/src client/src
COPY client/dist client/dist
COPY server/src server/src
ENV NODE_ENV=production PORT=8787
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:8787/healthz || exit 1
CMD ["node", "server/src/server.js"]
