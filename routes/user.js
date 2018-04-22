const router = require("express").Router();
const User = require("../knex/models/user");
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
  console.log("req user portal: ", req.user);
  res.render("portal");
});
