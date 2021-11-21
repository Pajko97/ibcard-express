const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Payments = new Schema({
    payment_id: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    payment_type: {
        type: String
    }
})


var PaymentModel = mongoose.model('Payments', Payments);

module.exports = PaymentModel