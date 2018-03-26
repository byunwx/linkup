const path = require("path");
const db = require("../models");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
// app.get("/", (req,res) =>{
//     let placeholder; //will be redifined through development
//     if (req.user){
//         res.redirect("/home")
//     }
//     // res.render("landing", placeholder)
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
// });
app.get("/", (req,res)=>{
    let placeholder;//will be redifined through development
    res.render("landing", placeholder)
});

// app.get("/home", isAuthenticated, (req,res)=>{
//     let placeholder;//will be redifined through development
//     res.render("home", placeholder)
// });
app.get("/home", (req,res)=>{
    let placeholder;//will be redifined through development
    res.render("home", placeholder)
});


// app.get("/search", isAuthenticated, (req,res)=>{
//     let placeholder;//will be redifined through development
//     res.render("search", placeholder)
// });

app.get("/search", (req,res)=>{
    let placeholder;//will be redifined through development
    res.render("search", placeholder)
});

app.get("/user/:userid", (req,res)=>{
    if (!req.user){
        res.redirect("/");
    }
    db.User.findOne({
            include: [db.Link],
            where: {id:req.params.id}
    }).then((data)=>{
        res.render("user", data)
    })
});
}
