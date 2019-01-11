var quizzes_controller = require('../controllers/quizzes_controller');
var users_controller = require('../controllers/users_controller');
var videos_controller = require('../controllers/videos_controller');
    path                = require('path');

module.exports = function(app) {
  app.get('/users', users_controller.users);
  // app.post('/register', users_controller.register);
  // app.post('/login', users_controller.login);
  app.get('/api/quizzes', quizzes_controller.quizzes);
  app.get('/api/quizzes/:id', quizzes_controller.quiz_id);
  app.post('/api/quizzes', quizzes_controller.new);
  app.put('/api/quizzes/:id', quizzes_controller.quiz_update_id);
  app.delete('/api/quizzes/:id', quizzes_controller.delete);
  app.get('/api/videos', videos_controller.videos);
  app.get('/api/videos/:id', videos_controller.video_id);
  app.post('/api/videos', videos_controller.new);
  app.put('/api/videos/:id', videos_controller.video_update_id);
  app.delete('/api/videos/:id', videos_controller.delete);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}