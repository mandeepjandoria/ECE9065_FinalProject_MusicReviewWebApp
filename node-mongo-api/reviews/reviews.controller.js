const express = require('express');
const router = express.Router();
const reviewService = require('./review.service');

// routes
router.post('/create/', create);
router.get('/', getAll);
router.get('/:id', getAllReviewsForSong);

module.exports = router;

function create(req, res, next) {
    debugger;
    reviewService.create(req.body, req.params.id)
    // reviewService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    reviewService.getAll()
        .then(reviews => res.json(reviews))
        .catch(err => next(err));
}

function getAllReviewsForSong(req, res, next) {
    reviewService.getAllById(req.params.id)
        .then(reviews => res.json(reviews))
        .catch(err => next(err));
}

