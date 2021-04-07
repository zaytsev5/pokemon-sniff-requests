"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  res.render('home');
});
app.listen(port, function () {
  return console.log('Server is ready on port ' + port);
});