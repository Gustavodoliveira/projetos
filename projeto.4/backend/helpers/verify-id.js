const jwt = require("jsonwebtoken");
const getToken = require("./get-token");
const getUserByToken = require("./get-user-by-token")

const Product = require("../models/Products")

const verifyId = async (req, res) => {

  try {
        const id = req.params.id
        const token =  getToken(req)
        const user = await getUserByToken(token)
        const product = await Product.findOne({_id: id})
       
        const IdUser = String(await user._id)
        const IdProduct = String(await product.user._id)

         if( IdUser === IdProduct){
          return product
          
         }
  } catch (error) {
    res.status(400).json({message: "Usuario invalido"})
  }
        
       
        
}
module.exports = verifyId