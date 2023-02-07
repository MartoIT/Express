const Accessory = require('../Cube/Accessory');

exports.createAccessory = (req, res) => {
    res.render('accessoryCreate')
};

exports.attach = (req, res) =>{
    res.render('attachAccessory');
};