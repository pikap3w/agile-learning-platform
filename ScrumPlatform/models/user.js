var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: '',
  },
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;
