
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table
      .string('post_title')
      .notNullable();
    table
      .text('post_content')
      .notNullable();
    table
      .boolean('edited')
      .defaultTo(0);
    table
      .timestamp('timestamp')
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};