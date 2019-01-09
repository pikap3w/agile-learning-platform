var User = require('../models/user');

module.exports = {

  users: function(req, res){
    users = User.find({}, function(err, users) {
      if (err) {
        res.redirect('/users')
      }
      else {
        res.render('index', {all_users: users});
      }
    });
  }
  
}
