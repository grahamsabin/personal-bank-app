//we're requiring express and cors to be used -- const port process.env.port will access the port variable 
//from the config.env we required


//WORTH NOTING: apple uses port 5000 for the airplay receiver so I have to use different port
//if you run node on a port which is already in use, you receive an error (shown below)
    //throw er; // Unhandled 'error' event

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5010; 
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});