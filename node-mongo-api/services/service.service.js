const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Service = db.Service;

module.exports = {
    // authenticate,
    getAll
    // getById,
    // create
    // update,
    // delete: _delete
};

// async function authenticate({ username, password }) {
    // const user = await User.findOne({ username });
    // if (user && bcrypt.compareSync(password, user.hash)) {
        // const { hash, ...userWithoutHash } = user.toObject();
        // const token = jwt.sign({ sub: user.id }, config.secret);
        // return {
            // ...userWithoutHash,
            // token
        // };
    // }
// }

async function getAll() {
    // return await Service.find().select('-hash');
	return await Service.find();
}

// async function getById(id) {
    // return await Service.findById(id).select('-hash');
// }

// async function create(userParam) {
    // // validate
    // if (await Service.findOne({ servicename: serviceParam.servicename })) {
        // throw 'Service Name"' + userParam.username + '" already exists.';
    // }

    // const service = new Service(serviceParam);

    // // hash id
    // if (serviceParam.serviceid) {
        // service.hash = bcrypt.hashSync(serviceParam.serviceid, 10);
    // }

    // // save service
    // await service.save();
// }

// async function update(id, userParam) {
    // const user = await User.findById(id);

    // // validate
    // if (!user) throw 'User not found';
    // if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        // throw 'Username "' + userParam.username + '" is already taken';
    // }

    // // hash password if it was entered
    // if (userParam.password) {
        // userParam.hash = bcrypt.hashSync(userParam.password, 10);
    // }

    // // copy userParam properties to user
    // Object.assign(user, userParam);

    // await user.save();
// }

// async function _delete(id) {
    // await User.findByIdAndRemove(id);
// }