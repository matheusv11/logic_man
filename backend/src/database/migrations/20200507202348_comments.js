
exports.up = function(knex) {
  return knex.schema.createTable('comments', table=>{
    table.increments();

    table.string('comment').notNullable();
    
    table.string('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');

    table.string('content_id').notNullable();
    table.foreign('content_id').references('id').inTable('contents');
  });
};

exports.down = function(knex) {
  
};
