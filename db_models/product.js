const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    colors: {
        type: Array,
        default: ["black", "green", "orange", "pumpkin", "red", "turqoise", "white"]
    },

    sizes: {
        type: Array,
        default: [8, 10, 12, 15]
    },

    price: {
        type: Number,
        required: true
    },
    images: Array,

    colors: {
        type: Array,
        required: true
    },

    created: {
        type: String,
        required: true
    }
})

var Products = mongoose.model('Product', Product)

module.exports = Products
