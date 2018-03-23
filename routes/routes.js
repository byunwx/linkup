const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
app.get("/", (req,res) =>{
    let placeholder; //will be redifined through development
    if (req.user){
        res.redirect("/landing")
    }
    res.render("signup", placeholder)
})

app.get("/login", (req,res)=>{
    let placeholder;//will be redifined through development
    if(req.user){
        res.redirect("/landing")
    }
    res.render("login", placeholder)
})
app.get("/landing", isAuthenticated, (req,res)=>{
    let placeholder;//will be redifined through development
    res.render("landing", placeholder)
})
}