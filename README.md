# ramverk2-me


[![Build Status](https://travis-ci.org/mafd16/ramverk2-me.svg)](https://travis-ci.org/mafd16/ramverk2-me)
[![BCH compliance](https://bettercodehub.com/edge/badge/mafd16/ramverk2-me?branch=master)](https://bettercodehub.com/)
[![codecov](https://codecov.io/gh/mafd16/ramverk2-me/branch/master/graph/badge.svg)](https://codecov.io/gh/mafd16/ramverk2-me)
[![Maintainability](https://api.codeclimate.com/v1/badges/1554ec25f13bba2d25db/maintainability)](https://codeclimate.com/github/mafd16/ramverk2-me/maintainability)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/build-status/master)

Me-page for the course Ramverk2 at Blekinge Institute of Technology


## Table of Contents

+ Techniques used
+ Installation
+ Local operation
    + Start server locally
    + Try out the Nim-game locally
    + Try out the chat locally
    + Try out the database locally
+ Operation in Docker images
    + Start redovisa-server and MongoDB database
+ Run tests
    + Run tests locally
    + Run tests in Docker containers
+ Summary of ports


## Techniques used

This page is built with node.js and the framework [express](https://expressjs.com/).
As a template engine I am using [pug](https://pugjs.org). During development, I have
been using [Docker](https://www.docker.com/). For the Nim-game and chat, I am using
websockets through the package [ws](https://www.npmjs.com/package/ws). The
database-page is using [MongoDB](https://www.mongodb.com/).


## Installation

Clone the repository

```
git clone https://github.com/mafd16/ramverk2-me.git
```

Then run

```
cd ramverk2-me
npm install
```


## Local operation

### Start server locally

The server starts at port 5000. To use another port, set the environment
variable DBWEBB_PORT. Run

```
npm start
```

Then check out the page in your browser at localhost:5000 (or at the value of localhost:DBWEBB_PORT if set).
If you have problems starting the server, try killing all node processes first,
with

```
taskkill /f /im node.exe
```

### Try out the Nim-game locally

At the route /nim you will find the landing-page for the project. The project
is the game [Nim](https://en.wikipedia.org/wiki/Nim). At the route /playnim
you can try out the game (may still be under development). To try out the
game, you need to start the game server. The game can be cloned from
[GitHub](https://github.com/mafd16/nim). To start the game server, run

```
npm start
```

The game server starts at port 3000, unless the environment variable DBWEBB_PORT
is set. In that case, it will start at DBWEBB_PORT.

### Try out the chat locally

At the route /chatt you will find, thats right, the chat. For the chat to
operate, you need to start the chat server. Go to src/chatt and run

```
npm start
```

The chat starts at port 1337, unless the environment variable DBWEBB_PORT
is set. In that case, it will start at DBWEBB_PORT.

To really try out the chat, open the route /chatt in two browser windows and
start chatting.

### Try out the database locally

This feature is not implemented. To try out the database, see "Start
redovisa-server and MongoDB database" below.


## Operation in Docker images

### Start redovisa-server and MongoDB database

Make sure [Docker](https://www.docker.com/) is installed and is running. To
start the redovisa server and MongoDB database, run

```
npm run start-docker
```

Open your browser and go to localhost:5000 to visit the redovisa page. To try
out the database, go to localhost:5000/crud.


## Run tests

### Run tests locally

```
npm run test
npm run test-all
```

### Run tests in Docker containers

Run some of the following for unit-tests in docker

```
npm run test-node9
npm run test-node8
```


## Summary of ports

The redovisa page will start at port 5000 or DBWEBB_PORT.

The Nim game server starts at port 3000 or DBWEBB_PORT (not included in this
repository, se more info above).

The chat starts at port 1337 or DBWEBB_PORT.

The MongoDB is listening on port 27017.
