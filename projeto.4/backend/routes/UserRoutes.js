const router = require ("express").Router();
const UserController = require("../controllers/UserController");

//middleware

const checkToken = require("../helpers/verify-token")
const { imageUpload } = require ("../helpers/image-update")

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/checkuser", UserController.checkUser);
router.get("/:id", UserController.getUserbyId);

// o middleware vai entre a rota e a funçao para vericar se a algum token
router.patch("/edit/:id", checkToken, imageUpload.single("image"), UserController.editUser)
router.patch("/carrinho", checkToken)



module.exports = router