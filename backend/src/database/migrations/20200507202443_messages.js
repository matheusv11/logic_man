
exports.up = function(knex) {
  return knex.schema.createTable('messages', table=>{
      table.increments();

      table.string('message').notNullable();

      table.string('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages');
};
