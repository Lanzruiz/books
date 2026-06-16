


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

## Building and running using SaaS

First, must sign up to get your credentials in order to get free access to the SaaS version.

Next, build the application

```
  $ git clone https://github.com/rcherara/rcherara-spring-cloud-microservice.git
  $ cd rcherara-spring-cloud-microservice
  $ mvn install
```

Next, you can launch the services using Docker Compose:

```
 $ docker-compose up -d
```

# Modules:

- [x] config-service
- [x] discovery-service
- [x] gateway-service
- [x] config-repo
- [x] vehicle-service
- [x] vehicle-ui-web
- [ ] vehicle-ui-mobile
- [ ] dealership-service
- [ ] transaction-service
- [X] admin-dashboard
- [ ] Shell Scripts  files (startRabbit, startDevVault, set-local-env-git, install-letsencrypt-cert, create-services, create-release-branch)
- [ ] RabbitMq 
- [ ] Kafka
- [x] UI React
- [ ] UI AngularJS
- [ ] CI / CD - Jenkins
- [ ] CI / CD - Github Workflows 
- [ ] CI / CD - Travis CI
- [ ] CI / CD - Kubernetes (config, configmap, deployment, service, support-bundle, replicated-app)
- [ ] CI / CD - Docker, Docker Compose
- [ ] CI / CD - Jenkins X
- [ ] Auth-server
- [ ] IaC

# Important endpoints

Run locally with Maven, Visual Studio Code, STS, Eclipse or IntelliJ:

:point_right: Gateway http://localhost:8080  
:point_right: Eureka Discovery Dashboard http://localhost:8761  
:point_right: Config Server http://localhost:7761  
:point_right: Spring Admin Dashboard http://localhost:9761  
:point_right: Vehicle service http://localhost:8081  
:point_right: Dealership service http://localhost:8082  
:point_right: Transaction service http://localhost:8083  
:point_right: RabbitMq (username/password: guest/guest) http://localhost:15000 



Run with docker-compose:

:point_right: Gateway http://localhost:5080  
:point_right: Eureka Discovery Dashboard http://localhost:5761  
:point_right: Config Server http://localhost:5760  
:point_right: Spring Admin Dashboard http://localhost:5761  
:point_right: Vehicle service http://localhost:5081  
:point_right: Dealership service http://localhost:5082  
:point_right: Transaction service http://localhost:5083  
:point_right: RabbitMq (username/password: guest/guest) http://localhost:15000 


## Spring Cloud Config Server

Spring Cloud Config Server offers the following benefits:

- HTTP resource-based API for external configuration (name-value pairs or equivalent YAML content)

- Encrypt and decrypt property values (symmetric or asymmetric)

- Embeddable easily in a Spring Boot application using @EnableConfigServer

## Spring Cloud Config Client

Spring Cloud Config Client lets you:

- Bind to the Config Server and initialize Spring Environment with remote property sources.

- Encrypt and decrypt property values (symmetric or asymmetric).

- @RefreshScope for Spring @Beans that want to be re-initialized when configuration changes.

Use management endpoints:

  - /env for updating Environment and rebinding @ConfigurationProperties and log levels.
  - /refresh for refreshing the @RefreshScope beans.
  - /restart for restarting the Spring context (disabled by default).
  - /pause and /resume for calling the Lifecycle methods (stop() and start() on the ApplicationContext).

Bootstrap application context: It binds to the Config Server and decrypts property values.

## Using the Swagger UI

The services are Swagger "enabled".

Open the url http://${DOCKER_HOST_IP}:<SERVICE-PORT>/swagger-ui.html

All Swagger Resources(groups) : http://localhost:<SERVICE-PORT>/swagger-resources
Swagger UI endpoint: http://localhost:<SERVICE-PORT>/swagger-ui.html
Swagger docs endpoint: http://localhost:<SERVICE-PORT>/v2/api-docs

## Monitor services configuration 

- Dealership-service   : curl -s http://localhost:<SERVICE-PORT>/monitor/dealership-service | jq '.'
- Discovery-service.   : curl -s http://localhost:<SERVICE-PORT>/monitor/discovery-service | jq '.'
- Gateway-service.     : curl -s http://localhost:<SERVICE-PORT>/monitor/gateway-service | jq '.'
- Transaction-service. : curl -s http://localhost:<SERVICE-PORT>/monitor/transaction-service | jq '.'
- Vehicle-service.yml. : curl -s http://localhost:<SERVICE-PORT>/monitor/vehicle-service | jq '.'

