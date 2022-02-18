//THIS FILE VALIDATES USER INPUT FOR LOGIN
    //Checks that email and password aren't empty
    //Checks that a valid email is used
    //Returns errors based on issues
    //Very similar to the registration sequence, reused much code

const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function loginInputValidation(data) {
    let errors = {};

//these are if else statements to check user inputs and decide on returns functions
    data.email = !isEmpty(data.email) ? data.email : ""; //return email if not empty
    data.password = !isEmpty(data.password) ? data.password : ""; //return password if not empty

    //This for one, returns an error if an email is not entered
    //If an email is entered, an error is returned if the email is not valid
    if(Validator.isEmpty(data.email)) {
        errors.email = "You must enter an email";
    } 
    else if (!Validator.isEmail(data.email)){
        errors.email = "The email entered is invalid";
    }

    //this checks if a password has been entered, or returns an error that password is required
    if (Validator.isEmpty(data.password)) {
        errors.password = "You must enter a password";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};