exports.up = function(knex, Promise) {
  return knex.schema.createTable("gallery", table => {
    table.increments("gallery_id");
    table.string("name").notNullable();
    table
      .integer("user_id")
      .references("user_id")
      .inTable("user");
    table.timestamps();
    table
      .boolean("deleted")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("gallery");
};
