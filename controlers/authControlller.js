const User = require('../Models/User');

exports.getRegisterPage = (req, res) => {
    res.render('register')
}

exports.postRegisterUser = (req, res) => {
    const { username, password } = req.body;
    let user = new User({username, password});
    user.save();

    res.redirect('/');
}