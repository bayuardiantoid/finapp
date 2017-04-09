module.exports = function (bookshelf) {

  var User = bookshelf.Model.extend({
    tableName: 'user'
  });

  return User;
};
