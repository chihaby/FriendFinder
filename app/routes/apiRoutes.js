var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        friendsArray.push(req.body);
        res.json(true);

        for (var i=0; i<friendsArray.length; i++){
            var lastFriend = friendsArray.slice(-1)[0];
            console.log(lastFriend.scores);

            var diffArr = [];
            var sumArr = [];
                for (var j=0; j<friendsArray[i].scores.length; j++){
                    diffArr.push(Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(lastFriend.scores[j])));                
                }        
                console.log(diffArr);
                
                sumArr.push(diffArr.reduce((total, amount) => total + amount));
                //console.log(friendSum);
                //sumArr.push(friendSum);
                console.log("insideloop: " + sumArr);
                console.log("Inside Math.max: " + Math.max(sumArr));
            }
            console.log("outsideloop: " + sumArr);
            console.log("Outside Math.max: " + Math.max(sumArr));
            console.log("sumArr: " + sumArr);
        // console.log(lastFriend.scores);
    });

    // Added to clear out array while working with the functionality.
    app.post("/api/clear", function(req, res) {
        friendsArray.length = [];
        res.json({ ok: true });
    });
};

// for (var i=0; i<friendsArray.length; i++){
//     var diffArr;
//     for (var j=0; j<friendsArray[i].scores.length; j++){
//         diffArr = (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(req.body.scores[j])));
//         console.log(diffArr.join(''));
//     }
// }

        // friendsArray.forEach(scoresArr => {
        //     scoresArr.scores.map(score => {
        //         console.log(score + req.body.scores);
        //     })
        // });