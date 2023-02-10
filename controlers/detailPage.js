const Cube = require('../Models/Cube')
const Accessory = require('../Models/Accessory')

exports.getDitails = async (req, res) => {
    
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();
    //populate('Accessory')

    if(!cube){
        return res.redirect('/404')
    }
    console.log(cube);
    res.render('details', { cube })

}

exports.getEditPage = async (req, res) => {
    res.render('edit')
};

exports.getDeletePage = async (req, res) => {
    res.render('delete')
};