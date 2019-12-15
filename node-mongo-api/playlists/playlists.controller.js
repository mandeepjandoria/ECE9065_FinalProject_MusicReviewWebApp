const express = require('express');
const router = express.Router();
const playlistService = require('./playlist.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getAllPlaylistsForUser);

module.exports = router;

function create(req, res, next) {
    playlistService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    playlistService.getAll()
        .then(playlists => res.json(playlists))
        .catch(err => next(err));
}

function getAllPlaylistsForUser(req, res, next) {
    playlistService.getAllById(req.params.id)
        .then(playlists => res.json(playlists))
        .catch(err => next(err));
}
