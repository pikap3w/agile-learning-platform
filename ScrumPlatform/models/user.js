var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: {type: String,
		required: [true, "Username is required."],
		unique: [true, "This username is already in the database."],
		minlength: [3, "Usernames must have a minimum of 3 characters."],
		maxlength: [20, "Usernames have a maximum of 20 characters."]},
	  password: {type: String,
		required: [true, "Must have a password."],
		minlength: [8, "Password must be at least 8 characters."],
		validate: {
			validator: (value) => {
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
		},
		message: "Password failed validation, you must have at least 1 number and uppercase character."
		}}
	}, {timestamps: true});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');
module.exports = User;
