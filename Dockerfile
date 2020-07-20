ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS build
WORKDIR /usr/local/src
ARG env=production
ENV NODE_ENV=${env}
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn test --watchAll=false \
 && yarn build

FROM caddy:2
WORKDIR /var/www/html
COPY --from=build /usr/local/src/build .
COPY Caddyfile /etc/caddy
EXPOSE 80 443
