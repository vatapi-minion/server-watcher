// load modules
var express = require('express');
var fs 		= require('fs');

// declare var
var app = express();
var port = process.env.PORT || 80;

// routes
app.get('/start', function(req, res) {
  res.send("starting process");
});

// start the server
app.listen(port);