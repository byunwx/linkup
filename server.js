const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require('path');
// middleware
//Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
const passport = require("./config/passport");
//Passport uses the concept of strategies to authenticate requests.
const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
})); //session middleware init
app.use(passport.initialize());
app.use(passport.session());

const exphbs = require("express-handlebars");
//handlebars init
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./routes/routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});