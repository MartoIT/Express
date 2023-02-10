const User = require('../Models/User');



exports.getUserByUsername = (username) => User.findOne({ username }) ;

exports.register = (username, password) => User.create({username, password});
