var users_controller = require('../controllers/users_controller');
var path = require('path');


module.exports = function(app) {
  app.get('/users', users_controller.users);
  app.post('/register', users_controller.register);
  app.post('/login', users_controller.login);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}
