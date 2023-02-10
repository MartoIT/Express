const mongoose = require('mongoose');

const AccessorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
        mach: /^https?:\/\//
    },
    description:{
        type: String,
        required: true,
        maxLength: 50,
    }

})

const Accessory = mongoose.model('Accessory', AccessorySchema);

module.exports = Accessory;