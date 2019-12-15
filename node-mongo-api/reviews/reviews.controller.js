const express = require('express');
const router = express.Router();
const reviewService = require('./review.service');

// routes
router.post('/create', create);
router.get('/:id', getAllReviewsForSong);

module.exports = router;

function create(req, res, next) {
    reviewService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAllReviewsForSong(req, res, next) {
    reviewService.getAllById(req.params.id)
        .then(reviews => res.json(reviews))
        .catch(err => next(err));
}
