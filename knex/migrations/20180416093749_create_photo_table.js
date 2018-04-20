exports.up = function(knex, Promise) {
  return knex.schema.createTable("photo", table => {
    table.increments("photo_id");
    table.string("author").notNullable();
    table.string("link").notNullable();
    table.text("description").notNullable();
    table
      .integer("gallery_id")
      .references("gallery_id")
      .inTable("gallery");
    table.timestamps();
    table
      .boolean("deleted")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("photo");
};
