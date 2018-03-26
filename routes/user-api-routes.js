const db = require("../models");
const passport = require("../config/passport");

module.exports = (app) => {
    // Handles login functionality
    app.post("/api/user/login", passport.authenticate("local"), (req,res)=>{
        res.json("/home")
    });

    app.post("/api/user/signup", function (req, res){
    //   console.log("post request made")
    console.log(req.body)
    //   res.end()
      db.User.create({
          email: req.body.email,
          password: req.body.password,
        //   birthday: req.body.birthday
      }).then(function(){
          res.redirect(307, "/api/user/login")
        // res.end();
      }).catch(function(err){
          console.log(err)
          res.json (err)
      })
    });
    app.get("/logout", (req,res)=>{
      req.logout();
      res.redirect("/");
    });
    app.get("/api/user/data", function (req, res) {
        //   console.log(req.user)
        if (!req.user) {
            res.json({})
        } else {
            db.User.findOne({
                include: [db.Link],
                where: {
                    id: req.user.id
                }
            }).then(function (data) {
                res.json(data
                    //   we can insert any other information we would like to parse out from the User objec
                ) // will be edited to not display user password
            })

        }
    })
}