const config = require('config.json');
const db = require('_helpers/db');
// const Service = db.Service;
const Service = require('../services/service.model.js');

module.exports = {
    getAll
};

async function getAll() {
	return await Service.find();
}
