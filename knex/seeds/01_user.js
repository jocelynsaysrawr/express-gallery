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
          password: "beeootchhhh"
        },
        { user_id: 2, email: "emailme@gmail.com", password: "ineedfwends" },
        {
          user_id: 3,
          email: "tswiftfanclub@yahoo.com",
          password: "OMFGTAYLORSWIFT"
        }
      ]);
    });
};
