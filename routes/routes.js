'use strict';
const path = require("path");
const db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {

    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/home")
        } else {
            let placeholder; //will be redifined through development
            res.render("landing", placeholder)
        }
    });


    app.get("/search", isAuthenticated, (req, res) => {
        let placeholder; //will be redifined through development
        res.render("search", placeholder)
    });


    app.get("/home", isAuthenticated, (req, res) => {
        let links = {};
        res.render("home", links);
        // res.json(data) // will be edited to not display user password
    })


    app.get("/user/:userid", (req, res) => {
        if (!req.user) {
            res.redirect("/");
        }
        db.User.findOne({
            include: [db.Link],
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.render("user", data)
        })
    });
}