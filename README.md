# ramverk2-me


[![Build Status](https://travis-ci.org/mafd16/ramverk2-me.svg)](https://travis-ci.org/mafd16/ramverk2-me)
[![BCH compliance](https://bettercodehub.com/edge/badge/mafd16/ramverk2-me?branch=master)](https://bettercodehub.com/)
[![codecov](https://codecov.io/gh/mafd16/ramverk2-me/branch/master/graph/badge.svg)](https://codecov.io/gh/mafd16/ramverk2-me)
[![Maintainability](https://api.codeclimate.com/v1/badges/1554ec25f13bba2d25db/maintainability)](https://codeclimate.com/github/mafd16/ramverk2-me/maintainability)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mafd16/ramverk2-me/build-status/master)

Me-page for the course Ramverk2 at Blekinge Institute of Technology

### Local development environment

Install the development tools and execute the validation tools and the testsuite.

```
make install
make test
```

### Run tests in Docker

Use one of the following make or docker-compose commands.

```
# node 9 alpine
make test1
docker-compose run node9_alpine npm test

# node 8 alpine
make test2
docker-compose run node8_alpine npm test

# node 6 alpine
make test3
docker-compose run node6_alpine npm test
```


### Try out the chat

```
npm start
```
or
```
./restart.bat
```
Then go to ./src/chatt

```
npm start
```

You'll find the chat integrated at the page.
Open the chat in two browsers for test of functionality.
