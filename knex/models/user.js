const bookshelf = require("./bookshelf");

const User = bookshelf.Model.extend({
  tableName: "user",
  idAttribute: "user_id",
  hasTimestamps: true
});

module.exports = User;
