'use strict';
const path = require("path");
const db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {

    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/home")
        } else {
            // we can edit this query to pull from a specific category (the dev category)
            db.Link.findAll({}).then(data => {
                let devLinks = {
                    devLinks: data
                }
                res.render("landing", devLinks);
            });
        };
    });

    app.get("/search", isAuthenticated, (req, res) => {
        let placeholder; //will be redefined through development
        res.render("search", placeholder);
    });


    app.get("/home", isAuthenticated, (req, res) => {
        db.Link.findAll({}).then(data => {
            let links = {
                links: data
            }
            res.render("home", links);
        });
    })


    app.get("/user/:userid", (req, res) => {
        if (!req.user) {
            res.redirect("/");
        }

        db.User.findOne({
            include: [db.Link],
            where: {
                id: req.params.userid
            }
        }).then((data) => {
            console.log("this is data: ", data);
            res.render("user");
        })
    });
}