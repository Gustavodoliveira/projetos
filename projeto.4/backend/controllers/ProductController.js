const Product = require("../models/Products")
const User = require("../models/User")
const getToken = require("../helpers/get-token")
const jwt = require("jsonwebtoken")
const getUserByToken = require("../helpers/get-user-by-token")

const verifyId = require("../helpers/verify-id")


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
         const user = await User.findById(decoded.id).select("-password  -carrinho")
        
         const product = new Product ({
            user,
            name, 
            price,
            stock, 
            description

         })
         
       
          await product.save(); 
          res.status(200).json({message: "produto cadastrado com sucesso"})
          
       } catch (error) {
         res.status(500).json({message: error})
       }
       
         
        
    }

   static async checkProducts(req, res) {
     
    const token = getToken(req)
    const decoded = jwt.verify(token, "secretlmn")

    const products = await Product.find({id_user: decoded.id})
    

    res.status(200).json({message: products})

   }


   static async editProduct(req, res){

        const idProduct = req.params.id 

        const token = getToken(req)

        let img;

        if(req.file) {
            img = req.file.filename
        }


         const user = await getUserByToken(token)
         const IdUser = String(await user._id)
         
         const product = await Product.findOne({_id: idProduct})
         const IdProduct = String(await product.user._id);

        //Validação se id do usuario no produto bate com o id amazenado no token

        if(IdUser !== IdProduct) {
            res.status(401).json({message: "Token invalido"})
           return
        }


        const {name, price, stock, description } = req.body

        if(!name) {
            res.status(422).json({message: "o nome é obrigatorio"})
            return
        }

        product.name = name

        if(!price) {
            res.status(422).json({message: "o preço é obrigatorio"})
            return
        }

        product.price = price

        if(!stock) {
            res.status(422).json({message: "o estoque é obrigatorio"})
            return
        }

        product.stock = stock

        if(!description){
            res.status(422).json({message: "A descrição e obrigatoria"})
            return
        }

        product.description = description

        try {
            await Product.findOneAndUpdate(
                {_id: idProduct},
                {$set: product},
                {new: true}
            )

            res.status(200).json({message: "Produto editado com sucesso"})

        } catch (error) {
            res.status(500).json({message: error});
        }

   }


    static async removeProduct(req, res) {

        const id = await verifyId(req,res)
    //     const token = getToken(req)
    //     let product = await Product.findOne({_id: id})

    //     const user = await getUserByToken(token)
    //     const IdUser = String(await user._id)
        
        
    //     const IdProduct = String(await product.user._id);

    //    //Validação se id do usuario no produto bate com o id amazenado no token
       
    //    if(IdUser !== IdProduct) {
    //        res.status(401).json({message: "Token invalido"})
    //       return
    //    }

        // if(!product){
        //     res.status(422).json({message: "ID invalido"})
        //     return
        // }


        try {
            await Product.deleteOne({_id: id})
            res.status(200).json({message: "Produto deletado com sucesso"})
        } catch (error) {
            res.status(500).json({message: "algo deu errado com o serviodr"})
        }
        
    }

}

