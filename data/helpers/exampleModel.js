const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	exampleHelper
};

function exampleHelper() {
	return db('exampleTable');
}
