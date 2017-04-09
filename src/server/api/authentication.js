module.exports = function (models, jwt) {

  var service = {
    authenticate: authenticate
  };

  return service;

  function authenticate(req, res, next) {

    var User = models.User;

    User.where('username', req.query.username)
      .fetch()
      .then(function (user) {

        if (user && user.attributes.id && user.attributes.status === 'A') {
          var token = jwt.sign({
            id: user.id,
            username: user.username
          }, 'supersecret!!');
          res.status(200)
            .json({
              status: 200,
              token: token
            });
        } else {
          res.status(401)
            .json({
              status: 401,
              errorMsg: 'Unauthorized'
            });
        }
      })
      .catch(function (e) {
        console.error(e);
        res.status(500)
          .json({
            status: 500,
            errorMsg: 'Authentication error'
          });
      });

  }

};
