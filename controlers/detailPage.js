const db = require('../db.json');

exports.getDitails = (req, res) => {
    
    const id = Number(req.params.cubeId)

    if(!id) {
        return res.redirect('/404')
    }

    let cube = db.cubes.find(x => x.id === id);
    if(!cube){
        return res.redirect('/404')
    }

    res.render('details', { cube })

}