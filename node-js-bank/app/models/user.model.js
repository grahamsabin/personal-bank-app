//this is the mongoDB database for user creation and storage
//it includes username, email, and password
//in order to make sure the user will *confirm* password in the UI I will do a character
//by char check to see if it is the same password. It doesn't need to be stored

//the role will also be stored in the User data

const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);

module.exports = User;