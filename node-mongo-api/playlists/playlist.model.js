const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    listname: { type: String, required: true },
    description: { type: String, required: false },
    visibility: { type: String, required: false },
    createdby: { type: String, required: true },
    songs: { type: Array, required: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Playlist', schema);