const express = require('express');
const router = express.Router();
const authService = require('../services/auth.services');

router.post('/authenticate', authenticate);
router.post('/register', register);

module.exports = router;


function authenticate(req, res, next) {
    authService.authenticate(req.body)
        .then(user => {
            user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' })
        })
        .catch(err => next(err));
}

function register(req, res, next) {
    authService.create(req.body)
        .then(data => res.send(data))
        .catch(err => next(err));
}