## Build and run service

### Before you start

1. Be sure to clone the project with the command: git clone --recurse-submodules <url>
2. Install Docker along with Docker Compose.
3. Build the project: mvn clean package -DskipTests

```shell
mkdir rcherara
cd rcherara
git clone --recurse-submodules <url>
cd rcherara-spring-cloud-microservice
mvn clean package -DskipTests
```

### Vehicle service

To run locally:
  ```shell
  $ cd vehicle-service
  $ java -jar target/vehicle-service-0.0.1.BUILD-SNAPSHOT.jar
  ```

### Dealership service

To run locally:
```shell
cd dealership-service
java -jar target/dealership-service-0.0.1.BUILD-SNAPSHOT.jar
```
### Transaction service

To run locally:
```shell
cd transaction-service
java -jar target/transaction-service-0.0.1.BUILD-SNAPSHOT.jar
```

### Gateway Server

To run locally:
```shell
cd gateway-service
java -jar target/gateway-service-0.0.1.BUILD-SNAPSHOT.jar
```

###  Discovery server

To run locally:
```shell
cd discovery-service
java -jar target/discovery-service-0.0.1.BUILD-SNAPSHOT.jar
```

###  Admin server

To run locally:
```shell
cd admin-service
java -jar target/admin-service-0.0.1.BUILD-SNAPSHOT.jar
```


# Guides

The following guides illustrate how to use some features concretely:
* [Pattern: API Gateway / Backends for Frontends](https://microservices.io/patterns/apigateway.html)
* [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html/)
* [Centralized Configuration](https://spring.io/guides/gs/centralized-configuration/)
* [Event-Driven Data Management for Microservices](https://www.nginx.com/blog/event-driven-data-management-microservices/)
* [Asynchronous microservices](http://eventuate.io/whyeventdriven.html)

## Reference

1.  [Microservice Architecture](https://microservices.io/patterns/microservices.html)
2.  [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/reference/html/)
3.  [Minishift– Cherara Reddag blog](rcherara.ca/installing-minishift-on-macos/)
4.  [About Spring cloud security OAuth2](http://blog.spring-cloud.io/blog/oauth-authorize.html)
5.  [Dive into Eureka – nobodyiam's blog](http://nobodyiam.com/2016/06/25/dive-into-eureka/)
6.  [About Spring cloud security OAuth2](http://blog.spring-cloud.io/blog/oauth-authorize.html)
7.  [Synthesis-Based Software Architecture Design](https://slideplayer.com/slide/1672922/)
8.  [OAuth 2.0 Login](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/htmlsingle/#oauth2login)
9.  [OAuth 2.0 Resource Server](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/htmlsingle/#oauth2resourceserver)
10. [Spring Cloud Security](https://cloud.spring.io/spring-cloud-static/spring-cloud-security/2.2.0.M3/reference/html/)
11. [Spring Cloud Config Server](https://cloud.spring.io/spring-cloud-config/multi/multi__spring_cloud_config_server.html)
12. [Spring Cloud](https://spring.io/projects/spring-cloud)
13. [The Twelve Factors](https://12factor.net)
14. [Maximize Observability of your CI/CD Pipeline with LogDNA](https://logdna.com/maximize-observability-of-your-ci-cd-pipeline-with-logdna/)
15. [Set Up A CI/CD Pipeline With Kubernetes ](https://www.linux.com/tutorials/set-cicd-pipeline-kubernetes-part-1-overview/)
16. [Database Internationalization](https://medium.com/walkin/database-internationalization-i18n-localization-l10n-design-patterns-94ff372375c6)
17. [The Exagonal Architecture](https://beyondxscratch.com/2017/08/19/decoupling-your-technical-code-from-your-business-logic-with-the-hexagonal-architecture-hexarch/)
# Help me to get the app famous!

Eco-system  for a car dealer based on a microservices architecture is open source and want to give to you the basics knowledge about cloud native application, architecture, DevOps with Docker, Kubernate Cloud, Spring Java, React Typescript and  technologies. A star to this project will be appreciate!

## Got questions?

### Author
CHERARA REDDAH.

* [Cherara Reddah Linkedin](https://www.linkedin.com/in/cherarareddah/)
* [Cherara Reddah Bog](https://rcherara.ca)