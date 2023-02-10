const User = require('../Models/User');
const jwt = require('../lib/jsonwebtoken')


exports.getUserByUsername = (username) => User.findOne({ username }) ;

exports.register =async (username, password) =>{
    const user = await User.create({username, password});
    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, 'secret', { expiresIn: '2h' });

    return token;
} 


exports.login =  async (username, password) =>{
    const user = await this.getUserByUsername(username);
    const validPass = await user.validatePassword(password);

    if(!user || !validPass){
        throw `Invalid username or password!!!`
    };

    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, 'secret', { expiresIn: '2h' });

    return token;
}