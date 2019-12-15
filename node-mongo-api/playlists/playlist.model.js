const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    listname: { type: String, required: true },
    description: { type: Number, required: false },
    visibility: { type: String, required: false },
    createdby: { type: String, required: true },
    songs[]: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Playlist', schema);