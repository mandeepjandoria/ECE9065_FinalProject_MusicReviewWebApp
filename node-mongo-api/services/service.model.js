const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	serviceid: { type: Number },
    servicename: { type: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Service', schema);