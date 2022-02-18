//THIS FILE ACCEPTS THE MONGO URI TO CONNECT TO MONGODB
    //URI is parsed through within the server file
    //secretOrKey is a string containing the secret for verifying the token's signiture

module.exports = {
    mongoURI: "mongodb+srv://gsabin:Bumper$1@usercluster.9thzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    secretOrKey: "secret"
}

//In the past this was a .env file which held the URI as Atlas URI. I'm curious if this will work
//potential error incoming. First thing to check 