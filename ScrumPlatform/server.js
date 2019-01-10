var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./config/mongoose'),
    port       = 8000;

let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
	username: {type: String, 
		required: [true, "Username is required."], 
		unique: [true, "This username is already in the database."], 
		minlength: [3, "Usernames must have a minimum of 3 characters."], 
		maxlength: [20, "Usernames have a maximum of 20 characters."]},
	password: {type: String, 
		required: [true, "Must have a password."], 
		minlength: [8, "Password must be at least 8 characters."],
		maxlength: [8, "Passwords have a maximum of 32 characters."], 
		validate: { 
			validator: (value) => {
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
		},
		message: "Password failed validation, you must have at least 1 number, uppercase and special character." 
		}}
	}, {timestamps: true});

mongoose.model('User', UserSchema);
let User = mongoose.model('User');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
// app.use(express.static(path.join(__dirname, 'static')));
app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
