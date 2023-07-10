const router = require("express").Router();

const ProductController = require("../controllers/ProductController");


//middleware 
const checkToken = require ("../helpers/verify-token")
const { imageUpload } = require ("../helpers/image-update")



router.post("/register", checkToken,  ProductController.register);
router.get("/checkproducts", checkToken,ProductController.checkProducts);
router.patch("/editproduct/:id", checkToken, imageUpload.single("image"),  ProductController.editProduct)


module.exports = router