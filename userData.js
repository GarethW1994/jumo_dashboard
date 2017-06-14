'use strict';

var mongoose = require('mongoose');
var assert = require('assert');

module.exports = function(usersSchema) {
		var importantCat = [];
	
		//get routes
		const home = function(req, res, next) {
			usersSchema.find({}, function(err, data) {
				if (err) return(err);
				//console.log(data);
			}).then(function(data) {
			res.render('home', {user: data});
			});			
		}
		
		const graphData = function(req, res, next) {
			res.render('graph');
		}
		
		const getUser = function(req, res, next) {
			var id = req.params.user;
			var importantDat = [];

			var query = usersSchema.find({userID: id}, function(err, data) {
				if (err) return (err);	
			});
						
			query.then(function(data) {	
			res.render('categories', {importantData: data});
			});
		};
		
		
		const addNewUser = function(req, res, next) {
			
		usersSchema.find({}, function(err, data) {
			
		}).then(function(data){
			console.log(data);
			res.render('form');
		});
		}
		
		//post route
		const addUser = function(req, res, next) {
			var id = req.body.id;
			var name = req.body.name;
			var surname = req.body.surname;
			var city = req.body.city;
			var about = req.body.about;
			
			var categoryImp = [{
					category: req.body.categoryImp,
					amount: req.body.amountImp,
					rating: req.body.ratingImp
				},
				{
					category: req.body.categoryImp1,
					amount: req.body.amountImp1,
					rating: req.body.ratingImp1
				}]
					
			
			var categoryNeut = {
				category: req.body.categoryNeut,
				amount: req.body.amountNeut,
				rating: req.body.ratingNeut
			};
		
			var categoryNot = [{
				category: req.body.categoryNot,
				amount: req.body.amountNot,
				rating: req.body.ratingNot
			},
			{
				category: req.body.categoryNot1,
				amount: req.body.amountNot1,
				rating: req.body.ratingNot1
			}] 
		//add user
			usersSchema({
				userID: id,
				userName: name,
				userSurname: surname,
				userCity: city,
				userAbout: about,
				important: categoryImp,
				neutral: [categoryNeut],
				notImportant: categoryNot
			}).save(function(result) {
				console.log(result);
			
			//redirect home
			res.redirect('/form');
			});
		}
		
		
		return {
			//get routes
			home,
			graphData,
			addNewUser,
			getUser,	
			//post routes
			addUser
		}
}