const mongoose = require("mongoose");
const machineSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "Modal name cannot be empty"],
  },

  machine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Component",
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Machine", machineSchema);
