## Stock Service

- Responsible for call a third party api to check stock's quote
- This service gets a CSV from `https://stooq.com`, parses the value and send to RabbitMQ the information, which will be delivered to the chat room.

```
Environment Variables:
STOCK_API= URL to stooq (https://stooq.com)
AMQP_URL= URL to RabbitMQ (amqp://user:pass@host:port)
```

In this moment, RabbitMQ should be running. The `.yml` to use with docker-compose is available in the root directory, folder `resources`.

### How to use

`npm install`
or 
`yarn install`

And
`yarn dev`
or
`npm run dev`

The return from Stock API is: `Symbol,Date,Time,Open,High,Low,Close,Volume`. The return from chat was selected the `Close` option.
Your service is ready.