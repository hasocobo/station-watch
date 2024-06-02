const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
  program: {
    type: String,
    required: [true, "Program cannot be empty"],
  },
  degree: {
    type: Number,
    enum: [20, 30, 40, 60, 90],
    required: [true, "Degree cannot be empty"],
  },
  load: {
    type: Number,
    enum : [0.25, 0.5, 0.75, 1],
    required: [true, "Load cannot be empty"],
  },
  startDate: {
    type: Date,

  },
  endDate: {
    type: Date,

  },
  testType: {
    type: String,
    required: [true, "KontrolSistemi-DinamikGrup-DevirBilgisi şeklinde giriniz."]
  },
  status:{
    type: String,
    enum: ["active","passive", "pending","finished"],
    default:"pending"
  },
  creationBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
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
  machine: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Machine",
    },
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
  },
  duration: {
    type: Number,
    required: [true, "Duration cannot be empty"]
  },
  lab: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    required: [true, "Lab cannot be empty"]
  },
  components: [
    {
      _id: false,
      componentId: {
        type: String,
        required: true,
      },
      startCycle: {
        type: Number,

      },
        endCycle: {
            type: Number,

        },

      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
  ],
});

module.exports = mongoose.model("Test", testSchema);
