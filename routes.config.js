const express = require('express');
const app = express()
const router = express.Router();
const MailController = require('./models/contact.model')
const UserController = require('./controllers/users.controller')
const ProductsController = require('./controllers/products.controller')
const OrdersController = require('./controllers/orders.controller')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const cors = require('cors')
/* User routes */

router.post('/contact', (req, res, err) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail', // upgrade later with STARTTLS
        auth: {
          user: "devredhat@gmail.com",
          pass: "cosak1997",
        },
      });

        
    let mailOptions = {
        from: 'bezveze@gmail.com',
        to: 'devredhat@gmail.com',
        subject: 'Sandro car',
        text: `
               Ime :${req.body.name} 
               Mail : ${req.body.email}
               Poruka: ${req.body.text}`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending mail')
        } else {

            res.status(200).send(req.body)
            console.log('Email sent: ' + info.response);
        }
    });

})

module.exports = router;