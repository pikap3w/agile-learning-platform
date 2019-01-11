var User = require('../models/user');

module.exports = {

  users: function(req, res){
    var users = User.find({}, function(err, users) {
      if (err) {
        res.redirect('/users')
      }
      else {
        res.render('index', {all_users: users});
      }
    });
  },

  register: function(req, res){
    if ((req.body.password == req.body.password_conf) && (req.body.password.length > 7) && (req.body.password_conf.length > 7)){
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, coded) => {
          var new_pw = coded;
          var user = new User({username: req.body.username, password: new_pw});

          user.save((err) => {
            if(err)
            {
              res.json({errors: err, data: ""});
            }
            else
            {
              //req.session.user = user._id;
              res.json({errors: "", data: user}); 
            }
          });
        });
      });
    }
    else
    {
      var wrong = {message: "Passwords must match and have at least 8 characters."};
      var err = [];
      err.push(wrong);
      res.json({errors: err, data: ""});
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
            res.json({errors: this_user.errors});
          }
          else
          {
            //req.session.user = this_user._id;
            res.json({this_user: this_user});
          }});
      }
      else
      {
        var invalid = {message: "Invalid login information."};
        var errors = [];
        errors.push(invalid);
        res.render('index', {errors: err});
      }
    });
  }
  
}
