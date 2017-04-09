module.exports = function (bookshelf) {

  var UserModel = require('./user')(bookshelf);

  var service = {
    User: UserModel
  };

  return service;

};
