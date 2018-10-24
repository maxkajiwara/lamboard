const knex = require('knex');
const bcrypt = require('bcryptjs');

const knexConfig = require('../config/knexfile');
const db = knex(knexConfig.development);

module.exports = {
	register,
	login
};

function register(user) {
	return db('users')
		.insert(user)
		.then(id => {
			return { ...user, id };
		});
}

function login(credentials) {
	return db('users')
		.where({ username: credentials.username })
		.then(([user]) => {
			if (user && bcrypt.compareSync(credentials.password, user.password)) {
				return user;
			} else {
				return undefined;
			}
		});
}
