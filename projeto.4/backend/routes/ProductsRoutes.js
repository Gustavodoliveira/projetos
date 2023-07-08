const router = require("express").Router();

const ProductController = require("../controllers/ProductController");


//middleware 
const checkToken = require ("../helpers/verify-token")



router.post("/register", checkToken,  ProductController.register);
router.get("/checkproducts", checkToken,ProductController.checkProducts);


module.exports = router