
const router = require('express').Router();

const authService = require('../services/authService');

exports.getRegisterPage = (req, res) => {
    res.render('register')
}

exports.postRegisterUser = async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.redirect('/404');
    };
    const isUserExist = await authService.getUserByUsername(username);

    if (isUserExist) {
        res.redirect('/404');
    };

    await authService.register(username, password)

    res.redirect('/');
}