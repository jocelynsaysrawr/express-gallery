const router = require("express").Router();
const User = require("../knex/models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const SALT_ROUND = 10;

module.exports = router;

passport.serializeUser((user, done) => {
  console.log("serializing user: ", user);
  done(null, {
    id: user.user_id
  });
});

passport.deserializeUser((user, done) => {
  console.log("deserializing user: ", user);
  User.where({ user_id: user.id })
    .fetch()
    .then(user => {
      user = user.toJSON();
      done(null, user);
    })
    .catch(err => {
      console.log("err: ", err);
    });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log("local is being called");
    User.where({ email })
      .fetch()
      .then(user => {
        console.log("user in local strategy", user);
        user = user.toJSON();
        bcrypt.compare(password, user.password).then(res => {
          if (res) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      })
      .catch(err => {
        done(null, false);
      });
  })
);

router.post("/auth/register", (req, res) => {
  const { email, password } = req.body;
  bcrypt
    .genSalt(SALT_ROUND)
    .then(salt => {
      console.log("salt: ", salt);
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      console.log("hash: ", hash);
      return User.forge({ email, password: hash }).save();
    })
    .then(user => {
      user = user.toJSON();
      res.json(user);
    })
    .catch(err => {
      console.log("err: ", err);
      res.json(err);
    });
});

router.post(
  "/auth/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  (req, res) => {
    res.send("Happy Dance! You're in!");
    //res.render("gallery");
  }
);
