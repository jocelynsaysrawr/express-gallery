exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("photo")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("photo").insert([
        {
          photo_id: 1,
          author: "Eric Han",
          link:
            "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-0.3.5&s=0ca06cc13729efb524a63bda588f0280&auto=format&fit=crop&w=1500&q=80",
          description: "Cute cat in Shijiazhuang, China",
          gallery_id: 1
        },
        {
          photo_id: 2,
          author: "Cyrus Chew",
          link:
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bb3e8174f4434897bde332bdf650d93&auto=format&fit=crop&w=750&q=80",
          description: "Grumpy Cat's cousin Paul",
          gallery_id: 1
        },
        {
          photo_id: 3,
          author: "Robert Collins",
          link:
            "https://images.unsplash.com/photo-1514862461281-d9a41da4180e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=57c5863290b075514cd7a57d4f96ef47&auto=format&fit=crop&w=1502&q=80",
          description: "Boutique hotel on a resevoir in Southern Thailand",
          gallery_id: 2
        },
        {
          photo_id: 4,
          author: "Mark Zimmer",
          link:
            "https://images.unsplash.com/photo-1508682641856-78948a748357?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90e1393787a20fa3fbd60d57bbdc3529&auto=format&fit=crop&w=1500&q=80",
          description: "Eltz Castle, Wiershem, Germany",
          gallery_id: 2
        },
        {
          photo_id: 5,
          author: "Domenico Loia",
          link:
            "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1296a4419a6c84e28281db0a564071ef&auto=format&fit=crop&w=1500&q=80",
          description:
            "A busy workspace with a MacBook, iMac, iPhone, and drawing tablet",
          gallery_id: 3
        },
        {
          photo_id: 6,
          author: "Annie Spratt",
          link:
            "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a38661364c1153b472b3ec80114c3cf&auto=format&fit=crop&w=1504&q=80",
          description: "Crew Collective & Cafe, Montreal, Canada",
          gallery_id: 3
        }
      ]);
    });
};
