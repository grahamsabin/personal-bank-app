//THIS FILE CREATES THE SCHEMA FOR A USER IN MONGODB
    //Sets input type and data requirment for name, email, password, and date

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//The following code creates a Schema
// A schema is the JSON object which defines the structure and contents of your data

const UserDefinition = new Schema({
    name: {
        type: String,
        required: true
    },
    email: { //Sets up email as a stirng
        type: String,
        required: true
    },
    password: { //Sets up password as a string
        type: String,
        required: true
    },
    date: { //Defines when a user logs in or creates account -- i think used for JWT
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserDefinition);