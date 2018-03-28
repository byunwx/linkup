const db = require("../models");
const passport = require("../config/passport");

module.exports  = (app)=>{
    // create a new link
    app.post("/api/link/new", function(req,res){
        console.log(req.body);
        db.Link.create({
            title: req.body.title,
            url: req.body.url,
            shortenedUrl: req.body.shortenedUrl,
            description: req.body.description,
            shared: req.body.shared,
            top500: req.body.top500,
            UserId: req.body.UserId
        }).then(function(dbLink){
            res.json(dbLink);
        })
    })
    // find all links in database
    app.get("/api/link/data", (req,res)=>{
        db.Link.findAll({
            where:{include:[db.User]}
        })
        .then((data)=>{
            res.json(data) // will be edited to not display user password

            })
    })
    // find all the information for a specific link
    app.get("/api/link/:id",(req,res)=>{
        db.Link.findOne({
            where:{
                include:[db.User]},
                id:req.params.id
        }).then((data)=>{
            res.json(data)// will be edited to not display user password
        })
    })
    // delete a link
    app.delete("/api/link/delete", (req,res)=>{
        db.Link.destroy({
            where:{id:req.body.id}
        }).then((data)=>{
            res.json(data)
        })
    })
    // update a link
    app.put("/api/link/update", (req,res)=>{
        db.Link.update(
            req.body,
            {where:{id: req.body.id}}
        ).then((data)=>{
            res.json(data)
        })
    })
    // increase a link's clickcount
    // app.put("/api/link/click", function(req,res){
    //     db.Link.update(req.body,
    //         {where: {id: req.body.id}})
    // })
}