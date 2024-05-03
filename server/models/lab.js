const mongoose = require("mongoose");
const labSchema = new mongoose.Schema({
  labName: {
    type: String,
    required: [true, "Lab name cannot be empty"],
  },
  stations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Station",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Lab", labSchema);
