var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String, 
	email: String, 
	password: String, 
	createdAt: { type: Date, default: Date.now}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;