const express = require('express');
const router = express.Router();
const serviceService = require('./service.service');

// routes
router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    serviceService.getAll()
        .then(services => res.json(services))
        .catch(err => next(err));
}
