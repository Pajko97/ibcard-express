const nodemailer = require('nodemailer')

module.exports.transport =
    nodemailer.createTransport({
        service: 'smtp',
        auth: {
            user: 'narativ.agency',
            pass: 'h7ax7kxzHloZ'
        }
    });



