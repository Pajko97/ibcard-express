const Order = require('../db_models/orders')
const nodemailer = require('nodemailer')


const transporter =
    nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devredhat@gmail.com',
            pass: 'dijhhgrlydwfyzur '
        }
    });



exports.insertOrder = (data) => {
    var mailOptions = {
        from: 'devredhat@gmail.com',
        to: 'devredhat@gmail.com',
        subject: 'Nova porudzbina',
        text: `Porucilac : ${data.first_name} ${data.last_name} datuma ${data.ordered_on},
        Poruceni proizvodi : ${data.products_ordered.map((product, i) => {
            let oper = i + 1;
            return ` Proizvod ${oper} : ${product.item.name} Kolicina : ${product.quantity} komada`
        })}
                    Adresa porucioca : Ulica : ${data.address.street_name}
                    Grad : ${data.address.city}
                    Postanski broj: ${data.address.zip_code}
                    Drzava : ${data.address.country}
                    Posebna poruka : ${data.address.special_note}
                    Kontakt telefon : ${data.contact_phone}`
    };
    /*  */
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    const order = new Order(data)
    return order.save()
}

exports.listOrders = () => {
    return Order.find({})
        .then(res => {
            return res
        })
}

exports.updateOrder = (data) => {
    return Order.findByIdAndUpdate(data.id, data.new)
        .then(res => {
            return res
        })
}

exports.findOrderByID = (id) => {
    return Order.findById(id)
        .then((res) => {
            return res
        })
}

exports.deleteOrderByID = (id) => {
    return Order.findByIdAndRemove(id)
        .then((res) => {
            return res
        })
}
