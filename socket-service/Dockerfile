FROM node:14.15.4

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ARG AMQP_URL

ENV AMQP_URL $AMQP_URL

COPY . .

EXPOSE 3002

CMD [ "node", "./src/server.js" ]
