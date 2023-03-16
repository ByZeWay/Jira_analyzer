FROM node:16.14.2-alpine AS builder
RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli@15.2.1

COPY . /app
CMD ng serve --host 0.0.0.0 --port 4200
