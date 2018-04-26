const bookshelf = require("./bookshelf");
const knex = require("../knex");

const Photo = bookshelf.Model.extend(
  {
    tableName: "photo",
    idAttribute: "photo_id",
    hasTimestamps: true
  },
  {
    getPhotosByGalleryId: gallery_id => {
      return knex
        .select()
        .from("photo")
        .where({ gallery_id });
    }
  }
);

module.exports = Photo;
