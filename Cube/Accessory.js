const mongoose = require('mongoose');

const Accessory = new mongoose.Schema({
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


// •	Id - (ObjectId)
// •	Name - (String, required)
// •	ImageUrl - (String, required, http/https validation)
// •	Description - (String, required, max length validation)
// •	Cubes - (ObjectId, ref Cubes Model)
