# Caching with Redis and NestJS 🚀

## Description

This project demonstrates how to implement caching using Redis in a NestJS application. The goal is to showcase best practices for optimizing the performance of a web application by using cache to store and retrieve frequently accessed data.

In addition to Redis, this project includes a basic API built with NestJS and uses PostgreSQL as the primary database. The infrastructure is managed with Docker and Docker Compose, which simplifies dependency and environment management.

The project also features a seeder that populates the database with 20 sample records upon initialization, using Faker to generate realistic product data.

## Technologies

- **NestJS**: A framework for Node.js that helps build scalable and efficient applications.
- **Redis**: An in-memory database used as a cache to speed up data access.
- **PostgreSQL**: A powerful, open-source object-relational database system used for persistent data storage.
- **Docker**: A platform to build, deploy, and run applications in containers.
- **Docker Compose**: A tool for defining and running multi-container Docker applications.

## Project Structure

- **src/**: Contains the source code for the NestJS application.
- **docker-compose.yaml**: Docker Compose configuration file for defining the services.
- **dockerfile**: File to create the Docker image for the NestJS application.

## Prerequisites

Before starting the project, ensure you have Docker and Docker Compose installed on your machine. You can download and install Docker from the [official website](https://www.docker.com/get-started).

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/mateusdotjs/caching-redis
   cd caching-redis
   ```

2. **Start the containers with Docker Compose**

   ```bash
   docker-compose up --build
   ```

3. **Access the application**

Once Docker Compose has started the containers, the application will be available at http://localhost:3000, Redis will be available on the default port 6379 and Postgres on port 5432.

4. **Stop and remove containers**

When you're done working with the project, you can stop and remove the containers with:

   ```bash
   docker-compose down
   ```
