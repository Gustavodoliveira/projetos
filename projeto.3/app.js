require("dotenv").config();
const express = require ("express");
const bodyParser = require ("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://127.0.0.1:27017/userDB");

/* usa o codigo abaixo casp de algum aviso de depreciçao
mongoose.set("useCreateIndex", true);
*/
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.get("/", function(req,res){
    res.render("register");
});

app.get("/home", function(req, res){
    if (req.isAuthenticated()) {
        res.render("home");
    } else {
        res.redirect("/login");
    }
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
  

User.register({email: req.body.email}, req.body.password, function(err, user){
    if (err) {
        console.log(err);
        res.redirect("/register");
    } else {
        passport.authenticate("local")(req, res, function(){
            res.redirect("/home");
        });
    };

});














/* Abaixo Codigo que criptografa as senhas do usuarios no banco de dados usando bcrypt //

bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
          const newUser = new User({
        email: req.body.username,
        password: hash
    });

    newUser.save();
    res.render("home")
    });

    fim do codigo //

*/
  
})

app.get("/login", function(req, res){
    res.render("login");
});


// autenticaçao de login
app.post("/login", async(req, res) => {

    const user = new User({
        email: req.body.email,
        password : req.body.password
    });

    req.login(user, function(err){
        if(err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/home");
            });
        }
    });








  /*  const loginservice = (email) => User.findOne({email: email});

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

    
    
*/   
 
}); 

app.get("/about", function(req, res){
    res.render("about");
});








app.listen(3000, function(){
    console.log("Server starting on port 3000  !");
});