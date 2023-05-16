const mongoose = require('mongoose');

const users_schema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    displayPicture:{
        type : String,
    },
    phoneNumber: {
        type: Number,
        required : true
    },
    location: {
        type : String,
    },
    dateRegistered :{
        type : Date,
        required : true,
        default : Date.now()
    }
})

module.exports = mongoose.model('Users', users_schema)