# Developer Test - TypeScript + NodeJS API Server
 
---

## Project Installation
1. Clone the project repository.
```sh
$ git clone git@github.com:jimzandueta/rcm-api-server.git
$ cd rcm-api-server
```
2. Duplicate `.bak.env` and rename it to `.env` .
```sh
$ cp .bak.env .env
```

3. Install the project dependencies.
```sh
$ npm install
```
4. Run the server
```sh
$ npm run dev

# Use http://localhost:3000/v1/ to access the API.
# Navigate to http://localhost:3000/docs for API documenation, built with Swagger.
```

5. Run unit test
```sh
$ npm run test

# 12 test cases that checks API GET, POST, UPDATE, and DELETE. Also includes some negative tests.
```

## Questions:
1. How long it took youcomplete the work?
```sh
# Total of 8~ hours including research and documentation. 
// 2~ hours spent reviewing Typescript. I have not used TS in a while and I wanted to translate my typical Controller-Model-Services project setup effectively in TS.
// 30~ minutes spent reading on JEST. Have not implemented unit testing for some time, needed to brush up on JEST.
// 30~ minutes spent reading on Swagger for API documentation. Looked up proper Swagger format since I can not recall it from memory. 
// 5~ hours actual development, testing, and documentation.
```


2. What you had to research to complete the work.
```
# TypeScript, Unit-testing with Jest, Documentation with Swagger
```

3. If you did use a database for this project, what kind would you use and why?
```
I'll use NoSQL, specifically MongoDB, because development will be much faster. 
It's ideal for Agile development because developers can make changes to the database 
without having to ask database administrators (as with SQL) or worry about reloading data. 
Its JSON object structure also makes it much easier to manage with NodeJS as your backend. 
Because it is so similar to Javascript, the learning curve is not too steep.
```

4. Can you give me an example of how you would delete color from the database?
```sh
$ mongosh

# inside Mongo Shell ---

# Removing color from Animal item with valid id
test> db.Animal.update({ "_id" : ObjectId("1") }, { $set: { "color" : "" } });

# Removing color from all items in Animal Collection
test> db.Animal.updateMany({}, { $set: { "color" : "" } });

# Deletes color field for all items Animal Collection
test> db.Animal.updateMany({}, { $unset: { "color": "" } });

```
