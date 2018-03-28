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
            db.Link.findAll({
              limit:3,
              where:{
                shared:true
              },
              order:[
                ["totalClicks", "DESC"]
              ]
            }).then(data => {
                let links = {
                    links: data
                }
                res.render("landing", links);
            });
        };
    });

    app.get("/search", isAuthenticated, (req, res) => {
        db.Link.findAll({
          where:{
            shared:true
          },
          order:[
            ["totalClicks", "DESC"]
          ]
        }).then(data => {
            let links = {
                links: data
            }
            res.render("search", links);
        });
    });


    app.get("/home", isAuthenticated, (req, res) => {
        db.Link.findAll({
            include:[db.User],            
          where:{
            shared:true
          },
          order:[
            ["createdAt", "DESC"]
          ]
        }).then(data => {
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
          db.Link.findAll({
            where:{
              UserId: req.params.userid
            },
            order:[
              ["totalClicks", "DESC"]
            ]
          }).then(data => {
              let links = {
                  links: data
              }
              res.render("user", links);
          });
        })

    });

}
