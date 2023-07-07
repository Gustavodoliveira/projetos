const jwt = require("jsonwebtoken");
const getToken = require("./get-token");


//isto e um middleware de validaçao de token\\\ //esquema de funçao de middleware
const checkToken = (req, res, next) => {

    if(!req.headers.authorization) {
        return res.status(401).json({ message: 'acesso negado'})  
    }
    const token = getToken(req)

    if(!token) {
       return res.status(401).json({ message: 'acesso negado'}) 
    }

    try {
        const verify = jwt.verify(token, "secretlmn")
        req.user = verify
        next()

    } catch (error) {  

        return res.status(400).json({ message: 'Token invalido'}) 
    }
}

module.exports = checkToken;