# Monorepo Project with 2 Microservices and REDIS Broker Message

## Description
This project is an example of how to create a monorepo that contains two microservices built with Node.js and using Redis as a message broker. Docker Compose is also used to facilitate the deployment of the services.


## Requisitos
- Node.js 16 o higher
- Yarn
- Docker y Docker Compose
- Make (optional)

### REDIS GUI (optional)
You can use the RedisInsight GUI to connect to your Redis instance

## Instalación
1. Clone the repository
2. Run yarn install in the root of the project to install the dependencies for each microservice
3. Run yarn build in the root of the project to create the dist folder for each microservice
4. Run docker-compose up to start the Redis and two microservices containers
5. Check on the console that the microservices ok messages were executed

## Ejecucion
### CURL
You can execute the message from the publisher using curl:

```bash
curl -X POST -H "Content-Type: application/json" -d '{message: "your message"}' http://localhost:3000
```

### Make
You can use the makefile script by running:

1. This will execute the default message 'Hello world'
```bash
make send
```
2. Pass your own message
```bash
make send msg="your message"
```