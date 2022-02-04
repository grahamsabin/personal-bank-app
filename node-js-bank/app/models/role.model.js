//this is a collection in MongoDB that will represent the user type
//it's not neccesary for the challenge but with this I can make certain users
//have admin and then they can potentially access different things in the future
//this can also allow for the creation of multiple users based on subscription status
const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema.model({
        name: String
    })
);

module.exports = Role;