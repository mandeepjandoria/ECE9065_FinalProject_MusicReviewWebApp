var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	userid: { type: Number, required: true },
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	status: { type: Number, required: true },
	usertype: { type: String, required: true },
	playlists: { type: String, required: false }
});

module.exports = mongoose.model('users', schema);