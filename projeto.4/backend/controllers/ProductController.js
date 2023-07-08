const Product = require("../models/Products")
const User = require("../models/User")
const getToken = require("../helpers/get-token")
const jwt = require("jsonwebtoken")


module.exports = class ProductController {

    static async register (req, res) {

        
        const token = getToken(req)
        const decoded = jwt.verify(token, "secretlmn")
       
        const {name, price, stock, description } = req.body

        
        

        if(!name) {
            res.status(422).json({message: "o nome é obrigatorio"})
            return
        }

        if(!price) {
            res.status(422).json({message: "o preço é obrigatorio"})
            return
        }

        if(!stock) {
            res.status(422).json({message: "o estoque é obrigatorio"})
            return
        }

        if(!description){
            res.status(422).json({message: "A descrição e obrigatoria"})
            return
        }
       

       try {
         const user = await User.findById(decoded.id)
         const id_user = user._id
         const product = new Product ({
            id_user,
            name, 
            price,
            stock, 
            description

         })
         
        console.log(product);
          //await product.save(); 

          
       } catch (error) {
         res.status(500).json({message: error})
       }
       
         
        
    }

   


}