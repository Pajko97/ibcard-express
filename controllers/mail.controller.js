const mail = require('../mail/mail.config')

exports.sendMail = (req, res, err) => {
    mail.transport.sendMail(mail.mailOptions, function (error, info) {
        if (error) {
            res.status(403).send('Error sending mail, try again')
        } else {
            res.status(200).send('Mail sent successfully')
        }
    });
}