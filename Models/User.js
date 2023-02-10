const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLenght: 3
    },
    password:{
        type: String,
        required: true,
        minLenght: [6, 'Password is too short!!!']
    }
})

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;

        next();
    })
});

const User = mongoose.model('User', userSchema);
module.exports = User;