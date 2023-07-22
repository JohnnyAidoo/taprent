const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
  photos: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: Array,
  },
  description: {
    type: String,
  },
  tags: {
    type: Array,
  },
  author: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
  },
  date_published: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Posts", post_schema);
