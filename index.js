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
//require variables
var models = require('./model');
var userData = require('./userData');


//create new instance
var userModel = models().userData;

var userData = userData(userModel());

//init Handlebars
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//init body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Stacic Files
app.use(express.static('public'));

//routes index
app.get('/', userData.home);

app.get('/favicon.ico', function(req, res, next) {
	res.send('favicon');
})
app.get('/form', userData.addNewUser);

app.get('/getUser/:user', userData.getUser);
//post routes
app.post('/addUser', userData.addUser);

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
