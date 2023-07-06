const jwt = require("jsonwebtoken")

const createUserToken = async(user, req, res) => {

    //create Token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "secretlmn")

    //return token

    res.status(200).json({
        message: "Voçe esta autenticado",
        token: token,
        userId: user._id,
    })

}

module.exports= createUserToken ;