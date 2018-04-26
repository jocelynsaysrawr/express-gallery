const bookshelf = require("./bookshelf");
const knex = require("../knex");

const Gallery = bookshelf.Model.extend(
  {
    tableName: "gallery",
    idAttribute: "gallery_id",
    hasTimestamps: true
  },
  {
    getGalleryByUserId: function(user_id) {
      return knex
        .select()
        .from("gallery")
        .where({ user_id });
    }
  }
);

module.exports = Gallery;
