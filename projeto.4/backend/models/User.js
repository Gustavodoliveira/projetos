const mongoose = require("../db/conn");
const { Schema } =  mongoose;

const User = mongoose.model(
    'User', 
    new Schema({
        name: {
            type: String,
            
        },
        email: {
            type: String,
            
        },
        password: {
            type: String,
            
        },
        phone: {
            type: String,
            
        },
        image: {
            type: String
        },
        cartao: {
            name:{
                numero: String,
                
            },
            numero:{
                numero: String,
                
            },
            cvc:{
                numero: String,
               
            }   
        }
    },
    {timestamps: true},
    ),
)

module.exports = User