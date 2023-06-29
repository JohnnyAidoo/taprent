const mongoose = require('mongoose');

const saved_post_schema = new mongoose.Schema({
    uid:{
        type: String,
        required:true
    },
    itemId:{
        type: String,
    },
    date_saved:{
        type: Date,
        required: true,
        default: Date.now()
    }

})

module.exports = mongoose.model('Saved_post', saved_post_schema)