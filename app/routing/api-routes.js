var friendsArray = require('./app/data/friends.js');



module.exports = function(app){
	//GET request
	app.get('/api/friends', function(req, res){
		res.json(friendsArray);
		console.log(friendsArray);
	});

	//POST request
	app.post('/api/friends', function(req, res){
		var newUser = req.body;
		console.log(newUser);

		friendsArray.push(newUser);

		var scoreDifference = 0;
		var differenceArray = [];

		for(var i=0; i < friendsArray.length - 1; i++){
			for(var x = 0; x < friendsArray[i].scores.length; x++){
				scoreDifference += Math.abs(friendsArray[i].scores[x] - newUser.scores[x]);
			}
			differenceArray.push(scoreDifference);
			scoreDifference = 0;
		}
	var match = friendsArray[differenceArray.indexOf(Math.min.apply(null, differenceArray))];
	res.send(match);

	});

};