const createUserToken = require("../helpers/create-user-token")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//helpers

const getToken = require("../helpers/get-token")
const getUserByToken = require("../helpers/get-user-by-token")

module.exports = class UserController {
    static async register(req, res){
       const {name, email, password, phone, confirmpassword} = req.body
    
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

       if(password !== confirmpassword){
        res.status(422).json({ message: "A senha e a confirmaçao de usuario precisar ser iguais"})
         return
       }

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
        phone
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

    static async login(req, res) {
        const {email, password} = req.body

        if(!email) {
            res.status(422).json({message: "o email e obrigatorio"})
            return
           }

           if(!password) {
            res.status(422).json({message: "A senha e obrigatoria "})
            return
           }   
 
           const user = await User.findOne({email: email})

       if (!user) {
        res.status(422).json({message: "Este email nao existe",})
        return
       }

       const checkPassword = await bcrypt.compare(password, user.password);

       if(!checkPassword){
        res.status(422).json({ message: "senha invalida"})
        return
       }

       await createUserToken(user, req, res)
    }

    static async checkUser(req, res) {
        let currentUser

        if(req.headers.authorization) {

            const token = getToken(req)
            const decoded = jwt.verify(token, "secretlmn")

            currentUser = await User.findById(decoded.id)

            currentUser.password = undefined

        } else {
            currentUser = null
        }

        res.status(200).send(currentUser)
    }

    static async getUserbyId (req, res) {

        const id = req.params.id

        const user = await User.findById(id).select('-password')

        if (!user) {
            res.status(422).json({message: "Usuario nao encontardo"})
            return
           }
        res.status(200).json({ user })   
    }

    static async editUser(req, res) {
         const id = req.params.id

        const token = getToken(req)
        const user =  await getUserByToken(token)         

         const {name, email, phone, password, confirmpassword} = req.body

         let img = ''

         if (req.file) {
            img = req.file.filename
         }

         if(!name) {
            res.status(422).json({message: "o nome e obrigatorio"})
            return
           }

           user.name = name
    
           if(!email) {
            res.status(422).json({message: "o email e obrigatorio"})
            return
           }

           //check if email has already taken
           const userExist = await User.findOne({email: email})

           if(user.email !== email && userExist) {
              res.status(422).json({message: "Este email ja existe"})
              return
           }

           user.email = email
    
           if(!password) {
            res.status(422).json({message: "A senha e obrigatorio"})
            return
            
           }
    
           if(!phone) {
            res.status(422).json({message: "o telephone e obrigatorio"})
            return
           }
    
           user.phone = phone

           if(password !== confirmpassword){
            res.
                status(422)
                .json({
                    message: "A senha e a confirmaçao de usuario precisar ser iguais"
                })
                return
           } else if(password === confirmpassword && password != null) {

            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)

            user.password = passwordHash

           }

           try {

            //console.log(User);
            
             await User.findOneAndUpdate(
                { _id: user._id },
                { $set: user },
                { new: true },
            )
                res.status(200).json({message: "usuario criado com sucesso"})
           } catch (error) {
            res.status(500).json({message: error})
            return
           }

    }
}