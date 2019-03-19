var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        friendsArray.push(req.body);
        res.json(true);
        for (var i=0; i<friendsArray.length; i++){
            let diffArr = [];
            for (var j=0; j<friendsArray[i].scores.length; j++){
                diffArr.push(Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(req.body.scores[j])));
                console.log(diffArr);
            }

        }
    });

    // I added this below code to clear out array while working with the functionality.

    // app.post("/api/clear", function(req, res) {
    //     friendsArray.length = [];
    //     res.json({ ok: true });
    // });
};
