
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table
      .binary('avatar')
      .notNullable();
    table
      .string('location');
    table
      .string('specialty');
    table
      .text('bio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles');
};
