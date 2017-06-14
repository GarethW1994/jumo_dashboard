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
			res.send('graph data');
		}
		
		const getUser = function(req, res, next) {
			var id = req.params.user;

			var query = usersSchema.find({userID: id}, function(err, data) {
				if (err) return (err);	
			});
			
			var importantDat = [];
			
			query.then(function(data) {	
				
				for (var i = 0; i < data.length; i++) {
					importantDat.push(data[i].important);
				}
					
				console.log(importantDat);
				res.render('categories', {importantData: importantDat});
			});
			
			var promise = query.exec();
			
		};
		
		
		function getData(dt) {
			var importantArr = dt[0];
		console.log(importantArr);
			return importantArr;
		}
		
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
//			
//			var categoryImp = req.body.categoryImp;
//			var amountImp = req.body.amountImp;
//			var ratingImp = req.body.ratingImp;
//			
//			var categoryNeut = req.body.categoryNeut;
//			var amountNeut = req.body.amountNeut;
//			var ratingNeut = req.body.ratingNeut;
//			
//			var categoryNot = req.body.categoryNot;
//			var amountNot = req.body.amountNot;
//			var ratingNot = req.body.ratingNot;
			
		//add user
			usersSchema({
				userID: id,
				userName: name,
				userSurname: surname,
				userCity: city,
				userAbout: about,
//				categoryImp: categoryImp,
//				amountImp: amountImp,
//				ratingImp: ratingImp,
//				categoryNeut : categoryNeut,
//				amountNeut : amountNeut,
//				ratingNeut : ratingNeut,
//				categoryNeut : categoryNeut,
//				categoryNot : categoryNot,
//				amountNot : amountNot,
//				ratingNot : ratingNot
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