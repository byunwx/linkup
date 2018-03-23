const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
app.get("/", (req,res) =>{
    let placeholder; //will be redifined through development
    if (req.user){
        res.redirect("/home")
    }
    res.render("landing", placeholder)
})

app.get("/home", isAuthenticated, (req,res)=>{
    let placeholder;//will be redifined through development
    res.render("home", placeholder)
})
}
app.get("/user/:userid", (req,res)=>{
    if (!req.user){
        res.redirect("/");
    }
    let placeholder;
    res.render("user", placeholder)
})