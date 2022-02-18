//THIS SETS UP PASSPORT IN ORDER TO AUTHENTICATE JWT
    //searches through users by id, and looks for jwt
    //if found, user is confirmed
    //if not found, user is returned as false for not having token

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //returns jwt as a string or null
opts.secretOrKey = keys.secretOrKey; //stirng containging the secrect or encoded oublic key

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => { //jwt_payload contains the decodes JWT payload
            User.findById(jwt_payload.id) //finds a user based on userId and checks for a jwt
                .then(user => {
                    if (user) {
                        return done(null, user); //if found, returns the user
                    }
                    return done(null, false); //if not found, returns false
                })
                .catch(err => console.log(err));
        })
    );
};