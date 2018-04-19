exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("gallery")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("gallery").insert([
        { gallery_id: 1, name: "meow", user_id: 2 },
        { gallery_id: 2, name: "vacation goals", user_id: 3 },
        { gallery_id: 3, name: "officeå envy", user_id: 1 }
      ]);
    });
};
