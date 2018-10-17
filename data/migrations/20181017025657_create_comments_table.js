
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table
      .integer('post_id')
      .notNullable()
      .references('id')
      .inTable('posts');
    table
      .text('comment_content')
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
  return knex.schema.dropTableIfExists('comments');
};
