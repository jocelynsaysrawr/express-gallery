const express = require("express");
const app = express();
const knex = require("./knex/knex.js");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const passport = require("passport");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const handlebars = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs"
});
const User = require("./knex/models/user");
const Photo = require("./knex/models/photo");
const Gallery = require("./knex/models/gallery");
const authorization = require("./routes/auth");
const user = require("./routes/user");
const gallery = require("./routes/gallery");

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    store: new RedisStore(),
    secret: "flapdoodle",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authorization);
app.use(user);
app.use(gallery);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
