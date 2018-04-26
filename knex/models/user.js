const bookshelf = require("./bookshelf");

const User = bookshelf.Model.extend(
  {
    tableName: "user",
    idAttribute: "user_id",
    hasTimestamps: true
  },
  {
    getUserById: function(user_id) {
      return this.select()
        .from("user")
        .where({ user_id });
    }
  }
);

module.exports = User;
