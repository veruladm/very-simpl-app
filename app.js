/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
<<<<<<< HEAD
var cfenv = require('cfenv');
=======
>>>>>>> 463496743fcd1a7af030d86a4e5cc3397f953afb

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

<<<<<<< HEAD
app.engine('html',require('ejs').renderFile);

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.render('index.html',null);
});

app.get("/about", function(req,res){
	res.render('about.html',{title:'John'});
});

app.get("/about/:name?", function(req,res){
	var name= req.params.name;
	res.render('about.html',{title:name});
});

app.get("/contact", function(req,res){
	res.render('contact.html',{title:'John'});
});

app.get("/contact/:name?", function(req,res){
	var name = req.params.name;
	res.render('contact.html',{title:name})
})

app.get("*", function(req,res){
	res.send("Bad Route");
})

=======
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

>>>>>>> 463496743fcd1a7af030d86a4e5cc3397f953afb
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
