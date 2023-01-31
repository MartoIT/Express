const express = require('express');

const app = express();
const port = 5000;
const routers = require('./routers')
const setupViewEngine = require('./config/viewEngine');
setupViewEngine(app)

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(routers)





app.listen(port, () => console.log(`Express is listening on a ${port}...`));

