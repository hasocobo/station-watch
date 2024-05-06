const mongoose = require("mongoose");
const machineSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "Machine model cannot be empty"],
  },
  tests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      default: [],
    },
  ],
  station: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Station",
  },
  components: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
      default: [],
    },
  ],
  isAvailable: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model("Machine", machineSchema);
