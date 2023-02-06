const mongoose = require('mongoose');

async function initDatabase() {
    mongoose.set('strictQuery', false);

    await mongoose.connect('mongodb://127.0.0.1:27017/cubicle')
    console.log('DB connected');
}

module.exports = initDatabase