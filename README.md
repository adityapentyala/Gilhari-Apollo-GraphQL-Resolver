# Gilhari Based GraphQL Resolver with Apollo Server
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
## About Gilhari
This project uses Gilhari microservice framework to exchange JSON data with relational databases. Gilhari is a product of Software Tree, LLC. GilhariTM is a microservice framework to provide persistence for JSON objects in relational databases. Available in a Docker image, it is configurable as per an app-specific object and relational models. Gilhari exposes a REST (REpresentational State Transfer) interface to provide APIs (POST, GET, PUT, DELETE…) for CRUD (Create, Retrieve, Update, and Delete) operations on the app-specific JSON objects. You may get more information about Gilhari and its SDK at https://www.softwaretree.com.
## About the Project
This project demonstrates a simple example implementations of a GraphQL resolver using a Gilhari microservice with Apollo Server. The project has one class - `Book` - as defined in `schema.js`. Users can run the `books` query while the project is running in Apollo's interactive playground at http://localhost:4000. 

## Gilhari Setup
In a new terminal, `cd` to `Gilhari/README.md` and follow the instructions there to configure and run the Gilhari microservice.

## Running Apollo Server 
Make sure nodejs and npm are installed. You can run the commands `node -v` and `npm -v` to confirm.
### Install dependencies
Run the command `npm i` or `npm install` to install all dependencies from `package-lock.json`
### Populating database (first time setup)
If this is the first time running this project after setting up Gilhari, or after creating a new database, run the command `node populateDatabase.js` to run the script file that populates the database with `Book` objects.
### Running Apollo Server
Run the command `node index.js` or `npm start` to expose the server at http://localhost:4000. You may run queries in the interactive playground provided by opening the link in a browser.
![Apollo Playground at localhost:4000](assets/image.png)