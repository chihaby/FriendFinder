var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        friendsArray.push(req.body);
        res.json(true);
        var sumArr = [];

        for (var i=0; i<friendsArray.length; i++){
            var lastFriend = friendsArray.slice(-1)[0];
            console.log(lastFriend.scores);
            var diffArr = [];            
                for (var j=0; j<friendsArray[i].scores.length; j++){
                    diffArr.push(Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(lastFriend.scores[j])));                
                }        
                console.log(diffArr);                
                sumArr.push(diffArr.reduce((total, amount) => total + amount));
            }
            let maxScore = Math.max(...sumArr);
            let matchIndex = sumArr.indexOf(maxScore);
            console.log("sumArr: " + sumArr);
            console.log("max score" + maxScore);
            console.log("index max score " + matchIndex );
    });

    // Added to clear out array while working with the functionality.
    app.post("/api/clear", function(req, res) {
        friendsArray.length = [];
        res.json({ ok: true });
    });
};

