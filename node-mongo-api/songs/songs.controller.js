﻿const express = require('express');
const router = express.Router();
const songService = require('./song.service');

// routes
router.post('/create', create);
router.get('/', getAll);

module.exports = router;

function create(req, res, next) {
    songService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    songService.getAll()
        .then(songs => res.json(songs))
        .catch(err => next(err));
}
