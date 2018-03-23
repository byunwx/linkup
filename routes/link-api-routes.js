var db = require("../models");
var passport = require("../config/passport");

module.exports  = function(app){
    // create a new link
    app.post("/api/link/new", function(req,res){
        db.Link.create({
            title: req.body.title,
            url: req.body.url,
            discription: req.body.description
            // major site functionality will be witten into this line
        })
    })
    // find all links in database
    app.get("/api/link/data", function(req,res){
        db.Link.findAll({
            where:{include:[db.User]}
        })
        .then(function(data){
            res.json(data) // will be edited to not display user password

        })
    })
    // find all the information for a specific link
    app.get("/api/link/:id",function(req,res){
        db.Link.findOne({
            where:{
                include:[db.User]},
                id:req.params.id
        }).then(function(data){
            res.json(data)// will be edited to not display user password
        })
    })
    // delete a link
    app.delete("/api/link/delete", function(req,res){
        db.Link.destroy({
            where:{id:req.body.id}
        }).then(function(data){
            res.json(data)
        })
    })
    // update a link
    app.put("/api/link/update", function(req,res){
        db.Link.update(
            req.body,
            {where:{id: req.body.id}}
        ).then(function(data){
            res.json(data)
        })
    })
    // increase a link's clickcount
    // app.put("/api/link/click", function(req,res){
    //     db.Link.update(req.body,
    //         {where: {id: req.body.id}})
    // })
}