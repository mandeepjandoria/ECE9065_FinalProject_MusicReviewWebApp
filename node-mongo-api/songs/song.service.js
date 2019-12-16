const config = require('config.json');
const db = require('_helpers/db');
// const Song = db.Song;
const Song = require('../songs/song.model.js');

module.exports = {
    create,
    getAll,
    delete: _delete
};

async function getAll() {
    return await Song.find();
}

// exports.getAll = (req, res) => {
	// Song.find()
    // .then(songs => {
        // res.send(songs);
    // }).catch(err => {
        // res.status(500).send({
            // message: err.message || "Some error occurred while retrieving songs."
        // });
    // });
// };

async function create(songParam) {
    const song = new Song(songParam);
    // validate
    // if (await Song.findOne({ songname: songParam.songname })) {
    //     throw 'Song name "' + songParam.songname + '" already exists.';
    // }

    song.songname = songParam.songname;
    song.artist = songParam.artist;
    song.year = songParam.year;
    song.genre = songParam.genre;
    song.createdby = songParam.createdby;

    // save user
    await song.save();
}

async function _delete(id) {
    await Song.findByIdAndRemove(id);
}