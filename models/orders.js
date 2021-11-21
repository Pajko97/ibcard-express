const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Order = new Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    contact_phone: {
        type: Number,
        required: true
    },

    products_ordered: {
        type: Array,
        required: true
    },

    ordered_on: {
        type: Date,
        required: true
    },

    address: {
        type: Object,
        required: true
    },

    special_note: {
        type: String,
        required: false
    }
})


var Orders = mongoose.model('Orders', Order);

module.exports = Orders