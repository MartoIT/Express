const db = require('../db.json')

exports.getHomePage = (req, res) => {
    
    let cubes = db.cubes;

    res.render('home', {cubes});
};

exports.getAboutPage = (req, res) => {
    res.render('about')
}

exports.get404Page = (req, res) => {
    res.render('404')
}