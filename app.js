'use strict';
var express = require('express');
var app = express();
var hobbyGenerator = require ('./lib/hobbies');

var server = app.listen(3006, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

app.use(express.static('app'));
app.use(express.static('static'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post( '/hobbies', function( req, res) {
  var output = hobbyGenerator();
  res.json( { hobbies: output } );
});
