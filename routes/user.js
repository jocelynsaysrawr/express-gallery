const router = require("express").Router();
const User = require("../knex/models/user");
const Gallery = require("../knex/models/Gallery");
const Photo = require("../knex/models/photo");
const { isAuthenticated } = require("../utilities");
module.exports = router;

router.get("/", (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return res.redirect("/users/portal");
  } else {
    return res.render("index");
  }
});

router.get("/users/portal", isAuthenticated, (req, res) => {
  if (req.isAuthenticated()) {
    Gallery.getGalleryByUserId(req.user.user_id)
      .then(data => {
        console.log("galleries: ", data);
        return data.map(gallery => {
          return Photo.getPhotosByGalleryId(gallery.gallery_id);
        });
      })
      .then(promiseList => {
        return Promise.all(promiseList);
      })
      .then(promiseResults => {
        console.log("promiseResults: ", promiseResults);
        const results = [].concat.apply([], promiseResults);
        res.render("portal", { results });
      });
  }
});
