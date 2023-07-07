const getToken = (req) => {
    
    //lembre do espaço no split se nao da erro => jwt malformed

    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]

    return token
}

module.exports = getToken