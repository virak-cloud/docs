###################################################
#                   Global Args                   #
###################################################
ARG BASE_PKG="libjpeg-turbo-dev libpng-dev libpq-dev libzip-dev tzdata npm sed"
ARG TEMP_PKG="git bash bash-completion nano"



###################################################
#                   composer_base                 #
###################################################
FROM node:20.11.0-alpine3.18 AS npm_base

ARG BASE_PKG
ARG TEMP_PKG
ARG BUILD_MODE
ARG DOCS_ENV_FILE

WORKDIR /app

RUN apk add --no-cache ${BASE_PKG} && \
        apk add --no-cache ${TEMP_PKG}

RUN addgroup -S npm \
        && adduser -S npm -G npm \
        && chown -R npm /app

USER npm
COPY --chown=npm package.json ./


RUN npm install
COPY --chown=npm . .
RUN echo "${DOCS_ENV_FILE}" > .env.master

RUN npm run docs:build:master

RUN echo ${BUILD_MODE:dev}
###################################################
#                   web_server                    #
###################################################
FROM nginx:alpine AS docs_web_server

EXPOSE 80

ARG TEMP_PKG

WORKDIR /app

RUN  apk add --no-cache ${TEMP_PKG}

ENV TZ=Asia/Tehran
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && \
        echo $TZ > /etc/timezone

COPY .docker/production/nginx.conf /etc/nginx/templates/default.conf.template
COPY --chown=nginx --from=npm_base /app .
