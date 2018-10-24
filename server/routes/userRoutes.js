const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

// MODELS
const userModel = require('../models/userModel');

// MIDDLEWARE
const { generateToken, restricted } = require('../middleware/authorization');

// register user
router.post('/register', (req, res) => {
	const { username, password } = req.body;
	const credentials = { username, password };

	const hash = bcrypt.hashSync(credentials.password, 12);
	credentials.password = hash;

	userModel
		.register(credentials)
		.then(user => {
			const token = generateToken(user);
			res
				.status(200)
				.json({ message: `User ${user.username} logged in`, token });
		})
		.catch(err => {
			if (err.code === 'SQLITE_CONSTRAINT') {
				return res.status(409).json({ error: 'Duplicate username' });
			} else {
				return res.status(500).json(err);
			}
		});
});

// login
router.post('/login', (req, res) => {
	const credentials = req.body;

	userModel
		.login(credentials)
		.then(user => {
			if (user) {
				const token = generateToken(user);
				res
					.status(200)
					.json({ message: `User ${user.username} logged in`, token });
			} else {
				res.status(401).json({ error: 'Invalid username or password' });
			}
		})
		.catch(err => res.status(500).json(err));
});

module.exports = router;
