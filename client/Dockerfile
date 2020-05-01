FROM node:alpine as builder

WORKDIR '/code'
COPY ./package.json ./

RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 8080
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /code/build /usr/share/nginx/html
