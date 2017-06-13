'use strict';

var express = require('express');
var app = express();

var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

var database_connection = require('./database-connection')
var models = require('./modules');

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
