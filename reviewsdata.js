var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	reviewid: { type: Number, required: true },
	songid: { type: Number, required: true },
	submittedon: { type: Date, required: true },
	submitedby: { type: String, required: true },
	reviewdesc: { type: String, required: false },
	rating: { type: Number, required: true },
	visibility: { type: String, required: false }
});

module.exports = mongoose.model('reviews', schema);