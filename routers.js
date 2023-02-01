const router = require('express').Router();

const home = require('./controlers/homepage')

router.get('/', home.getHomePage)


module.exports = router;