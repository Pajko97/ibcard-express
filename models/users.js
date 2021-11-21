const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    email: {
        type: String,
        required: true
    },
    permission_level: {
        type: Number,
        required: true
    },
    password: {
        required: true,
        type: String
    }

})

var Users = mongoose.model('User', User)

module.exports = Users
