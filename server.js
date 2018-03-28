const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require('path');
const cheerio = require('cheerio');
const request = require('request');
const rp = require('request-promise');
const schedule = require('node-schedule');
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
require("./routes/user-api-routes.js")(app);
require("./routes/link-api-routes.js")(app);

// This is our scraper route which will scrape the Moz top500 and return the results as JSON in a {0: url, 1: url} format
app.get('/scrape/', (req, res) => {
  let url = 'https://moz.com/top500';
  request(url, function (error, response, html) {
    let siteData = {};
    let $ = cheerio.load(html);
    $('td.url').each(function (i, elem) {
      siteData[i] = [];
      for (let j = 0; j < $(elem).children('a').length; j++) {
        siteData[i].push($(elem).children('a').text().trim());
      }
    });
    return res.json(siteData);
  });
});

// function that creates a request to our scraper route using a promise, it then parses the data and in a for loop creates entries into the db
const scraper = () => {
  rp('http://localhost:8080/scrape/').then(function (res) {
    if (res != '') {
      let top500 = res;
      top500 = JSON.parse(top500);
      let size = Object.keys(top500).length;
      db.Top500.destroy({
        where: {}
      }).then(function () {
        for (let i = 0; i < size; i++) {
          let url = top500[`${i}`][0];
          db.Top500.create({
            url: url
          }).catch(function (err) {
            console.log(err);
          });
        }
      });
    }
  });
}

//cron! scheduling for our scraper to run every wednesday at 4:00am
schedule.scheduleJob('* 4 * * 2', function () {
  console.log('Time to scrape!');
  scraper();
});

//this cronjob is set to run every day at midnight to reset the dailyClicks in the db
schedule.scheduledJob('00 00 * * *', function () {
  console.log('Time to clear the clicks!');
  db.Link.update({
    dailyClicks: 0
  }, {
    where: {}
  });
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});