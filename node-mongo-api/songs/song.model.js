const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    songname: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    createdby: { type: String, required: true },
    rating: { type: String, required: false, default: 'No Ratings' }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Song', schema);