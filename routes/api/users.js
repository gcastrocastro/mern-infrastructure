const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
//requiring authorization middleware in config
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST to /api/users
router.post('/', usersCtrl.create);

// POST to /api/users/login
router.post('/login', usersCtrl.login);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;