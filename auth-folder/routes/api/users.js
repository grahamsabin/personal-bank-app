//THIS FILE VALIDATES A USER REGISTRATION AND LOGIN WITH JWT
    //posts a request to registration
    //checks if the registration input is valid by calling registration.js
    //checks if an email has already been established by a user
    //hashes password and uploads
    //on login, checks valid email, checks for matching password
    //if password matches, allocate jwt for user id
    //else, returns an incorrect password error

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs"); //this is used to hash the password before storing
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


//adding the paths to validating user inputs for both login and registration
const registrationInputValidation = require("../../userInputValid/registration"); //registration
const loginInputValidation = require("../../userInputValid/login"); //login

//adds the path to the user schema
const User = require("../../models/User");

//@route POST api/users/registration
//@desc Register user
//@access Public

router.post("/registration", (req, res) => {
    //form validation

const {errors, isValid } = registrationInputValidation(req.body);

//Checks valid user input
if(!isValid) {
    return res.status(400).json(errors);
}

//Checks to see if an email exists, error if it does
User.findOne({ email: req.body.email }).then(user => {
    if(user) {
        console.log(`Email read in is ${req.body.email}`);
        return res.status(400).json({ email: "Email already exists" });
    }
    else {
        const newUser = new User({ //creates new user if it is valid
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

//Before saving into the DB, this will hash the password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    }
});

});

//This following code is used to allow user login, validate it, and set a JWT token

//@route POST api/users/login
//@desc Login user and return JWT 
//@access Public

router.post("/login", (req, res) => {

    const { erros, isValid } = loginInputValidation(req.body);

    //Check if login attempt is calid
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
        const password = req.body.password;
    //searching for a user based on their email
        User.findOne({ email }).then(user => {
            //Checking if the user exists
            if(!user) {
                return res.status(404).json({ emailnotfound: "Email not found" //return if no email
        });
            }

            //compares password input to user password, if match, issue jwt
            bcrypt.compare(password, user.password).then(isMatch => {
                if(isMatch) {
                    //User is matched so create a JWT payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    };
                    
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 400000000 //this is alot of time in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                }
                //if incorrect password return below
                else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "Password incorrect" });
                }
            });

        });

});

//exports function so it can be used elsewhere
module.exports = router;

