


# Best Practices of a Microservice Architecture with Spring Boot, GraphQL, Docker, MongoDB, PostresSQL.

This repository is Dealer Management Systems based on a microservices architecture.

The architecture supports the following technologies: 

  * Frameworks - Spring Boot, GraphQL Apollo.
  * Databases - PostgreSQL, MongoDB
  * API Management : GraphQL Apollo, Swagger
  * Message brokers - Apache Kafka
  * Server Side - Spring Boot, Maven, Hibernate, Liquibase, Kafka
  * CI / CD - Docker, Docker Compose

# The Key Requirements

  * Maximize team autonomy.
  * Optimize for development speed.
  * Focus on automation (Automate everything).
  * Provide flexibility without compromising consistency.
  * Built for resilience.
  * Simplified maintenance.
  * Application portability.
  * Application auto-scaling.


# Architecture

The following diagram shows the targert platform architecture.:

![Targert platform architecture](/docs/images/architecture.png)

Since an auto dealership application uses the Microservice architecture pattern for vehicle details data is spread over multiple services. For example,

- Book Service - basic information about the book
- Author service - store the information about the author
- Publisher service - publishing list books

Consequently, the code that displays the vehicle details needs to fetch information from all of these services.

Each service is:

* :small_orange_diamond: **Highly maintainable and testable** enables rapid and frequent development and deployment.

* :small_orange_diamond: Loosely coupled with other services - enables a team to work independently the majority of time on their service(s) without being impacted by changes to other services and without affecting other services.

* :small_orange_diamond: Independently deployable - enables a team to deploy their service without having to coordinate other service

* :small_orange_diamond: Capable of being developed by a small team - essential for high productivity by avoiding the high communication head of large teams. 

* :small_orange_diamond: Services communicate using either synchronous protocols such as HTTP/REST. 
* :small_orange_diamond: Services can be developed and deployed independently of one another. 

* :small_orange_diamond: Each service has its own database in order to be decoupled from other services. 

* :small_orange_diamond: Asynchronous Java API + Reactive Programming Model. 



## Building and running the application

This is a Maven project. However, you  need to have installed :
  - Java Development Kit >= 11
  - GraphQL
  - Express
  - Docker
  - Maven


The details of how to build and run the services depend slightly on whether you are using  
  - SaaS (Software as a Service)
  - IaaS (Infrastructure as a service)
  - PaaS (Platform as a Service)
  - Local

## Building and running the Services

Clone the Repo

```
  $ git clone https://github.com/Lanzruiz/books.git
```

Run the Kafka

```
  $ cd kafka
  $ docker compose up
```
Run the Mongodb

```
  $ cd mongodb
  $ docker compose up
```

Run the Postgres

```
  $ cd postgres
  $ docker compose up
```


Next, you can launch the services using Docker Compose:


Launch the Book Service
```
 $ cd book-service
 $ ./mvnw spring-boot:run
```

Launch the Author Service
```
 $ cd author-service
 $ yarn run up
```

Launch the Publish Service
```
 $ cd publish-service
 $ yarn run up
```


# Important endpoints

Run locally with Maven,  Eclipse or IntelliJ:

Book Service

:point_right: Gateway http://localhost:8080  
:point_right: Adding Book post http://localhost:8081/api/book
:point_right: Get all Books get http://localhost:8081/api/book
:point_right: Get the Book by Id get http://localhost:8081/api/{id}
:point_right: Delete a Book by Id delete http://localhost:8081/api/book{id}
:point_right: Update a Book update http://localhost:8081/api/book{id}

Author Service

:point_right: Apollo http://localhost:4001

Publish Service

:point_right: Apollo http://localhost:4001


## Using the Swagger UI

The services are Swagger "enabled".

Open the url http://${DOCKER_HOST_IP}:<SERVICE-PORT>/swagger-ui.html

All Swagger Resources(groups) : http://localhost:<SERVICE-PORT>/swagger-resources
Swagger UI endpoint: http://localhost:<SERVICE-PORT>/swagger-ui.html
Swagger docs endpoint: http://localhost:<SERVICE-PORT>/v2/api-docs


# Help me to get the app famous!

Eco-system  for a car dealer based on a microservices architecture is open source and want to give to you the basics knowledge about cloud native application, architecture, DevOps with Docker, Kubernate Cloud, Spring Java, React Typescript and  technologies. A star to this project will be appreciate!

## Got questions?

### Author
Lanz Ruiz.
