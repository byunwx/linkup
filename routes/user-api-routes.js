var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    // Handles login functionality
    app.post("/api/user/login", passport.authenticate("local"), function (req, res) {
        // res here will route us to the logged in member page
    });

    app.post("/api/user/signup", function (req, res) {
        console.log(req.user)
        //   res.end()
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/login")
        }).catch(function (err) {
            console.log(err)
            res.json(err)
        })
    });
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    })
    app.get("/api/user/data", function (req, res) {
        //   console.log(req.user)
        if (!req.user) {
            res.json({})
        } else {
            db.User.findOne({
                include: [db.Link],
                where: {
                    id: req.user.id
                }
            }).then(function (data) {
                res.json(data
                    //   we can insert any other information we would like to parse out from the User objec
                ) // will be edited to not display user password
            })

        }
    })
}