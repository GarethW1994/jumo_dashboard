'use strict';

var mongoose = require('mongoose');

module.exports = function(usersSchema) {
	
		//get routes
		const home = function(req, res, next) {
			
			//res.send('home page');
			console.log('home route');
			
			return 'home route';
		}
		
		const graphData = function(req, res, next) {
			res.send('graph data');
		}
		
		const addNewUser = function(req, res, next) {
			res.render('form');
		}
		
		//post route
		const addUser = function(req, res, next) {
			var id = req.body.id;
			var name = req.body.name;
			var surname = req.body.surname;
			var city = req.body.city;
			var about = req.body.about;
			
		//add user
			usersSchema({
				userID: id,
				userName: name,
				userSurname: surname,
				userCity: city,
				userAbout: about
			}).then(function(result) {
				console.log(result);
			});
			
		//redirect home
			res.redirect('/home');
		}
		
		
		return {
			//get routes
			home,
			graphData,
			addNewUser,
			
			//post routes
			addUser
		}
}