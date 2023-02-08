const Cube = require('../Cube/Cube')
const Accessory = require('../Cube/Accessory')

exports.getDitails = async (req, res) => {
    
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();
    //populate('Accessory')

    if(!cube){
        return res.redirect('/404')
    }
    console.log(cube);
    res.render('details', { cube })

}