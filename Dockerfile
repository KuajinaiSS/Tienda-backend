# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.12.0
ARG PNPM_VERSION=10.11.0

# Base stage
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

# Usa cache de npm para instalar pnpm
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

################################################################################
# Instala todas las dependencias y genera Prisma Client
FROM base as build

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma

# Usa cache de pnpm para acelerar instalaciones
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Genera Prisma Client (¡con todas las dependencias presentes!)
RUN pnpm exec prisma generate

COPY . .

RUN pnpm run build

################################################################################
# Imagen final de producción: solo lo necesario para correr
FROM base as final

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma
COPY --from=build /usr/src/app/node_modules/@prisma ./node_modules/@prisma

RUN chown -R node:node /usr/src/app

USER node

EXPOSE 4000

CMD pnpm start:prod
