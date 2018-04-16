const express = require("express");
const app = express();
const knex = require("./knex/knex.js");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const handlebars = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs"
});
const user = require("./routes/user");

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(user);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
