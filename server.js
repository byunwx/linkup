
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// middleware
//Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
var passport = require("./config/passport");
//Passport uses the concept of strategies to authenticate requests.
var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); //session middleware init
app.use(passport.initialize());
app.use(passport.session());

require("./routes/routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
