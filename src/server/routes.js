var router = require('express').Router();

var mysql = require('mysql');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123.',
    database: 'findb',
    charset: 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

var jwt = require('jsonwebtoken');

var four0four = require('./utils/404')();

var data = require('./data');

var models = require('./models')(bookshelf);

var auth = require('./api/authentication')(models, jwt);

router.get('/auth', auth.authenticate);
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function (p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
