var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  app.get('/users', users_controller.users);
}
