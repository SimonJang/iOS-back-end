// Packages die we gebruiken

var express = require('express');
var path = require('path');
var crypto = require('crypto');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ip = require('ip');

// Database intialiseren + Configureren van passport

var mongoose = require('mongoose');

require('./models/reservatie');
require('./models/winkel');



mongoose.connect('mongodb://localhost/springkasteel', function() {
  console.log('Mongoose connected. DB connection open');
  console.log(ip.address());

  var email = "simon@test.be"
  var hash = crypto.createHash('md5').update(email).digest('hex');
  console.log(hash)
});


// Routes configureren die REST routes voorstellen


var routes = require('./routes/index');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

// Serveren van static HTML en geen view templates
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public'));


module.exports = app;