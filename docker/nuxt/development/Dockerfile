FROM node:10.15.1-alpine as builder

ENV NODE_ENV=development

WORKDIR /app
ADD package.json ./
ADD yarn.lock ./
RUN yarn install --frozen-lockfile --production=false
ADD app ./app
ADD server ./
ADD nuxt.config.js ./
ADD tsconfig.json ./
RUN yarn run build

FROM node:10.15.1-alpine

ENV NODE_ENV=production

WORKDIR /app
ADD package.json ./
ADD yarn.lock ./
RUN yarn install --frozen-lockfile --production=false
# TODO: Set production flag as true
ADD server ./server
ADD nuxt.config.js ./
ADD app/static ./app/static

COPY --from=builder ./app/.nuxt ./.nuxt/

EXPOSE 8080
CMD ["yarn", "start"]
