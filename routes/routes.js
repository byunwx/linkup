const path = require("path");
const db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
app.get("/", (req,res) =>{
    // let placeholder; //will be redifined through development
    if (req.user){
        res.redirect("/home")
    }
    // res.render("landing", placeholder)
    res.sendFile(path.join(__dirname, "../public/signup.html"));
});

app.get("/home", isAuthenticated, (req,res)=>{
    let placeholder;//will be redifined through development
    res.render("home", placeholder)
});
//  testing
app.get("/user/:id", (req,res)=>{
    db.User.findOne({
            include: [db.Link],
            where: {id:req.params.id}
    }).then((data)=>{
        res.json(data)
    })
});
}
