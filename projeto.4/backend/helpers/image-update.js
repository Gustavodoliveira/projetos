const multer = require("multer")
const path = require("path")


const imageStorage = multer.diskStorage({
    destination: function (req, res, cb){
        
        let folder = ""


        if (req.baseUrl.includes("products")) {
         folder = "produto"
        } else {
            folder = "users"
        }

        cb(null, `public/images/${folder}`)

    },
    filename: function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))

    }
})

const imageUpload = multer ({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Por favor, envie apenas png ou jpg"))
        }

        cb(undefined, true)
    }
})

module.exports = { imageUpload }