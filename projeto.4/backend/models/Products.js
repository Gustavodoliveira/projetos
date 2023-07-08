const mongoose = require("../db/conn");
const { Schema } = mongoose;

 const Products = mongoose.model(
    'Products', 
    new Schema({
        
        id_user: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
           // required: true
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