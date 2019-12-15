const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');
const serviceService = require('../services/service.service');
const songService = require('../songs/song.service');
const reviewService = require('../reviews/review.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            '/services',
            '/songs',
            '/songs/create',
            '/reviews/create',
            '/reviews/' + reviewService.getAllById,
            '/reviews'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};