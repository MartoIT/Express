const Cube = require('../Cube/Cube')

exports.getDitails = async (req, res) => {
    
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();


    if(!cube){
        return res.redirect('/404')
    }

    res.render('details', { cube })

}