exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", table => {
    table.increments("user_id");
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamps();
    table
      .boolean("deleted")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
