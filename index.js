'use strict';

var express = require('express');
var app = express();

var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

var mongoURL = process.env.MONGO_DB_URL || "mongodb://hackathonT1:12345@ds119081.mlab.com:19081/jumo_customers";

var database_connection = require('./database-connection');

//call database_connection function
//pass in the mongoURL connection
var dbconnection = database_connection(mongoURL);

var models = require('./model');

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
