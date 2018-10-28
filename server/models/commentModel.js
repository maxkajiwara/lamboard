const knex = require('knex');
const knexConfig = require('../config/knexfile');
const db = knex(knexConfig.development);

module.exports = {
	get,
	insert,
	update,
	remove
};

function get() {
	return db('comments');
}

function insert() {
	return db('comments')
		.insert(comment)
		.into('comments');
}

function update(id, changes) {
	return db('comments')
		.where({ id })
		.update(changes);
}

function remove(id) {
	return db('comments')
		.where({ id })
		.del();
}
