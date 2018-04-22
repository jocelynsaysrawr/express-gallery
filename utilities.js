const isAuthenticated = (req, res, done) => {
  console.log("req auth: ", req.isAuthenticated());
  if (req.isAuthenticated()) {
    done();
  } else {
    res.redirect("/");
  }
};

module.exports = {
  isAuthenticated
};
