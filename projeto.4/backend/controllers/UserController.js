const createUserToken = require("../helpers/create-user-token")
const User = require("../models/User")
const bcrypt = require("bcrypt")

module.exports = class UserController {
    static async register(req, res){
       const {name, email, password, phone} = req.body
    
       //validations

       if(!name) {
        res.status(422).json({message: "o nome e obrigatorio"})
        return
       }

       if(!email) {
        res.status(422).json({message: "o email e obrigatorio"})
        return
       }

       if(!password) {
        res.status(422).json({message: "A senha e obrigatorio"})
        return
        
       }

       if(!phone) {
        res.status(422).json({message: "o telephone e obrigatorio"})
        return
       }

       /*if(password !== confirmpassword){
        res.
            status(422)
            .json({
                message: "A senha e a confirmaçao de usuario precisar ser iguais"
            })
       }*/

       //checking se user exist

       const userExists = await User.findOne({email: email})

       if (userExists) {
        res.status(422).json({message: "o Usuario ja existe",})
        return
       }


       //create password

       const salt = await bcrypt.genSalt(12)
       const passwordHash = await bcrypt.hash(password, salt)


       //create a user

       const user = new User({
        name,
        email,
        password: passwordHash,
        phone,

       })

       try {

         const newUser = await user.save()



         await createUserToken(newUser, req, res)

         //Resposta em baixo
         /*res.status(200).json({
            message: "Usuario criado",
            newUser,
         }) */

       } catch (error) {

        res.status(500).json({message: error})
       }


    }
}