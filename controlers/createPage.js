const Cube = require('../Models/Cube');


exports.cretePage = (req, res) => {
    res.render('create');
}

exports.addCube = (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;

    let cube = new Cube ({name, description, imageUrl, difficultyLevel});

    cube.save();
    res.redirect('/')
}

