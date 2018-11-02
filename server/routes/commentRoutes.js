const express = require('express');
const router = express.Router();

// model
const comments = require('../models/commentModel');

// error handler
const errHandler = require('../middleware/errorHandler');

// get and post comment
router.get('/', (req, res, next) => {
	comments
		.get()
		.then(comments => {
			console.log('Getting comments successfully.');
			res.status(200).json(comments);
		})
		.catch(err => {
			next('h500', err);
		});
});

router.post('/', (req, res, next) => {
	const comment = req.body;
	comments
		.insert(comment)
		.then(ids => {
			console.log('Posting comment successfully.');
			res.status(201).json(ids[0]);
		})
		.catch(err => {
			next('h500', err);
		});
});

router.use(errHandler);
module.exports = router;
