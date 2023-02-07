const Accessory = require('../Cube/Accessory');
const Cube = require('../Cube/Cube');

exports.createAccessoryPage = (req, res) => {//here show the page taht give you options to add new accessory.
    res.render('accessoryCreate')
};

exports.createAccessory = async ( req, res) => {//here add only accesory. To add accessory go no navbar and hit Add accessory.
    const { name, imageUrl, description} = req.body;
    try {
        await Accessory.create({name, imageUrl, description});
    }catch(err){
        console.log(err.message);
        return res.render('/404')
    }

    res.redirect('/');
   
};

exports.attach = async (req, res) =>{//went go to some of products detail page you
    // can see button for add accesory, this function is render static page (just for now)
    // for the product whith posible accesories to be add.
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accesories = await Accessory.find();


    console.log(accesories)

    res.render('attachAccessory', {cube, accesories});
};