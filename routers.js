const router = require('express').Router();

const home = require('./controlers/homepage');
const create = require('./controlers/createPage');
const details = require('./controlers/detailPage');
const accessory = require('./controlers/accessoryPage');

router.get('/', home.getHomePage);
router.get('/about', home.getAboutPage);
router.get('/404', home.get404Page);

router.get('/create', create.cretePage);
router.post('/create', create.addCube);

router.get('/details/:cubeId', details.getDitails);

router.get('/create/accessory', accessory.createAccessoryPage);
router.post('/create/accessory', accessory.createAccessory);
router.get('/attachAccessory/:cubeId', accessory.attach);


// /create/accessory 

module.exports = router;