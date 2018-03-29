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

    app.get("/search/all", isAuthenticated, (req, res) => {
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
    app.get("/search/:category", isAuthenticated, (req, res) => {
        db.Link.findAll({
          where:{
            category:req.params.category,
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
          console.log("----- this is data:\n",data);
            let links = {
                links: data
            }
            res.render("home", links);
        });
    })
    app.get("/link/:linkid", (req,res)=>{
        if(!req.user){
            res.redirect("/")
        }
        db.Link.findOne({
            include:[db.User],
            where:{
                id:req.params.linkid
            }
        }).then(data=>{
            let links = {
                links:data
            }
            res.render("update", links)
        });
    })

    app.get("/user/:userid/all", (req, res) => {
        if (!req.user) {
            res.redirect("/");
        }
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

    });
    app.get("/user/:userid/:category", (req, res) => {
        if (!req.user) {
            res.redirect("/");
        }
          db.Link.findAll({
            where:{
              category: req.params.category,
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

    });


}
