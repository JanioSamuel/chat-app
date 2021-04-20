# Chat Application

- A chat application with one room where multiple users can access, talk and get stocks information.
- To get information about stocks, type `/stock=stock_code` and the Stock Bot will deliver quote's information :)
```
Example:
/stock=appl.us

Response:
APPL.US quote is $134.16 per share
```

### Services

- Auth Service
- Relational Database Service
- Socket Service
- Stock Service
- Frontend

### Broker
- RabbitMQ

### Language
- Backend: NodeJS
- Frontend: ReactJS


## Run Application with Docker Compose

In the root project run the following command: `docker-compose up`


Or if you want to build the development environment, follow the steps bellow.

## Build Dev Environment
Follow these steps to run your application:

If you use docker-compose, please, run the files inside `resources` folder.

`docker-compose -f rabbitmq.yml up`
`docker-compose -f postgres.yml up`

Inside of the files you will find the environment variables, which will be used in other projects.

After this, run the projects in the sequence below:


1 - Relational DB Service [README here](./relational-db-service)

2 - Auth Service [README here](./auth-service)

3 - Stock Service [README here](./stock-service)

4 - Socket Service [README here](./socket-service)

5 - Frontend [README here](./chat-frontend)

After, go to `http://localhost:3000` and enjoy!