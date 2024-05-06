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
    enum: ["active","passive", "pending","finished"],
    default:"pending"
  },
  creationBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  lastModifiedDate: {
        type: Date,
  },
  machine: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Machine",
    },
  ],
  sw: {
    type: String,
    default: "",
  },
  hw: {
    type: String,
    default: "",
  },
  project: {
    type: String,
    default: "",
  },
  isSw: {
    type: Boolean,
    default: false,
  },
  isHw: {
    type: Boolean,
    default: false,
  },
  isProject: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model("Test", testSchema);
