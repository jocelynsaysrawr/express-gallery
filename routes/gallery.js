const router = require("express").Router();
const Gallery = require("../knex/models/Gallery");
module.exports = router;

router.get("/", (req, res) => {
  res.render("index");
});
