const mongoose = require("mongoose");
const stationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Station name can not be empty."],
  },

  isAvaliable: {
    type: Boolean,
    default: true,
  },

  lab: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lab",
  },

  machine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Machine",
  },
});

module.exports = mongoose.model("Station", stationSchema);
