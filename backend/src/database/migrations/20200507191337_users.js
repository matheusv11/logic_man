
exports.up = function(knex) {
    return knex.schema.createTable('users', table=>{
        table.string('id').primary();
  
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.integer('phone').notNullable();
        table.string('password').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  