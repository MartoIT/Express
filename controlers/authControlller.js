
const router = require('express').Router();

const authService = require('../services/authService');

exports.getRegisterPage = (req, res) => {
    res.render('register')
};

exports.getLoginPage = (req, res) => {
    res.render('login')
};


exports.postRegisterUser = async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.redirect('/404');
    };
    const isUserExist = await authService.getUserByUsername(username);

    if (isUserExist) {
        res.redirect('/404');
    };

    const token =  await authService.register(username, password);
    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
}


exports.postLoginPage = async (req, res) => {
    const {username, password} = req.body;
    const isUserExist = await authService.getUserByUsername(username);
    if(!isUserExist) {
        res.redirect('/register');
    }

    const token = await authService.login(username, password);
    res.cookie('auth', token, {httpOnly: true} );

    res.redirect('/')

}



exports.logout = (req, res) => {
    res.clearCookie('auth');

    res.redirect('/')
}
