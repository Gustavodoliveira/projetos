const mongoose = require("../db/conn");
const { Schema } = mongoose;

 const Products = mongoose.model(
    'Products', 
    new Schema({
        name: {
            type: String,
            
        },
        price: {
            type: Number,
            
        },
        stock: {
            type: Number,
            
        },
        description: {
            type: String,
            
        },
        image: {
            type: String,
            
        },
        available: {
            type: Boolean
        },
        user: Object,
        Buy: Object
    },
    {timestamps: true},
    ),
);

module.exports = Products