const jwt = require("jsonwebtoken");
const getToken = require("./get-token");
const getUserByToken = require("./get-user-by-token")

const Product = require("../models/Products")
const User = require("../models/User")

const verifyId = async (req, res) => {

    try {
        const idProduct = req.params.id
        const token = getToken(req)
        let product = await Product.findOne({_id: idProduct})

        const user = await getUserByToken(token)
        const IdUser = String(await user._id)
        
        
        const IdProduct = String(await product.user._id);
        
        if(IdUser !== IdProduct) {
           
            return res.status(400).json({message: "Token invalido"})
       } 

       return product
      
    } catch (error) {
        console.log(error);
    }
        

       //Validação se id do usuario no produto bate com o id amazenado no token
       
       

}
module.exports = verifyId