const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model.js')
};

// module.exports = {
    // Service: require('../services/service.model.js')
// };

// module.exports = {
    // Song: require('../songs/song.model.js')
// };