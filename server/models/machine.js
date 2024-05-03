const mongoose = require("mongoose");
const machineSchema = new mongoose.Schema({
  modal: {
    type: String,
    required: [true, "Lab name cannot be empty"],
  },
  volume: {
    type: Number,
    required: [true, "Volume cannot be empty"],
  },
  test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
  station: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Station",
  },
  lab: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lab",
  },
  components: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
    },
  ],
});

module.exports = mongoose.model("Machine", machineSchema);
