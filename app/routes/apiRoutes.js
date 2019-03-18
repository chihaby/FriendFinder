var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {

        if (friendsArray) {
            friendsArray.push(req.body);
            res.json(true);
        } 
    });

    // I added this below code to clear out array while working with the functionality.

    // app.post("/api/clear", function(req, res) {
    //     friendsArray.length = [];
    //     res.json({ ok: true });
    // });
};
