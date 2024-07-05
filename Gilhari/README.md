# Configuring and Running the Gilhari Microservice
Navigate to this `Gilhari/` directory in a new terminal. Ensure that the Gilhari SDK is installed before running this.

## Installing dependencies
Install `json-20xxxxxx.jar` and `jxclasses.jar` files into the `libs/` directory. Both can be found in the `libs/` and `external-libs/` directories of your installation of Gilhari. Alternatively, the json dependency can be downloaded online. 

## Defining and compiling the container classes
The classes are already defined in `src/org/models/*.java`. To compile them, run the command `javac -cp "libs/json20xxxxxx.jar:libs/jxclasses.jar" -d bin src/org/models/JSON_Book.java`. Repeat the same for `JSON_Employee.java`.

## Instance-Specific Configuration
Install the latest SQLite JDBC driver in the `config/` directory. If any filenames/classnames have been changed, modify the same in `config/gilhari_sqlite3.jdx` and `gilhari_sqlite3_service.config`.

## Building and Running the docker container
Build the docker image using the command `docker build -t resolver-app -f ./Dockerfile .`.

Run the container using the command `docker run -p 80:8081 -v /<BASE-DIRECTORY>/GilhariApolloGraphQL/Gilhari/config:/opt/gilhariresolverexample/config resolver-app:latest` (here, replace BASE-DIRECTORY with the absolute path to the directory that contains this project. The entire argument will set up a docker volume such that changes made in the container files at `/opt/gilhariresolverexample/config` will be reflected at the first path on the host system, and vice versa)

*Note: If this is the first time the container is being run, the database `./config/graphql.db` will be created along with ALTER, DROP and CREATE sqlite files. If already present, they will not be recreated. All data created/deleted/updated will persist even across container sessions*

## Stopping the container
In a new terminal, run the command `docker ps` to list all container names. Then run the command `docker stop <CONTAINER-NAME>` to stop the container.