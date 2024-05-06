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
  }
});

module.exports = mongoose.model("Station", stationSchema);
