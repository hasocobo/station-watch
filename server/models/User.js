const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  role: {
    type: String,
    enum: ["technician", "engineer", "senior"],
    required: [true, "Role cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
});

module.exports = mongoose.model("User", userSchema);
