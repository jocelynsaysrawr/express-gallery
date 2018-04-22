const router = require("express").Router();
const Gallery = require("../knex/models/gallery");
module.exports = router;

router.get("/", (req, res) => {
  res.render("index");
});
