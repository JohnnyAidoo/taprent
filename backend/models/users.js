const mongoose = require("mongoose");

const users_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "add description",
  },
  displayPicture: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  location: {
    type: String,
  },
  dateRegistered: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Users", users_schema);
