//require mongoose
var mongoose = require('mongoose');
var assert = require('assert');

module.exports = function () {
	const userData = function () {
	// Use native promises
    mongoose.Promise = global.Promise;
	
		const user_schema = new mongoose.Schema({
			userID: {
				type: String,
				required: true
			},

			userName: {
				type: String
			},

			userSurname: {
				type: String
			},

			userCity: {
				type: String
			},

			userAbout: {
				type: String
			},
			
			important : [{
				category : String,
				amount: Number,
				rating: String
			}],
			
			neutral : [{
				category: String,
				amount: Number,
				rating: String
			}],
			
			notImportant : [{
				category: String,
				amount: Number,
				rating: String
			}]
		});

		//declare the unique values
		user_schema.index({
			userID: 1
		}, {
			unique: true
		});

		var users = mongoose.model('users', user_schema);

		return users;
	}


	return {
		userData
	};
}