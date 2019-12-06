var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	songid: { type: Number, required: true },
	songtitle: { type: String, required: true },
	artist: { type: String, required: true },
	album: { type: String, required: true },
	year: { type: Number, required: true },
	comment: { type: String, required: false },
	genre: { type: String, required: false },
	submittedon: { type: Date, required: true },
	submittedby: { type: String, required: false },
	totalratings: { type: Number, required: false },
	averagerating: { type: Number, required: false }
});

module.exports = mongoose.model('songs', schema);