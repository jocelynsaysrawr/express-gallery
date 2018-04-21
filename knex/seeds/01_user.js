const bcrypt = require("bcrypt");
const SALT_ROUND = 10;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          user_id: 1,
          email: "99problemsbut@gmail.com",
          password: bcrypt.hashSync("beeootchhhh", SALT_ROUND)
        },
        {
          user_id: 2,
          email: "emailme@gmail.com",
          password: bcrypt.hashSync("ineedfwends", SALT_ROUND)
        },
        {
          user_id: 3,
          email: "tswiftfanclub@yahoo.com",
          password: bcrypt.hashSync("OMFGTAYLORSWIFT", SALT_ROUND)
        }
      ]);
    });
};
