const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
const port = 5000;
const routers = require('./routers');
const authMiddleware = require('./middlewares/authmiddleware');
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseInit');


setupViewEngine(app)

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use(authMiddleware.authentication);
app.use(routers)


initDatabase()
.then(() => app.listen(port, () => console.log(`Express is listening on a ${port}...`)))
.catch((err) => console.log(err.message));


