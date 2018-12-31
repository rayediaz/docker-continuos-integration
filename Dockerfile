FROM node:10-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

EXPOSE 9000

CMD [ "node", "index.js" ]