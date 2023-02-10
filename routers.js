const router = require('express').Router();

const home = require('./controlers/homepage');
const create = require('./controlers/createPage');
const details = require('./controlers/detailPage');
const accessory = require('./controlers/accessoryPage');
const authentication = require('./controlers/authControlller')

router.get('/', home.getHomePage);
router.get('/about', home.getAboutPage);
router.get('/404', home.get404Page);

router.get('/create', create.cretePage);
router.post('/create', create.addCube);

router.get('/details/:cubeId', details.getDitails);

router.get('/create/accessory', accessory.createAccessoryPage);
router.post('/create/accessory', accessory.createAccessory);
router.get('/attachAccessory/:cubeId', accessory.attach);
router.post('/attachAccessory/:cubeId', accessory.postAtachAccessory);

router.get('/register', authentication.getRegisterPage);
router.get('/login', authentication.getLoginPage);
router.get('/logout', authentication.logout);
router.post('/register', authentication.postRegisterUser);


module.exports = router;