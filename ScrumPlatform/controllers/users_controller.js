var User = require('../models/user');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var bodyParser = require('body-parser');

module.exports = {

  users: function(req, res){
    // var users = User.find({}, function(err, users) {
    //   if (err) {
    //     res.redirect('/users')
    //   }
    //   else {
    //     res.render('index', {all_users: users});
    //   }
    // });
    res.json({message: "Hello World!"})
  },

  register: function(req, res){
    if ((req.body.password == req.body.password_conf) && (req.body.password.length > 7) && (req.body.password_conf.length > 7) && (req.body.username.length > 2) && (req.body.username.length < 21)){
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, coded) => {
          var new_pw = coded;
          var user = new User({username: req.body.username, password: new_pw});

          user.save((err) => {
            if(err)
            {
              return res.status(400).json(err);
            }
            else
            {
              req.session.user = user._id;
              res.redirect('/users');
            }
          });
        });
      });
    }
    else
    {
      return res.status(400);
    }
  },

  login: function(req, res){
    User.findOne({username: req.body.username}, (err, this_user) =>
    {
      if(this_user)
      {
        bcrypt.compare(req.body.password, this_user.password).then((status) => {
          if(status == false)
          {
            return res.status(400).json(err);
          }
          else
          {
            req.session.user = this_user._id;
            //res.redirect('/lesson/overview');
          }});
      }
      else
      {
        return res.status(400);
      }
    });
  }

}
