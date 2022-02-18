//THIS FILE RUNS CHECKS FOR USER REGISTRATION BASED ON USER INPUT
    //Checks that feilds aren't returned empty 
    //Checks that a valid email is inputed
    //Checks that the password passes special requirments
    //Checks that password confirmation matches

const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function registrationInputValidation(data) {
    let errors = {};


//these are if else statements to check user inputs and decide on returns functions
    data.name = !isEmpty(data.name) ? data.name : ""; //return name if not empty
    data.email = !isEmpty(data.email) ? data.email : ""; //return email if not empty
    data.password = !isEmpty(data.password) ? data.password : ""; //return password if not empty
    data.passwordCheck = !isEmpty(data.passwordCheck) ? data.passwordCheck : ""; //return passwordCheck if not empty

    //this checks if the name field is empty. If user submits with empty field, error message prints
    if(Validator.isEmpty(data.name)) {
        errors.name = "You must enter a name";
    }

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

    //checks if the password confirm has been entered else returns errors
    if (Validator.isEmpty(data.passwordCheck)){
        errors.passwordCheck = "You must confirm your password";
    }

    //this checks the min and max length of a password -- I need to add in checks for special chars and caps
    if(!Validator.isLength(data.password, { min: 8, max: 40 })) {
        errors.password = "Password must be at least 8 characters";
    }

    //makes sure that confirm password matches og password, else error
    if(!Validator.equals(data.password, data.passwordCheck)) {
        errors.passwordCheck = "Your confirmation password must match the original";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
};



