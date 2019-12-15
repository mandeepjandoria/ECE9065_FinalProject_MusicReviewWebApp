const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    songid: { type: String, required: true },
    rating: { type: Number, required: true },
    comments: { type: String, required: false },
    visibility: { type: String, required: true },
    createdby: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Review', schema);