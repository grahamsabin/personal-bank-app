//THIS CREATES THE CONNECTION TO MONGO DB
    //Calls the key which has the mongoDB URI in it
    //Outputs to terminal that we are running on the port and which port
    //Running on port 5010

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");


const cors = require('cors'); //////////



const app = express();

app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI; //sets variable db to the mongoURI defined


// Use mongoose to connect the mongo to node
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


  //Initializes the use of passport as middleware
app.use(passport.initialize());

//Sets up the configs for passport
require("./config/passport")(passport);

//Maps to the users routes
app.use("/api/users", users);



const port = process.env.PORT || 5010; //typical port is 5000, but apple put airplay on that port so it's on 5010
app.listen(port, () => console.log(`You can view and access your server on port ${port} !`));
// In order to run this on Heroku, change the process.env PORT to the heroku port (it's currently 5010)

