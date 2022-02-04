//this is a controller which will test authorization

//there are 4 functions needed in this:
    //api/test/all for public access
    //api/test/user for loggedin users
    //api/test/mod for moderator roles
    //api/test/admin for admin roles

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
    };
    
    exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
    };
    
    exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
    };
    
    exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
    };   