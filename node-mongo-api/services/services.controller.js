const express = require('express');
const router = express.Router();
const serviceService = require('./service.service');

// routes
// router.post('/authenticate', authenticate);
// router.post('/register', register);
router.get('/', getAll);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

module.exports = router;

// function authenticate(req, res, next) {
    // userService.authenticate(req.body)
        // .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        // .catch(err => next(err));
// }

// function register(req, res, next) {
    // serviceService.create(req.body)
        // .then(() => res.json({}))
        // .catch(err => next(err));
// }

function getAll(req, res, next) {
    serviceService.getAll()
        .then(services => res.json(services))
        .catch(err => next(err));
}

// function getCurrent(req, res, next) {
    // serviceService.getById(req.service.sub)
        // .then(service => service ? res.json(service) : res.sendStatus(404))
        // .catch(err => next(err));
// }

// function getById(req, res, next) {
    // serviceService.getById(req.params.id)
        // .then(service => service ? res.json(service) : res.sendStatus(404))
        // .catch(err => next(err));
// }

// function update(req, res, next) {
    // serviceService.update(req.params.id, req.body)
        // .then(() => res.json({}))
        // .catch(err => next(err));
// }

// function _delete(req, res, next) {
    // serviceService.delete(req.params.id)
        // .then(() => res.json({}))
        // .catch(err => next(err));
// }