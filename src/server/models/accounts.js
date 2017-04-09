module.exports = function (bookshelf) {

  var Accounts = bookshelf.Model.extend({
    tableName: 'accounts'
  });

  return Accounts;
};
