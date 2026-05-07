# Stage 1: Base
FROM node:20-alpine AS base
LABEL org.opencontainers.image.source="https://github.com/adminvpshub/Do-Cu-Viet-Anh"
WORKDIR /app
COPY package.json package-lock.json* ./

# Stage 2: Development
FROM base AS dev
RUN npm ci || npm install
COPY . .
ENV PORT=3002
CMD ["npm", "run", "dev"]

# Stage 3: Builder for production
FROM base AS builder
RUN npm ci || npm install
COPY . .
RUN npm run build

# Stage 4: Production runner (Nginx for static export)
FROM nginx:alpine AS runner
RUN apk add --no-cache tzdata && \
    ln -snf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime && \
    echo "Asia/Ho_Chi_Minh" > /etc/timezone
ENV TZ=Asia/Ho_Chi_Minh
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static export from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom nginx log format and config
COPY nginx-log-format.conf /etc/nginx/conf.d/00-nginx-log-format.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3002
CMD ["nginx", "-g", "daemon off;"]
