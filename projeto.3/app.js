require("dotenv").config();
const express = require ("express");
const bodyParser = require ("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});




const User = new mongoose.model("User", userSchema);






app.get("/", function(req,res){
    res.render("register");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
          const newUser = new User({
        email: req.body.username,
        password: hash
    });

    newUser.save();
    res.render("home")
    });


  
})

app.get("/login", function(req, res){
    res.render("login");
});


// autenticaçao de login
app.post("/login", async(req, res) => {

    const loginservice = (email) => User.findOne({email: email});

    const email = req.body.username;
    const password = req.body.password;
    try {
        const user = await loginservice(email);

        const passwordIsValid = bcrypt.compareSync(password, user.password);

    

        if (passwordIsValid === true) {
            res.render("home");
        } else {
            res.redirect("register");
        };
       

    } catch (error) {
        console.log(err);
    };

    
    
   
 
});

app.get("/about", function(req, res){
    res.render("about");
});








app.listen(3000, function(){
    console.log("Server starting on port 3000  !");
});