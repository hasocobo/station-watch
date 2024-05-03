const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Type cannot be empty"],
  },
  description: {
    type: String,
  },
  status:{
    type: String,
    enum: ["active","passive", "pending"],
    default:"pending"
  },
  engineer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  station: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Station",
    },
  ],
  lab: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab",
    },
  ],
  machine: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Machine",
    },
  ]
});

module.exports = mongoose.model("Test", testSchema);
