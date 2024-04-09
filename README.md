# xxxx task
The ``` xxx task ``` is a back-end for api

# Rest API with MySQL 

| Methods	| Urls	          | Actions
| --------- | ----------------| ----------------------------------------- |
| POST      | /xxx         | xxx
| PUT       | /yyy         | yyy
| GET       | /zzz        | zzz


## Project Structure
```bash
|-- Dockerfile
|-- README.md


## Database
The system uses a mysql database which stores the signed up runners with table structure in : ```init-scripts/init.sql```

## Local Installation
#### Runnning locally as standalone app. 

\* *Environment variables are not required*, application can run with predefined defaults
```sh
$ cd xxxx
$ npm install
$ npm run start
```

 #### Runnning locally as production simulation 

- Using docker from the application folder, run ```docker-compose build``` and ```docker-compose up```

## Testing application 

Please use attached [Postman](https://www.getpostman.com/) JSON [collection](./test/xxx.postman_collection.json) 


## Useful docs


