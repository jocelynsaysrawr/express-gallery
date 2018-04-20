const bookshelf = require("./bookshelf");

const Photo = bookshelf.Model.extend({
  tableName: "photo",
  idAttribute: "photo_id",
  hasTimestamps: true
});

module.exports = Photo;
