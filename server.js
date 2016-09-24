//==========
//DEPENDENCIES:
//the following are npm packages needed for server functionality
//===========
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//===============
//EXPRESS CONFIG
//this sets up the basic properties forour express server
//===============
var app = express(); //tells node we are creating an "express" server
var friendsArray = require('./app/data/friends.js')

console.log(friendsArray);

app.set('port', process.env.PORT || 3000);//sets initial port




//BodyParser makes it easy for our server to interpret data recieved
//standard code:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//===================
//ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs
//====================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



//==============
//LISTENER
//"starts" the server
//==============
 var server = app.listen(app.get('port'),function(){
 	console.log("app listening on PORT:" + app.get('port'))
 });