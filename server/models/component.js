const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Component name can not be empty."],
    },
    componentId: {
        type: String,
        required: [true, "Component ID can not be empty, please enter the component ID from Aquila."],
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
    machine: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Machine",
            default: null,
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

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;