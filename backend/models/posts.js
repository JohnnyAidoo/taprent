const mongoose = require('mongoose');

const post_schema = new mongoose.Schema({
    photos: {
        type: Array,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    tags:{
        type: Array
    },
    author:{ 
        type: String
    }

})

module.exports = mongoose.model('Posts', post_schema)