const bookshelf = require("./bookshelf");

const User = bookshelf.Model.extend(
  {
    tableName: "user",
    idAttribute: "user_id",
    hasTimestamps: true
  },
  {
    getUserByEmail: function(email) {
      return this.where({ email });
    }
  }
);

module.exports = User;
