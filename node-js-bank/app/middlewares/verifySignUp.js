

const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
//this function is checking if a user is registering under a username or email that...
//already exists
checkDuplicateUsernameOrEmail = (req, res, next) => {
    
    //Username Check
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if(user){
            res.status(400).send({ message: "Failed! This username is already in use!"});
            return;
        }

        // Email Check
        User.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if(user) {
                res.status(400).send({ message: "Failed! This email is already taken"});
                return;
            }

            next();

        });
    });
};


//this function checks if a role request can be legal or not
checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for(let i=0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! The role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }
    next();
};


const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
};

module.exports = verifySignUp;