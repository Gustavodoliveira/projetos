const express = require ("express");
const bodyParser = require ("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = {
    email: String,
    password: String
};

const User = new mongoose.model("User", userSchema);






app.get("/", function(req,res){
    res.render("register");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save();
    res.render("home")
})

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

   if (User.findOne({email: username, password: password})) {
    res.render("home")
   } else {
    console.log();
   }
})

app.get("/about", function(req, res){
    res.render("about");
});








app.listen(3000, function(){
    console.log("Server starting on port 3000  !");
});