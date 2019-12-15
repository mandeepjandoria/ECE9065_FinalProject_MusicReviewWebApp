const config = require('config.json');
const db = require('_helpers/db');
const Playlist = require('../playlists/playlist.model.js');

module.exports = {
    create,
	getAll,
	getAllById
};

async function create(playlistParam) {
    const playlist = new Playlist(playlistParam);

    playlist.listname = playlistParam.listname;
    playlist.description = playlistParam.description;
    playlist.visibility = playlistParam.visibility;
    playlist.createdby = playlistParam.createdby;
    playlist.songs = playlistParam.songs;

    // save playlist
    await playlist.save();
}

async function getAll() {
    return await Playlist.find();
}

async function getAllById(id) {
    return await Playlist.find({'createdby': id});
}
