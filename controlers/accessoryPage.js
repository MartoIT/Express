const Accessory = require('../Cube/Accessory');

exports.createAccessoryPage = (req, res) => {
    res.render('accessoryCreate')
};

exports.createAccessory = async ( req, res) => {
    const { name, imageUrl, description} = req.body;
    try {
        await Accessory.create({name, imageUrl, description});
    }catch(err){
        console.log(err.message);
        return res.render('/404')
    }

    res.redirect('/');
   
};

exports.attach = (req, res) =>{
    res.render('attachAccessory');
};