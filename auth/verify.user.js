const UserModel = require('../db_models/users')

exports.isPasswordAndUserMatch = (req, res, next) => {
    UserModel.findByEmail(req.body.email)
        .then((user) => {
            if (!user[0]) {
                res.status(404).send({ "user": "User not found" });
            } else {
                let saltRounds = 10
                let hash = bcrypt.hashSync(req.body.password, saltRounds);
                if (hash === passwordFields[1]) {
                    req.body = {
                        userId: user[0]._id,
                        email: user[0].email,
                        permissionLevel: user[0].permissionLevel,
                        provider: 'email'
                    };
                    return next();
                } else {
                    return res.status(400).send({ errors: ['Invalid email or password'] });
                }
            }
        });
};