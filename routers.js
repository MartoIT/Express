const router = require('express').Router();

const home = require('./controlers/homepage')
const create = require('./controlers/createPage')

router.get('/', home.getHomePage);
router.get('/about', home.getAboutPage);
router.get('/404', home.get404Page);

router.get('/create', create.cretePage);
router.post('/create', create.addCube);



module.exports = router;