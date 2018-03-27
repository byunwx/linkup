'use strict';
const db = require("../models");
const passport = require("../config/passport");

module.exports = (app) => {
    // Handles login functionality
    app.post("/api/user/login", passport.authenticate("local"), (req, res) => {
        console.log("loging attemtp")
        res.json("/home")
    });

    app.post("/api/user/signup", function (req, res) {
        console.log("signup attempt")
        console.log(req.body)
        db.User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            birthday: req.body.birthday
        }).then(function () {
            res.redirect(307, "/api/user/login")
            // res.end();
        }).catch(function (err) {
            console.log(err)
            res.json(err)
        })
    });
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
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
                let userData = {
                    id: data.id,
                    email: data.email,
                    birthday: data.birthday,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                    Links: data.Links
                }
                res.json(userData);
            })

        }
    })
}