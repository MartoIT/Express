const router = require('express').Router();

const home = require('./controlers/homepage')

router.get('/', home.getHomePage);
router.get('/about', home.getAboutPage);
router.get('/404', home.get404Page);


module.exports = router;