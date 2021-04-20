## Relational Database Service

-  Provides a connection with the selected database

```
Environment Variables:
DB_NAME= Database name
DB_USERNAME= Database username
DB_PASSWORD= Database password
DB_URL= Hostname
DB_PORT= Database port
```

### How to use
`npm install`
or 
`yarn install`

In this moment, you should be with postgres running in your machine. The `.yml` to use with docker-compose is available in the root directory, folder `resources`.

`yarn dev`
or
`npm run dev`

#### Endpoints
- /login
POST
Parameters:
    - username: string
Return:
    - id: uuid
    - username: string
    - password: string encrypted
    - createdAt: date
    - updatedAt: date

- /signup
Parameters:
    - username: string
    - password: string
Return:
    - id: uuid
    - username: string
    - password: string encrypted
    - createdAt: date
    - updatedAt: date