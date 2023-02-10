const jwt = require('../lib/jsonwebtoken');

exports.authentication = async (req, res, next) => {

   
    const token = req.cookies['auth'];
    
    if(token){

        try{
            const decodetToken = await jwt.verify(token, 'secret');
            req.user = decodetToken;
            req.isAuthenticated = true;
            
            res.locals.username = decodetToken.username;
            res.locals.isAuthenticated = true;

        }catch(err){
            res.clearCookie('auth');
            res.redirect('/404')
        }

    }

    next();
}

exports.isAuthenticated = async(req, res, next) => {
    if(!req.isAuthenticated){
        return res.redirect('/404');
    }

    next();
}