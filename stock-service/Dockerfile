FROM node:14.15.4

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ARG STOCK_API
ARG AMQP_URL

ENV STOCK_API $STOCK_API
ENV AMQP_URL $AMQP_URL

COPY . .

EXPOSE 3004

CMD [ "node", "./src/server.js" ]
