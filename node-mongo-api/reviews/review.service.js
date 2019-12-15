const config = require('config.json');
const db = require('_helpers/db');
// const Song = db.Song;
const Review = require('../reviews/review.model.js');

module.exports = {
    create,
	getAllById
};

async function getAllById(id) {
    return await Review.find({'songid': id});
}

async function create(reviewParam) {
    const review = new Review(reviewParam);

    review.songid = reviewParam.songid;
    review.rating = reviewParam.rating;
    review.comments = reviewParam.comments;
    review.visibility = reviewParam.visibility;
    review.createdby = reviewParam.createdby;

    // save user
    await review.save();
}

